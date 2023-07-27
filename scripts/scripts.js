import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
  loadScript,
  createOptimizedPicture,
} from './lib-franklin.js';

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * Decorate sections with a background image where defined in section metadata.
 * @param {Element} main The container element
 */
function decorateSectionBackgrounds(main) {
  main.querySelectorAll(':scope > .section[data-background]').forEach((section) => {
    const src = section.dataset.background;
    const picture = createOptimizedPicture(src, '', false);
    section.appendChild(picture);
    section.classList.add('section-with-background');
  });
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    if (!main.querySelector('.carousel')) buildHeroBlock(main);
    else if (!main.querySelector('.carousel').contains(main.querySelector('h1'))) buildHeroBlock(main);
    // buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateSectionBackgrounds(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

export async function loadConsentManager() {
  loadScript('https://consent.trustarc.com/notice?domain=orora.com&c=teconsent&js=nj&noticeType=bb&privacypolicylink=https%3A%2F%2Fororafresh.com%2Fprivacy-policy&gtm=1');
}

const scriptHubspot = document.createElement('script');
scriptHubspot.setAttribute('type', 'text/javascript');
scriptHubspot.setAttribute('data-hubspot-rendered', 'true');
scriptHubspot.src = 'https://js.hsforms.net/forms/embed/v2.js';
scriptHubspot.addEventListener('load', () => {
  // eslint-disable-next-line no-undef
  hbspt.forms.create({
    region: 'na1',
    portalId: '14560092',
    formId: 'af288827-9574-4a29-89eb-1b853eae1c20',
    target: '.block.contact-form',
  });
});
document.head.append(scriptHubspot);

loadPage();

import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }
  // Manage cookies
  const cookieIconDiv = document.createElement('div');
  cookieIconDiv.setAttribute('id', 'teconsent');
  document.querySelector('.footer .columns div div').appendChild(cookieIconDiv);
  const cookieConsentDiv = document.createElement('div');
  cookieConsentDiv.setAttribute('id', 'consent_blackbar');
  document.querySelector('.footer').appendChild(cookieConsentDiv);
  // Back to top
  const buttonScrolltoTop = block.querySelector('.footer.block .icon-keyboard_arrow');
  buttonScrolltoTop.addEventListener('click', () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); });
  window.onscroll = function () {
    if (window.scrollY > 200) buttonScrolltoTop.classList.add('visible');
    else buttonScrolltoTop.classList.remove('visible');
  };
}

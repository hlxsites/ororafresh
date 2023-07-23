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
  // Adding Div for Cookie preferences
  const cookieIconDiv = document.createElement('div');
  cookieIconDiv.setAttribute('id', 'teconsent');
  document.querySelector('.footer .columns div div').appendChild(cookieIconDiv);
  // Adding Div for Cookie Consent Manager
  const cookieConsentDiv = document.createElement('div');
  cookieConsentDiv.setAttribute('id', 'consent_blackbar');
  document.querySelector('.footer').appendChild(cookieConsentDiv);
  // Adding Code for Bottom Top button
  const buttonScrolltoTop = block.querySelector('.footer.block > div > div:last-child p:last-child .icon');
  buttonScrolltoTop.addEventListener('click', () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); });
  // Adding functionality to pop up the back to top button after 100px
  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      buttonScrolltoTop.style.display = 'block';
    } else {
      buttonScrolltoTop.style.display = 'none';
    }
  }
  window.onscroll = () => { scrollFunction(); };
}

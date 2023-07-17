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
  const cookieiconparent = document.querySelector('.footer .columns div div');
  const nextdiv = document.createElement('div');
  nextdiv.setAttribute('id', 'teconsent');
  cookieiconparent.appendChild(nextdiv);
  // Adding Div for Cookie Consent Manager
  const cookieconsentparent = document.querySelector('.footer');
  const nextdiv1 = document.createElement('div');
  nextdiv1.setAttribute('id', 'consent_blackbar');
  cookieconsentparent.appendChild(nextdiv1);
}

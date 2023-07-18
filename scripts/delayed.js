// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './lib-franklin.js';
// eslint-disable-next-line import/no-cycle
import { loadConsentManager } from './scripts.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');
// Script for Cookie consent manager
await loadConsentManager();

// google tag manager
const gtmId = 'GTM-WSGNHXL';
// eslint-disable-next-line
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer',gtmId);

// google analytics
const gaId = 'UA-106405636-1';
loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'async', () => {
  // eslint-disable-next-line
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', gaId);
});

// Adding GTM Event Listner

// Adding timer for button click in the Hero Carousel

// Adding timer for button click in the Hero Carousel

// add more delayed functionality here

const contactFormBlock = document.querySelector('.block.contact-form');
if (contactFormBlock) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = 'https://js.hsforms.net/forms/embed/v2.js';
  script.addEventListener('load', () => {
    // eslint-disable-next-line no-undef
    hbspt.forms.create({
      region: 'na1',
      portalId: '14560092',
      formId: 'af288827-9574-4a29-89eb-1b853eae1c20',
    });
  });
  contactFormBlock.append(script);
}

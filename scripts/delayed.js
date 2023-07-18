// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// Adding timer for button click in the Hero Carousel

// add more delayed functionality here

export async function loadContactForm() {
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

const contactFormBlock = document.querySelector('.block.contact-form');
if (contactFormBlock) {
  await loadContactForm();
}

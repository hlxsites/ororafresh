// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './lib-franklin.js';
// eslint-disable-next-line import/no-cycle
import { loadConsentManager } from './scripts.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');
// Script for Cookie consent manager
// await loadConsentManager();

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
// eslint-disable-next-line
console.log("TrustArc Events Binding..."); var dispatched = {}; var i = self.postMessage && setInterval(function () { if (self.PrivacyManagerAPI && i) { var apiObject = { PrivacyManagerAPI: { action: "getConsentDecision", timestamp: new Date().getTime(), self: self.location.host }}; self.top.postMessage(JSON.stringify(apiObject), "*"); i = clearInterval(i); }}, 50); self.addEventListener("message", function (e, d) { try { if (e.data && (d = JSON.parse(e.data)) && (d = d.PrivacyManagerAPI) && d.capabilities && d.action == "getConsentDecision") { var newDecision = self.PrivacyManagerAPI.callApi("getGDPRConsentDecision", self.location.host).consentDecision; newDecision && newDecision.forEach(function (label) { if (!dispatched[label]) { self.dataLayer && self.dataLayer.push({ "event": "GDPR Pref Allows " + label }); dispatched[label] = 1; } }); } } catch (xx) { /* not a cm api message */ } });

// Adding timer for button click in the Hero Carousel

// Adding timer for button click in the Hero Carousel

// add more delayed functionality here

// Importing script for Hubspot form implementation in contact-us page
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

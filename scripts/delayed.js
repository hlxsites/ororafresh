// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

import('https://consent.trustarc.com/notice?domain=orora.com&c=teconsent&js=nj&noticeType=bb&privacypolicylink=https%3A%2F%2Fororafresh.com%2Fprivacy-policy&gtm=1');

console.log("TrustArc Events Binding...");
var __dispatched__ = {};

/* Map of previously dispatched preference levels */
/* 
   First step is to register with the CM API to receive callbacks when a 
   preferenceupdate occurs. You must wait for the CM API 
   (PrivacyManagerAPI object) to exist on the page before registering.
*/

var __i__ = self.postMessage && setInterval(function () {
    if (self.PrivacyManagerAPI && __i__) {
        var apiObject = {
            PrivacyManagerAPI: {
                action: "getConsentDecision",
                timestamp: new Date().getTime(),
                self: self.location.host
            }
        };
        self.top.postMessage(JSON.stringify(apiObject), "*");
        __i__ = clearInterval(__i__);
    }
}, 50);

/* 
    Callbacks will occur in the form of a PostMessage event. This code 
    listens for the appropriately formatted PostMessage event, gets the 
    new consent decision, and then pushes the events into the GTM framework. 
    Once the event is submitted, that consent decision is marked in the 
    'dispatched' map so it does not occur more than once.
*/

self.addEventListener("message", function (e, d) {
    try {
        if (e.data && (d = JSON.parse(e.data)) && (d = d.PrivacyManagerAPI) 
            && d.capabilities && d.action == "getConsentDecision") {
            var newDecision = 
                self.PrivacyManagerAPI.callApi("getGDPRConsentDecision", 
                    self.location.host)
                    .consentDecision;
            newDecision && newDecision.forEach(function (label) {
                if (!__dispatched__[label]) {
                    self.dataLayer && self.dataLayer.push({
                        "event": "GDPR Pref Allows " + label
                    });
                    __dispatched__[label] = 1;
                }
            });
        }
    } catch (xx) {
        /* not a cm api message */
    }
});

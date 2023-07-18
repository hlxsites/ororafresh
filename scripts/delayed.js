// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
// eslint-disable-next-line import/no-cycle
import { loadConsentManager } from './scripts.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');

// Adding timer for button click in the Hero Carousel

// add more delayed functionality here

// Script for Cookie consent manager
await loadConsentManager();

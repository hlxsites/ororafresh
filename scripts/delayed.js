// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
// eslint-disable-next-line import/no-cycle
import { loadScript, loadConsentManager } from './scripts.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadGA() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=UA-106405636-1');
}

await loadGA();
await loadConsentManager();

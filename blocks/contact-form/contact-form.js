import { loadContactForm } from '../../scripts/scripts.js';

// eslint-disable-next-line no-unused-vars
export default async function decorate(block) {
  await loadContactForm(block);
}

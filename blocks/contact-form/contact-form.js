export default async function decorate(block) {
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
  block.append(script);
}

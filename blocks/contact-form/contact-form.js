import { loadScript } from '/scripts/lib-franklin.js';

export default function decorate(block) {
  loadScript('//js.hsforms.net/forms/embed/v2.js', () => {
    hbspt.forms.create({
      region: "na1",
      portalId: "14560092",
      formId: "af288827-9574-4a29-89eb-1b853eae1c20"
    });
  });
}

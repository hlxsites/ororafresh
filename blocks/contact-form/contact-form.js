export default function decorate(block) {
  const target = document.createElement('div');
  target.id = 'form-target';
  const wrapper = document.createElement('div');
  block.appendChild(target);
  block.appendChild(wrapper);
  wrapper.innerHTML = `<script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/embed/v2.js"></script>
  <script>
    hbspt.forms.create({
      target: "#form-target",
      region: "na1",
      portalId: "14560092",
      formId: "af288827-9574-4a29-89eb-1b853eae1c20"
    });
  </script>`;
}

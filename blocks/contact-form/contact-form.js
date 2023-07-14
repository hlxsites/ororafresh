export default function decorate(block) {
  block.innerHTML = `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
  <script>
    hbspt.forms.create({
      region: "na1",
      portalId: "14560092",
      formId: "af288827-9574-4a29-89eb-1b853eae1c20"
    });
  </script>`;
}

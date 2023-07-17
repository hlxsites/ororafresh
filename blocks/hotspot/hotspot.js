// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r > 0) {
      const nexticondiv = document.createElement('div');
      nexticondiv.style.left = [...row.children][1].textContent;
      nexticondiv.style.top = [...row.children][2].textContent;
      nexticondiv.setAttribute('data', [...row.children][0].textContent);
      nexticondiv.addEventListener('click', () => { if (document.querySelector('.hotspot .onclick')) document.querySelector('.hotspot .onclick').classList.remove('onclick'); nexticondiv.classList.add('onclick'); });
      row.after(nexticondiv);
      row.remove();
    }
  });
}

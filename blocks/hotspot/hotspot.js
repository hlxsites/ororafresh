// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('hotspot-img');
        }
      }
    });
    const pic = block.querySelector('picture');
    const parentdiv = pic.closest('div');
    if (r > 0) {
      row.classList.add('hidden');
      const columns = [...row.children];
      const text = columns[0].innerHTML;
      console.log(text);
      const leftdistance = columns[1].innerHTML;
      console.log(leftdistance);
      const topdistance = columns[2].innerHTML;
      console.log(topdistance);
      const nexticondiv = document.createElement('div');
      nexticondiv.setAttribute('class', `icon${r}`);
      nexticondiv.style.left = leftdistance;
      nexticondiv.style.top = topdistance;
      parentdiv.appendChild(nexticondiv);
      const nextpopupdiv = document.createElement('div');
      nextpopupdiv.setAttribute('class', `popup${r}`);
      nextpopupdiv.style.left = '-350%';
      nextpopupdiv.style.bottom = '150%';
      nextpopupdiv.innerHTML = text;
      nexticondiv.appendChild(nextpopupdiv);
    }
  });
}

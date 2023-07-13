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
    const pic = row.children[0].querySelector('picture');
    console.log(pic);
    const parentdiv = pic.closest('div');
    console.log(parentdiv);
    if (r > 0) {
      row.classList.add('hidden');
      const columns = [...row.children];
      const text = columns[0].innerHTML;
      console.log(text);
      const leftdistance = columns[1].innerHTML;
      console.log(leftdistance);
      const rightdistance = columns[2].innerHTML;
      console.log(rightdistance);
      // const nexticondiv = document.createElement('div');
      // nexticondiv.setAttribute('class', '.icon');
      // console.log(nexticondiv);
      // parentdiv.appendChild(nexticondiv);
    }
  });
}

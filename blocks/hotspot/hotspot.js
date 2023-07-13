// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  const totalrows = [...block.children];
  console.log(totalrows);
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
    if (r > 0) {
      row.classList.add('hidden');
      const columns = [...row.children];
      const text = columns[0].innerHTML;
      console.log(text);
      const leftdistance = columns[1].innerHTML;
      console.log(leftdistance);
      const rightdistance = columns[2].innerHTML;
      console.log(rightdistance);
    }
  });
}

// eslint-disable-next-line no-unused-vars
export default function decorate(block) {
  console.log(block);
  [...block.children].forEach((row) => {
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
  });
}

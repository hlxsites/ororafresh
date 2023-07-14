export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    if (i > 0) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.style.left = [...row.children][1].textContent;
      item.style.top = [...row.children][2].textContent;
      row.after(item);
      [...row.children][0].classList.add('text');
      item.appendChild([...row.children][0]);
      row.remove();
    }
  })
}

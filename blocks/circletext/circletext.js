export default function decorate(block) { 
  block.classList.add('row'); 
  block.classList.add('circle');    
  const cols = [...block.firstElementChild.children];
  [...block.children].forEach((row) => {
    row.classList.add('circle-container');
    row.classList.add('col-4');
    [...row.children].forEach((col) => {
    const ptag = [...col.children];
    ptag[0].classList.add('uppercase');
    ptag[1].classList.add('ptagdesc');
        
    });
  });
}

import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.classList.add('footer-container');
  const fragmentContent = fragment.firstElementChild;
  const elements = fragmentContent && fragmentContent.querySelectorAll('p');
  if (elements && elements.length > 0) {
    const sectionLeft = document.createElement('div');
    sectionLeft.classList.add('left-section');
    const sectionRight = document.createElement('div');
    sectionRight.classList.add('right-section');
    elements.forEach((ele, index) => {
      if (index === 0) {
        sectionLeft.append(ele);
      } else {
        sectionRight.append(ele);
      }
    });
    footer.append(sectionLeft);
    footer.append(sectionRight);
  }
  block.append(footer);
}

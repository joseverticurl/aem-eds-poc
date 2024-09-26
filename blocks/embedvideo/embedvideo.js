export default function decorate(block) {
  const blockContent = block.querySelectorAll('p');
  if (blockContent && blockContent.length > 0) {
    const videoId = blockContent[0].textContent.trim();
    console.log('VIDEO ID - ', videoId);
    const iframe = document.createElement('iframe');
    iframe.width = "840";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.frameBorder = "0";
    //iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    // Append the iframe to the block
    block.innerHTML = "";
    block.appendChild(iframe);
    if (blockContent[1]) {
      blockContent[1].classList.add('read-more');
      block.appendChild(blockContent[1]);
    }
  }
}

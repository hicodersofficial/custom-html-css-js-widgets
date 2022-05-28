const contextmenu = document.querySelector(".contextmenu");
let ctxPosition = {
  pageX: 0,
  pageY: 0,
};
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const ctxHeight = contextmenu.offsetHeight;
  const ctxWidth = contextmenu.offsetWidth + 5;

  const widthOverflow = e.pageX + ctxWidth > window.innerWidth;
  const heightOverflow = e.pageY + ctxHeight > window.innerHeight;

  ctxPosition = {
    pageX: widthOverflow ? e.pageX - ctxWidth - 5 : e.pageX,
    pageY: heightOverflow ? e.pageY - ctxHeight : e.pageY,
  };

  hideContextMenu();
  setTimeout(showCtxMenu, 50);
});
document.addEventListener("click", hideContextMenu);

function showCtxMenu() {
  contextmenu.style.cssText = `
    opacity: 1;
    transform: scale(1);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}

function hideContextMenu() {
  contextmenu.style.cssText = `
    opacity: 0;
    transform: scale(0);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}

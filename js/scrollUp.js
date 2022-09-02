const d = document;

export default function moveUp(btnUp, activeBtn) {
  const $upButton = d.getElementById(btnUp);
  d.addEventListener("scroll", (e) => {
    if (window.scrollY >= 600) {
      $upButton.classList.add(activeBtn);
    } else {
      $upButton.classList.remove(activeBtn);
    }
  });
  $upButton.addEventListener('click', e=>{
    console.log("sexo")
    window.scroll(0, 0);
  })
}

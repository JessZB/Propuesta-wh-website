const d = document;

export default function stickyMenu(navBar, stickyClass, open, activeClass){
    const $navMenu = d.querySelector(navBar),
    $openMenu = d.querySelector(open);
    const changeIcon = ()=>{
        if($navMenu.classList.contains(activeClass)) $openMenu.src = "icons/close-menu.svg";
        else $openMenu.src = "icons/menu.svg";   
    }
    window.addEventListener('scroll', (e)=>{
        if(window.scrollY > 500 && window.innerWidth > 880) $navMenu.classList.add(stickyClass);
        if(window.scrollY === 0  && window.innerWidth > 880) $navMenu.classList.remove(stickyClass);
        if(window.innerWidth < 880) {
            $navMenu.classList.remove(activeClass);
            changeIcon()
        }
    });
    window.addEventListener("resize", e=>{
        if(window.innerWidth < 880) {
            $navMenu.classList.remove(stickyClass);
            $navMenu.classList.remove(activeClass);
            changeIcon()
    }
    });
    d.addEventListener('click', e=>{
        if(e.target.matches(open)) $navMenu.classList.toggle(activeClass);
        if(!e.target.matches(`${navBar}`) && !e.target.matches(`${navBar} *`) && !e.target.matches(open)){
            $navMenu.classList.remove(activeClass);       
        }
        changeIcon()
    })

}
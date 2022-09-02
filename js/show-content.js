const d = document

export default function showInfo(){
let contentList = d.querySelectorAll("[data-show]");
let options = {
    root: null,
    rootMargin: "200px",
    threshold: 0.5,
}
const showContent = (entries, obs)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('watch')
        }
    })
}

const observer = new IntersectionObserver(showContent, options);
contentList.forEach(el => observer.observe(el));
}
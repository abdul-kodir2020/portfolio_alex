const button = document.querySelector(".button-menu")
const phone_menu = document.querySelector(".nav-phone")
const button_close_nav_phone = document.querySelector(".close-nav-phone")



button.onclick = () =>{
    phone_menu.style.transform = "translateY(0)"
}

button_close_nav_phone.onclick = () =>{
    phone_menu.style.transform = "translateY(-300px)"
    
}

setTimeout(() => {
    phone_menu.style.zIndex = "6"
    
}, 1000);



let translate = 0
if (document.querySelector('.projet')) {
    const projet_width = (screen.width < 890)?document.body.offsetWidth:document.querySelector('.projet').offsetWidth
    const button_left = document.querySelector(".button-left")
    const button_right = document.querySelector(".button-right")
    const projets_liste = document.querySelector(".projets-liste")
    const projets_liste_width = projets_liste.offsetWidth - 10000 - ( screen.width < 890 ? (document.body.offsetWidth - 10) : 900)

    button_right.onclick = () =>{
        translate -= projet_width
        if(-translate > projets_liste_width) translate = - projets_liste_width
    
        projets_liste.style.transform = `translateX(${translate}px)`
    }
    
    button_left.onclick = () =>{
        translate += projet_width
        if(translate > 0) translate = 0
        console.log(translate, projets_liste_width);
    
        projets_liste.style.transform = `translateX(${translate}px)`
    }
}




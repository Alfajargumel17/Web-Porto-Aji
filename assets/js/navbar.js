/* ==========================================
   MOBILE NAVIGATION
========================================== */

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {

    navLinks.classList.toggle("open");
    burger.classList.toggle("active");

});

/* ==========================================
   CLOSE MENU
========================================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("open");
        burger.classList.remove("active");

    });

});

/* ==========================================
   ACTIVE MENU
========================================== */

const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    menuItems.forEach(item=>{

        item.classList.remove("active");

        if(item.getAttribute("href")==="#"+current){

            item.classList.add("active");

        }

    });

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
/* ==========================================
   SKILL ANIMATION
========================================== */

const skills=document.querySelectorAll(".skill-fill");

const skillObserver=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.width=

            entry.target.dataset.width+"%";

        }

    });

},

{

    threshold:.35

}

);

skills.forEach(skill=>{

    skillObserver.observe(skill);

});
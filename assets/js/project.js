const projectTrack = document.querySelector(".projects-track");
const projectCards = document.querySelectorAll(".project-card");
const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");

let projectPage = 0;

function visibleProjects(){

    if(window.innerWidth <= 768) return 1;

    return 2;

}

function updateProjectSlider(){

    const visible = visibleProjects();

    const gap = 24;

    const cardWidth = projectCards[0].offsetWidth + gap;

    projectTrack.style.transform =
        `translateX(-${projectPage * visible * cardWidth}px)`;

    const maxPage =
        Math.ceil(projectCards.length / visible) - 1;

    prevProject.disabled = projectPage === 0;

    nextProject.disabled = projectPage === maxPage;

}

nextProject.addEventListener("click",()=>{

    const maxPage =
        Math.ceil(projectCards.length / visibleProjects()) - 1;

    if(projectPage < maxPage){

        projectPage++;

        updateProjectSlider();

    }

});

prevProject.addEventListener("click",()=>{

    if(projectPage > 0){

        projectPage--;

        updateProjectSlider();

    }

});

window.addEventListener("resize",updateProjectSlider);

window.addEventListener("load",updateProjectSlider);
const orgTrack = document.querySelector(".organization-track");

const orgCards = document.querySelectorAll(".organization-card");

const prevOrg = document.getElementById("prevOrg");

const nextOrg = document.getElementById("nextOrg");

let orgPage = 0;

function visibleOrgCards(){

    if(window.innerWidth <= 768) return 1;

    return 2;

}

function updateOrgSlider(){

    const visible = visibleOrgCards();

    const gap = 24;

    const cardWidth = orgCards[0].offsetWidth + gap;

    orgTrack.style.transform =
        `translateX(-${orgPage * visible * cardWidth}px)`;

    const maxPage =
        Math.ceil(orgCards.length / visible) - 1;

    prevOrg.disabled = orgPage === 0;

    nextOrg.disabled = orgPage === maxPage;

}

nextOrg.addEventListener("click",()=>{

    const maxPage =
        Math.ceil(orgCards.length / visibleOrgCards()) - 1;

    if(orgPage < maxPage){

        orgPage++;

        updateOrgSlider();

    }

});

prevOrg.addEventListener("click",()=>{

    if(orgPage > 0){

        orgPage--;

        updateOrgSlider();

    }

});

window.addEventListener("resize",updateOrgSlider);

window.addEventListener("load",updateOrgSlider);
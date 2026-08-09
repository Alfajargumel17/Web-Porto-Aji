const modal = document.getElementById("certificateModal");

const preview = document.getElementById("certificatePreview");

const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".open-certificate").forEach(btn=>{

    btn.addEventListener("click",()=>{

        preview.src = btn.dataset.image;

        modal.classList.add("show");

    });

});

closeBtn.onclick = ()=>{

    modal.classList.remove("show");

}

modal.onclick = e=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

}

document.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        modal.classList.remove("show");

    }

});
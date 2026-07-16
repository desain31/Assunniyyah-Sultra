/* =====================================
   ASSUNNIYYAH SULTRA
   MAIN JAVASCRIPT
===================================== */



// =====================================
// TAHUN OTOMATIS FOOTER
// =====================================


let tahun = new Date().getFullYear();


let copyright = document.querySelector(".copyright p");


if(copyright){

copyright.innerHTML =
"© " + tahun + " TPQ & Hadroh Assunniyyah Sultra";

}

// =====================================
// ANIMASI SCROLL
// =====================================


const animateItems =
document.querySelectorAll(
".card, .program-card, .kontak-card, .gallery-item, .anggota-card"
);



function reveal(){


let windowHeight =
window.innerHeight;



animateItems.forEach(item=>{


let posisi =
item.getBoundingClientRect().top;



if(posisi < windowHeight - 80){


item.classList.add("show");


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();








// =====================================
// SMOOTH SCROLL
// =====================================


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(link=>{


link.addEventListener(
"click",
function(e){


let target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});








// =====================================
// LOADING WEBSITE
// =====================================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});








// =====================================
// BACK TO TOP BUTTON
// =====================================



let topButton =
document.createElement("button");



topButton.innerHTML=

`
<i class="fa-solid fa-arrow-up"></i>
`;



topButton.className="back-top";



document.body.appendChild(topButton);




window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 400){


topButton.classList.add("active");


}else{


topButton.classList.remove("active");


}


});





topButton.onclick=function(){


window.scrollTo({

top:0,

behavior:"smooth"

});


};

// =========================
// PENCARIAN GURU
// =========================

const search = document.getElementById("searchGuru");
const reset = document.getElementById("resetSearch");
const cards = document.querySelectorAll(".guru-card");

if (search) {

    search.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

if (reset) {

    reset.addEventListener("click", function () {

        search.value = "";

        cards.forEach(card => {

            card.style.display = "block";

        });

    });

}

/*=====================================
        FILTER GALERI
======================================*/

const filterButtons = document.querySelectorAll(".photo-filter-buttons button");
const galleryCards = document.querySelectorAll(".photo-gallery-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
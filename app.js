let Hermes = [
    {
        displayName: "CodeGiyu",
        name: "Edward-Precious Omegbu",
        image: "img/giyu.jpg",
        age: 26,
        complexion: "Dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Pasta",
        bestMovie: "One Piece"
    },

    {
        displayName: "Natacha",
        name: "Natacha Danbadan",
        image: "img/nat.jpg",
        age: "24",
        complexion: "Black",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "????",
        bestMovie: "Friday The 13th"
    },

    {
        displayName: "Adedamola",
        name: "Jimi-Bada Adedamola",
        image: "img/bada.jpg",
        age: 24,
        complexion: "Dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Beans!",
        bestMovie: "Star Wars: Revenge of The Sith"
    },

    {
        displayName: "Fawsiyyah",
        name: "Fawsiyyah Lamidi",
        image: "img/zee.jpg",
        age: 17,
        complexion: "Fair?",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Rice",
        bestMovie: "Little"
    },

    {
        displayName: "DeeVeee",
        name: "Obi Divine",
        image: "img/divi.jpg",
        age: 22,
        complexion: "Dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Yam",
        bestMovie: "Ready Player One"
    },

    {
        displayName: "Ifechukwude",
        name: "Ifechukwude Nwaodor",
        image: "img/ify.jpg",
        age: "??",
        complexion: "Fair",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Rice",
        bestMovie: "Titanic"
    },

    {
        displayName: "Ayordeji",
        name: "Ayordeji Eluyemi",
        image: "img/ayor.jpg",
        age: 20,
        complexion: "dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "Fried Rice",
        bestMovie: "Arthdal Chronicles"
    },

    {
        displayName: "Michael",
        name: "Okike Chinonso Michael",
        image: "img/mike.jpg",
        age: "??",
        complexion: "Dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "?????",
        bestMovie: "?????"
    },

    {
        displayName: "Sisolis Wayne",
        name: "Akorede Mohammed",
        image: "img/wayne.jpg",
        age: "22",
        complexion: "Dark",
        thingsLearned: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        bestFood: "?????",
        bestMovie: "??????"
    }
];

let colors = ["#663399", "#ffbc81", "#00acac", "#ff7d93", "#d2691e", "#ff0000", "#0000cd", "#2e8b57", "#b1b102"];

let row = document.getElementById("row");

for (i = 0; i < Hermes.length; i++) {
    let card = `<div class="swiper-slide p-0">
                    <div class="card-wrap p-0 m-0">
                        <div class="img-container ratio ratio-1x1">
                            <img src="${Hermes[i].image}" alt="" class="img-fluid">
                        </div>
                        <div class="card-body bg-white px-3 pt-5 d-grid">
                            <p class="name text-center fs-sm">${Hermes[i].name}</p>
                            <h6 class="display-6 fw-bold text-center my-1"><span style="color: ${colors[i]};">"</span>${Hermes[i].displayName}<span style="color: ${colors[i]};">"</span></h6>
                            <button class="alert-btn btn mx-auto fs-6 px-4 mt-4 text-white" onclick="nameAlert(${i})" style="background-color: ${colors[i]};">Click me!</button>
                        </div>
                        <div class="row bottom-row p-0" style="background-color: ${colors[i]};">
                            <div class="col-4 border-end p-0 d-flex align-items-center justify-content-center">
                            <p class="text-white text-center m-0">${Hermes[i].complexion}</p>
                            </div>
                            <div class="col-4 py-2">
                            <h6 class="fs-3 fw-bold text-center text-white">${Hermes[i].age}</h6>
                            <p class="text-center text-white fs-sm">years</p>
                            </div>
                            <div class="col-4 border-start p-1 d-flex align-items-center justify-content-center">
                                <p class="food text-white text-center m-0 p-0">${Hermes[i].bestFood}</p>
                            </div>
                        </div>
                    </div>
                </div>`;

    row.innerHTML += card;

    
}

function nameAlert(i) {
    alert(Hermes[i].name);
}


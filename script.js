const btn_inv = document.getElementById("btn-inv");

const dishes = [
    {
        title: "Curry",
        time: "30",
        difficulty: "5",
        ingredients: ["Zwiebeln", "Knoblauch", "Ingwer"],
        herbs: ["Curry (Paste)", "Salz", "Pfeffer", "Gara Masala", "Chili"],
        steps: [
            "1. <br> <br> Zwiebeln, Knoblauch und Ingwer kleinhacken <br> <br> leicht anschwitzen und nach ein paar Minuten die Linsen dazu geben <br> <br> Gewürze und Kartoffeln hinzugeben",
            "2. <br> <br> wasser kochen",
            "3. <br> <br> Zitronenscheibe",
        ],
    },
];

// sups
function searchItems() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const grid = document.getElementById("foodGrid");
    const boxes = grid.getElementsByClassName("food-box");

    for (let i = 0; i < boxes.length; i++) {
        const name = boxes[i].getAttribute("data-name");
        if (name.toLowerCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

function searchRecepies() {
    const input = document.getElementById("searchCookInput");
    const filter = input.value.toLowerCase();
    const grid = document.getElementById("cooking-book");
    const boxes = grid.getElementsByClassName("dish-click");

    for (let i = 0; i < boxes.length; i++) {
        const name = boxes[i].getAttribute("data-name");
        if (name.toLowerCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

function bookPage(direction) {
    const book = document.getElementById("inner-book");
    const pages = book.getElementsByClassName("page");
    let currentPage = book.getAttribute("data-page");

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i].getAttribute("data-page");

        if (direction === "next") {
            if (page === "true" && i + 1 < pages.length) {
                pages[i].classList.add("invisible");
                pages[i].setAttribute("data-page", "false");
                pages[i + 1].classList.remove("invisible");
                pages[i + 1].setAttribute("data-page", "true");
                return;
            }
        }
        if (direction === "prev") {
            if (page === "true" && i - 1 >= 0) {
                pages[i].classList.add("invisible");
                pages[i].setAttribute("data-page", "false");
                pages[i - 1].classList.remove("invisible");
                pages[i - 1].setAttribute("data-page", "true");
                return;
            }
        }
    }
}

var currentDish = "1";

const currentPath = window.location.pathname;
const currentFileName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

// html injection of the ingredients depending on what food is cooked
if (currentFileName === "inventar.html") {
    // Store checkbox states in localStorage
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"][name="zutaten"]',
    );
    function storeCheckboxStates() {
        const states = {};
        checkboxes.forEach((cb) => {
            states[cb.value] = cb.checked;
        });
        localStorage.setItem("zutatenCheckboxStates", JSON.stringify(states));
    }
    // Load checkbox states from localStorage
    function loadCheckboxStates() {
        const states = JSON.parse(
            localStorage.getItem("zutatenCheckboxStates") || "{}",
        );
        checkboxes.forEach((cb) => {
            if (states.hasOwnProperty(cb.value)) {
                cb.checked = states[cb.value];
            }
        });
    }

    // Attach event listeners
    document.addEventListener("DOMContentLoaded", () => {
        loadCheckboxStates();
        const checkboxes = document.querySelectorAll(
            'input[type="checkbox"][name="zutaten"]',
        );
        checkboxes.forEach((cb) => {
            cb.addEventListener("change", storeCheckboxStates);
        });
    });
    btn_inv.addEventListener("click", (event) => {
        event.preventDefault();
        const checked = document.querySelectorAll(
            'input[type="checkbox"][name="zutaten"]:checked',
        );
        const db_ingredients = [];
        checked.forEach((cb) => {
            db_ingredients.push(cb.value);
        });
        localStorage.setItem("db_ingredients", JSON.stringify(db_ingredients));
    });
}

// if (currentFileName === "cooking.html") {
//     const cookingBook = document.getElementById("cooking-book");
//     cookingBook.innerHTML = dishes
//         .map((Dish) => {
//             const { title, time, difficulty, ingredients, herbs } = Dish;
//             return `
//         <a class="dish-click" data-name="${title}" href="dish.html">
//         <div class="dish">
//         <div class="dish-left-side">
//         <img class="dish-img" src="pics/dishes/${title}.png" alt="">
//         <h2 class="dish-title">
//         ${title}
//         </h2>
//                 <div class="dish-info">
//                 <div class="dish-time">
//                         <p>
//                             Zeit:
//                             </p>
//                         <p>
//                         ${time} min
//                         </p>
//                         </div>
//                         <div class="dish-difficulty">
//                         <p>
//                         Aufwand:
//                         </p>
//                         <p>
//                         ${difficulty}/10
//                         </p>
//                         </div>
//                         </div>
//                         </div>
//                         <div class="dish-right-side">
//                 <img class="papyrus" src="pics/kochen/papyrus-top.png" alt="">
//                 <div class="dish-ingredients">
//                     <h4>
//                     Zutaten:
//                     </h4>
//                     <ul>
//                     ${ingredients
//                         .map(
//                             (ingredient) => `
//                         <li>
//                         ${ingredient}
//                         </li>
//                     `
//                         )
//                         .join("")}
//                     <li>
//                     Gewürze:
//                             <ul>
//                             ${herbs
//                                 .map(
//                                     (herbs) => `
//                                 <li>
//                                 ${herbs}
//                                 </li>
//                             `
//                                 )
//                                 .join("")}
//                             </ul>
//                             </li>
//                         </ul>
//                         </div>
//                 <img class="papyrus" src="pics/kochen/papyrus-bottom.png" alt="">
//             </div>
//         </div>
//         </a>`;
//         })
//         .join("");

//     const dishLinks = document.querySelectorAll(".dish-click");

//     dishLinks.forEach((link) => {
//         link.addEventListener("click", () => {
//             const tar = link.getAttribute("data-name");
//             localStorage.setItem("currentDish", tar);
//         });
//     });
// }

if (currentFileName === "dish.html") {
    const currentDish = localStorage.getItem("currentDish");
    const page = document.getElementById("page-js");
    const heading = document.getElementById("heading");
    let db_ingredients = JSON.parse(localStorage.getItem("db_ingredients"));

    const DISH = dishes.find((dish) => dish.title === currentDish);
    const ingr = DISH.ingredients;
    const herb = DISH.herbs;
    const i_atHome = ingr.filter((item) => db_ingredients.includes(item));
    const i_notAtHome = ingr.filter((item) => !i_atHome.includes(item));
    const h_atHome = herb.filter((item) => db_ingredients.includes(item));
    const h_notAtHome = herb.filter((item) => !h_atHome.includes(item));
    // TODO rot wenn nicht zuhause

    const i_h = {
        ingredients: i_atHome.concat(i_notAtHome),
        herbs: h_atHome.concat(h_notAtHome),
    };
    const { ingredients, herbs } = i_h;
    const ing = `
    <h4>
        Zutaten:
    </h4>
    <ul>
    ${ingredients
        .map(
            (ingredient) => `
        <li>
            ${ingredient}
        </li>                        
    `,
        )
        .join("")}
    <li>
        Gewürze:
        <ul>
        ${herbs
            .map(
                (herbs) => `
            <li>
                ${herbs}
            </li>
        `,
            )
            .join("")}
        </ul>
    </li>
    </ul>
    `;
    var active = ``;
    var other = ``;
    const pages = [];
    pages.push(ing);
    DISH.steps.forEach((step) => {
        pages.push(step);
    });
    if (pages.length % 2 != 0) {
        pages.push("");
    }
    for (i = 0; i < pages.length; i += 2) {
        if (i == 0) {
            active = `
                <div class="page" id="page" data-page="true">
                    <div class="left-side">
                        <div class="text-l" >
                            ${pages[i]}
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="text-r" >
                            ${pages[i + 1]}
                        </div>
                    </div>
                </div>
                `;
        } else {
            otherx = `
                <div class="page invisible" id="page" data-page="false">
                    <div class="right-side">
                        <div class="text-l" style="text-align:center;" >
                            ${pages[i]}
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="text-r" >
                            ${pages[i + 1]}
                        </div>
                    </div>
                </div>
                `;
            other += otherx;
        }
    }
    heading.innerHTML = DISH.title;
    page.innerHTML = `${active} ${other}`;
}

/*===============================*\
  #SELECTION
\*===============================*/

let dropDownButton = document.getElementById("dropDownButton");
let dropDownMenu = document.querySelector(".dropdownMenu");

// let _navbar_section
let searchSection = document.querySelector("#searchSection");
let hiddenNavbar = document.querySelector(".hiddenNavbar");

/*===============================*\
  #DROPDOWN EVENT
\*===============================*/
dropDownButton.addEventListener("click", function (e) {
  e.preventDefault();
  dropDownMenu.classList.toggle("active");
  console.log("click");
  e.stopPropagation();
});

window.onclick = function (e) {
  if (!e.target.matches("#dropDownButton")) {
    if (dropDownMenu.classList.contains("active"))
      dropDownMenu.classList.remove("active");
  }
};

/*===============================*\
  #SEARCH EVENT
\*===============================*/

searchSection.addEventListener("click", function (e) {
  searchSection.innerHTML = `<ul class="searchSecList">
            <li class="searchSecListItem">Stays</li>
            <li class="searchSecListItem">Experience</li>
            <li class="searchSecListItem">Online Experiences</li>
          </ul>`;
  // e.stopPropagation();
  hiddenNavbar.classList.add("active");
});

// window.onclick = function (e) {
//   if (!e.target.matches("#searchSection")) {
//     if (hiddenNavbar.classList.contains("active"))
//       hiddenNavbar.classList.remove("active");
//     searchSection.innerHTML = `<aside class="search_container">
//             <div class="items">Anywhere</div>
//             <div class="items">Any Week</div>
//             <div class="items">
//               <span class="textBlock"> Add guest</span>
//               <span class="iconBlock"
//                 ><i class="fa-solid fa-magnifying-glass"></i
//               ></span>
//             </div>
//           </aside>`;
//   }
// };

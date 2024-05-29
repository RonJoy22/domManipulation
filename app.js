const mainEl = document .querySelector("main");

comsole.log(MainEl);

// setting the back color using our var method to grab an item from CSS
mainEl.style.backgroudColor = "var(--main-bg)";

// Creating an HTML element 
const h1 = document.createElement("H1");

// Attaching text to our h1 we created
h1.innerHTML = "DOM Manipulation";

//Appending my h1 I created to my main character
mainEl.appendChild(h1);

//Add a class name to an html elemnt
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

// set the height to 100%
topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
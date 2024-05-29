const mainEl = document.querySelector("main");

console.log(mainEl);

// setting the back color using our var method to grab an item from CSS
mainEl.style.backgroundColor = "var(--main-bg)";

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

topMenuEl.classList.add("flex-around");

// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach(link => {
    // Create Anchor Element
    const aElement = document.createElement("a");
    aElement.href = link.href
  
    aElement.textContent = link.text;

  topMenuEl.appendChild(aElement);
  });


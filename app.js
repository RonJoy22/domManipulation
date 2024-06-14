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
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  menuLinks.forEach(link => {
    // Create Anchor Element
    const aElement = document.createElement("a");
    aElement.href = link.href
  
    aElement.textContent = link.text;

  topMenuEl.appendChild(aElement);
  });

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.tagName !== "A") return;

    // topMenuLinks.forEach(link =>{
    //    if (link === event.target) {
    //       link.classList.toggle("active");
     //   } else {
     //       link.classList.remove("active");
    // } 
    //    })
   const linkText = event.target.textContent.toLowerCase()
   const linkObject = menuLinks.find((link) => link.text === linkText)

   
   if (event.target.classList.contains("active")){
    event.target.classList.remove("active")
    subMenuEl.style.top = "0;"
   }else{
    document
    .querySelectorAll("#top-menu a")
    .forEach(a) => a.classList.remove("active");
    event.target.classlist.add("active";)

    }

});

const menuLinks = [
  {text:'about', href:'/about'},
  {text:'catalog',href: '#',subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
      ],
  },
  {text:'orders',href: '#',subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
      ],
  },
  {text:'account',href: '#',subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
      ],
  },
];

const mainEl = document.getElementsByTagName('main')[0];
console.log(mainEl[0])

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach((link) => {
  const newLink = document.createElement('a');
  newLink.setAttribute('href', link.href);
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
});

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');

//attach a delegated 'click' event listener to topMenuEl. Prevent default link behavior
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault(); 

// Return immediately if the element clicked was not an <a> element
  if (!event.target.matches('a')) return;

// Remove the active class from all links
  topMenuLinks.forEach((link) => link.classList.remove('active'));

// Add or remove the active class to/from the clicked link
  const clickedLink = event.target;
  if (!clickedLink.classList.contains('active')) {
      clickedLink.classList.add('active');
  }

// Log the content of the <a> to verify the handler is working
  console.log(clickedLink.textContent);

// Handle submenu building based on clicked link. Clear submenu if clicked link has no sublinks
  const clickedLinkText = clickedLink.textContent.toLowerCase();
  const clickedMenuItem = menuLinks.find((link) => link.text === clickedLinkText);

  if (clickedMenuItem && clickedMenuItem.subLinks) {
      buildSubMenu(clickedMenuItem.subLinks);
  } else {
      clearSubMenu(); 
  }
});

// Clear the current contents of subMenuEl
function clearSubMenu() {
  subMenuEl.innerHTML = '';
}

// Helper function to build submenu based on clicked link. Clear current submenu contents.
function buildSubMenu(subLinks) {
  clearSubMenu(); 
  subLinks.forEach((link) => {
      const newSubLink = document.createElement('a');
      newSubLink.setAttribute('href', link.href);
      newSubLink.textContent = link.text;
      subMenuEl.appendChild(newSubLink);
  });
}











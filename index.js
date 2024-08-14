// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
        text: "catalog",
        href: "#",
        subLinks: [
            { text: "all", href: "/catalog/all" },
            { text: "top selling", href: "/catalog/top" },
            { text: "search", href: "/catalog/search" },
        ],
    },
    {
        text: "orders",
        href: "#",
        subLinks: [
            { text: "new", href: "/orders/new" },
            { text: "pending", href: "/orders/pending" },
            { text: "history", href: "/orders/history" },
        ],
    },
    {
        text: "account",
        href: "#",
        subLinks: [
            { text: "profile", href: "/account/profile" },
            { text: "sign out", href: "/account/signout" },
        ],
    },
];

// Part 1: Getting Started

// 1 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// 2 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3 Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// 4 Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
// 1 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);

// 2 Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3 Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

/// 4 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((obj) => {
    // Create an <a> element.
    const linkEl = document.createElement("a");
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    linkEl.href = obj.href;
    // Set the new element's content to the value of the text property of the "link" object.
    linkEl.textContent = obj.text;
    // Append the new element to the topMenuEl element.
    topMenuEl.append(linkEl);
});

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
// Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%";

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Attach a delegated 'click' event listener to topMenuEl.
const topMenuLinks = document.getElementsByTagName("a");
topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches("a")) {
        return;
    }
    console.log(e.target);

});


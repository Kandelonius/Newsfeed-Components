/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
const get = (selector) => {
  return document.querySelector(selector)
}

// debugger
/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  The function takes an array as its only argument.
*/
function makeMenuComponent(listArray){
  const menuDiv = document.createElement('div');
  const ulEl = document.createElement('ul');
  menuDiv.appendChild(ulEl);
  menuDiv.classList.add('menu');
  // ulEl.appendChild(listArray);
//  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. Add those items to the <ul>
  // console.log(menuDiv);
  // debugger
  const listElements = listArray.forEach(listArray =>{
    const listItem = document.createElement('li');
    listItem.textContent = listArray;
    ulEl.appendChild(listItem);
  })

  // console.log(menuDiv);
    //Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
    const panelElements = panelData.map(panelData => makePanel(panelData))
  const menuButton = get('.menu-button');
  // const menuButton = document.querySelector('.menu-button');
  // debugger
    //Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  //   console.log(menuButton);
  menuButton.addEventListener('click', event =>{
    menuDiv.classList.toggle('menu--open');
  //Step 5: return the menu component.
    
  })
  return menuDiv;
}
  //Step 6: add the menu component to the DOM.
/*
const articleContainer = document.querySelector('.articles');
const articleElements = menuItems.map(menuItems =>{
    makeMenuComponent(menuItems)}) 
  // console.log(articleContainer);
  articleContainer.forEach(articleContainer => {
    articleContainer.appendChild();
  });
*/
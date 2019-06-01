//Menu icon variables
const menuIconBar = document.getElementsByClassName("menu-icon-bar")[0];
const menuIconX = document.getElementsByClassName("menu-icon-x")[0];
const menuItems = document.getElementsByClassName("menu-items")[0];

//Sliding images variables
const imageDiv = document.getElementsByClassName("img-text");
let imageNumber = 0;

//Test the menu icon variables if they are ready
if(menuIconBar && menuIconX){
  menuIconBar.addEventListener("click", showHideMenu);
  menuIconX.addEventListener("click", showHideMenu);
  document.addEventListener("click", () => {
    menuItems.classList.add("hide");
    menuIconX.classList.add("hide");
    menuIconBar.classList.remove("hide");
  });
}

//Test the sliding images if they are ready
if(imageDiv){
  setInterval(slideImages, 5000);
}

//Function that makes the menu icons toggle
function showHideMenu(e){
  e.stopPropagation();

  if(e.target == menuIconBar){
    menuIconBar.classList.toggle("hide");
    menuIconX.classList.toggle("hide");
    menuItems.classList.toggle("hide");
  }else{
    menuIconBar.classList.toggle("hide");
    menuIconX.classList.toggle("hide");
    menuItems.classList.toggle("hide");
  }
}

//Function that makes the images slide
function slideImages(){
  let num = changeImageCount();
  if((num - 1) < 0){
    imageDiv[2].classList.toggle("hide");
  }else{
    imageDiv[num - 1].classList.toggle("hide");
  }
 
  imageDiv[num].classList.toggle("hide");
}
function changeImageCount(){
  return (++imageNumber % 3);
}
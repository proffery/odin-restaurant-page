import {initialPageRender, homePageRender} from "./initial";
import menuPageRender from "./menu";
import contactPageRender from "./contact";
import css from "./style.css";

initialPageRender();
homePageRender();
const mainContent = document.querySelector('.main-content');
const headerButtons = document.querySelectorAll('.header-button');
headerButtons.forEach(button => button.addEventListener('click', changeContent));

function changeContent(e) {
    headerButtons.forEach(button => button.classList.remove('active-button'));
    
    let child = mainContent.lastElementChild;
    while (child) {
        mainContent.removeChild(child);
        child = mainContent.lastElementChild;
    }

    if (e.target.className.includes('home')) {
        homePageRender();
    }

    else if (e.target.className.includes('menu')) {
        menuPageRender();
    }

    else {
        contactPageRender();
    }


}
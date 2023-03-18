import githubmark from '../dist/images/githubmark.png';

function initialPageRender() {
    const container = document.getElementById('content');

    const header = document.createElement('div');
    const mainContent = document.createElement('div');
    const footer = document.createElement('div');
    
    header.classList.add('header');
    mainContent.classList.add('main-content');
    footer.classList.add('footer');
    
    container.append(header, mainContent, footer);

    const homeButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');

    homeButton.classList.add('header-button');
    menuButton.classList.add('header-button');
    contactButton.classList.add('header-button');
    homeButton.classList.add('home');
    menuButton.classList.add('menu');
    contactButton.classList.add('contact');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    header.append(homeButton, menuButton, contactButton);

    const footerContent = document.createElement('p');
    const footerCopyright = document.createElement('a');
    const footerHref = document.createElement('a');
    const footerImg = document.createElement('img');
    const footerYearContainer = document.createElement('a');
    const footerYear = new Date().getFullYear();
    const footerMailTo = document.createElement('a');
    const footerBackImg = document.createElement('a');
    
    footerCopyright.textContent = 'Copyright';
    footerHref.setAttribute('href', 'https://github.com/proffery/odin-restaurant-page');
    footerImg.classList.add('github-mark');
    footerImg.src = githubmark;
    footerYearContainer.textContent = ` ${footerYear} `;
    footerMailTo.setAttribute('href', 'mailto:proffery@gmail.com');
    footerMailTo.setAttribute('title', 'Dmitry Shamko');
    footerMailTo.textContent = ' Dmitry Shamko';
    footerBackImg.textContent = 'Photo by Rachel Claire from Pexels'
    footerBackImg.setAttribute('href', 'https://www.pexels.com/photo/mug-of-coffee-on-wooden-table-4577860/');
    
    footerHref.appendChild(footerImg);
    footerContent.append(footerCopyright, footerHref,  footerMailTo, footerYearContainer,footerBackImg);
    footer.appendChild(footerContent);
}

function homePageRender() {
    const homeButton = document.querySelector('.home')
    homeButton.classList.add('active-button');
}

export {initialPageRender, homePageRender};
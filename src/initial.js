import githubmark from '../dist/img/githubmark.png';
import homeImg from '../dist/img/pexels-rachel-claire-home.jpg';

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
    footerMailTo.setAttribute('title', 'Mail me');
    footerMailTo.textContent = ' Dmitry Shamko';
    footerBackImg.textContent = 'Photo by Rachel Claire from Pexels'
    footerBackImg.setAttribute('title', 'Go to Pexels');
    footerBackImg.setAttribute('href', 'https://www.pexels.com/@rachel-claire/');
    
    footerHref.appendChild(footerImg);
    footerContent.append(footerCopyright, footerHref,  footerMailTo, footerYearContainer,footerBackImg);
    footer.appendChild(footerContent);
}

function homePageRender() {
    const mainContainer = document.querySelector('.main-content');
    const homeButton = document.querySelector('.home')
    homeButton.classList.add('active-button');

    const homeImgHolder = document.createElement('div');
    const homeLogo = document.createElement('img')
    const homeTextContainer = document.createElement('p');

    homeImgHolder.classList.add('home-img-holder');
    homeLogo.classList.add('home-img');
    homeLogo.src = homeImg;
    homeTextContainer.classList.add('home-text');

    homeTextContainer.textContent = 'Welcome to our restaurant page! We are delighted to present our menu that offers a wide range of delicious dishes that cater to all tastes and preferences. Our team of skilled chefs prepares the dishes using fresh, locally sourced ingredients to ensure the highest quality and taste. Whether you are looking for a quick lunch, a romantic dinner or a family-friendly meal, our restaurant is the perfect spot to satisfy your cravings. We pride ourselves on offering a warm and inviting ambiance that makes you feel at home. We look forward to welcoming you to our restaurant soon!';

    homeImgHolder.appendChild(homeLogo);
    mainContainer.append(homeImgHolder, homeTextContainer);


}

export {initialPageRender, homePageRender};
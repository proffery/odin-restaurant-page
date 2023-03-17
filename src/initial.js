import githubmark from '/dist/githubmark.png';

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
    
    footerCopyright.textContent = 'Copyright';
    footerHref.setAttribute('href', 'https://github.com/proffery/odin-restaurant-page');
    footerImg.classList.add('github-mark');
    footerImg.src = githubmark;
    footerYearContainer.textContent = `${footerYear}`;
    footerMailTo.setAttribute('href', 'mailto:proffery@gmail.com');
    footerMailTo.setAttribute('title', 'Dmitry Shamko');
    footerMailTo.textContent = 'Dmitry Shamko';
    
    footerHref.appendChild(footerImg);
    footerContent.append(footerCopyright, footerHref, footerYearContainer, footerMailTo);

    // footerContent.innerHTML = `
    //     <a>Copyright</a>
    //     <a href="https://github.com/proffery"><img class="github-mark" src="/img/github-mark.png"></a> 
    //     <a><script>document.write(new Date().getFullYear())</script></a> 
    //     <a href="mailto:proffery@gmail.com" title="Dmitry Shamko">Dmitry Shamko</a>
    //     <a>for Odin Project</a>
    // `;
    footer.appendChild(footerContent);
}

export default initialPageRender;
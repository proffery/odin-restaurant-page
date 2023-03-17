function initialGrid() {
    const container = document.getElementById('content');

    const header = document.createElement('div');
    const mainContent = document.createElement('div');
    const footer = document.createElement('div');
    
    header.classList.add('header');
    mainContent.classList.add('main-content');
    footer.classList.add('footer');
    
    header.textContent = 'Header';
    mainContent.textContent = 'Main Content';
    footer.textContent = 'Footer';
    
    container.append(header, mainContent, footer);
}

export default initialGrid;
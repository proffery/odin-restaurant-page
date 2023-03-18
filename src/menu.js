import appetizerImage from '../dist/img/pexels-rachel-claire-appetizer.jpg'
import mainDishImage from '../dist/img/pexels-rachel-claire-main-dish.jpg'
import dessertImage from '../dist/img/pexels-rachel-claire-desert.jpg'

function menuPageRender() {
    const mainContainer = document.querySelector('.main-content');
    const menuButton = document.querySelector('.menu');
    menuButton.classList.add('active-button');

    const appetizerContainer  = document.createElement('div');
    const mainDishContainer = document.createElement('div');
    const dessertContainer = document.createElement('div');

    const appetizerImgContainer  = document.createElement('div');
    const mainDishImgContainer = document.createElement('div');
    const dessertImgContainer = document.createElement('div');

    const appetizerImg = document.createElement('img');
    const mainDishImg = document.createElement('img');
    const dessertImg = document.createElement('img');

    const appetizerText = document.createElement('p');
    const mainDishText = document.createElement('p');
    const dessertText = document.createElement('p');

    appetizerContainer.classList.add('dishes-container');
    mainDishContainer.classList.add('dishes-container');
    dessertContainer.classList.add('dishes-container');

    appetizerImg.classList.add('menu-img');
    mainDishImg.classList.add('menu-img');
    dessertImg.classList.add('menu-img');

    appetizerText.classList.add('menu-text');
    mainDishText.classList.add('menu-text');
    dessertText.classList.add('menu-text');
    
    appetizerText.textContent = 'An appetizer is a small dish or snack served before a main meal, designed to stimulate the appetite and awaken the taste buds. Typically, these delectable morsels are served in small portions, allowing guests to sample a range of flavors and textures. From crispy and crunchy bites to creamy and savory dips, appetizers come in many forms and can be made from a wide range of ingredients. These small plates are often beautifully presented, showcasing the chef\'s creativity and attention to detail. Whether you prefer savory, sweet, or spicy, there is an appetizer to suit every taste bud and occasion.';
    mainDishText.textContent = 'A main dish is the centerpiece of a meal, consisting of a substantial portion of food expected to provide enough nutrition and satisfaction. It is usually served after appetizers and before desserts. Main dishes come in many different varieties, from meat-based to vegetarian options. They are typically accompanied by side dishes, such as vegetables, rice, potatoes, or bread. Examples of popular main dishes include grilled chicken, beef stew, spaghetti carbonara, stir-fry vegetables, fish curry, and many more. Main dishes can also vary depending on cultural traditions and local cuisine. Overall, a good main dish should be flavorful, filling, and visually appealing. It should be cooked to perfection with fresh and high-quality ingredients. A great main dish can elevate the entire meal experience, leaving a lasting impression on the palate and the senses.';
    dessertText.textContent = 'At our restaurant, we offer a delicious and decadent dessert that will truly satisfy your sweet tooth. Our signature dessert is made with rich, velvety chocolate mousse that is layered with moist chocolate cake and drizzled with a luscious chocolate ganache. The dessert is then topped with fresh whipped cream and garnished with a sprinkle of chocolate shavings, making for a picture-perfect presentation. The dessert is served in a charming glass jar that showcases the layers, giving you a visual treat before even digging in. This dessert is the perfect way to end your meal, leaving you feeling happy and satisfied. Whether you\'re celebrating a special occasion or just indulging your sweet cravings, our dessert is sure to be a hit. Come try it today and see for yourself why it\'s a customer favorite!';

    appetizerImg.src = appetizerImage;
    mainDishImg.src = mainDishImage;
    dessertImg.src = dessertImage;

    appetizerImgContainer.appendChild(appetizerImg);
    mainDishImgContainer.appendChild(mainDishImg);
    dessertImgContainer.appendChild(dessertImg);

    appetizerContainer.append(appetizerImgContainer, appetizerText);
    mainDishContainer.append(mainDishImgContainer, mainDishText);
    dessertContainer.append(dessertImgContainer, dessertText);

    mainContainer.append(appetizerContainer, mainDishContainer,dessertContainer,);
}
export default menuPageRender;
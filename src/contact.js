const CONTACT = 'Restaurant:\n\
123 Main Street\n\
Anytown, USA 12345\n\
Phone: (555) 123-4567\n\
Email: info@restaurant.com\n\
Website: www.restaurant.com\n\
Social Media:\n\
Facebook: www.facebook.com/restaurant\n\
Twitter: www.twitter.com/restaurant\n\
Instagram: www.instagram.com/restaurant\n\
Hours of Operation:\n\
Monday - Thursday: 11:00 am - 9:00 pm\n\
Friday - Saturday: 11:00 am - 10:00 pm\n\
Sunday: 12:00 pm - 8:00 pm\n\
Reservations:\nCall us or book online at www.restaurant.com/reservations\n\
Catering:\n\
We offer catering services for all occasions! Contact us at catering@restaurant.com or call (555) 123-4567 for more information.\n\
Feedback:\n\
We value your feedback! Please email us at feedback@restaurant.com or fill out our online feedback form at www.restaurant.com/feedback';
function contactPageRender() {
    const mainContainer = document.querySelector('.main-content');
    const contactButton = document.querySelector('.contact');
    contactButton.classList.add('active-button');

    const contactText = document.createElement('p');
    contactText.classList.add('contact-text');
    contactText.textContent = CONTACT;
    mainContainer.appendChild(contactText);
}

export default contactPageRender;
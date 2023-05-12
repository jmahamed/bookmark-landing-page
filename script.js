const tabs = document.querySelectorAll('.tab');
const features = document.querySelectorAll('.feature');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove the "active" class from all tabs and features
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    features.forEach((feature) => {
      feature.classList.remove('active');
    });

    // Add the "active" class to the clicked tab and corresponding feature
    tab.classList.add('active');
    features[index].classList.add('active');
  });

});

// mobile tabbed section

// get all tabs and features
const tabsMobile = document.querySelectorAll('.tabs-mobile .tab');
const featuresMobile = document.querySelectorAll('.feature-mobile');

// add click event listener to each tab
tabsMobile.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // remove "active" class from all tabs and features
    tabs.forEach(tab => tab.classList.remove('active'));
    featuresMobile.forEach(feature => feature.classList.remove('active'));

    // add "active" class to clicked tab and corresponding feature
    tab.classList.add('active');
    featuresMobile[index].classList.add('active');
  });
});



const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const heading = item.querySelector('.accordion-heading');
  const content = item.querySelector('.accordion-content');

  heading.addEventListener('click', () => {
    content.classList.toggle('collapsed');
    heading.style.borderBottom = 'none';
    if (content.classList.contains('collapsed')) {
      heading.querySelector('#arrow').className = 'ri-arrow-down-s-line';
    } else {
      heading.querySelector('#arrow').className = 'ri-arrow-up-s-line';
    }
  });
});

const menu = document.querySelector('.icon-hamburger');
const navMobile = document.querySelector('.nav-mobile');
const nav = document.querySelector('nav');
const close = document.querySelector('.icon-close');

menu.addEventListener('click', () => { 
  navMobile.classList.add('active');
  nav.classList.add('hide');
})

close.addEventListener('click', () => {
  navMobile.classList.remove('active');
  nav.classList.remove('hide');
})
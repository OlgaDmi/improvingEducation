const mobMenu = () => {
    let burgerItems = document.querySelectorAll('.burger-menu'),
    index, burger,
    nav    = document.getElementById('main-nav'),
    device    = document.querySelector('.device');

    for (index = 0; index < burgerItems.length; index++) {
        burger = burgerItems[index];
        burger.addEventListener('click', function (event) {
            event.preventDefault();
            device.classList.toggle('is-open');    
            this.classList.toggle('is-open');
            nav.classList.toggle('is-open');
        });
    }
}

export default mobMenu; 

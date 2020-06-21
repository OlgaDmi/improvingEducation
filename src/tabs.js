
 const tabChange = () => {
    let selectBlock = document.querySelector('.main__select');
    selectBlock.onclick = (e) => {
      let target = e.target,
      active = document.querySelector('.active'),
      show = document.querySelector('.show');

      if (target.innerText == 'Updates') {
        let updatesBlock = document.querySelector('.update__block');

        active.classList.remove("active");
        show.classList.remove('show');
        target.classList.add('active');
        updatesBlock.classList.add('show');
      } else if (target.innerText == 'About') {
        let aboutBlock = document.querySelector('.about__block');

        active.classList.remove("active");
        show.classList.remove('show');
        target.classList.add('active');
        aboutBlock.classList.add('show');
      } else if (target.innerText == 'Supporters') {
        let supportersBlock = document.querySelector('.supporters__block');

        active.classList.remove("active");
        show.classList.remove('show');
        target.classList.add('active');
        supportersBlock.classList.add('show');
      }
      return false;
    }
 }
 export default tabChange;
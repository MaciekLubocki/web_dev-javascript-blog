const titleClickHandler = function(event) {
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);

    /* [done] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }


    /* [done] add class 'active' to the clicked link */

    const clickedElement = this;
    clickedElement.classList.add('active');


    /* [done] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }


    /* [done] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
    console.log('to jest article selector href', articleSelector);


    /* [done] find the correct article using the selector (value of 'href' attribute) */

    let targetArticle = document.querySelector(articleSelector);
    console.log('to jest targetArticle: ', targetArticle);


    /* [done] add class 'active' to the correct article */

    targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
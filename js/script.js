// document.getElementById('test-button').addEventListener('click', function() {
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
// });


// const titleClickHandler = function() {
//     console.log('Link was clicked!');
// }

// const links = document.querySelectorAll('.titles a');

// for (let link of links) {
//     link.addEventListener('click', titleClickHandler);
// }


const titleClickHandler = function(event) {
    console.log('Link was clicked!');
    console.log(event);

    /* [done] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');

    }

    /* [done] add class 'active' to the clicked link */
    const clickedElement = this;
    // console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [done] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }


    /* [in progress] get 'href' attribute from the clicked link */

    /* [in progress] find the correct article using the selector (value of 'href' attribute) */

    /* [in progress] add class 'active' to the correct article */




}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
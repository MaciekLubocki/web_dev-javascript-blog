'use strict';


const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.list-horizontal';



const titleClickHandler = function(event) {
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);

    /* [done] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a');
    console.log();
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
};

function generateTitleLinks() {

    /* [done] for each article do: */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log('Articles: ', articles);

    let html = '';

    /* [done] remove contents of titleList */
    const titleListEnter = document.querySelector(optTitleListSelector);
    document.querySelector(optTitleListSelector).innerHTML = '';

    for (let article of articles) {
        console.log('Article ELement is: ', article);

        /* get the article id */

        const articleId = article.getAttribute('id');
        console.log(articleId);
        console.log('to jest article selector href', articleId);


        /* find the title element */
        /* get the title from the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;


        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
        console.log(article);


        /* insert link into titleList */

        // titleListEnter.insertAdjacentHTML("afterend", linkHTML);
        html = html + linkHTML;
        console.log('to jest html: ', html);

    }

    titleListEnter.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();


function generateTags() {
    /* find all articles */

    const articles2 = document.querySelectorAll(optArticleSelector);
    console.log('All Articles TAG: ', articles2);

    /* START LOOP: for every article: */




    for (let article of articles2) {
        console.log(' Article TAG ELement is: ', article);

        /* find tags wrapper */
        /* make html variable with empty string */
        let html = '';

        const titleListEnterX = optArticleTagsSelector;
        document.querySelector(optArticleTagsSelector).innerHTML = '';



        /* get tags from data-tags attribute */
        const articleTag = article.getAttribute('data-tags');
        console.log('to jest article TAG selector data-tags', articleTag);

        /* split tags into array */
        const articleTagsArray = articleTag.split(' ');

        /* for each tag */
        /* START LOOP: for each tag */


        for (let tag of articleTagsArray) {
            console.log('TO JEST TAG', tag);

            /* create HTML of the link */
            /* add generated code to html variable */
            let linkTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
            console.log(linkTag);
            console.log("to jest tag: ", tag);

            /* insert HTML of all the links into the tags wrapper */
            // titleListEnter.insertAdjacentHTML("afterend", linkHTML);
            html = html + linkTag;

            console.log('to jest html: ', html);
            //DOTĄD JEST DOBRZE


            console.log('to jest article do TAG: ', titleListEnterX);
            titleListEnterX.innerHTML = html;
            console.log('tutaj mam titlelistenxterX', titleListEnterX)


        }

        /* END LOOP: for every article: */

        const links = document.querySelectorAll(optArticleTagsSelector);

        for (let link of links) {
            article.addEventListener('click', titleClickHandler);




            // for (let article of articles2) {
            //     console.log(' Article TAG ELement is: ', article);
            //     article.addEventListener('click', titleClickHandler);


            // const links = document.querySelectorAll('.list-horizontal');
            // console.log('to jest links', links);
            // for (let link of links) {
            //     console.log('to jest link', link);

            //     link.addEventListener('click', titleClickHandler);

        }
    }

}







generateTags();
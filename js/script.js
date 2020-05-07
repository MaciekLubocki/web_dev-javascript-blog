'use strict'; {
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
    }





    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',

        /* [done] remove contents of titleList */
        opttitleList = document.querySelector(optTitleListSelector).innerHTML = '';

    function generateTitleLinks() {

        /* [done] for each article do: */

        const articles = document.querySelectorAll(optArticleSelector);
        console.log('Articles: ', articles);

        let html = '';

        const titleListEnter = document.querySelector(optTitleListSelector);

        for (let article of articles) {
            console.log(' Article ELement is: ', article);

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
}
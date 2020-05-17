'use strict';
{

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorsSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = 'tag-size-';


  const titleClickHandler = function (event) {
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

  function generateTitleLinks(customSelector = '') {

    /* [done] for each article do: */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
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




  function calculateTagsParams(tags) {
    const params = { max: 0 , min: 999999 };
    for(let tag in tags){
      params.max = Math.max(tags[tag], params.max);
      params.min = Math.min(tags[tag], params.min);
      console.log(tag + ' is used ' + tags[tag] + ' times');
    }
    return params;
  }
  
  
  
  
  function calculateTagClass(count, params) {
    const normalizedCount = count - params.min;
    console.log(normalizedCount);
    const normalizedMax = params.max - params.min;
    console.log(normalizedMax);
    const percentage = normalizedCount / normalizedMax;
    console.log(percentage);
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
    console.log(optCloudClassPrefix + classNumber);
    return optCloudClassPrefix + classNumber;
  }

  function generateTags() {
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = {};

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('All Articles TAG: ', articles);

    /* START LOOP: for every article: */
    for (let article of articles) {
      console.log(' Article TAG ELement is: ', article);

      /* find tags wrapper */
      /* make html variable with empty string */

      const titleListEnterX = article.querySelector(optArticleTagsSelector);
      titleListEnterX.innerHTML = '';
      let html = '';

      // optArticleTagsSelector
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
        const linkTag = '<li><a href="#tag-' +  tag + '">' + tag + '</a></li>';
        console.log('to jest linkTag: ', linkTag);
        console.log('to jest tag: ', tag);

        html = html + linkTag;
        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]) {
          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }
      }

      /* insert HTML of all the links into the tags wrapper */
      // titleListEnter.insertAdjacentHTML("afterend", linkHTML);
       
      titleListEnterX.innerHTML = html;
    }
    /* END LOOP: for every article: */
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);
    /* [NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      /* [NEW] generate code of a link and add it to allTagsHTML */
        
        
        
       
      const tagLinkHTML = '<li><a href="#tag=' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '"' + '>' + tag + '</a></li>';
      allTagsHTML += tagLinkHTML;
       
      console.log('tagLinkHTML:', tagLinkHTML);
    }

    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
 
  }

     
    
  generateTags();
  




  function tagClickHandler(event) {
  /* prevent default action for this event */
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      console.log('active tag is:', activeTag);
    
      /* remove class active */
      /* END LOOP: for each active tag link */
      console.log('to jest activeTag: ', activeTag);
      activeTag.classList.remove('active');
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    const linksHref = document.querySelectorAll('a[href="' + href + '"]');
    console.log('to jest linksHref: ', linksHref);

    /* START LOOP: for each found tag link */
    for (let linkHref of linksHref) {

      /* add class active */
      /* END LOOP: for each found tag link */
      linkHref.classList.add('active');
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {
  /* find all links to tags */
    const allLinksTags = document.querySelectorAll('.post-tags .list a');

    /* START LOOP: for each link */
    for (let allLinksTag of allLinksTags) {
      /* add tagClickHandler as event listener for that link */
      allLinksTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();

  function generateAuthors() {
  /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log('All Articles TAG: ', articles);

    /* START LOOP: for every article: */

    for (let article of articles) {
      console.log(' Article TAG ELement is: ', article);

      /* find tags wrapper */
      /* make html variable with empty string */

      const AuthorListEnter = article.querySelector(optArticleAuthorsSelector);

      AuthorListEnter.innerHTML = '';
      let html = '';

      // optArticleTagsSelector

      /* get tags from data-tags attribute */
      const articleAuthor = article.getAttribute('data-author');
      console.log('to jest article TAG selector data-author', articleAuthor);

      /* create HTML of the link */
      /* add generated code to html variable */
      const AuthorTag = '<li><a href="#tag-' + articleAuthor + '">' + articleAuthor + '</a></li>';
       
      console.log(AuthorTag);
      console.log('to jest tag: ', AuthorTag);

      /* insert HTML of all the links into the tags wrapper */
      // titleListEnter.insertAdjacentHTML("afterend", linkHTML);
      html = html + AuthorTag;

      console.log('to jest html: ', html);

      console.log('to jest article do TAG: ');
      AuthorListEnter.innerHTML = html;
      console.log('tutaj mam titlelistenxterX', AuthorListEnter);
    }

    /* END LOOP: for every article: */

    // const links = document.querySelectorAll('.list-horizontal a');

  // for (let link of links) {
  //     article.addEventListener('click', titleClickHandler);
  // }
  }

  generateAuthors();

  function authorClickHandler(event) {
  /* prevent default action for this event */
    event.preventDefault();
    console.log('Link was clicked!');
    console.log(event);

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElementauthor = this;
    console.log('to jest Authors clickedElement: ', clickedElementauthor);

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const hrefAuthor = clickedElementauthor.getAttribute('href');
    console.log('to jest href: ', hrefAuthor);

    /* make a new constant "tag" and extract tag from the "href" constant */


    const tagAuthor = hrefAuthor.replace('#tag-', '');


    /* find all tag links with class active */

    const activeTagsAuthor = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */

    for (let activeTagAuthor of activeTagsAuthor) {

      /* remove class active */
      /* END LOOP: for each active tag link */

      activeTagAuthor.classList.remove('active');

    }



    /* find all tag links with "href" attribute equal to the "href" constant */

    const linksHrefAuthor = document.querySelectorAll('a[href="' + tagAuthor + '"]');


    /* START LOOP: for each found tag link */


    for (let linkHrefAuthor of linksHrefAuthor) {

      /* add class active */
      /* END LOOP: for each found tag link */

      linkHrefAuthor.classList.add('active');
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + tagAuthor + '"]');
  }

  function addClickListenersToAuthors() {
  /* find all links to tags */
    const allLinksAuths = document.querySelectorAll('.post-author a');
    /* START LOOP: for each link */

    for (let allLinksAuth of allLinksAuths) {
    /* add tagClickHandler as event listener for that link */
      allLinksAuth.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
  }
  addClickListenersToAuthors();

}




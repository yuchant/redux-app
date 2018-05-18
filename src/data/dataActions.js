import fetch from "cross-fetch";
import getProxyUrl from "./proxy";

export const REQUEST_DATA = "REQUEST_DATA";
export const requestData = reason => {
  return {
    type: REQUEST_DATA,
    reason: reason
  };
};

export const RECEIVE_DATA = "RECEIVE_DATA";
export const receiveData = data => {
  console.log("GENERATING RECEIVE DATA ACTION");
  return {
    type: RECEIVE_DATA,
    data: data,
    receivedAt: Date.now()
  };
};

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const receiveArticles = (category, html, limit) => {
  return {
    type: RECEIVE_ARTICLES,
    category: category,
    html: html,
    limit: limit
  };
};

export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const receiveArticle = (html, id) => {
  return {
    type: RECEIVE_ARTICLE,
    html: html,
    id: id
  };
};

export const TRANSFORM_ARTICLES_TO_CARDS = "TRANSFORM_ARTICLES_TO_CARDS";
export const transformArticlesToCards = () => {
  return {
    type: TRANSFORM_ARTICLES_TO_CARDS
  };
};

export const getData = dispatch => {
  // get inital site data from json "endpoint"
  return fetch("/data.json")
    .then(
      response => response.json(),
      error => console.log("An error occurred.", error)
    )
    .then(json => {
      setTimeout(() => {
        dispatch(receiveData(json));
      }, 500);
    });
};

export const getArticle = id => dispatch => {
  dispatch(requestData("Getting article"));
  const targetRoot = "https://www.thriveglobal.com/stories/";
  const fetchUrl = getProxyUrl([targetRoot, id].join(""));
  return fetch(fetchUrl)
    .then(
      response => response.text(),
      error => console.log("Error fetching", error)
    )
    .then(html => {
      setTimeout(() => {
        dispatch(receiveArticle(html, id));
      });
    });
};

export const getArticles = (categories, limit) => dispatch => {
  // download each related article through our aws lambda function
  // and when all network requests complete, html parse the results inot
  // usable json
  // this will fake a real endpoint but with live data
  dispatch(requestData(`Getting Articles for ${categories.join(", ")}`));
  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };
  const targetRoot = "https://www.thriveglobal.com/categories/";

  const allCategoryFetchPromises = categories.map(category => {
    const categorySlug = slugify(category);
    const fetchUrl = getProxyUrl([targetRoot, categorySlug].join(""));
    console.log(
      "Getting articles for category:",
      category,
      categorySlug,
      "with url:",
      fetchUrl
    );
    return fetch(fetchUrl)
      .then(
        response => response.text(),
        error => console.error("Error occured in fetching", error)
      )
      .then(text => {
        dispatch(receiveArticles(category, text, limit));
      });
  });
  return Promise.all(allCategoryFetchPromises).then(() => {
    dispatch(transformArticlesToCards());
  });
};

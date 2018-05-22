// data fetching reducers
import {
  REQUEST_DATA,
  GET_DATA,
  RECEIVE_DATA,
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE,
  TRANSFORM_ARTICLES_TO_CARDS
} from "./dataActions";
import { scrapeArticles, scrapeArticle } from "./htmlscraper";
import { addMicroStepsToArticle } from "./fakeData";
import { loader } from "../ui/uiReducers";

const log = console.log.bind(this, "[dataReducers.js]");

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
};

const reducer = (
  state = {
    cards: [],
    cardsByID: {},
    articlesByCategory: {},
    articlesByID: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        ui: Object.assign({}, state.ui, loader(true, action.reason)),
      });

    case RECEIVE_DATA:
      let results = Object.assign({}, state, {
        ui: Object.assign({}, state.ui, loader(false, action.reason)),
        receivedAt: action.receivedAt,
        receivedData: true,
        ...action.data,
        microsteps: Object.assign({}, state.microsteps, {
          items: action.data.microsteps
        })
      });
      return results;

    case RECEIVE_ARTICLES:
      let scraped = scrapeArticles(action.html, action.limit);
      return Object.assign({}, state, {
        ui: Object.assign({}, state.ui, loader(false, null)),
        articlesByCategory: {
          ...state.articlesByCategory,
          [action.category]: scraped
        }
      });
    case RECEIVE_ARTICLE:
      let article = scrapeArticle(action.html);
      article.id = action.id;
      addMicroStepsToArticle(article);
      return Object.assign({}, state, {
        ui: Object.assign({}, state.ui, loader(false, null)),
        articlesByID: Object.assign({}, state.articlesByID, {
          [action.id]: article
        })
      });
    case TRANSFORM_ARTICLES_TO_CARDS:
      // get articles by cat
      const allArticlesByCategory = state.journeys.myTopics.map(topic => {
        const articles = state.articlesByCategory[topic.name];
        articles.forEach(el => {
          el.category = topic.name;
        });
        return articles;
      });

      const allArticles = [].concat.apply([], allArticlesByCategory);
      shuffleArray(allArticles);

      let articleCards = allArticles.map(article => ({
        type: "Basic",
        id: article.id,
        url: article.url,
        title: article.title,
        text: article.author,
        category: article.category,
        image: {
          url: article.img
        }
      }));
      window.lastScrapedArticleCards = articleCards;
      return Object.assign({}, state, {
        journeys: Object.assign({}, state.journeys, {
          myArticleCards: articleCards
        })
      });
    default:
      return state;
  }
};

export default reducer;

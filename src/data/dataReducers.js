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
const log = console.log.bind(this, "[dataReducers.js]");

const reducer = (
  state = {
    isFetching: false,
    isFetchingReason: null,
    todos: {
      items: [],
      progress: 0
    },
    cards: [],
    cardsByID: {},
    articlesByCategory: {},
    microStepsByID: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        isFetchingReason: action.reason
      });
    case RECEIVE_DATA:
      let results = Object.assign({}, state, {
        isFetching: false,
        isFetchingReason: null,
        receivedAt: action.receivedAt,
        receivedData: true,
        ...action.data,
        todos: {
          items: action.data.todos
        }
      });
      log("Calculated new state: ", results);
      return results;
    case RECEIVE_ARTICLES:
      let scraped = scrapeArticles(action.html, action.limit);
      console.log("Receiving articles", scraped);
      return Object.assign({}, state, {
        isFetching: false,
        isFetchingReason: null,
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
        isFetching: false,
        isFetchingReason: null,
        cardsByID: Object.assign({}, state.cardsByID, {
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
      return Object.assign({}, state, {
        journeys: Object.assign({}, state.journeys, {
          myArticleCards: articleCards
        })
      });
    default:
      log("Default:", state);
      return state;
  }
};

export default reducer;

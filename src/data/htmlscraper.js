const cheerio = require("cheerio");

const log = console.log.bind(this, "[articleScraper]");

const gridSelectors = {
  story: ".promoted-stories__story"
};
const gridItemSelectors = {
  title: ".promoted-stories__title",
  img: ".promoted-stories__image",
  author: ".story-author"
};

const articleSelectors = {
  title: ".story-view__title",
  subtitle: ".story-view__subtitle",
  author: ".story-author__author",
  img: ".story-view__featured-image img",
  body: ".story-view__body",
  category: ".story-meta__category a"
};

export const scrapeArticle = html => {
  const $ = cheerio.load(html);
  // lets make all links external in body
  $(articleSelectors.body + " a").each(el => {
    $(el).attr("target", "_blank");
  });
  const result = {
    category: $(articleSelectors.category)
      .text()
      .trim(),
    title: $(articleSelectors.title)
      .text()
      .trim(),
    subtitle: $(articleSelectors.subtitle)
      .text()
      .trim(),
    body: $(articleSelectors.body).html(),
    img: $(articleSelectors.img).attr("src"),
    author: $(articleSelectors.author)
      .text()
      .trim()
  };
  return result;
};

export const scrapeArticles = (html, limit) => {
  const $ = cheerio.load(html);
  const $stories = $(gridSelectors.story);
  const scraped = $stories.map((i, el) => {
    if (i >= limit) {
      return null;
    }
    const $el = $(el);
    let id;
    try {
      id = $el.attr("href").match(/(\d+)/)[0];
    } catch (ex) {
      console.log("Failed to find ID in url");
    }
    return {
      href: $el.attr("href"),
      id: id,
      title: $el
        .find(gridItemSelectors.title)
        .text()
        .trim(),
      img: $el.find(gridItemSelectors.img).attr("src"),
      author: $el
        .find(gridItemSelectors.author)
        .text()
        .trim()
    };
  });
  const result = scraped.get();
  log("Scraped: ", result);
  return result;
};

const cheerio = require('cheerio');
const request = require('request-promise');

// The scrape function takes in a URL, scrapes the page, and returns the scraped data in the form of "readable" text. The data has been cleaned up to remove extra whitespace and line breaks,
// and the text has been truncated using splice to ensure we don't overfill the prompt (instructions sent into the AI). I decided to remove the <h1> tag and the <p> tags because they were
// not very useful to the AI.

async function scrape(url) {
  const response = await request(url);
  const $ = cheerio.load(response);
  const title = $('title').text()?.replace(/\n/g, '').replace(/  /g, '').slice(0, 150);
  const description = $('meta[name="description"]').attr('content')?.replace(/\n/g, '').replace(/  /g, '').slice(0, 250);
  const keywords = $('meta[name="keywords"]').attr('content')?.replace(/\n/g, '').replace(/  /g, '').slice(0, 150);

  let result = '';
  if (title) { // We don't add undefined values to the result
    result += title + '\n';
  }
  if (description) {
    result += description + '\n';
  }
  if (keywords) {
    result += keywords + '\n';
  }
  return result;
}

module.exports = scrape;

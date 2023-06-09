Project Timeline:

Wednesday 19th: 
- I receive the assignment and do some research to estimate the requirements for each project. I decide to develop the 'AI-Powered Website Summary Tool' due to the well-established NLP (Natural Language Processing) techniques that can be used to build it.
- I consider the language I should use (JavaScript or Python) to program the tool. While Python generally has better libraries for AI integrations, due to my limited knowledge of Python and the short timeframe to deliver the finished product (1 week), I discard the idea and go with my main language Javascript.

Thursday 20th: 
- I research useful JS libraries and plan the prototype. Currently, the plan is to have data be scraped using the 'cheerio' library (and possibly others if time permits), store it in an object, and then send it to the summarizer library ('node-summarize' looks like a good option), which will return a summary of what the text inside the object is about. The summary will then be displayed on the page.
- I create the basic HTML structure and CSS styling, as well as the main logic JS file. I start by creating a basic function that logs the input to the console when the user clicks on the "Summarize" button. I test and confirm the stable structure.
- Due to a researching mistake, I wrongfully try to have the 'node-summarize' library provide me a summary of a webpage by just providing it with a URL, I quickly find out that it only works with text, so I decide to scrap this idea and start working on the scraping part.

Friday 21st: 
- I work on the scraping part, using the 'cheerio' library to retrieve the information contained in the HTML elements of the page and the 'request' library to retrieve the HTML of the page. I then use the 'node-summarize' library to generate a summary of the text. However, the summaries provided are currently not very good, and the tool is unable to scrape data from complex webpages, perhaps due to the fact that the library cannot scrape data from websites developed with React or Angular. To fix this, I consider using an additional library such as 'puppeteer' to retrieve data from these websites.
- Given that even basic 'scraping-friendly' websites yield poor summaries, I will try different NLP libraries to see if I can obtain better results.
- Effectively, 'cheerio' is not able to scrape informations from websites that do not have all their data in HTML elements. I will try to use 'puppeteer' to solve this issue. Also, NLP libraries are not able to generate good summaries from the text they receive, since they only do well with plain text, and rarely will I be able to provide them with that. I will try to use a different approach to generate summaries.
- When I give ChatGPT the object with the data that 'cheerio' scrapped and request it to generate a summary, it returns a correct guess of what the page is about, even when the data is limited and somewhat confusing. It becomes clear to me that the OpenAI models are many steps ahead of the NLP libraries I was considering using. I will investigate the possibility of using them to generate summaries.

Saturday 22nd:
- First day with actual time to dedicate to the project. I start by researching more about the GPT-3 API from OpenAI
- Spent the whole day trying to have the GPT-API return a proper output, but only get errors returned, with codes that do not provide much information to help fix the problems. After hours experimenting with modifying and developing new code, I finally find the problem; Turns out OpenAI actually does not provide "free credits" (although they claim to do) to use the GPT-API, although you are provided with the equivalent of USD 18 to use the GPT-API free of charge, the credits expiration date is already due at the time of creating a new account. Given that the alternative APIs or NLP libraries are nowhere near as good or as convenient as the GPT-API, and that I already know exactly how to implement and utilize the GPT-API because of spending the whole day tweeking the code that handles the requests to the GPT-API, I decide to use it anyway and pay for the credits, which are actually really cheap. You can limit the amount of credits to any amount you want, mine is at max USD 1, toping it would mean it handled thousands of requests.

Sunday 23rd:
- Now that the summaries are working, I start working on perfecting the UX/UI. I add a "copy to clipboard" button to the summary. I also add a "clear" button to clear the input and the summary. I make sure the website looks good on any display size. The website is now ready to be deployed!
- After some finishing touches, the project is finalized and deployed!!!

Monday 24th:
- Small improvements to the user experience, and fixes to the responsive version of the webpage.

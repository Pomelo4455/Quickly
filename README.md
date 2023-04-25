# Quickly!

Quickly! is a simple, fast, and free tool that summarizes the content of websites using scraping and AI technologies. It allows users to quickly get an overview of the main points of a webpage, without having to read (or even enter) the website.

## Features

- Summarizes the content of a webpage using AI
- Provides an overview of the main points of the webpage
- Fast and easy to use

## Getting Started

To use Quickly!, you need to have Node.js and NPM installed on your computer. You can download them from the official website: https://nodejs.org/en/download/

Once you have Node.js and NPM installed, you can clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/quickly.git
cd quickly
npm install
```

To start the server, run the following command:

```bash
node index.js
```

You can then open your web browser and go to `http://localhost:${port}` to use the application.
Remember to create a `.env` file in the root directory of the project and add the following lines:

```bash
OPENAI_API_KEY=your-openai-api-key
PORT=your-port
```
You can obtain an openai api key by creating an account on https://beta.openai.com/ and going to the "API Keys" section of your account.

## Usage

To use Quickly!, simply enter the URL of the webpage you want to summarize in the input field and click the "Summarize" button. The application will then scrape the webpage and use AI to generate a summary of the main points.

## Development

If you want to see how the project was developed, I wrote a detailed journal of my work on the project, which you can find in in the codingJournal.md file.

const puppeteer = require('puppeteer');

// The browser instance created for each test
let browser;

// Create the browser before each test
beforeEach(async (done) => {
  browser = await puppeteer.launch({
    // headless: false 
  });

  done();
});

// Close the browser after each test
afterEach(async (done) => {
  await browser.close(); 
  done();
});

/**
 * H2 tag with id 'welcome' exists and has approproiate content
 */
test('Welcome', async () => {
  let page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  const title = await page.title();
  const hello = await page.$("#welcome");
  const tag = await (await hello.getProperty('tagName')).jsonValue();
  expect(tag).toBe('H2');
  const msg = await (await hello.getProperty('textContent')).jsonValue();
  expect(msg).toBe('CSE183 Assignment 5 - React I');
});

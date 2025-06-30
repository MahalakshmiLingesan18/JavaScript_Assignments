import { chromium, firefox, test } from "@playwright/test";

test("To launch Red bus", async() => {

    const edgeBrowser = await chromium.launch({channel: "msedge"});

    const newWindow = await edgeBrowser.newContext();

    const newPage = await newWindow.newPage();

    await newPage.goto("https://www.redbus.in");

    const pageURL = newPage.url();
    console.log(`URL: ${pageURL}`);

    const pageTitle = await newPage.title();
    console.log(`Title: ${pageTitle}`);

})

//using page fixture
test("To launch Red Bus", async({page}) => {

    await page.goto("https://www.redbus.in");

    const pageTitle = await page.title();
    console.log(`Title: ${pageTitle}`);

    const pageURL = page.url();
    console.log(`URL: ${pageURL}`);
})

test("To launch flipkart", async() => {

    const geckoBrowser = await firefox.launch({channel: "firefox"});

    const windowInstance = await geckoBrowser.newContext();

    const pageInstance = await windowInstance.newPage();

    await pageInstance.goto("https://www.flipkart.com");

    const title = await pageInstance.title();
    console.log(`Title: ${title}`);

    const url = pageInstance.url();
    console.log(`URL: ${url}`);

})

//using page fixture
test("To launch Flipkart", async({page}) => {

    await page.goto("https://www.flipkart.com");

    const pageTitle = await page.title();
    console.log(`Title: ${pageTitle}`);

    const pageURL = page.url();
    console.log(`URL: ${pageURL}`);
})
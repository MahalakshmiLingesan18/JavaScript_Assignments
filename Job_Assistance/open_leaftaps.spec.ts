/*2. Change the string login to main in the given URL and launch using Playwright
login -> main
Original URL:
`http://leaftaps.com/crmsfa/control/login`
Target URL after replacement:
`http://leaftaps.com/crmsfa/control/main`*/

import test from "@playwright/test";

let originalURL = "http://leaftaps.com/crmsfa/control/login";
let expectedURL = originalURL.replaceAll("login","main");
console.log(expectedURL);

test("To open leaaftaps", async({page}) => {
    await page.goto(expectedURL);

    const pageTitle = await page.title();
    console.log(`Title: ${pageTitle}`);

    const url = page.url();
    console.log(`URL: ${url}`);
})
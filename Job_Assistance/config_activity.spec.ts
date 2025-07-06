/* Assignment activity
2. Explore on the priority of the test execution while using a page fixture and manually launching the browser in terms of
a. script level
b. config level
c. CLI Command Line Interface --Terminal
 */

import {test, chromium} from "@playwright/test"

test("Login to Salesforce", async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in")

    await page.fill("#username", "vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.click("#Login");

    await page.waitForTimeout(10000);

    const pageTitle = await page.title();
    console.log("The title of the page: "+pageTitle);

})

test("Login to leaftaps without page fixture", async() => {

    const browser = await chromium.launch({headless: true, channel: "msedge"});
    const windowInstance = await browser.newContext();
    const page = await windowInstance.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("//input[@id='username']", "DemoCSR2");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();
    await page.locator("//a[contains(text(), 'CRM')]").click();
    await page.locator("//a[text()='Leads']").click();
    
    await page.waitForTimeout(3000);

    const pageTitle = await page.title();
    console.log(pageTitle);
})

/*Observation:
1. Test config priority for page fixture ---> Initially terminal and lastly config.ts file for 
test configurations
2. Test config priority for non-page fixture ---> Initially check for manual configuring, secondly 
the terminal and lastly comes to the config.ts file for test configurations
*/
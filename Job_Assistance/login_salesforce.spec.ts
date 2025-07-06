/* Write a Playwright test that opens salesforce website and navigate from login 
page to homepage and try to retrive the title. */

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

/*Explore config file by changing the fullparallel , worker, projects.*/

test ("To login leaftaps", async({page}) => {

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
1. Fullyparallel:
true ---> runs the two different test scripts concurrently in the specified browsers
false ---> runs the first test script in the specified browsers concurrently and pick the second test script to 
run in the specified browsers concurrently
2. worker:
defined (eg: 1) ---> 1 worker assigned to run the test script in one browser at a time
undefined ---> number of workers assigned based on the projects(browser) that the test script needs
to be executed
3. Projects:
Test Script runs in the specified browser
*/
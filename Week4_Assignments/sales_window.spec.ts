import {test, expect} from "@playwright/test";

const username = "majay3574@gmail.com";
const password = "Ajaymichael@123";

test("Handle windows with promise in Salesforce", async({context, page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("//input[@type='submit']"); 

    const [allWindows] = await Promise.all([context.waitForEvent("page"), page.click("//button[@title=': Mobile Publisher']")]);

    //To switch between windows
    const pages=context.pages(); //return an array
    let childPage:any; //declaring a new variable 
    childPage=pages[1]; //reference for childpage 

    await childPage.click("//button[text()='Confirm']");

    const childPageTitle = await childPage.title();
    expect.soft(childPageTitle).toContain("Service Cloud");
    console.log(childPageTitle);

    const childPageURL = await childPage.url();
    expect.soft(childPageURL).toContain("cloud");
    console.log(childPageURL);

})
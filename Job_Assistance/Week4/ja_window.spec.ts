/* 2. Multi-Tab Handling (HerokuApp)
Website: https://the-internet.herokuapp.com/windows
Question:
After clicking "Click Here", a new tab opens.
Your test must:
Switch to the new tab.
Verify that the heading on the new tab is "New Window".
Close it and switch back to the original tab. */

import test from '@playwright/test';

test("To handle windows", async({page, context}) => {

    await page.goto("https://the-internet.herokuapp.com/windows");
    const createPromise = context.waitForEvent("page"); //Creating event listener
    await page.click("//a[text()='Click Here']");
    const pages = await createPromise; //initialising a variable to store the child window
    await pages.waitForTimeout(3000);
    const childPageTitle = await pages.title(); 
    console.log(childPageTitle); //returning the title of the child window
    pages.close(); //closing the child window

    //Switching to parent window
    const parentPageTitle = await page.title();
    console.log(parentPageTitle);

})

/* How would you handle multiple pages/tabs?
To handle multiple tabs, use 'promise.all' function which creates a promise with an array of results.
To interact with multiple tabs, use a 'for' loop to interact.

How do you wait for the new page context?
we use an eventlistener 'waitForEvent' which creates a new page in the browser context. */
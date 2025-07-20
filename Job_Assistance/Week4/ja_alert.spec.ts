/* 1. JS Alert Confirmation (HerokuApp)
Website: https://the-internet.herokuapp.com/javascript_alerts
Question:
A confirmation alert appears when clicking the "Click for JS Confirm" button.
You need to dismiss the alert and verify that the result text is "You clicked: Cancel".
How will you handle this using Playwright?
How would your code react if the alert is not handled?
How do you simulate both accept and cancel flows? */

//Handling alert and simulating both accept and cancel
import test from "@playwright/test";

test.only("To handle the alert", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.once("dialog", alert => {
        //alert.dismiss();
        alert.accept();
    })
    await page.click("//button[text()='Click for JS Confirm']");
    const result = await page.locator("//p[@id='result']").innerText();
    console.log(`Result: ${result}`);
})

//How would your code react if the alert is not handled?
test("Not handling the alert", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.click("//button[text()='Click for JS Confirm']");
    const result = await page.locator("//p[@id='result']").innerText();
    console.log(`Result: ${result}`);
})

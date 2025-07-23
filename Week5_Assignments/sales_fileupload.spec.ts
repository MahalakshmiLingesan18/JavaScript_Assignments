import {expect, test} from "@playwright/test";

test("File upload in salesforce",async({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");
    await page.waitForLoadState();
    await page.click("//button[@title='App Launcher']");
    await page.click("//button[text()='View All']");
    await page.getByPlaceholder("Search apps or items...").fill("Accounts");
    await page.waitForLoadState();
    await page.click("//mark[text()='Accounts']");
    await page.waitForLoadState();
    await page.click("//a[@title='New']");
    await page.fill("//input[@name='Name']", "Mahalakshmi");
    await page.click("//button[@aria-label='Rating']");
    await page.click("//lightning-base-combobox-item[@data-value='Warm']");
    await page.click("//button[@aria-label='Type']");
    await page.click("//lightning-base-combobox-item[@data-value='Prospect']");
    /* const viewIndustry = page.locator("//records-record-layout-item[@field-label='Industry']");
    await viewIndustry.scrollIntoViewIfNeeded(); */ //--> scrollIntoViewIfNeeded() not working appropriately
    //manually scrolled to locate the element
    await page.click("//button[@aria-label='Industry']");
    await page.click("//lightning-base-combobox-item[@data-value='Banking']"); 
    await page.click("//button[@aria-label='Ownership']");
    await page.click("//lightning-base-combobox-item[@data-value='Public']");
    await page.click("//button[@name='SaveEdit']");
    const toastMessage1 = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
    await expect.soft(toastMessage1).toContain("created");
    console.log(toastMessage1);
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.click("//span[text()='Upload Files']");
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("TestData/OIP.jpeg");
    await page.click("//span[text()='Done']");
    const toastMessage2 = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
    await expect.soft(toastMessage2).toContain("added");
    console.log(toastMessage2);

})
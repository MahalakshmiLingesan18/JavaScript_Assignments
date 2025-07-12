import {test, expect} from "@playwright/test";

const username = "majay3574@gmail.com";
const password = "Ajaymichael@123";
const fName = "Arjun";
const lName = "Linga";
const accNum = "1234567890";

test("Create and verify a New Case in Chatter", async({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("//input[@type='submit']");
    await page.getByRole("button", {name: "App Launcher"}).click();
    await page.click("//button[text()='View All']");
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.click("(//a[@class='slds-text-heading_small'])[1]");
    await page.getByRole("link", {name: "Cases"}).click();
    await page.click("//a[@title='New']");
    await page.getByPlaceholder("Search Contacts...").click();
    await page.click("//span[@title='New Contact']");
    await page.click("//button[@name='salutation']");
    await page.click("//lightning-base-combobox-item[@data-value='Dr.']");
    await page.fill("//input[@name='firstName']", fName);
    await page.fill("//input[@name='lastName']", lName);
    await page.click("(//button[@name='SaveEdit'])[2]");

    const toastMessage1 = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    expect.soft(toastMessage1).toContain("created");
    console.log(toastMessage1);

    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search Accounts...").click();
    await page.click("//span[@title='New Account']");
    await page.fill("//input[@name='Name']", fName);
    await page.fill("//input[@name='AccountNumber']", accNum);
    await page.click("//button[@aria-label='Rating']");
    await page.click("//span[@title='Hot']");
    await page.click("(//button[@name='SaveEdit'])[2]");

    const toastMessage2 = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    expect.soft(toastMessage2).toContain("created");
    console.log(toastMessage2);

    await page.waitForTimeout(3000);

    await page.click("//button[@aria-label='Priority']");
    await page.click("//span[@title='High']");
    await page.click("//button[@aria-label='Case Origin']");
    await page.click("//span[@title='Email']");

    const scrollView = page.locator("//input[@name='Subject']");
    scrollView.scrollIntoViewIfNeeded();

    await page.fill("//input[@name='Subject']", "Product Return Request");
    await page.fill("(//textarea[@class='slds-textarea'])[1]", "Requesting a return for a defective product");
    await page.click("//button[@name='SaveEdit']");

    const toastMessage3 = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    expect.soft(toastMessage3).toContain("created");
    console.log(toastMessage3);

    /* const edit = page.locator("(//button[@title='Edit Status'])[3]").isVisible();
    expect(edit).toBeTruthy();
    console.log(edit); */
    await page.waitForTimeout(10000);
    await page.click("(//button[@title='Edit Status'])[3]");
    await page.click("//button[@aria-label='Status']");
    await page.click("//div[@aria-label='Status']//span[@title='Escalated']");
    await page.click("//button[@name='SaveEdit']");
    await page.click("(//button[@title='Share an update...'])[5]");
    await page.getByPlaceholder("Share an update...").fill("Hello");
    const shareBtn = await page.getByLabel("Share").isEnabled();
    expect.soft(shareBtn).toBeTruthy();
    await page.getByLabel("Share").click();

    const message = await page.innerText("(//article[@data-type='TextPost']//span)[16]");
    console.log(message);

    await page.click("//div[@class='cuf-media-right']//button");
    await page.click("//li[@title='Like on Chatter']");

    const toastMessage4 = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    expect.soft(toastMessage4).toContain("liked");
    console.log(toastMessage4);

    await page.getByRole("link", {name: "Chatter"}).click();
    const isLiked = await page.innerText("(//span[text()='Liked'])[7]");
    expect.soft(isLiked).toContain("liked");
    console.log(isLiked);

})
import {test, expect} from "@playwright/test";

const userName = "Demosalesmanager";
const passWord = "crmsfa";

test("Handle multiple windows in leaftaps", async({context, page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("//input[@id='username']", userName);
    await page.fill("//input[@id='password']", passWord);
    await page.click(".decorativeSubmit");

    page.once("dialog", alert => {
        const message = alert.message();
        console.log(message);
        const type = alert.type();
        console.log(type);
        alert.accept();
    })

    await page.getByText("CRM/SFA").click();
    await page.click("//a[text()='Leads']");
    await page.getByRole("link", {name: "Merge Leads"}).click();

    const page1Promise = context.waitForEvent("page");
    await page.click("(//table[@class='twoColumnForm']//a)[1]");
    const page1 = await page1Promise;
    await page1.click("(//tr/td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']//a)[1]");

    const page2Promise = context.waitForEvent("page");
    await page.click("(//table[@class='twoColumnForm']//a)[2]");
    const page2 = await page2Promise;
    await page2.click("(//tr/td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']//a)[2]");

    await page.click("//a[text()='Merge']");

    await page.waitForTimeout(5000);

    const pageTitle = await page.title();
    expect.soft(pageTitle).toContain("View Lead");
    console.log(pageTitle);

})
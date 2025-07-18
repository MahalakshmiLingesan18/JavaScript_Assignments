import {test} from "@playwright/test";

test("To get the X-path for Subject label in Salesforce", async({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("//input[@type='submit']"); 

    await page.click("(//ul[@class='slds-global-actions']/li[@class='slds-global-actions__item slds-dropdown-trigger slds-dropdown-trigger_click'])[1]//a");
    await page.click("//a[@title='New Task']");
    await page.fill("//input[@class='slds-combobox__input slds-input']", "Email");
    await page.waitForTimeout(2000);

})

test("To select first lead from Leaftaps", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/login");
    await page.fill("//input[@id='username']", "Demosalesmanager");
    await page.fill("//input[@id='password']", "crmsfa");
    await page.click(".decorativeSubmit");
    await page.getByText("CRM/SFA").click();
    await page.click("//a[text()='Leads']");
    await page.click("(//div[@class='allSubSectionBlocks']//table[@class='x-grid3-row-table']//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]");
    await page.waitForTimeout(2000);

})

test("To select Roadster Brand in Myntra", async({page}) => {

    await page.goto("https://www.myntra.com/");
    await page.hover("(//a[text()='Men'])[1]");
    await page.click("//a[text()='Topwear']");
    await page.waitForTimeout(30000);
    const roadster = page.locator("//input[@value='Roadster']/parent::label");
    roadster.scrollIntoViewIfNeeded();
    await roadster.click();
    
})
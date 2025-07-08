import {test, expect} from "@playwright/test";

/* Assignment: 1 - Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

const firstName = "Mahalakshmi";
const lastName = "Lingesan";

test("Login to Salesforce and create Leads", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");
    await page.click("//p[text()='Sales']");

    await page.waitForTimeout(5000);

    await page.click("//a[@title='Leads']");
    await page.click("//a[@title='New']");

    await page.locator("//button[@aria-label='Salutation']").click();

    await page.locator("//lightning-base-combobox-item[@data-value='Mrs.']").click();

    await page.getByPlaceholder("Last Name").fill(lastName);

    await page.fill("//input[@name='Company']", "Sutherland");

    await page.click("//button[@name='SaveEdit']");

    await page.waitForTimeout(2000);

    const pageTitle = await page.title();
    expect(pageTitle).toContain(lastName);
    console.log("Lead creation is successful");
    
})

/* Assignment: 3. Create Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

test("Login to Salesforce and create Individuals", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");

    await page.click("//p[text()='Individuals']");
    await page.click("(//a[@class='slds-button slds-button_reset'])[14]");
    
    await page.click("(//a[@role='menuitem'])[1]");

    await page.getByPlaceholder("Last Name").fill(lastName);
    await page.click("//button[@title='Save']");

    await page.waitForTimeout(2000);

    const pageTitle = await page.title();
    expect(pageTitle).toContain(lastName);
    console.log("Individual creation is successful");

})

/* Assignment: 4. Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Individuals tab
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name */

test("Login to Salesforce and edit an Individual", async({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "majay3574@gmail.com");
    await page.fill("#password", "Ajaymichael@123");
    await page.click("#Login");

    await page.click("//button[@title='App Launcher']");
    await page.click("(//button[@class='slds-button'])[2]");

    await page.click("//p[text()='Individuals']");
    await page.getByPlaceholder("Search this list...").fill(lastName);
    await page.keyboard.press("Enter");
    await page.click("//a[@class='slds-line-clamp']");
    await page.click("//li[@data-target-selection-name='sfdc:StandardButton.Individual.Edit']");

    await page.click("(//a[@role='combobox'])[1]");
    await page.click("//a[@title='Mrs.']");
    await page.getByPlaceholder("First Name").fill(firstName);
    await page.click("//button[@title='Save']");

    await page.waitForTimeout(2000);

    const pageTitle = await page.title();
    expect(pageTitle).toContain(firstName);
    console.log("The first name is added successfully");
    
})
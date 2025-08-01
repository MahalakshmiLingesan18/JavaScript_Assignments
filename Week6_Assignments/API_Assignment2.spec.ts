import {test, expect} from "@playwright/test";

let accessToken:any;
let tokenType:any;
let instanceURL:any;
let id:any;

test("Generate OAuth Token", async({request}) => {
    const response = await request.post("https://login.salesforce.com/services/oauth2/token", {
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Connection":"keep-alive"
        },
        form:{
            "grant_type":"password",
            "client_id":"3MVG9rZjd7MXFdLglznW11xVPG8C7SnmGMjER8YQDn_zbLVufGI.UZJg_PKFZHA9gH1X6wgfUmw==",
            "client_secret":"B4A2A680E9DD8055A68D144D0B7640E2C543F80A3C4A45594E3DA81D6CAB6FD1",
            "username":"mahalakshmilingesan@testleaf.com",
            "password":"Testleaf@123"
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    accessToken = await responseBody.access_token;
    console.log(`Access_Token: ${accessToken}`);

    tokenType = await responseBody.token_type;
    console.log(`Token_type: ${tokenType}`);

    instanceURL = await responseBody.instance_url;
    console.log(`Instance_URL: ${instanceURL}`);

    const statusCode = response.status();
    expect.soft(statusCode).toBe(200);
    console.log(statusCode);

    const statusText = response.statusText();
    expect.soft(statusText).toBe("OK");
    console.log(statusText);

})

test.only("Create new Contact in Salesforce using UI", async({page}) => {
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "mahalakshmilingesan@testleaf.com");
    await page.fill("#password", "Testleaf@123");
    await page.click("#Login");
    await page.click("//a[@class='globalCreateTrigger slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action']");
    await page.click("//span[text()='New Contact']/parent::a");
    await page.click("//a[@class='select']");
    await page.click("//a[@title='Mrs.']");
    await page.fill("//input[@placeholder='First Name']", "Mahalakshmi");
    await page.fill("//input[@placeholder='Last Name']", "Lingesan");
    await page.fill("//input[@inputmode='email']", "mahalakshmilingesan@gmail.com");
    await page.click("//input[@title='Search Accounts']");
    await page.click("//div[@class='createNew itemContainer slds-text-link_reset slds-grid slds-grid_vertical-align-center slds-truncate slds-var-p-vertical_x-small slds-var-p-horizontal_medium forceSearchInputLookupDesktopActionItem lookup__footer']");
    await page.fill("(//span[text()='Account Name']/following::input[@class=' input'])[2]", "Credits");
    await page.click("(//span[text()='Save']/parent::button[@title='Save'])[2]");
    await page.click("(//span[text()='Save'])[2]");
    await page.waitForTimeout(3000);
    await page.click("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    const uniqueName = await page.locator("//lightning-formatted-name[@slot='primaryField']").innerText();
    console.log(uniqueName);
    await page.waitForTimeout(3000);
    await page.click("//span[text()='Contacts']/parent::a");
    const totalContacts = await page.locator("(//p[@class='slds-text-align_left kpiDisplayText'])[1]").innerText();
    console.log(totalContacts);
    const idValue = page.locator(`//tr[@class='slds-hint-parent'][${totalContacts}]`);
    /* await page.locator("//div[@class='slds-scrollable_y']").hover();
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(5000); */
    id = await idValue.getAttribute("data-row-key-value");
    console.log(id);
})

test("Retrieve all Contacts Details", async({request}) => {
    const response = await request.get(`${instanceURL}/services/data/v64.0/sobjects/Contact/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${accessToken}`
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    const statusCode = response.status();
    expect.soft(statusCode).toBe(200);
    console.log(statusCode);

    const uniqueName = await responseBody.Name;
    console.log(`Name: ${uniqueName}`);

})

test("Update Contact Details Using a PATCH Call", async({request}) => {
    const response = await request.patch(`${instanceURL}/services/data/v64.0/sobjects/Contact/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${accessToken}`
        },
        data:{
            "Phone":"1234567890",
            "Email":"maha@gmail.com",
            "Title":"Dr.",
            "Department":"Software"
        }
    })
    const statusCode = response.status();
    expect.soft(statusCode).toBe(204);
    console.log(statusCode);

})

test("Get the updated contact details", async({request}) => {
    const response = await request.get(`${instanceURL}/services/data/v64.0/sobjects/Contact/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${accessToken}`
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    const statusCode = response.status();
    expect.soft(statusCode).toBe(200);
    console.log(statusCode);

})

test("Delete Lead in Salesforce", async({request}) => {
    const response = await request.delete(`${instanceURL}/services/data/v64.0/sobjects/Contact/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tokenType} ${accessToken}`
        }
    })
    const statusCode = response.status();
    expect.soft(statusCode).toBe(204);
    console.log(statusCode);
})


import {test, expect} from "@playwright/test";

let access_token:any;
let instance_url:any;
let token_type:any;
let id:any;

test("Generate OAuth Token", async({request}) => {
    const response = await request.post("https://login.salesforce.com//services/oauth2/token", {
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

    access_token = await responseBody.access_token;
    expect.soft(access_token).toBeDefined();
    console.log(`access_token: ${access_token}`);

    instance_url = await responseBody.instance_url;
    expect.soft(instance_url).toBeDefined();
    console.log(`instance_url: ${instance_url}`);

    token_type = await responseBody.token_type;
    expect.soft(token_type).toBeDefined();
    console.log(`token_type: ${token_type}`);

    const status_code = response.status();
    expect.soft(status_code).toBe(200);
    console.log(`status_code: ${status_code}`);

    const status_text = response.statusText();
    expect.soft(status_text).toBe("OK");
    console.log(`status_text: ${status_text}`);
})

test("Create a New Case", async({request}) => {
    const response = await request.post(`${instance_url}/services/data/v64.0/sobjects/Case`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token_type} ${access_token}`
        },
        data:{
            "Status":"Escalated",
            "Origin":"Email"
        }
    })
    const responseBody = await response.json();
    console.log(responseBody);

    id = await responseBody.id;
    expect.soft(id).toBeDefined();
    console.log(`ID: ${id}`)

    const status_code = response.status();
    expect.soft(status_code).toBe(201);
    console.log(`status_code: ${status_code}`);

    const status_text = response.statusText();
    expect.soft(status_text).toBe("Created");
    console.log(`status_text: ${status_text}`);

})

test("Retrieve Case Details", async({request}) => {
    const response = await request.get(`${instance_url}/services/data/v64.0/sobjects/Case/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token_type} ${access_token}`
        }
    })

    const responseBody = await response.json();
    console.log(responseBody);

    const status_code = response.status();
    expect.soft(status_code).toBe(200);
    console.log(`Status_code: ${status_code}`);
})

test.only("Update Case Details", async({page, request}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "mahalakshmilingesan@testleaf.com");
    await page.fill("#password", "Testleaf@123");
    await page.click("#Login");
    await page.click("//button[@title='App Launcher']");
    await page.click("//button[text()='View All']");
    await page.waitForLoadState();
    await page.click("//p[text()='Sales']");
    await page.click("//span[text()='More']");
    await page.click("//one-app-nav-bar-menu-item[@data-id='Case']");
    await page.waitForLoadState();
    const caseNumberLocator = page.locator("//a[@title='00001048']");
    const caseNumber = await caseNumberLocator.innerText();
    console.log(caseNumber);
    if (caseNumber==="00001048") {
        await page.click("//a[@title='00001048']/following::span[text()='Show Actions'][1]");
        await page.click("//a[@title='Edit']");
        await page.click("//button[@aria-label='Status']");
        await page.click("//lightning-base-combobox-item[@data-value='Working']");
        await page.click("//button[@aria-label='Priority']");
        await page.click("//lightning-base-combobox-item[@data-value='Low']");
        await page.click("//button[@aria-label='Case Origin']");
        await page.click("//lightning-base-combobox-item[@data-value='Phone']");
        await page.click("//button[@aria-label='SLA Violation']");
        await page.click("//lightning-base-combobox-item[@data-value='No']"); 
        await page.click("//button[@name='SaveEdit']");
        const toastMessage = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
        expect.soft(toastMessage).toContain("saved");
        console.log(toastMessage)
        const afterEdit = page.locator("//a[@title='00001048']");
        const afterEditcaseNumber = await afterEdit.innerText();
        if(afterEditcaseNumber==="00001048") {
           const statusValue = await page.locator("//a[@title='00001048']/following::td[@data-label='Status'][1]").innerText();
           console.log(statusValue);
        }
    } else {
        console.log("Case Number is invalid");
    }
    
})

test("Delete Case in Salesforce", async({request}) => {
    const response = await request.delete(`${instance_url}/services/data/v64.0/sobjects/Case/${id}`, {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token_type} ${access_token}`
        }
    })

    const status_code = response.status();
    expect.soft(status_code).toBe(200);
    console.log(status_code);

    const status_text = response.statusText();
    expect.soft(status_code).toBe(200);
    console.log(status_code);

})
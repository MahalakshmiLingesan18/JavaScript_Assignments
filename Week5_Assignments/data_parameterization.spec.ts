import {test, expect} from "@playwright/test";
import jsonData from "../../Playwright-Testleaf/TestData/LoginCredentials.json";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

//DataParameterisation using json file
for(let value of jsonData) {
    test(`Data Parameterization using json ${value.TestID}`, async({page}) => {

        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.fill("#username", value.Username);
        await page.fill("#password", value.Password);
        await page.click(".decorativeSubmit");
        await page.locator("//a[contains(text(), 'CRM')]").click();
        await page.locator("//a[text()='Leads']").click();
        await page.waitForTimeout(3000);
        await page.getByRole("link", {name: "Create Lead"}).click();
        await page.fill("//input[@id='createLeadForm_companyName']", value.CompanyName);
        await page.fill("//input[@id='createLeadForm_firstName']", value.FirstName);
        await page.fill("//input[@id='createLeadForm_lastName']", value.LastName);
        await page.selectOption("//select[@id='createLeadForm_dataSourceId']", value.Source);
        await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", value.MKTG_Camp);
        const mktgValue = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
        const mktgCount = await mktgValue.count();
        console.log(`MKTG_Count: ${mktgCount}`);
        for (let index=0; index<=mktgCount-1; index++) {
            console.log(await mktgValue.nth(index).innerText());
        }
        await page.selectOption("//select[@id='createLeadForm_industryEnumId']", value.Industry);
        await page.selectOption("//select[@id='createLeadForm_currencyUomId']", value.Currency);
        await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", value.Country);
        await page.selectOption("//select[@id='createLeadForm_generalStateProvinceGeoId']", value.State);
        const stateValue = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");
        const stateCount = await stateValue.count();
        console.log(`State_Count: ${stateCount}`);
        for (let index=0; index<=stateCount-1; index++) {
            console.log(await stateValue.nth(index).innerText());
        }
        await page.click("//input[@value='Create Lead']");
        await page.waitForLoadState();
        const pageTitle = await page.title();
        expect.soft(pageTitle).toContain("View Lead");
        console.log(`Page_Title: ${pageTitle}`);

    });
}

//DataParameterisation using csv file
const filePath = "../../Playwright-Testleaf/TestData/LoginCredentials.csv";
const csvData = parse(fs.readFileSync(path.join(__dirname, filePath)), {
    columns:true,
    skip_empty_lines:true
});

for(let value of csvData) {
    test(`Data Parameterization using csv ${value.TestID}`, async({page}) => {

        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.fill("#username", value.Username);
        await page.fill("#password", value.Password);
        await page.click(".decorativeSubmit");
        await page.locator("//a[contains(text(), 'CRM')]").click();
        await page.locator("//a[text()='Leads']").click();
        await page.waitForTimeout(3000);
        await page.getByRole("link", {name: "Create Lead"}).click();
        await page.fill("//input[@id='createLeadForm_companyName']", value.CompanyName);
        await page.fill("//input[@id='createLeadForm_firstName']", value.FirstName);
        await page.fill("//input[@id='createLeadForm_lastName']", value.LastName);
        await page.selectOption("//select[@id='createLeadForm_dataSourceId']", {label: value.Source});
        await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", {value: value.MKTG_Camp});
        const mktgValue = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
        const mktgCount = await mktgValue.count();
        console.log(`MKTG_Count: ${mktgCount}`);
        for (let index=0; index<=mktgCount-1; index++) {
            console.log(await mktgValue.nth(index).innerText());
        }
        await page.selectOption("//select[@id='createLeadForm_industryEnumId']", {index: value.Industry});
        await page.selectOption("//select[@id='createLeadForm_currencyUomId']", {value: value.Currency});
        await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", {value: value.Country});
        await page.selectOption("//select[@id='createLeadForm_generalStateProvinceGeoId']", {value: value.State});
        const stateValue = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");
        const stateCount = await stateValue.count();
        console.log(`State_Count: ${stateCount}`);
        for (let index=0; index<=stateCount-1; index++) {
            console.log(await stateValue.nth(index).innerText());
        }
        await page.click("//input[@value='Create Lead']");
        await page.waitForLoadState();
        const pageTitle = await page.title();
        expect.soft(pageTitle).toContain("View Lead");
        console.log(`Page_Title: ${pageTitle}`);

    });
}

//DataParameterisation using single env file
dotenv.config({path: "TestData/QA.env"});
test("Data Parameterization using single env file", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    let user = process.env.LT_Username as string;
    let pass = process.env.LT_Password as string;
    await page.fill("#username", user);
    await page.fill("#password", pass);
    await page.click(".decorativeSubmit");
    await page.locator("//a[contains(text(), 'CRM')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.waitForTimeout(3000);
    await page.getByRole("link", {name: "Create Lead"}).click();
    let company = process.env.CL_CompanyName as string;
    await page.fill("//input[@id='createLeadForm_companyName']", company);
    let fName = process.env.CL_FirstName as string;
    await page.fill("//input[@id='createLeadForm_firstName']", fName);
    let lName = process.env.CL_LastName as string;
    await page.fill("//input[@id='createLeadForm_lastName']", lName);
    let source = process.env.CL_Source as string;
    await page.selectOption("//select[@id='createLeadForm_dataSourceId']", {label: source});
    let mktgCamp = process.env.CL_MKTG_Camp as string;
    await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", {value: mktgCamp});
    const mktgValue = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
    const mktgCount = await mktgValue.count();
    console.log(`MKTG_Count: ${mktgCount}`);
    for (let index=0; index<=mktgCount-1; index++) {
        console.log(await mktgValue.nth(index).innerText());
    }
    let industry = process.env.CL_Industry as undefined;
    await page.selectOption("//select[@id='createLeadForm_industryEnumId']", {index: industry});
    let currency = process.env.CL_Currency as string;
    await page.selectOption("//select[@id='createLeadForm_currencyUomId']", {value: currency});
    let country = process.env.CL_Country as string;
    await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", {value: country});
    let state = process.env.CL_State as string;
    await page.selectOption("//select[@id='createLeadForm_generalStateProvinceGeoId']", {value: state});
    const stateValue = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");
    const stateCount = await stateValue.count();
    console.log(`State_Count: ${stateCount}`);
    for (let index=0; index<=stateCount-1; index++) {
        console.log(await stateValue.nth(index).innerText());
    }
    await page.click("//input[@value='Create Lead']");
    await page.waitForLoadState();
    const pageTitle = await page.title();
    expect.soft(pageTitle).toContain("View Lead");
    console.log(`Page_Title: ${pageTitle}`);

})

//DataParameterisation using multiple env file
//const fileRead = process.env.envfile || "QA" || "Prod"
const fileRead = process.env.envfile
dotenv.config({path: `TestData/${fileRead}.env`});
test.only("Data Parameterization using multiple env file", async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    let user = process.env.LT_Username as string;
    let pass = process.env.LT_Password as string;
    await page.fill("#username", user);
    await page.fill("#password", pass);
    await page.click(".decorativeSubmit");
    await page.locator("//a[contains(text(), 'CRM')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.waitForTimeout(3000);
    await page.getByRole("link", {name: "Create Lead"}).click();
    let company = process.env.CL_CompanyName as string;
    await page.fill("//input[@id='createLeadForm_companyName']", company);
    let fName = process.env.CL_FirstName as string;
    await page.fill("//input[@id='createLeadForm_firstName']", fName);
    let lName = process.env.CL_LastName as string;
    await page.fill("//input[@id='createLeadForm_lastName']", lName);
    let source = process.env.CL_Source as string;
    await page.selectOption("//select[@id='createLeadForm_dataSourceId']", {label: source});
    let mktgCamp = process.env.CL_MKTG_Camp as string;
    await page.selectOption("//select[@id='createLeadForm_marketingCampaignId']", {value: mktgCamp});
    const mktgValue = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
    const mktgCount = await mktgValue.count();
    console.log(`MKTG_Count: ${mktgCount}`);
    for (let index=0; index<=mktgCount-1; index++) {
        console.log(await mktgValue.nth(index).innerText());
    }
    let industry = process.env.CL_Industry as undefined;
    await page.selectOption("//select[@id='createLeadForm_industryEnumId']", {index: industry});
    let currency = process.env.CL_Currency as string;
    await page.selectOption("//select[@id='createLeadForm_currencyUomId']", {value: currency});
    let country = process.env.CL_Country as string;
    await page.selectOption("//select[@id='createLeadForm_generalCountryGeoId']", {value: country});
    let state = process.env.CL_State as string;
    await page.selectOption("//select[@id='createLeadForm_generalStateProvinceGeoId']", {value: state});
    const stateValue = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");
    const stateCount = await stateValue.count();
    console.log(`State_Count: ${stateCount}`);
    for (let index=0; index<=stateCount-1; index++) {
        console.log(await stateValue.nth(index).innerText());
    }
    await page.click("//input[@value='Create Lead']");
    await page.waitForLoadState();
    const pageTitle = await page.title();
    expect.soft(pageTitle).toContain("View Lead");
    console.log(`Page_Title: ${pageTitle}`);

})
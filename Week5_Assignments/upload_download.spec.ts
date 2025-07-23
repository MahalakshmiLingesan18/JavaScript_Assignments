import {test, expect} from "@playwright/test";

/* File Upload
- Upload a document without clicking the Upload button on the page
- Upload an image inside the red square area
- Assert that the file has been uploaded */

test("To upload an image without clicking upload button", async({page}) => {

    //Upload a document without clicking the Upload button on the page
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("TestData/LoginState.csv");
    await page.click("//input[@id='file-submit']");
    const message = await page.locator("//div[@id='content']//h3").innerText();
    expect.soft(message).toContain("File");
    console.log(`Message: ${message}`);
    const fileName = await page.locator("//div[@id='uploaded-files']").innerText();
    expect.soft(fileName).toContain("csv");
    console.log(`FileName: ${fileName}`);
    await page.waitForLoadState();

    //Upload an image inside the red square area
    await page.goBack();
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.click("//div[@id='drag-drop-upload']");
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("TestData/OIP.jpeg");
    const uploadedFile = await page.locator("//span[text()='OIP.jpeg']").innerText();
    expect.soft(uploadedFile).toContain("OIP");
    console.log(uploadedFile);

})

/* File Download
- Download file.json from the list of files
- Assert that the file has been downloaded in the required path
 */

test("Download file.json file from list of files", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/download");
    const downloadPromise = page.waitForEvent("download");
    await page.click("//a[text()='file.json']");
    const download = await downloadPromise;
    await download.saveAs("download/"+download.suggestedFilename());
    const file = "download/"+download.suggestedFilename();
    expect(file).toBe("download/file.json");
    console.log("The file is in the right path")

})
import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page, confirmationPage, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("user enters valid card information and necessary data and click the Pay button", async function () {

    //let emailUser = productInfo.userEmail;
    //console.log("emailUser =>" + emailUser);

    let iframeBlock = page.frameLocator("//iframe[@title='Secure payment input frame']");

    let cardNumberInputFrame = iframeBlock.locator("(//input[@type='text'])[1]");
    await cardNumberInputFrame.fill(process.env.CARD_NUMBER);  
    
    let expiryDateInputFrame = iframeBlock.locator("(//input[@type='text'])[2]");
    await expiryDateInputFrame.fill(process.env.EXPIRATION_DATE);

    let cvcInputFrame = iframeBlock.locator("(//input[@type='text'])[3]");
    await cvcInputFrame.fill(process.env.CVC);

    let zipCodeInputFrame = iframeBlock.locator("(//input[@type='text'])[4]");
    await zipCodeInputFrame.fill(process.env.ZIP_CODE);

    await reviewPaymentPage.termsAndConditionsCheckbox.click();
    
    // await page.waitForTimeout(2000);  
   

    //await expect(reviewPaymentPage.payButton).toBeEnabled();
    //await reviewPaymentPage.payButton.click();
    //await reviewPaymentPage.payButton.dispatchEvent("click");


    // Переключение обратно на основной контент
    await page.evaluate(() => {
    console.log('Switched back to main content');
    });

    await expect(reviewPaymentPage.payButton).toBeEnabled();

    let payButton = page.locator("//button[@type='button']");
    await payButton.click();


    
    //await page.click("//button[@type='button']", {force: true}); 
    //await reviewPaymentPage.payButton.click();
    //await page.waitForSelector("//div[@class = 'confirmation-title']");
    //await page.waitForTimeout(1000);

    // const isStep4Visible = await (confirmationPage.Step4isShown).isVisible({ timeout: 5000 });
    // console.log(' Is next step visible:', isStep4Visible);

    // Assertion the next step4 is visible:
    await expect (confirmationPage.Step4isShown).toBeVisible();
    console.log(' ConfirmationPage.Step4isShown  is Visible');

    


});

Then('user should be redirected to the confirmation page', async function ()  {
    const conformationText = await confirmationPage.confirmationTitle.innerText();
    console.log(" ConformationText    : " + conformationText);
    //await expect (confirmationPage.confirmationTitle).toBeVisible();
});

Then("all steps should be green in the step4 stepper", async function () {
    let collorGreen = "rgb(172, 245, 138)";
    await expect(paymentPlanPage.step1).toHaveCSS("background-color", collorGreen);
    await expect(paymentPlanPage.step2).toHaveCSS("background-color", collorGreen);
    await expect(paymentPlanPage.step3).toHaveCSS("background-color", collorGreen);
});

Then('program name {string} should be displayed', async function (string) {    
    await page.waitForTimeout(7000);
    const progrName = await confirmationPage.programNameInfo.innerText();
    console.log(" Program Name        : " + progrName);
});

Then("correct user email address should be displayed", async function () {
   const emailClientExpected = productInfo.userEmail;  // user7@example.org
   console.log(' emailClientExpected : ' + emailClientExpected);
   
   let emailClientActual  = (await confirmationPage.emailClientInfo.innerText()).replace(/\.+$/, ''); // replase "." in the end of user7@example.org.
   console.log('emailClientActual   : '+ emailClientActual);

   expect (emailClientActual).toEqual(emailClientExpected);   
});

Then('email address1 "enrollment@cydeo.com" should be displayed', async function (string) {
    
});

Then('email address2 "support@cydeo.com" should be displayed', async function (string) {
    
});

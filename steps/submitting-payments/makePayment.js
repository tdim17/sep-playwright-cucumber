import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page, confirmationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("user enters valid card information and necessary data and click the Pay button", async function () {

    //let emailUser = productInfo.userEmail;
    //console.log("emailUser =>" + emailUser);

    await reviewPaymentPage.cardNumberInput.fill(process.env.CARD_NUMBER);
    await reviewPaymentPage.expiryDateInput.fill(process.env.EXPIRATION_DATE);
    await reviewPaymentPage.cvcInput.fill(process.env.CVC);
    await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);
    await reviewPaymentPage.termsAndConditionsCheckbox.click();    
});

Then("user should be redirected to the confirmation page", async function () {
  
    confirmationPage.
});

Then("all steps should be green in the step4 stepper", async function () {
  
});

Then('program name "Test Automation with Selenium" should be displayed', async function (string) {
    
});

Then("correct user email address should be displayed", async function () {
  
});

Then('email address1 "enrollment@cydeo.com" should be displayed', async function (string) {
    
});

Then('email address2 "support@cydeo.com" should be displayed', async function (string) {
    
});

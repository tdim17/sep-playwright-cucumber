import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


/*

When("user fills in only the required fields", async function () {
  await startApplicationPage.firstNameInputBox.fill("John");
  await startApplicationPage.lastNameInputBox.fill("Doe");
  await startApplicationPage.emailInputBox.fill("john@example.com");
  await startApplicationPage.phoneNumberInputBox.fill("555-555-5555");
});

When('clicks on the next button', async function () {
    await startApplicationPage.nextButton.click();
});

Then('next page is opened', async function () {
    expect (await paymentPlanPage.chooseAPaymentPlanText.isVisible());
});


*/

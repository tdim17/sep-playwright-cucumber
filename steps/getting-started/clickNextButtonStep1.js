import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user fills in only the required fields", async function () {
    await startApplicationPage.firstNameInputBox.fill("John");
    await startApplicationPage.lastNameInputBox.fill("Doe");
    await startApplicationPage.emailInputBox.fill(productInfo.userEmail);
    await startApplicationPage.phoneNumberInputBox.fill("555-555-5555");
  });

  Then("the next button1 is enabled", async function () {
    await expect(startApplicationPage.nextButton).toBeVisible();
    await expect (startApplicationPage.nextButton).toBeEnabled();
  });

  Then("user clicks on the next button1", async function () {
    await startApplicationPage.nextButton.click();
  });

  Given("user fills in all fields", async function () {
    await startApplicationPage.firstNameInputBox.fill("Monica");
    await startApplicationPage.lastNameInputBox.fill("Bellucci");
    await startApplicationPage.emailInputBox.fill(productInfo.userEmail);
    await startApplicationPage.phoneNumberInputBox.fill("777-771-7171");
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.googleOption.click();
  });

  When("user is on step two of the enrollment process", async function () {
    await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
  });
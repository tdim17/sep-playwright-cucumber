import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  startApplicationPage,  
  page,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { ReviewPaymentPage } from "../../pages/ReviewPaymentPage.js";

Given("user fills in only the required fields", async function () {
  await startApplicationPage.firstNameInputBox.fill("John");
  await startApplicationPage.lastNameInputBox.fill("Doe");
  await startApplicationPage.emailInputBox.fill("john@example.com");
  await startApplicationPage.phoneNumberInputBox.fill("555-555-5555");
});

Given("user fills in all fields", async function () {
  await startApplicationPage.firstNameInputBox.fill("Monica");
  await startApplicationPage.lastNameInputBox.fill("Bellucci");
  await startApplicationPage.emailInputBox.fill("monica@example.belucci.com");
  await startApplicationPage.phoneNumberInputBox.fill("777-771-7171");
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.googleOption.click();
});





Then("the next button1 is enabled", async function () {
  await expect(startApplicationPage.nextButton).toBeVisible();
  await expect (startApplicationPage.nextButton).toBeEnabled();
});



Then("user clicks on the next button1", async function () {
  await startApplicationPage.nextButton.click();
});

When("user is on step two of the enrollment process", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

Then("the next button2 is disabled by default", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeHidden();

  await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
  await expect(paymentPlanPage.inactiveNextButton).toHaveAttribute("disabled","");
  await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When("user clicks upfront payment option", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
  // wait for 1 sec
  // await page.waitForTimeout(1000);
});

Then("the next button2 is enabled", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
  await expect (paymentPlanPage.activeNextButton).toBeEnabled();
});

When("user clicks installments payment option", async function () {
  await paymentPlanPage.installmentsPaymentOption.click();
  // wait for 1 sec
  // await page.waitForTimeout(1000);
});

// AC2: transition to step Review
Then("user clicks on the next button2", async function () {
  await paymentPlanPage.activeNextButton.click();
});
Then("user is on step three and can see the payment form", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();
});

// AC3: check the collor of steps

Then("check if step 1 is green", async function () {
  await expect(paymentPlanPage.step1).toHaveCSS("background-color", "rgb(172, 245, 138)");
  // await expect(paymentPlanPage.step1).toHaveCSS("background-color", /rgb\((\d+,\s*){2}\d+\)/); // check if that's RGB
});

Then("check if step 2 is green", async function () {
  await expect(paymentPlanPage.step2).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

Then("check if step 3 is blue", async function () {
  await expect(paymentPlanPage.step3).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then("user is on third step and can see the total cost", async function () {
  await expect (reviewPaymentPage.totalAmount).toBeVisible();
});


Then("back button should be displayed and clickable", async function () {
  await expect (reviewPaymentPage.backButton).toBeVisible();
  await expect (reviewPaymentPage.backButton).toBeEnabled();
});


Then("pay button should be displayed by default", async function () {
  await expect (reviewPaymentPage.payButton).toBeVisible();  
});


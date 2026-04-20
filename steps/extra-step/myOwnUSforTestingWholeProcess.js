import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  startApplicationPage,
  page,
  reviewPaymentPage,
  confirmationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When('I enter the page i need to go through all steps', async function () {

  // ------- Step 1 ---------------------------------------------------------

  let firstNameInputBox = startApplicationPage.firstNameInputBox;
  let lastNameInputBox = startApplicationPage.lastNameInputBox;
  let emailInputBox = startApplicationPage.emailInputBox;
  let phoneNumberInputBox = startApplicationPage.phoneNumberInputBox;

  await firstNameInputBox.fill("John");
  await lastNameInputBox.fill("Doe");
  await emailInputBox.fill(productInfo.userEmail);
  await phoneNumberInputBox.fill("1234567890");

  let nextButton1 = startApplicationPage.nextButton;
  await expect(nextButton1).toBeEnabled();
  await nextButton1.click();

  // ------- Step 2 ---------------------------------------------------------

  let upfrontPaymentOption = paymentPlanPage.upfrontPaymentOption;
  await upfrontPaymentOption.click();

  let activeNextButton = paymentPlanPage.activeNextButton;
  await expect(activeNextButton).toBeEnabled();
  await activeNextButton.click();
  await page.waitForTimeout(1000);

  // ------- Step 3 ---------------------------------------------------------

  await reviewPaymentPage.cardNumberInput.fill(process.env.CARD_NUMBER);
  await reviewPaymentPage.expiryDateInput.fill(process.env.EXPIRATION_DATE);
  await reviewPaymentPage.cvcInput.fill(process.env.CVC);
  await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);
  await reviewPaymentPage.termsAndConditionsCheckbox.click();

  await reviewPaymentPage.payButton.click();
  await page.waitForTimeout(3000);

  await expect(confirmationPage.Step4isShown).toBeVisible();

  const conformationText = await confirmationPage.confirmationTitle.innerText();
  console.log("ConformationText      : " + conformationText);

  await expect(confirmationPage.Step4isShown).toBeVisible();

  let collorGreen = "rgb(172, 245, 138)";
  await expect(paymentPlanPage.step1).toHaveCSS("background-color", collorGreen);
  await expect(paymentPlanPage.step2).toHaveCSS("background-color", collorGreen);
  await expect(paymentPlanPage.step3).toHaveCSS("background-color", collorGreen);
  console.log("Stepper result        : All steps are green");

  const progrName = await confirmationPage.programNameInfo.innerText();
  console.log(`Program Name          : ${progrName}`);
  expect(progrName).toBe("Test Automation with Selenium");
  expect(confirmationPage.programNameInfo).toBeVisible();

  const emailClientExpected = productInfo.userEmail;
  console.log('emailClientExpected   : ' + emailClientExpected);

  let emailClientActual = (await confirmationPage.emailClientInfo.innerText()).replace(/\.+$/, '');
  console.log('emailClientActual     : ' + emailClientActual);
  expect(emailClientActual).toEqual(emailClientExpected);

  const emailSupport1Expected = "enrollment@cydeo.com";
  const emailSupport1Actual = (await confirmationPage.emailSupport1.innerText()).trim();
  console.log('emaiSupport1Actual    : ' + emailSupport1Actual);
  console.log('emailSupport1Expected : ' + emailSupport1Expected);
  expect(emailSupport1Actual).toEqual(emailSupport1Expected);

  const emailSupport2Expected = "support@cydeo.com";
  const emailSupport2Actual = (await confirmationPage.emailSupport2.innerText()).trim();
  console.log('emaiSupport2Actual    : ' + emailSupport2Actual);
  console.log('emailSupport2Expected : ' + emailSupport2Expected);
  expect(emailSupport2Actual).toEqual(emailSupport2Expected);

});

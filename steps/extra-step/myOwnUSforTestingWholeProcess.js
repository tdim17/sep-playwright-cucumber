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
  /*
  await page.goto('https://automation-user:123abc@qa.sep.tdtm.cydeo.com/taws');
  */

  let firstNameInputBox = startApplicationPage.firstNameInputBox;
  let lastNameInputBox = startApplicationPage.lastNameInputBox;
  let emailInputBox = startApplicationPage.emailInputBox;
  let phoneNumberInputBox = startApplicationPage.phoneNumberInputBox;

  await firstNameInputBox.fill("John");
  await lastNameInputBox.fill("Doe");
  await emailInputBox.fill(productInfo.userEmail);
  await phoneNumberInputBox.fill("1234567890");
  //await page.waitForTimeout(500);

  let nextButton1 = startApplicationPage.nextButton;
  await expect (nextButton1).toBeEnabled();
  await nextButton1.click();

  // ------- Step 2 ---------------------------------------------------------

  let upfrontPaymentOption = paymentPlanPage.upfrontPaymentOption;
  await upfrontPaymentOption.click();
  
  let activeNextButton = paymentPlanPage.activeNextButton;
  await expect (activeNextButton).toBeEnabled();
  await activeNextButton.click();
  await page.waitForTimeout(1000);

  // ------- Step 3 ---------------------------------------------------------

  /*

  let iframeBlock = page.frameLocator("//iframe[@title='Secure payment input frame']");
    
  let cardNumberInputFrame = iframeBlock.locator("(//input[@type='text'])[1]");
  //await cardNumberInputFrame.fill("5555555555554444");
  await cardNumberInputFrame.fill(process.env.CARD_NUMBER);
  
  let expiryDateInputFrame = iframeBlock.locator("(//input[@type='text'])[2]");
  await expiryDateInputFrame.fill(process.env.EXPIRATION_DATE);

  let cvcInputFrame = iframeBlock.locator("(//input[@type='text'])[3]");
  await cvcInputFrame.fill(process.env.CVC);

  let zipCodeInputFrame = iframeBlock.locator("(//input[@type='text'])[4]");
  await zipCodeInputFrame.fill(process.env.ZIP_CODE);

  let termsAndConditionsCheckbox = page.locator("//input[@type = 'checkbox']")
  await termsAndConditionsCheckbox.click();    
  await page.waitForTimeout(100);
  
  let payButton = page.locator("//button[@type='button']");
  await payButton.click();
  await page.waitForTimeout(3000);

    */

  //---------------------------------------------------------------

  await reviewPaymentPage.cardNumberInput.fill(process.env.CARD_NUMBER);
  await reviewPaymentPage.expiryDateInput.fill(process.env.EXPIRATION_DATE);  
  await reviewPaymentPage.cvcInput.fill(process.env.CVC);  
  await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);  
  await reviewPaymentPage.termsAndConditionsCheckbox.click();   
  //await page.waitForTimeout(100);  
  
  await reviewPaymentPage.payButton.click();
  await page.waitForTimeout(3000);
  
  await expect (confirmationPage.Step4isShown).toBeVisible();

  // Then user should be redirected to the confirmation page
  const conformationText = await confirmationPage.confirmationTitle.innerText();
  console.log("ConformationText      : " + conformationText);

  // Assertion the next step4 is visible:
  await expect (confirmationPage.Step4isShown).toBeVisible();


  // all steps should be green in the step4 stepper"

  let collorGreen = "rgb(172, 245, 138)";

  await expect(paymentPlanPage.step1).toHaveCSS("background-color", collorGreen);
  await expect(paymentPlanPage.step2).toHaveCSS("background-color", collorGreen);
  await expect(paymentPlanPage.step3).toHaveCSS("background-color", collorGreen);
  console.log("Stepper result        : All steps are green");


  // program name "Test Automation with Selenium" should be displayed    
  const progrName = await confirmationPage.programNameInfo.innerText();
  console.log(`Program Name          : ${progrName}`);
  expect(progrName).toBe("Test Automation with Selenium");
  expect(confirmationPage.programNameInfo).toBeVisible();

  // correct user email address should be displayed
  const emailClientExpected = productInfo.userEmail;  // user7@example.org
  console.log('emailClientExpected   : ' + emailClientExpected);
  
  let emailClientActual  = (await confirmationPage.emailClientInfo.innerText()).replace(/\.+$/, ''); // replase "." in the end of user7@example.org.
  console.log('emailClientActual     : '+ emailClientActual);

  expect (emailClientActual).toEqual(emailClientExpected); 

  // email address1 "enrollment@cydeo.com" should be displayed
  const emailSupport1Expected = "enrollment@cydeo.com";  
  const emailSupport1Actual = (await (confirmationPage.emailSupport1).innerText()).trim();
  console.log('emaiSupport1Actual    : '+ emailSupport1Actual);
  console.log('emailSupport1Expected : '+ emailSupport1Expected); 
  expect(emailSupport1Actual).toEqual(emailSupport1Expected);

  // email address2 "support@cydeo.com" should be displayed
  const emailSupport2Expected = "support@cydeo.com";  
  const emailSupport2Actual = (await (confirmationPage.emailSupport2).innerText()).trim();
  console.log('emaiSupport2Actual    : '+ emailSupport2Actual);
  console.log('emailSupport2Expected : '+ emailSupport2Expected); 
  expect(emailSupport2Actual).toEqual(emailSupport2Expected);





});
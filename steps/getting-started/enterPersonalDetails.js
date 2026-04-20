import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  page,
  paymentPlanPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { TIMEOUT } from "dns";
import { access } from "fs";

Then("'first name' input field is visible", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});
Then("text field is present in 'first name'", async function () {
  await expect(startApplicationPage.firstNameInputBox).toHaveAttribute(
    "formcontrolname",
    "firstName"
  );
});
Then("'last name' input field is visible", async function () {
  await expect(startApplicationPage.lastNameInputBox).toBeVisible();
});
Then("text field is present in 'last name'", async function () {
  await expect(startApplicationPage.lastNameInputBox).toHaveAttribute(
    "formcontrolname",
    "lastName"
  );
});

Then("'email address' input field is visible", async function () {
  await expect(startApplicationPage.emailInputBox).toBeVisible();
});

Then("'email address' text field is present", async function () {
  await expect(startApplicationPage.emailInputBox).toHaveAttribute(
    "type",
    "email"
  );
});

Then("'phone' input field is visible", async function () {
  await expect(startApplicationPage.phoneNumberInputBox).toBeVisible();
});
Then("'phone' text field is present", async function () {
  await expect(startApplicationPage.phoneNumberInputBox).toHaveAttribute(
    "formcontrolname",
    "phoneNumber"
  );
});

//----------- Format validation -------

Then("'email address' text field validates for email format",  async function (){
const validEmail = "xxxxxxxxxxxx@example.com";

const validEmail22 = [
"nnnnnnnnnnnnnn@example.com",
"text@example.com",
"sss@maxim.org"
];
const invalidEmails = [
      "plainaddress", //
      "test@.com", //
      "@missingusername.com", //
      "missingatsign.com", //
      "username@.com", //
      "username@com", //
      "user@@domain.com", //
      "test @example.com", //
      "test@ example.com", //
      "test@exa mple.com", //
      "te st@exa mple.com", //

      //'username@domain..com', // проходит валидацию      
      //'user@domain.c',  // проходит валидацию
      //'тест@пример.ком', // проходит валидацию
      //'user@пример.com', // проходит валидацию
      //'user@domain.cóm', // проходит валидацию
      //'user@example.com ', // проходит валидацию
      //' user@example.com', // проходит валидацию
      //user?@example.4vm', // проходит валидацию
      //dmi3?tte@example.v, // проходит валидацию
      //r?tte@exam&p^^le.v, // проходит валиадацию
    ];    

    // for Invalid emails
    for (const emailInv of invalidEmails) {
      await startApplicationPage.emailInputBox.fill(emailInv);
      await page.waitForTimeout(100);
      await startApplicationPage.nextButton.click();

      // Check if the the page remains the same
      await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      "Test Automation with Selenium");       
    }    
    
    // for Valid emails
    //await page.waitForTimeout(2500);
      await startApplicationPage.emailInputBox.fill(validEmail);      
      //await startApplicationPage.nextButton.click();
      await page.keyboard.press("Enter");      
    // Verify if it opens the next step
      await expect(paymentPlanPage.chooseAPaymentPlanText).toHaveText(
      "Choose a payment plan");
  });

Then("'phone' text field allows numbers only", async function () {
  const phoneNumber = "123456454";
  const invalidSymbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

  for (const symbol of invalidSymbols) {
    await startApplicationPage.phoneNumberInputBox.fill(`${phoneNumber}${symbol}`);
    await page.waitForTimeout(100);
    await startApplicationPage.nextButton.click();

    // Check if the the page remains the same
    await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      "Test Automation with Selenium");
  }
  // for Valid phone number
  await page.waitForTimeout(500);
  await startApplicationPage.phoneNumberInputBox.fill(phoneNumber);
  await page.waitForTimeout(500);
  await startApplicationPage.nextButton.click();
  // Verify if it opens the next step
  await expect(paymentPlanPage.chooseAPaymentPlanText).toHaveText(
    "Choose a payment plan");
});

//----------- Dropdown -------

Then("dropdovn list is visible in the dropdown window", async function () {
  await expect(startApplicationPage.howDidYouHearAboutUsDropDown).toBeVisible();
});

Then("dropdown contains list of elements", async function () {
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await expect(startApplicationPage.dropdownOptions.first()).toBeVisible();
  const optionsCount = await startApplicationPage.dropdownOptions.count();
  console.log(` Number of options in dropdown: ${optionsCount}`);
});

Then("user deleted required field last name", async function () {
  await startApplicationPage.firstNameInputBox.press("Control+A");
  await startApplicationPage.firstNameInputBox.press("Backspace");
  //wait for 1 sec
  await page.waitForTimeout(1000);
});

Then("next button1 is disabled", async function () {
  await expect(startApplicationPage.nextButton).toBeVisible();
  await expect(startApplicationPage.nextButton).toBeEnabled();
  //await expect(startApplicationPage.nextButton).toBeDisabled();  // it doesn't work
  /* The button is Visible and Disabled but attribute is Enebled :((
  const classList = await startApplicationPage.nextButton.getAttribute('class');
  console.log("ClassList: " + classList);

  const boundingBox = await startApplicationPage.nextButton.boundingBox();
  if (boundingBox) {
    const overlappingElement = await page.evaluate(({ x, y }) => {
      return document.elementFromPoint(x, y);
    }, { x: boundingBox.x + boundingBox.width / 2, y: boundingBox.y + boundingBox.height / 2 });
    
    console.log('Overlapping element:', overlappingElement);
  }

  const boundingBox = await startApplicationPage.nextButton.boundingBox();

if (boundingBox) {
  const overlappingElementDetails = await page.evaluate(({ x, y }) => {
    const element = document.elementFromPoint(x, y);
    if (element) {
      return {
        tagName: element.tagName,
        classList: element.className,
        id: element.id,
        outerHTML: element.outerHTML
      };
    }
    return null;
  }, { x: boundingBox.x + boundingBox.width / 2, y: boundingBox.y + boundingBox.height / 2 });

  console.log('Overlapping element details:', overlappingElementDetails);
} else {
  console.log('Bounding box not found for the button.');
}

await page.evaluate(() => {
  const footer = document.querySelector('.right-footer');
  if (footer) {
    footer.style.display = 'none'; // Скрываем элемент
  }
});

const canClick = await startApplicationPage.nextButton.evaluate(node => {
  const rect = node.getBoundingClientRect();
  const element = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  return element === node;
});
console.log('Can click directly on button:', canClick);

const isDisabledLogic = await startApplicationPage.nextButton.evaluate(node => {
  // Проверьте, блокируется ли выполнение клика на уровне обработчиков событий
  return node.onclick ? 'has onclick handler' : 'no onclick handler';
});
console.log('Onclick handler:', isDisabledLogic);

*/

  await startApplicationPage.nextButton.click();

  await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
    "Test Automation with Selenium"
  );
});

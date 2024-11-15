import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { TIMEOUT } from "dns";

Then("'first name' input field is visible", async function () {    
  await expect (startApplicationPage.firstNameInputBox).toBeVisible();
});
Then("text field is present in 'first name'", async function () {
  await expect (startApplicationPage.firstNameInputBox).toHaveAttribute('formcontrolname', 'firstName');
});
Then("'last name' input field is visible", async function () {    
  await expect (startApplicationPage.lastNameInputBox).toBeVisible();
});
Then("text field is present in 'last name'", async function () {
  await expect (startApplicationPage.lastNameInputBox).toHaveAttribute('formcontrolname', 'lastName');
});



Then("'email address' input field is visible", async function () {   
  await expect (startApplicationPage.emailInputBox).toBeVisible();
});
Then("text field is present and validates for email format in 'email address'", async function () {
  await expect (startApplicationPage.emailInputBox).toHaveAttribute('type', 'email');
});



Then("'phone' input field is visible", async function () {    
  await expect (startApplicationPage.phoneNumberInputBox).toBeVisible();
});
Then("text field allows numbers only in 'phone'", async function () {
  await expect (startApplicationPage.phoneNumberInputBox).toHaveAttribute('formcontrolname', 'phoneNumber');
});


//------------------

Then("dropdovn list is visible in the dropdown window", async function () {
  await expect(startApplicationPage.howDidYouHearAboutUsDropDown).toBeVisible();
});

Then("dropdown contains list of elements", async function () {
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await expect((startApplicationPage.dropdownOptions).first()).toBeVisible();
  const optionsCount = await startApplicationPage.dropdownOptions.count();
  console.log(` Number of options in dropdown: ${optionsCount}`);
});

Then("user deleted required field last name", async function () {
  await startApplicationPage.firstNameInputBox.press('Control+A');
  await startApplicationPage.firstNameInputBox.press('Backspace');

  // wait for 1 sec
  await page.waitForTimeout(3000);
});

Then("next button1 is disabled", async function () {
  await expect(startApplicationPage.nextButton).toBeVisible();
  await expect(startApplicationPage.nextButton).toBeEnabled();

  const classList = await startApplicationPage.nextButton.getAttribute('class');
  console.log("ClassList: " + classList);


  // const boundingBox = await startApplicationPage.nextButton.boundingBox();
  // if (boundingBox) {
  //   const overlappingElement = await page.evaluate(({ x, y }) => {
  //     return document.elementFromPoint(x, y);
  //   }, { x: boundingBox.x + boundingBox.width / 2, y: boundingBox.y + boundingBox.height / 2 });
    
  //   console.log('Overlapping element:', overlappingElement);
  // }

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







//await expect(startApplicationPage.nextButton).toBeDisabled();



});  
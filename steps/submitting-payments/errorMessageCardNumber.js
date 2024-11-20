import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

let errorMessageElement = "";
let cardNumberInputElement = "";

When('user sequentially enters a short card number from {int} to {int} characters', async function (int, int2) {

// Definition of locators elements:
cardNumberInputElement = reviewPaymentPage.cardNumberInput;
errorMessageElement = reviewPaymentPage.cardNumberErrorMessage;

await cardNumberInputElement.fill("1234");
await page.click('body');
});

Then('card error message {string} should be thrown immediately', async function (string) {
const errorIncompleteExpected = string;
errorMessageElement = reviewPaymentPage.cardNumberErrorMessage;
const errorMessageActual = await errorMessageElement.innerText();
console.log("errorIncompleteExpected : " + errorIncompleteExpected);
console.log("errorMessageActual : " + errorMessageActual);
expect(errorMessageActual).toEqual(errorIncompleteExpected);
});

When('user enters the {string} card number', async function (cardNumberString) {
    cardNumberInputElement = reviewPaymentPage.cardNumberInput;
    await cardNumberInputElement.fill(cardNumberString);
    await page.click('body');
});
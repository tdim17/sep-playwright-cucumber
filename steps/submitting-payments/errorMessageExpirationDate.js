import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

let expiryMessageElement = "";
let expiryDataInputElement = "";

When("user enters the short expiration number", async function () {
  // Locators elements:
  expiryMessageElement = reviewPaymentPage.cardExpiryErrorMessage;
  expiryDataInputElement = reviewPaymentPage.expiryDateInput;
  await expiryDataInputElement.fill("123");
  await page.click("body");
});

Then("a message {string} should be thrown", async function (errorMessageExpected) {
    expiryMessageElement = reviewPaymentPage.cardExpiryErrorMessage;
    const expiryMessageActual = await expiryMessageElement.innerText();
    expect(expiryMessageActual).toEqual(errorMessageExpected);
  }
);

When("user enters the {string} expiration number", async function (expWrongDate) {
    expiryDataInputElement = reviewPaymentPage.expiryDateInput;
    await expiryDataInputElement.fill(expWrongDate);
    await page.click("body");
  }
);

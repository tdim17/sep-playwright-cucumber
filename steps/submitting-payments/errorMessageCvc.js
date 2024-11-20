import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When("user enters the short CVC number", async function () {

    const cvcDataInputElement = reviewPaymentPage.cvcInput;
    await cvcDataInputElement.fill("12");
    await page.click("body");
  });


  Then("CVC error message {string} should be thrown", async function (errorMessageExpected) {
    const cvcErrorMessageElement = reviewPaymentPage.cardCVCErrorMessage;   
    const cvcErrorMessageActual = await cvcErrorMessageElement.innerText();

    expect(cvcErrorMessageActual).toEqual(errorMessageExpected);
    
  }
);

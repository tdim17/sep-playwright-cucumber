import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then("'Cydeo Secure Checkout' has to be displayed", async function () {
    const secureCheckoutElement = leftMainPage.secureCheckout;
    await expect (secureCheckoutElement).toBeVisible();
    const secureCheckoutTextActual = await secureCheckoutElement.innerText()
    const secureCheckoutTextExpected = "Secure checkout ";
    expect(secureCheckoutTextActual).toEqual(secureCheckoutTextExpected);
});

Then("'program name' has to be displayed", async function () {
    const programNameExpected = productInfo.programName;
    await expect (leftMainPage.programName).toBeVisible();
    const programNameActual = await leftMainPage.programName.innerText();
    expect (programNameActual).toEqual(programNameExpected);
});

Then("'logo' has to be displayed on the leftMain page", async function () {
});

Then("'Terms and Conditions' has to be displayed on the leftMain page", async function () {
});

Then("'Privacy Policy' has to be displayed on the leftMain page", async function () {
});

Then("'Disclaimer' has to be displayed on the leftMain page", async function () {
});

Then("'Cookie Policy' has to be displayed on the leftMain page", async function () {
});

Then("'contact us' has to be displayed in the footer on the right page", async function () {
});

Then("system should be cross-platform capable", async function () {
});
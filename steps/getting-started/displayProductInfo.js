import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// Then("product name is displayed on the information card", async function () {
//   const programNameExpected = productInfo.productName;

//   await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  
//   const productNameAcual = await startApplicationPage.programNameOnInfoCard.innerText();

//   console.log(` programNameExpected: ${programNameExpected}`);
//   console.log(` productNameAcual: ${productNameAcual}`);

//   expect(programNameExpected).toEqual(productNameAcual);

// });

Then(
  "product name on the infocard match the product name on the left side",
  async function () {
    const programNameLeftActual = await leftMainPage.programName.innerText();
    console.log(`programNameLeftActual: ${programNameLeftActual}`);

    const productNameAcual = await startApplicationPage.programNameOnInfoCard.innerText();
    console.log(`productAcualName: ${productNameAcual}`);

    expect(programNameLeftActual).toEqual(productNameAcual);
  }
);

Then("price of the product is displayed", async function () {

    await expect(startApplicationPage.programPrice).toBeVisible();
    const priceActual = await startApplicationPage.programPrice.innerText();
    console.log(`priceActual: ${priceActual}`);
    // const priceExpected = '$400 ';
    // expect(priceActual).toEqual(priceExpected);
});

Then("flexible payment plan text is displayed", async function () {
    await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();

    const flexiblePaymentPlanTextActual = await startApplicationPage.flexiblePaymentsPlanAvailableText.innerText();
    console.log(`flexiblePaymentPlanTextActual: ${flexiblePaymentPlanTextActual}`);
    const flexiblePaymentPlanTextExpected = "Flexible payments plan available";
    expect(flexiblePaymentPlanTextActual).toEqual(flexiblePaymentPlanTextExpected);

});

Then("program start date is displayed", async function () {

await expect(startApplicationPage.programStartDate).toBeVisible();
const programStartDateActual = await startApplicationPage.programStartDate.innerText();
console.log(`programStartDateActual: ${programStartDateActual}`);
const programStartDateExpected = productInfo.startDate;
console.log(`programStartDateExpected: ${programStartDateExpected}`);
expect(programStartDateActual).toEqual(programStartDateExpected);

});

Then("return policy text is displayed", async function () {
    await expect (startApplicationPage.returnPolicyText).toBeVisible();
});

Then("final date for returns is displayed", async function () {
await expect (startApplicationPage.refundEndDate).toBeVisible();
});

import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { text } from "stream/consumers";

When("user is on the step one and 'Test Automation with Selenium' title is displayed", async function () {
   const programNameOnInfoCardExpected = "Test Automation with Selenium";
   const programNameOnInfoCardActual = await (startApplicationPage.programNameOnInfoCard).textContent();
   // console.log("");
   // console.log(`Actual title: ${programNameOnInfoCardActual}`);
   await expect (programNameOnInfoCardActual).toEqual(programNameOnInfoCardExpected);
});
Then("'1-Start Application' is displayed on the stepper", async function () {
    const number1textActual = await (startApplicationPage.startApplicationStepCircle).textContent();
    // console.log("");
    // console.log(`Actual number1text: ${number1textActual}`);
    const number1textExpected = "1";

    const startApplicationTextActual = await (startApplicationPage.startApplicationText).textContent();
    // console.log("");
    // console.log(`Actual startApplicationText: ${startApplicationTextActual}`);
    const startApplicationTextExpected = "Start Application";

    expect(number1textActual).toEqual(number1textExpected);
    expect(startApplicationTextActual).toEqual(startApplicationTextExpected);

});
Then("'2-Payment Plan' is displayed on the stepper", async function () {

    const number2textActual = await (startApplicationPage.paymentPlanStepCircle).textContent();
    //console.log("");
    //console.log(`Actual number2text: ${number2textActual}`);
    const number2textExpected = "2";
    expect(number2textActual).toEqual(number2textExpected);

    const paymentPlanTextActual = await (startApplicationPage.paymentPlanText).textContent();
    //console.log("");
    //console.log(`Actual paymentPlanTex: ${paymentPlanTextActual}`);
    const paymentPlanTexExpected = "Payment plan";    
    expect(paymentPlanTextActual).toEqual(paymentPlanTexExpected);

});
Then("'3-Review' is displayed on the stepper", async function () {

    const number3textActual = await (startApplicationPage.reviewStepCircle).textContent();
    //console.log("");
    //console.log(`Actual number3text: ${number3textActual}`);
    const number3textExpected = "3";
    expect(number3textActual).toEqual(number3textExpected);

    const reviewTextActual = await (startApplicationPage.reviewText).textContent();
    //console.log("");
    //console.log(`Actual reviewTex: ${reviewTextActual}`);
    const reviewTextExpected = "Review";    
    expect(reviewTextActual).toEqual(reviewTextExpected);
});
Then("'Start Application' is highlighted in blue", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});
Then("'Payment Plan' is highlighted in grey", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});
Then("'Review' is highlighted in grey", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});





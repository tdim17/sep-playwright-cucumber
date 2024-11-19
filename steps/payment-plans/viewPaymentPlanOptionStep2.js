import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { constants } from "crypto";


Then('there should be only one upfront price', async function () {
     const upfrontBlock = paymentPlanPage.upfrontPaymentOption;
     await expect(upfrontBlock).toHaveCount(1);
     console.log("upfrontBlock  >>> " + upfrontBlock);
});

Then('tex the first row should be {string}', async function (string) {
    let textUpfrontActual = await paymentPlanPage.upfrontPaymentOption.textContent();
    console.log(" FirstRowText: " +textUpfrontActual.trim());
    expect(textUpfrontActual.trim()).toEqual(string);
});

Then('the second row should be "{string} pay once"', async function (price) {    
    
    const secondRowTextExpected = `${price} pay once`;
    const upfrontPaymentAmountTextRetrieved = await paymentPlanPage.upfrontPaymentAmount.innerText();

    /* This case works too, but the next is better!    
    console.log("secondRowTextExpected : " + secondRowTextExpected);
    console.log("upfrontTextRetrieved  : " + upfrontPaymentAmountTextRetrieved);

    expect (secondRowTextExpected).toBe(upfrontPaymentAmountTextRetrieved);
    
    let upfupfrontPaymentAmountActual = await paymentPlanPage.upfrontPaymentAmount.textContent();
    console.log(' AMOUNT: ' + upfupfrontPaymentAmountActual.trim());    
    let secondRowTextRetrieved = await paymentPlanPage.payOnceTextUpFront.textContent();
    console.log(' TEXT: ' + secondRowTextRetrieved.trim());
    */  

    console.log("--------------------- The best solution ---------------------------");

    // SUPERB IDEA!!!
    const [amountActual, paymentTextActual] = upfrontPaymentAmountTextRetrieved.split(/\s+(?=\w+\s+once)/);
    console.log("AmountActual separated : " +amountActual);
    console.log("TextActual separated   : "+paymentTextActual);

    const secondRowTextActual = amountActual + ' ' + paymentTextActual;
    console.log("secondRowTextActual concatenated : " + secondRowTextActual);

    expect (secondRowTextExpected).toEqual(secondRowTextActual);
});


Then('there must be total {string} Payment Plans', async function (string) {
   // I don't know that assignment
});

let installPaymentTextElement = "";
let installmentsPaymentTextActual = "";

Then('there can be {int} installments', async function (instNumber) {
    
    const installmentsNumberExpected = instNumber;
    console.log("installmentsNumberExpected " + instNumber);

    installPaymentTextElement = paymentPlanPage.installmentsPaymentOption;

    installmentsPaymentTextActual = await installPaymentTextElement.innerText();
    console.log("installmentsPaymentTextActual: " + installmentsPaymentTextActual);
    
    const [instOptionsNumber, installmentsText ] = installmentsPaymentTextActual.split(/\s+(?=Installments)/);
    console.log("installmentsActual: " +instOptionsNumber);
    console.log("installmentsText  : " + installmentsText);

    expect(instOptionsNumber).toEqual(String(instNumber));    
});

Then('text of first row sould be {string}', async function (textExpected) {
    expect(installmentsPaymentTextActual).toEqual(textExpected);
});

Then('text of second row sould be {string}', async function (textExpected) {

    const installmentsAmountActual = await paymentPlanPage.installmentsPaymentAmount.innerText();
    console.log("installmentsAmountActual : " + installmentsAmountActual);

    expect(installmentsAmountActual).toEqual(textExpected);
});

Then('installment plans should be unique', async function () {

    await expect(installPaymentTextElement).toHaveCount(1);
    console.log("installmenttBlock  >>> " + installPaymentTextElement);
});
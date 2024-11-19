import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('there should be only one upfront price', async function () {
     const upfrontBlock = paymentPlanPage.upfrontPaymentOption;
     await expect(upfrontBlock).toHaveCount(1);
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

});

Then('there can be {int} installments', async function (instNumber) {
    
    // const installmentsNumberExpected = installments;
    console.log("installmentsNumberExpected " + instNumber);

    // const installmentsPaymentOption = await paymentPlanPage.installmentsPaymentOption.innerText();

    // console.log("Object : " + installmentsPaymentOption);
    
    // const [instOptionsNumber, installmentsText ] = installmentsPaymentOption.split(/\s+(?=installments)/);
    // console.log("" +instOptionsNumbe);



});

Then('text of first row sould be "{string}"', async function () {
});

Then('text of second row sould be "{string}"', async function () {
});

Then('installment plans should be unique', async function () {
});


// test('Verify upfront and installment price blocks', async ({ page }) => {
//     // Navigate to the enrollment page and proceed to step two
//     await page.goto('https://example.com/enrollment');
//     await page.click('button:text("Next")');
  
//     // Verify upfront price block
//     const upfrontBlock = await page.locator('.upfront-price-block');
//     await expect(upfrontBlock).toHaveCount(1);
  
//     const upfrontRows = await upfrontBlock.locator('.row');
//     await expect(upfrontRows.nth(0)).toHaveText('Upfront');
    
//     const upfrontPrice = await upfrontRows.nth(1).textContent();
//     await expect(upfrontRows.nth(1)).toHaveText(new RegExp(`\\$\\s*\\d+(\\.\\d{2})?\\s*pay once`));
  
//     // Verify installment price block
//     const installmentBlocks = await page.locator('.installment-price-block');
//     const numPaymentPlans = await installmentBlocks.count();
  
//     for (let i = 0; i < numPaymentPlans; i++) {
//       const block = installmentBlocks.nth(i);
//       const rows = await block.locator('.row');
  
//       const firstRowText = await rows.nth(0).textContent();
//       const numInstallments = parseInt(firstRowText.split(' ')[0]);
//       await expect(rows.nth(0)).toHaveText(`${numInstallments} Installments`);
  
//       const secondRowText = await rows.nth(1).textContent();
//       await expect(rows.nth(1)).toHaveText(/\$\s*\d+(\.\d{2})?\s*per month/);
  
//       // Verify uniqueness of installment plans
//       if (i > 0) {
//         const prevBlockText = await installmentBlocks.nth(i - 1).textContent();
//         await expect(block).not.toHaveText(prevBlockText);
//       }
//     }
//   });
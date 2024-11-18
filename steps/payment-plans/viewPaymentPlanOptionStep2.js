import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('there should be only one upfront price', async function () {

     const upfrontBlock = paymentPlanPage.UpfrontText.textContent;
     await expect(upfrontBlock).toHaveCount(1);

    // const spanElements = paymentPlanPage.UpfrontText;

    // const count = await spanElements.count();
    // let upfrontCount = 0;

    // for (let i = 0; i < count; i++) {
    //   const text = await spanElements.nth(i).textContent();
    //   if (text === 'upfront') {
    //     upfrontCount++;
    //   }
    // }

    //expect(upfrontCount).toBe(1);

});

Then('text the first row should be {string}', async function (string) {
});

Then('the second row should be {string}', async function (string) {
});





Then('there must be total <num> Payment Plans', async function () {
});

Then('there can be <number_of_installments> installments', async function () {
});

Then('text of first row sould be {string}', async function (string) {
});

Then('text of second row sould be {string}', async function (string) {
});

Then('installment plans should be unique', async function () {
});


test('Verify upfront and installment price blocks', async ({ page }) => {
    // Navigate to the enrollment page and proceed to step two
    await page.goto('https://example.com/enrollment');
    await page.click('button:text("Next")');
  
    // Verify upfront price block
    const upfrontBlock = await page.locator('.upfront-price-block');
    await expect(upfrontBlock).toHaveCount(1);
  
    const upfrontRows = await upfrontBlock.locator('.row');
    await expect(upfrontRows.nth(0)).toHaveText('Upfront');
    
    const upfrontPrice = await upfrontRows.nth(1).textContent();
    await expect(upfrontRows.nth(1)).toHaveText(new RegExp(`\\$\\s*\\d+(\\.\\d{2})?\\s*pay once`));
  
    // Verify installment price block
    const installmentBlocks = await page.locator('.installment-price-block');
    const numPaymentPlans = await installmentBlocks.count();
  
    for (let i = 0; i < numPaymentPlans; i++) {
      const block = installmentBlocks.nth(i);
      const rows = await block.locator('.row');
  
      const firstRowText = await rows.nth(0).textContent();
      const numInstallments = parseInt(firstRowText.split(' ')[0]);
      await expect(rows.nth(0)).toHaveText(`${numInstallments} Installments`);
  
      const secondRowText = await rows.nth(1).textContent();
      await expect(rows.nth(1)).toHaveText(/\$\s*\d+(\.\d{2})?\s*per month/);
  
      // Verify uniqueness of installment plans
      if (i > 0) {
        const prevBlockText = await installmentBlocks.nth(i - 1).textContent();
        await expect(block).not.toHaveText(prevBlockText);
      }
    }
  });


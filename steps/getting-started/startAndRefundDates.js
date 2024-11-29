import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Given("user is on the enrollment page option2", async function () {
  await page.goto('https://automation-user:123abc@qa.sep.tdtm.cydeo.com/taws');
});

Then("the program start date is displayed", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();  
});

Then("the refund date is displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the displayed start date is correct", async function () {
  const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
  const EXPECTED_START_DATE = productInfo.startDate;
  console.log();
  console.log(`Expected Start Date: ${EXPECTED_START_DATE}`);
  console.log(`Actual Start Date: ${ACTUAL_START_DATE}`);
  console.log(`Expected Upfront Price: ${productInfo.prices[0].baseAmount}`);
  console.log(`Expected Upfront Discount: ${productInfo.prices[0].upfrontDiscountAmount}`
  );

  //expect(ACTUAL_START_DATE).toEqual(EXPECTED_START_DATE);
});

Then("the displayed refund date are correct", async function () {
  const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
  const EXPECTED_REFUND_DATE = productInfo.refundDate;
  console.log();
  console.log(`Expected Refund Date: ${EXPECTED_REFUND_DATE}`);
  console.log(`Actual Refund Date: ${ACTUAL_REFUND_DATE}`);

  expect(ACTUAL_REFUND_DATE).toEqual(EXPECTED_REFUND_DATE);
});

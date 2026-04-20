import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then("upfront payment option should be highlighted", async function () {
    expect (paymentPlanPage.upfrontPaymentFrame).toHaveAttribute("ng-reflect-ng-class", "plan-selected") 
});

Then("installments payment option should be highlighted", async function () {
    expect (paymentPlanPage.installmentsPaymentFrame).toHaveAttribute("ng-reflect-ng-class", "plan-selected");
}); 
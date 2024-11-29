import { BasePage } from "./BasePage.js";

export class ConfirmationPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);    

    // Unique
    this.confirmationTitle = page.locator(
      "//p[@class = 'confirmation-title']"
    );
    // Unique
    this.Step4isShown = page.locator(
      "//div[@class='stepper']/following-sibling::div[contains(@class, 'step4') and contains(@class, 'step4 show-step')]"
    );

    // works for DOM
    this.paymentConfirmationBlock = page.locator(
      "//div[@class='stepper']/following-sibling::div[contains(@class, 'step4')]"
    );
    // works for DOM
    this.paymentConfirmationBlock = page.locator(
      "//div[@class = 'payment-confirmation']"
    );
    // works for DOM
    this.emailClientInfo = page.locator(
      "//div[@class='payment-confirmation']//u"
    );
    // works for DOM
    this.programNameInfo = page.locator(
      "//div[@class='payment-confirmation']//span[@class='purplish']"
    );
    // works for DOM
    this.emailSupport1 = page.locator(
      "(//div[@class='support']//span[@class='support-email'])[1]"
    );
    // works for DOM  
    this.emailSupport2 = page.locator(
      "(//div[@class='support']//span[@class='support-email'])[2]"
    );
    // works for DOM
    // this.step1 = page.locator("//div[@class='step-circle'][contains(.,'1')]");
    // this.step2 = page.locator("//div[@class='step-circle'][contains(.,'2')]");
    // this.step3 = page.locator("//div[@class='step-circle'][contains(.,'3')]");
    // this.UpfrontText = page.locator("//span[@class='payment-type']");







  }
}

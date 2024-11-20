import { BasePage } from "./BasePage.js";

export class ConfirmationPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);    


    this.paymentConfirmationStep4 = page.locator(
      "(//div[@class='stepper']/following-sibling::div[contains(@class, 'step4')])"
    ); 

    this.Step4isShown = page.locator(
      "//div[@class='stepper']/following-sibling::div[contains(@class, 'step4') and contains(@class, 'step4 show-step')]"
    );
    
    this.paymentConfirmationBlock = page.locator(
      "(//div[@class = 'payment-confirmation'])"
    );

    this.emailClientInfo = page.locator(
      "//div[@class='payment-confirmation']//u"
    );

    this.programNameInfo = page.locator(
      "//div[@class='payment-confirmation']//span[@class='purplish']"
    );

    this.emaiSupport1 = page.locator(
      "//div[@class='support']//span[@class='support-email'][1]"
    );

    this.emaiSupport2 = page.locator(
      "//div[@class='support']//span[@class='support-email'][2]"
    );



  }
}

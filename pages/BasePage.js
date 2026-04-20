import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async login() {
    await this.page.goto(`https://${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}@qa.sep.tdtm.cydeo.com/taws`);
    BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    await this.page.waitForTimeout(700);
  }

}

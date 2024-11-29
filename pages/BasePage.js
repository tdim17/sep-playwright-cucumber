import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

  }
  
  async login(){
    
    /*
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    //let code = Buffer.from("automation-user:123abc").toString("base64");

    console.log(`Credentials based64 format: ${code}`);
    //await this.page.waitForTimeout(2000);
    await this.page.setExtraHTTPHeaders({Authorization: `Basic ${ String(code)}`});
    //await this.page.setExtraHTTPHeaders({Authorization: `Basic ` + btoa('automation-user:123abc')});


    await this.page.goto("https://qa.sep.tdtm.cydeo.com/taws");
    
    //BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    //await this.page.waitForTimeout(2000);
    */

    //await this.page.goto('https://automation-user:123abc@qa.sep.tdtm.cydeo.com/taws');

    await this.page.goto(`https://${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}@qa.sep.tdtm.cydeo.com/taws`);


  }

}
import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  page,
  leftMainPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("'Cydeo Secure Checkout' has to be displayed", async function () {
  const secureCheckoutElement = leftMainPage.secureCheckout;
  await expect(secureCheckoutElement).toBeVisible();
  const secureCheckoutTextActual = await secureCheckoutElement.innerText();
  const secureCheckoutTextExpected = "Secure checkout ";
  expect(secureCheckoutTextActual).toEqual(secureCheckoutTextExpected);
});

Then("'program name' has to be displayed", async function () {
  const programNameExpected = productInfo.programName;
  await expect(leftMainPage.programName).toBeVisible();
  const programNameActual = await leftMainPage.programName.innerText();
  expect(programNameActual).toEqual(programNameExpected);
});

Then("'logo' has to be displayed on the leftMain page", async function () {
  const logo = leftMainPage.logo;
  await expect(logo).toBeVisible();
});

Then(
  "'Terms and Conditions' has to be displayed on the leftMain page",
  async function () {
    const termsAndConditions = leftMainPage.footerElements.getByText(
      "Terms and Conditions"
    );

    console.log(" termsAndConditions: " + termsAndConditions);
    await expect(termsAndConditions).toBeVisible();
  }
);

Then(
  "'Privacy Policy' has to be displayed on the leftMain page",
  async function () {
    const privacy = leftMainPage.footerElements.getByText("Privacy Policy");
    console.log(" Privacy Policy: " + privacy);
    await expect(privacy).toBeVisible();
  }
);

Then(
  "'Disclaimer' has to be displayed on the leftMain page",
  async function () {
    const disclaimer = leftMainPage.footerElements.getByText("Disclaimer");
    console.log(" Disclaimer: " + disclaimer);
    await expect(disclaimer).toBeVisible();
  }
);

Then(
  "'Cookie Policy' has to be displayed on the leftMain page",
  async function () {
    const cookie = leftMainPage.footerElements.getByText("Cookie Policy");
    console.log(" Cookie: " + cookie);
    await expect(cookie).toBeVisible();
  }
);

Then(
  "'contact us' has to be displayed in the footer on the right page",
  async function () {
    const contactUs = await startApplicationPage.footer.first().innerText();
    console.log("Contact Us: " + contactUs);
  }
);

Then("system should be cross-platform capable", async function () {

});

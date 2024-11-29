import { Before, After, setWorldConstructor, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import { initElements } from "../globalPagesSetup.js";
import fs from 'fs';
import path from 'path';
//import { fileURLToPath } from 'url'; // Import for ES module support <<-- added by myself
//import { dirname } from 'path'; // Import for path manipulation  <<-- added by myself

// я добавил эти 2 строки, если что - удалить!
//const __filename = fileURLToPath(import.meta.url); // Get the current file path
//const __dirname = dirname(__filename); // Get the directory name

const BROWSER_TYPE = "chrome";
const HEADLESS_MODE = false;
const MAXIMIZED_WINDOW = true;
const SLOW_MOTION_DELAY = 0; // slow mode in milliseconds
const DEFAULT_TIMEOUT = 20000; // default timeout in milliseconds

// я добавил эти 3 строки, если что - удалить!
//const statePath = path.join(__dirname, 'state.json'); // Use derived __dirname

// Проверка существования файла и его создание с пустым объектом
// if (!fs.existsSync(statePath)) {
//   fs.writeFileSync(statePath, '{}'); // Создаем пустой JSON-файл
// } else {
//   // Если файл существует, проверяем его содержимое
//   const content = fs.readFileSync(statePath, 'utf-8');
//   if (!content) {
//     fs.writeFileSync(statePath, '{}'); // Если файл пустой, заполняем его
//   }
// }

/**
 * This function is executed before each Cucumber scenario. It initializes the browser and page objects.
 *
 * @returns {Promise<void>} - A promise that resolves when the initialization is complete.
 */
Before(async function () {
  await this.init();

  //In order to stay checking:  (все 2 строки добавлены мной дополнительно)  
  //const context = await this.browser.newContext({ storageState: statePath });
  //this.page = await context.newPage();

});

/**
 * This function is executed after each Cucumber scenario. It takes a screenshot of the current page if the scenario fails.
 *
 * @param {import('@cucumber/cucumber').ScenarioResult} scenario - The result of the executed Cucumber scenario.
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken or when the scenario is not failed.
 */
After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await takeScreenshot(this.page, scenario.pickle.name);
  }

  // In order to keep the stay (cokies) (я добавил только одну эту строку, если что)
  //await this.context.storageState({ path: statePath });

  await this.close();
});


/**
 * This function takes a screenshot of the current page when a Cucumber scenario fails.
 *
 * @param {import('@playwright/test').Page} page - The Playwright Page object representing the current page.
 * @param {string} scenarioName - The name of the failed Cucumber scenario.
 *
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken.
 */
async function takeScreenshot(page, scenarioName) {
  if (!page) {
    console.warn('Page object not available, skipping screenshot');
    return;
  }

  const screenshotsDir = path.join(process.cwd(), 'reports', 'screenshots');
  fs.mkdirSync(screenshotsDir, { recursive: true });

  const currentDateTime = new Date().toISOString().replace(/[:T.]/g, '_').slice(0, -5);
  const fileName = `${scenarioName.replace(/\s+/g, '_')}_${currentDateTime}.png`;
  const filePath = path.join(screenshotsDir, fileName);

  await page.screenshot({ path: filePath, fullPage: true });
}

/**
 * CustomWorld class representing the world context for Cucumber tests.
 * It initializes and manages the browser and page objects for each scenario.
 */
class CustomWorld {

  /**
   * Initializes a new browser instance based on the specified browser type.
   *
   * @returns {Promise<import('@playwright/test').Browser>} - A promise that resolves with the launched browser instance.
   */
  async initializeBrowser() {
    const launchOptions = {
      headless: HEADLESS_MODE,
      slowMo: SLOW_MOTION_DELAY,
      args: MAXIMIZED_WINDOW && BROWSER_TYPE.toLowerCase() === "chrome" ? ["--start-maximized"] : [],
    };

    const browserType = BROWSER_TYPE.toLowerCase();
    return await (browserType === "firefox" ? firefox : browserType === "webkit" || browserType === "safari" ? webkit : chromium).launch(launchOptions);
  }

  /**
   * Initializes the browser, context, and page objects for each scenario.
   *
   * @returns {Promise<void>} - A promise that resolves when the initialization is complete.
   */
  async init() {
    this.browser = await this.initializeBrowser();
    // Этот блок был изначально. Я его скрыл, заменив другим ниже по своету AI 
    
    this.context = await this.browser.newContext(MAXIMIZED_WINDOW ? { viewport: null } : {});

    // этот блок добавле мной дополнительно по совету AI
    // this.context = await this.browser.newContext({ 
    //   ...(MAXIMIZED_WINDOW ? { viewport: null } : {}),
    //   storageState: statePath
    // });


    this.page = await this.context.newPage();

    if (MAXIMIZED_WINDOW) {
      await this.page.setViewportSize(await this.page.evaluate(() => ({
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      })));
    }
    initElements(this.page);
  }

  /**
   * Closes the browser and page objects after each scenario.
   *
   * @returns {Promise<void>} - A promise that resolves when the browser and page are closed.
   */
  async close() {
    await Promise.all([
      this.page?.close().catch(err => console.warn('Error closing page:', err)),
      this.browser?.close().catch(err => console.warn('Error closing browser:', err))
    ]);
  }
}

// Set the CustomWorld class as the world constructor for Cucumber tests
setWorldConstructor(CustomWorld);

// Set the default timeout for Cucumber scenarios
setDefaultTimeout(DEFAULT_TIMEOUT);

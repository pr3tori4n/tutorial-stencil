import { newE2EPage } from '@stencil/core/testing';

describe('calcite-select', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-select options='[{ "value": "one"}, {"value": "two"}]'></calcite-select>`).catch(error =>{
      console.error(error);
    });

    const el = await page.find('calcite-select');
    //Example Puppeteer debugging inside browser Start
    //IMPORTANT: See stencil.config.ts testing options. Must disable headless and enable devtools.
    await page.waitForChanges();
    await page.evaluate(() => {
      debugger; //IMPORTANT: debugger; call must be inside page.evaluate for it to be called inside the browser.
    });
    await page.evaluate((html) => {
      console.log(html);
      debugger;
      return Promise.resolve();
    }, el.outerHTML); //IMPORTANT: use page.evaluates second argument to pass data to Chromium for inspection
    //Example Puppeteer debugging inside browser End
    expect(el).not.toBeNull();
  }, 100000); //IMPORTANT: Update the timeout to be long enough to give time to debug the problem
});

import { newE2EPage } from '@stencil/core/testing';

describe('calcite-select', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-select><option>basic render</option></calcite-tip>`).catch(error =>{
      console.error(error);
    });

    const el = await page.find('calcite-select');
    //Example Puppeteer debugging inside browser Start
    await page.evaluate((html) => {
      console.log(html);
      debugger;
      return Promise.resolve();
    }, el.outerHTML);
    //Example Puppeteer debugging inside browser End
    expect(el).not.toBeNull();
  });
});

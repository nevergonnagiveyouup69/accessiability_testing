const { AxeBuilder } = require('@axe-core/playwright');
const { When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I check for violations', async function () {    

    await global.page.goto('https://webaim.org/standards/wcag/checklist')

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags([ 'wcag2aa'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});
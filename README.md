# Accessiability testing

This type of testing ensures that applications are usable by a wide range of people, including those with disabilities. It aims to make applications accessible and navigable for users with different abilities, such as visual, auditory, or mobility impairments.

# Getting Started

After following the setup guides from before 

We can see when we want to test a single page [vite_testing](https://playwright.dev/docs/accessibility-testing).

``` bash
When('I check for violations', async function () {    

    await global.page.goto('https://webaim.org/standards/wcag/checklist')

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2aa'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});
```

This is a example for how to check for wcag violations
We can check for violation in this -> [wcag](https://webaim.org/standards/wcag/checklist).

---

#### Additional Resources

- https://pa11y.org
- https://www.npmjs.com/package/pa11y
- https://designcode.io/figma-handbook-accessibility
- https://www.figma.com/blog/design-for-everyone-with-these-accessibility-focused-plugins/
- https://www.figma.com/blog/the-future-of-design-systems-is-accessible/
- https://playwright.dev/docs/accessibility-testing
- https://harshasuraweera.medium.com/axe-accessibility-testing-with-playwright-html-reports-the-complete-guide-1664636cdad1
- https://www.lambdatest.com/support/docs/accessibility-testing/



---

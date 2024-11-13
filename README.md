# Accessiability testing

This type of testing ensures that applications are usable by a wide range of people, including those with disabilities. It aims to make applications accessible and navigable for users with different abilities, such as visual, auditory, or mobility impairments.

# Getting Started

After following the setup guides from before 

To test a single page we can use [playwrights library](https://playwright.dev/docs/accessibility-testing).

``` bash
When('I check for violations', async function () {    

    await global.page.goto('https://webaim.org/standards/wcag/checklist')

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2aa'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});
```
## Level A Compliance – Basic Accessibility
Level A requirements ensure that essential web content and functionality are accessible to people with disabilities. While some websites may only meet Level A, most aim for higher compliance levels.

### Examples:

**1. Small Local Websites**: Some small business or local government websites may only meet Level A if they lack resources for full accessibility testing. 
For instance:
- Local restaurant websites that offer basic information like contact details and menu options but might lack detailed form labels, proper keyboard navigation, or error messaging.
- Small municipal websites that display information but might not have color contrast adjustments or consistent navigation elements.

**2. News Websites in Developing Regions**: Some news outlets from smaller regions might focus on text and images but may not meet color contrast or resizing requirements, sticking to basic alternative text on images.

![alt-text](<github_assets/image1.png>)

### These sites typically provide:

    - Basic alt text for images,
    - Text descriptions for important elements, and
    - Keyboard functionality on major buttons.

## Level AA Compliance – Common Goal for Most Websites
Level AA is the standard most government, corporate, and educational websites strive for. It ensures that a broad range of accessibility barriers are removed and is usually legally mandated for public services and large organizations.

### Examples:

**1. Government Websites:**

- **USA.gov**: The official web portal of the U.S. government follows Level AA guidelines by providing proper keyboard navigation, text resizing, and consistent layout and navigation across pages.
- **Canada.ca**: This website meets Level AA requirements with strong contrast, accessible forms, alternative text on images, and detailed error suggestions in forms.

**2. Corporate and E-commerce Sites:**

- **Amazon.com**: As one of the largest e-commerce platforms, Amazon generally follows Level AA guidelines. It includes alternative text for images, maintains keyboard navigability, and ensures a consistent structure across pages.
- **Target.com**: Known for its focus on accessibility, Target’s website is designed to be navigable via keyboard, has clear labeling on forms, and meets contrast and text resizing requirements.

**3. Educational Institutions:**

- **Harvard University’s Website**: Strives for Level AA, including accessible navigation, alt text, and accessible media content.

![alt-text](<github_assets/image2.png>)

### These websites feature:

    - High-contrast text,
    - Screen reader-friendly navigation,
    - Clear labels on forms
    - Text resizing options without breaking layout.

## Level AAA Compliance – Enhanced Accessibility
Level AAA is very difficult to achieve due to the complex requirements. It is rarely mandated and is typically implemented by organizations aiming to provide the highest accessibility standards. Only certain specialized websites or specific pages on a website may meet this level.


**1. Web Accessibility Organization Websites:**

- **W3C’s Web Accessibility Initiative (WAI) website:** As the organization that develops WCAG standards, WAI strives for Level AAA, particularly on educational content pages, with high-contrast options, clear headings, customizable text spacing, and minimal animations.
- **WebAIM:** An organization dedicated to web accessibility, WebAIM’s website provides features like consistent vocabulary, sign language support, and tools to reduce cognitive load, meeting many Level AAA standards.

**2. Healthcare and Assistive Technology Websites:**

- **RNIB (Royal National Institute of Blind People):** RNIB’s website offers AAA-level options, including extended contrast, customizable text, and a simple language version for users with cognitive disabilities.
- **Specialized Healthcare Providers:** Some health-focused websites strive for Level AAA to ensure users with disabilities can fully access healthcare information without barriers.

**3. Education or Non-Profit Pages Focused on Accessibility:**

 - **Khan Academy's** have tutorials on inclusive design, that may reach AAA standards, including easy-to-read language, alternative descriptions for complex visuals, and options to reduce motion.

![alt-text](<github_assets/image3.png>)

### These websites often include:

    - Extended text customization options,
    - Sign language or audio descriptions for content,
    - Simplified language or glossary definitions for complex terms,
    - Options to turn off animations or avoid seizure-triggering content.


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

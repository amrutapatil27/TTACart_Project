# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e-checkout.spec.ts >> @P0 @Regression E2E @Checkout Checkout Feature >> should complete checkout successfully
- Location: src\tests\e2e-checkout.spec.ts:39:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]')
    - locator resolved to <button type="button" class="item-btn" data-product="test-allthethings-tshirt-red" data-test="add-to-cart-test-allthethings-tshirt-red">Add to cart</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-foot">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-desc" data-test="inventory-item-desc">This classic TTA t-shirt is perfect to wear when …</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    7 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-desc" data-test="inventory-item-desc">This classic TTA t-shirt is perfect to wear when …</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-foot">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-desc" data-test="inventory-item-desc">This classic TTA t-shirt is perfect to wear when …</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="item-desc" data-test="inventory-item-desc">This classic TTA t-shirt is perfect to wear when …</div> intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - complementary [ref=e2]:
    - button "Close menu" [ref=e3] [cursor=pointer]: ×
    - link "All Items" [ref=e4] [cursor=pointer]:
      - /url: ./inventory.html
    - link "About" [ref=e5] [cursor=pointer]:
      - /url: https://app.thetestingacademy.com/
    - link "Logout" [ref=e6] [cursor=pointer]:
      - /url: "#"
    - link "Reset App State" [ref=e7] [cursor=pointer]:
      - /url: "#"
  - banner [ref=e8]:
    - button "Open menu" [ref=e9] [cursor=pointer]:
      - img [ref=e10]
    - generic [ref=e12]: TTACart
    - link "Shopping cart" [ref=e13] [cursor=pointer]:
      - /url: ./cart.html
      - img [ref=e14]
  - generic [ref=e18]:
    - generic [ref=e19]: Products
    - generic [ref=e20]:
      - img [ref=e21]
      - combobox "Sort products" [ref=e23] [cursor=pointer]:
        - option "Name (A to Z)" [selected]
        - option "Name (Z to A)"
        - option "Price (low to high)"
        - option "Price (high to low)"
  - main [ref=e24]:
    - generic [ref=e26]:
      - article [ref=e27]:
        - link [ref=e28] [cursor=pointer]:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - img [ref=e29]:
            - generic [ref=e31]: test.
            - generic [ref=e32]: all()
        - generic [ref=e33]:
          - link "Test.allTheThings() T-Shirt (Red)" [ref=e35] [cursor=pointer]:
            - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - generic [ref=e36]: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e37]:
            - generic [ref=e38]: $15.99
            - button "Add to cart" [ref=e39] [cursor=pointer]
      - article [ref=e40]:
        - link [ref=e41] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-bike-light
          - img [ref=e42]
        - generic [ref=e48]:
          - link "TTA Bike Light" [ref=e50] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-bike-light
          - generic [ref=e51]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e52]:
            - generic [ref=e53]: $9.99
            - button "Add to cart" [ref=e54] [cursor=pointer]
      - article [ref=e55]:
        - link [ref=e56] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
          - img [ref=e57]
        - generic [ref=e60]:
          - link "TTA Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-bolt-tshirt
          - generic [ref=e63]: Get your testing superhero on with the TTA bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - article [ref=e67]:
        - link [ref=e68] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
          - img [ref=e69]
        - generic [ref=e75]:
          - link "TTA Fleece Jacket" [ref=e77] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-fleece-jacket
          - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - article [ref=e82]:
        - link [ref=e83] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
          - img [ref=e84]:
            - generic [ref=e88]: JR
        - generic [ref=e89]:
          - link "TTA Junior Tester Onesie" [ref=e91] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-junior-tester-onesie
          - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e93]:
            - generic [ref=e94]: $7.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
      - article [ref=e96]:
        - link [ref=e97] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-practice-backpack
          - img [ref=e98]
        - generic [ref=e103]:
          - link "TTA Practice Backpack" [ref=e105] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-practice-backpack
          - generic [ref=e106]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e107]:
            - generic [ref=e108]: $29.99
            - button "Add to cart" [ref=e109] [cursor=pointer]
  - contentinfo [ref=e111]:
    - generic [ref=e112]:
      - link "Twitter" [ref=e113] [cursor=pointer]:
        - /url: https://twitter.com/TheTestingAcad
        - img [ref=e114]
      - link "Facebook" [ref=e116] [cursor=pointer]:
        - /url: https://facebook.com/
        - img [ref=e117]
      - link "LinkedIn" [ref=e119] [cursor=pointer]:
        - /url: https://linkedin.com/
        - img [ref=e120]
    - generic [ref=e122]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=e123] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=e124] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1   | // Whatever the common utilities are there, it will be present in the util element locator. 
  2   | 
  3   | /**
  4   |  * This is UtilElementLocators - Contains all the util we can reuse direclty
  5   |  * 
  6   |  **/
  7   | 
  8   | import { expect, Locator, Page } from '@playwright/test';
  9   | import { createLogger, type Logger } from '@utils/logger';
  10  | 
  11  | 
  12  | export const DEFAULT_ACTION_TIMEOUT_MS = 15_000;
  13  | 
  14  | 
  15  | /**
  16  |  * Flex - a selector can be a CSS string or an already-built Locator.
  17  |  *
  18  |  * The TTACart suite uses `data-test` attributes everywhere, so most call sites
  19  |  * pass either:
  20  |  *   - `'[data-test="username"]'`  (a CSS string), or
  21  |  *   - `page.getByTestId('username')` (a Locator object).
  22  |  */
  23  | 
  24  | export type Flex = string | Locator;
  25  | 
  26  | export class UtilElementLocator {
  27  |     private readonly page: Page;
  28  |     private readonly log: Logger;
  29  | 
  30  |     constructor(page: Page, scope: string = 'UtilElementLocator') {
  31  |         this.page = page;
  32  |         this.log = createLogger(scope);
  33  |     }
  34  | 
  35  | 
  36  |     private toLocator(target: Flex): Locator {
  37  |         return typeof target === 'string' ? this.page.locator(target) : target;
  38  |     }
  39  | 
  40  |     /** Human-readable label for a target, used only in log lines. */
  41  |     private describe(target: Flex): string {
  42  |         return typeof target === 'string' ? target : target.toString();
  43  |     }
  44  | 
  45  |     // ---------- mouse actions ----------
  46  | 
  47  |     async click(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  48  |         const loc = this.toLocator(target); // Checking if it is a normal locator or a Playwright locator.
  49  |         this.log.debug(`click ${this.describe(target)}`);
> 50  |         await loc.click({ timeout });
      |                   ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  51  |     }
  52  |     async doubleClick(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  53  |         const loc = this.toLocator(target);
  54  |         await loc.dblclick({ timeout });
  55  |     }
  56  |     async rightClick(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  57  |         const loc = this.toLocator(target);
  58  |         await loc.click({ button: 'right', timeout });
  59  |     }
  60  |     async hover(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  61  |         const loc = this.toLocator(target);
  62  |         await loc.hover({ timeout });
  63  |     }
  64  | 
  65  |     // ---------- input actions ----------
  66  | 
  67  |     async fill(target: Flex, value: string, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  68  |         const loc = this.toLocator(target);
  69  |         this.log.debug(`fill ${this.describe(target)}`);
  70  |         await loc.fill(value, { timeout });
  71  |     }
  72  |     async type(target: Flex, value: string, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  73  |         // Note: Playwright deprecated .type() in favour of .pressSequentially().
  74  |         // We keep the public method name so the API still reads naturally for
  75  |         // students used to the older verb.
  76  |         const loc = this.toLocator(target);
  77  |         await loc.pressSequentially(value, { timeout });
  78  |     }
  79  |     async clear(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  80  |         const loc = this.toLocator(target);
  81  |         await loc.clear({ timeout });
  82  |     }
  83  |     async pressSequentially(
  84  |         target: Flex,
  85  |         value: string,
  86  |         timeout: number = DEFAULT_ACTION_TIMEOUT_MS,
  87  |     ): Promise<void> {
  88  |         const loc = this.toLocator(target);
  89  |         await loc.pressSequentially(value, { timeout });
  90  |     }
  91  | 
  92  |     // ---------- text & content getters ----------
  93  | 
  94  |     async getText(target: Flex): Promise<string> {
  95  |         const loc = this.toLocator(target);
  96  |         const txt = (await loc.textContent()) ?? '';
  97  |         return txt.trim();
  98  |     }
  99  | 
  100 |     async getInnerText(target: Flex): Promise<string> {
  101 |         const loc = this.toLocator(target);
  102 |         return (await loc.innerText()).trim();
  103 |     }
  104 |     async getAllTexts(target: Flex): Promise<string[]> {
  105 |         const loc = this.toLocator(target);
  106 |         const texts = await loc.allTextContents();
  107 |         return texts.map((t) => t.trim());
  108 |     }
  109 | 
  110 |     async getAttr(target: Flex, name: string): Promise<string | null> {
  111 |         const loc = this.toLocator(target);
  112 |         return loc.getAttribute(name);
  113 |     }
  114 | 
  115 |     async getValue(target: Flex): Promise<string> {
  116 |         const loc = this.toLocator(target);
  117 |         return loc.inputValue();
  118 |     }
  119 | 
  120 |     // ---------- count ----------
  121 | 
  122 |     async count(target: Flex): Promise<number> {
  123 |         const loc = this.toLocator(target);
  124 |         return loc.count();
  125 |     }
  126 | 
  127 |     // ---------- state checks ----------
  128 | 
  129 |     async isVisible(target: Flex): Promise<boolean> {
  130 |         const loc = this.toLocator(target);
  131 |         return loc.isVisible();
  132 |     }
  133 | 
  134 |     async isEnabled(target: Flex): Promise<boolean> {
  135 |         const loc = this.toLocator(target);
  136 |         return loc.isEnabled();
  137 |     }
  138 | 
  139 |     async isChecked(target: Flex): Promise<boolean> {
  140 |         const loc = this.toLocator(target);
  141 |         return loc.isChecked();
  142 |     }
  143 | 
  144 |     // ---------- waits ----------
  145 | 
  146 |     async waitForVisible(target: Flex, timeout: number = DEFAULT_ACTION_TIMEOUT_MS): Promise<void> {
  147 |         const loc = this.toLocator(target);
  148 |         await expect(loc).toBeVisible({ timeout });
  149 |     }
  150 | 
```
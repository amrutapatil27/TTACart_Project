# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e-checkout.spec.ts >> @P0 @Regression E2E @Checkout Checkout Feature >> should complete checkout successfully
- Location: src\tests\e2e-checkout.spec.ts:30:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 3
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
      - generic [ref=e18]: "1"
  - generic [ref=e20]: Your Cart
  - main [ref=e21]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]: QTY
        - generic [ref=e26]: Description
      - generic [ref=e27]:
        - generic [ref=e29]: "1"
        - generic [ref=e30]:
          - link "Test.allTheThings() T-Shirt (Red)" [ref=e31] [cursor=pointer]:
            - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - generic [ref=e32]: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e33]: $15.99
        - button "Remove" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Continue Shopping" [ref=e37] [cursor=pointer]:
          - /url: ./inventory.html
          - img [ref=e38]
          - text: Continue Shopping
        - link "Checkout" [ref=e40] [cursor=pointer]:
          - /url: ./checkout-step-one.html
  - contentinfo [ref=e42]:
    - generic [ref=e43]:
      - link "Twitter" [ref=e44] [cursor=pointer]:
        - /url: https://twitter.com/TheTestingAcad
        - img [ref=e45]
      - link "Facebook" [ref=e47] [cursor=pointer]:
        - /url: https://facebook.com/
        - img [ref=e48]
      - link "LinkedIn" [ref=e50] [cursor=pointer]:
        - /url: https://linkedin.com/
        - img [ref=e51]
    - generic [ref=e53]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=e54] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=e55] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1  | /**
  2  |  * End-to-end checkout flow:
  3  |  *   1. Log in as a standard user (standard_user / tta_secret).
  4  |  *   2. Navigate to the inventory page.
  5  |  *   3. Add the first item to the cart.
  6  |  *   4. Navigate to the cart page.
  7  |  *   5. From the cart, proceed through checkout step one and checkout step two.
  8  |  *   6. Enter the customer details and complete the order.
  9  |  */
  10 | 
  11 | import { test, expect } from '@fixtures/test-base';
  12 | import { DataGenerator } from '@utils/DataGenerator';
  13 | import { credentials } from '@config/credentials';
  14 | import { createLogger } from '@utils/logger';
  15 | import { visualStep } from '@utils/visualStep';
  16 | 
  17 | const log = createLogger('e2e-checkout');
  18 | 
  19 | // First product card on the TTACart inventory page.
  20 | const FIRST_ITEM_ID = 'test-allthethings-tshirt-red';
  21 | 
  22 | test.describe('@P0 @Regression E2E @Checkout Checkout Feature', () => {
  23 |     // Step 1 — every test in this suite starts already logged in.
  24 |     test.beforeEach(async ({ loginPage }) => {
  25 |         log.info(`Step 1: logging in as ${credentials.standardUser}`);
  26 |         await loginPage.open();
  27 |         await loginPage.loginAs(credentials.standardUser, credentials.password);
  28 |     });
  29 | 
  30 |     test('should complete checkout successfully', async ({
  31 |         page,
  32 |         inventoryPage,
  33 |         cartPage,
  34 |         checkoutStepOnePage,
  35 |         checkoutStepTwoPage,
  36 |         checkoutCompletePage,
  37 |     }) => {
  38 |         const customer = DataGenerator.checkoutCustomer();
  39 | 
  40 |         // Step 2 — inventory
  41 |         await visualStep(page, 'Go to the inventory page', async () => {
  42 |             log.info('Step 2: navigating to the inventory page');
  43 |             await inventoryPage.open();
  44 |         });
  45 | 
  46 |         // Step 3 — add one item
  47 |         await visualStep(page, 'Add one item to the cart', async () => {
  48 |             log.info(`Step 3: adding item "${FIRST_ITEM_ID}" to the cart`);
  49 |             await inventoryPage.addToCart(FIRST_ITEM_ID);
  50 |         });
  51 | 
  52 |         // Step 4 — cart, then checkout step one + step two
  53 |         await visualStep(page, 'Open the cart', async () => {
  54 |             log.info('Step 4: opening the cart and verifying one row');
  55 |             await cartPage.open();
> 56 |             expect(await cartPage.rowCount()).toBe(1);
     |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
  57 |         });
  58 | 
  59 |         await visualStep(page, 'Fill guest details (checkout step one)', async () => {
  60 |             log.info(`Step 5a: filling guest details for ${customer.firstName} ${customer.lastName}`);
  61 |             await cartPage.checkout();
  62 |             await checkoutStepOnePage.assertLoaded();
  63 |             await checkoutStepOnePage.fillGuest(customer);
  64 |             await checkoutStepOnePage.continue();
  65 |         });
  66 | 
  67 |         await visualStep(page, 'Finish the order (checkout step two)', async () => {
  68 |             log.info('Step 5b: reviewing the overview and finishing the order');
  69 |             await checkoutStepTwoPage.assertLoaded();
  70 |             await checkoutStepTwoPage.finish();
  71 |         });
  72 | 
  73 |         // Step 5 — order complete
  74 |         await visualStep(page, 'Order is complete', async () => {
  75 |             log.info('Step 6: asserting the order is complete');
  76 |             await checkoutCompletePage.assertOrderComplete();
  77 |         });
  78 |     });
  79 | 
  80 | 
  81 | 
  82 | 
  83 | 
  84 | 
  85 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e-checkout.spec.ts >> @P0 @Regression E2E @Checkout Checkout Feature >> should complete checkout successfully
- Location: src\tests\e2e-checkout.spec.ts:39:5

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
    - link "All Items" [ref=e4]:
      - /url: ./inventory.html
    - link "About" [ref=e5]:
      - /url: https://app.thetestingacademy.com/
    - link "Logout" [ref=e6]:
      - /url: "#"
    - link "Reset App State" [ref=e7]:
      - /url: "#"
  - banner [ref=e8]:
    - button "Open menu" [ref=e9] [cursor=pointer]:
      - img [ref=e10]
    - generic [ref=e12]: TTACart
    - link "Shopping cart" [ref=e13]:
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
          - link "Test.allTheThings() T-Shirt (Red)" [ref=e31]:
            - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - generic [ref=e32]: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e33]: $15.99
        - button "Remove" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Continue Shopping" [ref=e37]:
          - /url: ./inventory.html
          - img [ref=e38]
          - text: Continue Shopping
        - link "Checkout" [ref=e40]:
          - /url: ./checkout-step-one.html
  - contentinfo [ref=e42]:
    - generic [ref=e43]:
      - link "Twitter" [ref=e44]:
        - /url: https://twitter.com/TheTestingAcad
        - img [ref=e45]
      - link "Facebook" [ref=e47]:
        - /url: https://facebook.com/
        - img [ref=e48]
      - link "LinkedIn" [ref=e50]:
        - /url: https://linkedin.com/
        - img [ref=e51]
    - generic [ref=e53]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=e54]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=e55]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1   | /**
  2   |  * End-to-end checkout flow:
  3   |  *   1. Log in as a standard user (standard_user / tta_secret).
  4   |  *   2. Navigate to the inventory page.
  5   |  *   3. Add the first item to the cart.
  6   |  *   4. Navigate to the cart page.
  7   |  *   5. From the cart, proceed through checkout step one and checkout step two.
  8   |  *   6. Enter the customer details and complete the order.
  9   |  */
  10  | /**
  11  |  * End-to-end checkout flow:
  12  |  *   1. Log in as a standard user (standard_user / tta_secret).
  13  |  *   2. Navigate to the inventory page.
  14  |  *   3. Add the first item to the cart.
  15  |  *   4. Navigate to the cart page.
  16  |  *   5. From the cart, proceed through checkout step one and checkout step two.
  17  |  *   6. Enter the customer details and complete the order.
  18  |  */
  19  | 
  20  | import { test, expect } from '@fixtures/test-base';
  21  | import { DataGenerator } from '@utils/DataGenerator';
  22  | import { credentials } from '@config/credentials';
  23  | import { createLogger } from '@utils/logger';
  24  | import { visualStep } from '@utils/visualStep';
  25  | 
  26  | const log = createLogger('e2e-checkout');
  27  | 
  28  | // First product card on the TTACart inventory page.
  29  | const FIRST_ITEM_ID = 'test-allthethings-tshirt-red';
  30  | 
  31  | test.describe('@P0 @Regression E2E @Checkout Checkout Feature', () => {
  32  |     // Step 1 — every test in this suite starts already logged in.
  33  |     test.beforeEach(async ({ loginPage }) => {
  34  |         log.info(`Step 1: logging in as ${credentials.standardUser}`);
  35  |         await loginPage.open();
  36  |         await loginPage.loginAs(credentials.standardUser, credentials.password);
  37  |     });
  38  | 
  39  |     test('should complete checkout successfully', async ({
  40  |         page,
  41  |         inventoryPage,
  42  |         cartPage,
  43  |         checkoutStepOnePage,
  44  |         checkoutStepTwoPage,
  45  |         checkoutCompletePage,
  46  |     }) => {
  47  |         const customer = DataGenerator.checkoutCustomer();
  48  | 
  49  |         // Step 2 — inventory
  50  |         await visualStep(page, 'Go to the inventory page', async () => {
  51  |             log.info('Step 2: navigating to the inventory page');
  52  |             await inventoryPage.open();
  53  |         });
  54  | 
  55  |         // Step 3 — add one item
  56  |         await visualStep(page, 'Add one item to the cart', async () => {
  57  |             log.info(`Step 3: adding item "${FIRST_ITEM_ID}" to the cart`);
  58  |             await inventoryPage.addToCart(FIRST_ITEM_ID);
  59  |         });
  60  | 
  61  |         // Step 4 — cart, then checkout step one + step two
  62  |         await visualStep(page, 'Open the cart', async () => {
  63  |             log.info('Step 4: opening the cart and verifying one row');
  64  |             await cartPage.open();
> 65  |             expect(await cartPage.rowCount()).toBe(1);
      |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
  66  |         });
  67  | 
  68  |         await visualStep(page, 'Fill guest details (checkout step one)', async () => {
  69  |             log.info(`Step 5a: filling guest details for ${customer.firstName} ${customer.lastName}`);
  70  |             await cartPage.checkOut();
  71  |             await checkoutStepOnePage.assertLoaded();
  72  |             await checkoutStepOnePage.fillGuest(customer);
  73  |             await checkoutStepOnePage.continue();
  74  |         });
  75  | 
  76  |         await visualStep(page, 'Finish the order (checkout step two)', async () => {
  77  |             log.info('Step 5b: reviewing the overview and finishing the order');
  78  |             await checkoutStepTwoPage.assertLoaded();
  79  |             await checkoutStepTwoPage.finish();
  80  |         });
  81  | 
  82  |         // Step 5 — order complete
  83  |         await visualStep(page, 'Order is complete', async () => {
  84  |             log.info('Step 6: asserting the order is complete');
  85  |             await checkoutCompletePage.assertOrderComplete();
  86  |         });
  87  |     });
  88  | 
  89  | 
  90  | 
  91  | 
  92  | 
  93  | 
  94  | });
  95  | 
  96  | /*
  97  | import { test, expect } from '@fixtures/test-base';
  98  | import { DataGenerator } from '@utils/DataGenerator';
  99  | import { credentials } from '@config/credentials';
  100 | import { createLogger } from '@utils/logger';
  101 | import { visualStep } from '@utils/visualStep';
  102 | 
  103 | const log = createLogger('e2e-checkout');
  104 | 
  105 | // First product card on the TTACart inventory page.
  106 | const FIRST_ITEM_ID = 'test-allthethings-tshirt-red';
  107 | 
  108 | test.describe('@P0 @Regression E2E @Checkout Checkout Feature', () => {
  109 |     // Step 1 — every test in this suite starts already logged in.
  110 |     test.beforeEach(async ({ loginPage }) => {
  111 |         log.info(`Step 1: logging in as ${credentials.standardUser}`);
  112 |         await loginPage.open();
  113 |         await loginPage.loginAs(credentials.standardUser, credentials.password);
  114 |     });
  115 | 
  116 |     test('should complete checkout successfully', async ({
  117 |         page,
  118 |         inventoryPage,
  119 |         cartPage,
  120 |         checkoutStepOnePage,
  121 |         checkoutStepTwoPage,
  122 |         checkoutCompletePage,
  123 |     }) => {
  124 |         const customer = DataGenerator.checkoutCustomer();
  125 | 
  126 |         // Step 2 — inventory
  127 |         await visualStep(page, 'Go to the inventory page', async () => {
  128 |             log.info('Step 2: navigating to the inventory page');
  129 |             await inventoryPage.open();
  130 |         });
  131 | 
  132 |         // Step 3 — add one item
  133 |         await visualStep(page, 'Add one item to the cart', async () => {
  134 |             log.info(`Step 3: adding item "${FIRST_ITEM_ID}" to the cart`);
  135 |             await inventoryPage.addToCart(FIRST_ITEM_ID);
  136 |         });
  137 | 
  138 |         // Step 4 — cart, then checkout step one + step two
  139 |         await visualStep(page, 'Open the cart', async () => {
  140 |             log.info('Step 4: opening the cart and verifying one row');
  141 |             await cartPage.open();
  142 |             expect(await cartPage.rowCount()).toBe(1);
  143 |         });
  144 | 
  145 |         await visualStep(page, 'Fill guest details (checkout step one)', async () => {
  146 |             log.info(`Step 5a: filling guest details for ${customer.firstName} ${customer.lastName}`);
  147 |             await cartPage.checkout();
  148 |             await checkoutStepOnePage.assertLoaded();
  149 |             await checkoutStepOnePage.fillGuest(customer);
  150 |             await checkoutStepOnePage.continue();
  151 |         });
  152 | 
  153 |         await visualStep(page, 'Finish the order (checkout step two)', async () => {
  154 |             log.info('Step 5b: reviewing the overview and finishing the order');
  155 |             await checkoutStepTwoPage.assertLoaded();
  156 |             await checkoutStepTwoPage.finish();
  157 |         });
  158 | 
  159 |         // Step 5 — order complete
  160 |         await visualStep(page, 'Order is complete', async () => {
  161 |             log.info('Step 6: asserting the order is complete');
  162 |             await checkoutCompletePage.assertOrderComplete();
  163 |         });
  164 |     });
  165 | 
```
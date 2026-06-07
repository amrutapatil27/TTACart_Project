import { type Locator, type Page } from '@playwright/test';

export class Loginpage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly male: Locator;
  readonly profileDate: Locator;
  readonly manualTester: Locator;
  readonly automationTester: Locator;
  readonly itemTestAllthethingsTshirtRed: Locator;
  readonly itemTtaBikeLightTitle: Locator;
  readonly itemTtaBoltTshirtTitle: Locator;
  readonly addToCartTestAllthethings: Locator;
  readonly addToCartTtaBike: Locator;
  readonly ttacart: Locator;
  readonly inventorySidebarLink: Locator;
  readonly itemTestAllthethingsTshirtRed2: Locator;
  readonly addToCartTestAllthethings2: Locator;
  readonly itemTtaBikeLightTitle2: Locator;
  readonly 999: Locator;
  readonly addToCartTtaBike2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId("first-name").or(page.locator("#first-name")).or(page.locator("[name=\"firstName\"]"));
    this.lastName = page.getByTestId("last-name").or(page.locator("#last-name")).or(page.locator("[name=\"lastName\"]"));
    this.male = page.getByText("Male");
    this.profileDate = page.getByTestId("profile-date").or(page.locator("#profile-date")).or(page.locator("[name=\"date\"]"));
    this.manualTester = page.getByText("Manual Tester");
    this.automationTester = page.getByText("Automation Tester");
    this.itemTestAllthethingsTshirtRed = page.getByTestId("item-test-allthethings-tshirt-red-title-link").or(page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" })).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
    this.itemTtaBikeLightTitle = page.getByTestId("item-tta-bike-light-title-link").or(page.getByRole("link", { name: "TTA Bike Light" })).or(page.getByText("TTA Bike Light"));
    this.itemTtaBoltTshirtTitle = page.getByTestId("item-tta-bolt-tshirt-title-link").or(page.getByRole("link", { name: "TTA Bolt T-Shirt" })).or(page.getByText("TTA Bolt T-Shirt"));
    this.addToCartTestAllthethings = page.getByTestId("add-to-cart-test-allthethings-tshirt-red").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.addToCartTtaBike = page.getByTestId("add-to-cart-tta-bike-light").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.ttacart = page.getByText("TTACart");
    this.inventorySidebarLink = page.getByTestId("inventory-sidebar-link").or(page.getByRole("link", { name: "All Items" })).or(page.locator("#inventory_sidebar_link"));
    this.itemTestAllthethingsTshirtRed2 = page.getByTestId("item-test-allthethings-tshirt-red-title-link").or(page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" })).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
    this.addToCartTestAllthethings2 = page.getByTestId("add-to-cart-test-allthethings-tshirt-red").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.itemTtaBikeLightTitle2 = page.getByTestId("item-tta-bike-light-title-link").or(page.getByRole("link", { name: "TTA Bike Light" })).or(page.getByText("TTA Bike Light"));
    this.999 = page.getByText("$9.99");
    this.addToCartTtaBike2 = page.getByTestId("add-to-cart-tta-bike-light").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
  }
}

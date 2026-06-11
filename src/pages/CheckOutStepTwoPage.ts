import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckOutStepTwoPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/checkout-step-two.html';

    private readonly title: Locator;
    private readonly inventoryItemName: Locator;
    private readonly inventoryItemPrice: Locator;
    private readonly itemSubtotal: Locator;
    private readonly tax: Locator;
    private readonly total: Locator;
    private readonly buttonFinish: Locator;
    private readonly buttonCancel: Locator;

    constructor(page: Page) {
        super(page, 'CheckOutStepTwoPage');
        this.title = page.locator('[data-test="title"]');
        this.inventoryItemName = page.getByTestId("inventory-item-name");
        this.inventoryItemPrice = page.getByTestId("inventory-item-price");
        this.itemSubtotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.buttonFinish = page.getByRole("button", { name: "Finish" }).or(page.getByTestId("finish")).or(page.locator("#finish-btn"));
        this.buttonCancel = page.getByRole("button", { name: "Cancel" }).or(page.getByTestId("cancel")).or(page.locator("#cancel-btn"));
    }

    async open(): Promise<void> {
        await this.goto(CheckOutStepTwoPage.PATH);
        await this.assertLoaded();
    }

    async assertLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Checkout: Overview');
    }

    async getItemPrice(): Promise<string> {
        return this.el.getText(this.inventoryItemPrice);
    }

    async getItemName(): Promise<string> {
        return this.el.getText(this.inventoryItemName);
    }

    async getSubtotal(): Promise<string> {
        return this.el.getText(this.itemSubtotal);
    }

    async getTax(): Promise<string> {
        return this.el.getText(this.tax);
    }

    async getTotal(): Promise<string> {
        return this.el.getText(this.total);
    }

    async clickFinish(): Promise<void> {
        await this.el.click(this.buttonFinish);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickCancel(): Promise<void> {
        await this.el.click(this.buttonCancel);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async finish(): Promise<void> {
        await this.clickFinish();
    }
}
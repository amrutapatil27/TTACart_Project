import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckOutCompletePage extends BasePage {
    static readonly PATH = '/playwright/ttacart/checkout-complete.html';

    private readonly title: Locator;
    private readonly completeHeader: Locator;
    private readonly completeMessage: Locator;
    private readonly backHome: Locator;

    constructor(page: Page) {
        super(page, 'CheckOutCompletePage');
        this.title = page.locator('[data-test="title"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeMessage = page.locator('[data-test="complete-text"]');
        this.backHome = page.getByRole("button", { name: "Back Home" }).or(page.getByTestId("back-to-products")).or(page.locator("#back-btn"));
    }

    async open(): Promise<void> {
        await this.goto(CheckOutCompletePage.PATH);
        await this.assertLoaded();
    }

    async assertLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Checkout: Complete!');
        await expect(this.completeHeader).toBeVisible();
    }

    async getCompleteMessage(): Promise<string> {
        return this.el.getText(this.completeMessage);
    }

    async getCompleteHeader(): Promise<string> {
        return this.el.getText(this.completeHeader);
    }

    async clickBackHome(): Promise<void> {
        await this.el.click(this.backHome);
        await this.page.waitForLoadState('domcontentloaded');
    }
}

import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/inventory.html';

    private readonly title: Locator;
    private readonly items: Locator;
    private readonly itemNames: Locator;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        super(page, 'InventoryPage');
        this.title = page.locator('[data-test="title"]');
        this.items = page.locator('[data-test="inventory-item"]');
        this.itemNames = page.locator('[data-test="inventory-item-name"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async open(): Promise<void> {
        await this.goto(InventoryPage.PATH);
        await this.assertLoaded();
    }

    async assertLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Products');
        await expect.poll(async () => this.items.count()).toBeGreaterThan(3);
    }

    async productNames(): Promise<string[]> {
        return this.el.getAllTexts(this.itemNames);
    }


    private addBtn(id: string): Locator {
        return this.page.locator(`[data-test="add-to-cart-${id}"]`);
    }
    private removeBtn(id: string): Locator {
        return this.page.locator(`[data-test="remove-${id}"]`);
    }

    async addToCart(id: string): Promise<void> {
        await this.el.click(this.addBtn(id));
    }

    async removeFromCart(id: string): Promise<void> {
        await this.el.click(this.removeBtn(id));
    }

    async openCart(): Promise<void> {
        await this.el.click(this.cartLink);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async openItem(id: string): Promise<void> {
        await this.el.click(this.page.locator(`[data-test="item-${id}-title-link"]`));
        await this.page.waitForLoadState('domcontentloaded');
    }


}
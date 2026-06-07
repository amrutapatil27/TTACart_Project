import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ItemDetailPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/https://app.thetestingacademy.com/playwright/ttacart/inventory-item';
    
  private readonly inventoryItemName: Locator;
  private readonly inventoryItemPrice: Locator;
  private readonly remove: Locator;
  private readonly addToCart: Locator;
  readonly back: Locator;

  constructor(page: Page) {
    super(page, 'ItemDetailPage')
    this.inventoryItemName = page.getByTestId("inventory-item-name");
    this.inventoryItemPrice = page.getByTestId("inventory-item-price");
    this.remove = page.getByTestId("remove");
    this.addToCart = page.getByTestId("add-to-cart");
    this.back = page.getByTestId("back-to-products");
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory-item?id=test-allthethings-tshirt-red");
  }
  async clickOnAddToCart(){
    await this.el.click(this.addToCart);

  }
  async clickOnRemove(){
    await this.el.click(this.remove);

  }
  async clickOnCart(){

  }
  async clickOnBack(): Promise<void>{
    await this.el.click(this.back);
    await this.page.waitForLoadState('domcontentloaded');

  }
}


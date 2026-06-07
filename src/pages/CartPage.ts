import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/cart.html';

    private readonly buttonRemove: Locator;
  private readonly continueShopping: Locator;
  private readonly inventoryItemName: Locator;
  private readonly inventoryItemPrice: Locator;
  private readonly checkout :Locator;
  

  constructor(page: Page) {
        super(page, 'CartPage'); 
        this.buttonRemove = page.getByRole("button", { name: "Remove" });
        this.continueShopping = page.getByTestId("continue-shopping"); 
        this.inventoryItemName = page.getByTestId("inventory-item-name");
        this.inventoryItemPrice = page.getByTestId("inventory-item-price");
        this.checkout=page.getByTestId('checkout');
        
           
    }
    async open(): Promise<void> {
        await this.goto(CartPage.PATH);
        //await this.assertLoaded();
    }
    async Checkout():Promise<void>{
        await this.el.click(this.checkout);
    }
    async ContinueShopping():Promise<void>{
        await this.el.click(this.continueShopping);
        await this.page.waitForLoadState('domcontentloaded');
    }
    async removeButton():Promise<void> {
        await this.el.click(this.buttonRemove);

    }
    async CheckItemPrice(): Promise<String>{
        return this.el.getText(this.inventoryItemPrice);
    }
    async checkItemName(): Promise <String>{
        return this.el.getText(this.inventoryItemName);
    }
    
  
}

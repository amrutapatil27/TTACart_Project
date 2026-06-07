import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckOutStepOnePage extends BasePage {
    static readonly PATH = '/playwright/ttacart/checkout-step-one.html';

    private readonly title: Locator;
    private readonly firstname: Locator;
    private readonly lastname: Locator;
    private readonly postalcode: Locator;
    private readonly buttonContinue: Locator;
    private readonly cancel: Locator;

    constructor(page: Page) {
        super(page, 'CheckOutStepOnePage');
        this.title = page.locator('[data-test="title"]');
        this.firstname = page.getByTestId("firstName").or(page.getByRole("textbox", { name: "First Name" })).or(page.locator("#first-name"));
        this.lastname = page.getByTestId("lastName").or(page.getByRole("textbox", { name: "Last Name" })).or(page.locator("#last-name"));
        this.postalcode = page.getByTestId("postalCode").or(page.getByRole("textbox", { name: "Zip/Postal Code" })).or(page.locator("#postal-code"));
        this.buttonContinue = page.getByRole("button", { name: "Continue" }).or(page.getByTestId("continue")).or(page.locator("#continue-btn"));
        this.cancel = page.getByTestId("cancel").or(page.getByRole("link", { name: "Cancel" })).or(page.getByText("Cancel"));
    }

    async open(): Promise<void> {
        await this.goto(CheckOutStepOnePage.PATH);
        await this.assertLoaded();
    }

    async assertLoaded(): Promise<void> {
        await expect(this.title).toHaveText('Checkout: Your Information');
    }

    async fillFirstName(firstName: string): Promise<void> {
        await this.el.fill(this.firstname, firstName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await this.el.fill(this.lastname, lastName);
    }

    async fillPostalCode(postalCode: string): Promise<void> {
        await this.el.fill(this.postalcode, postalCode);
    }

    async clickContinue(): Promise<void> {
        await this.el.click(this.buttonContinue);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickCancel(): Promise<void> {
        await this.el.click(this.cancel);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillPostalCode(postalCode);
    }
}
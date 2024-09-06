import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private currencySelector = 'text= - USD'; // Assuming it’s a select dropdown
  private thailandButton = 'text=Thailand';    // Thailand button selector
  private privacyAcceptAll = '[data-testid="uc-accept-all-button"]'

  constructor(page: Page) {
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto('/');
  }

  async acceptPrivacy() {
    await this.page.click(this.privacyAcceptAll);
  }

  async selectCurrency( currency: string, currencyReplacedTo: string) {
    await this.page.getByText(currency).click();
    await this.page.getByText(currencyReplacedTo).click();
    
  }

  async selectCountry(country: string) {
    await this.page.click(this.thailandButton); 
  }
}

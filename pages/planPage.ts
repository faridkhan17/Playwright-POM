import { Page, expect } from '@playwright/test';

export interface PlanDetails {
  country: string;
  data: string;
  valid: string;
  planType: string;
  price: string;
}

export class PlanPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private getPlanSelectors(planNumber: number) {
    const baseSelector = `.flex:nth-child(${planNumber}) > .bg-white`;
    return {
      country: `${baseSelector} > .border-\\[\\#DBF879\\] > .flex > .flex:nth-child(1)`,
      data: `${baseSelector} .flex:nth-child(2)`,
      valid: `${baseSelector} .flex:nth-child(3)`,
      planType: `${baseSelector} .flex:nth-child(4)`,
      price: `${baseSelector} .text-\\[24px\\]`
    };
  }

  private cleanText(text: string, toRemove: string[]): string {
    let cleanedText = text;
    for (const item of toRemove) {
      cleanedText = cleanedText.replace(item, '').trim();
    }
    return cleanedText;
  }

  private async getTextContent(selector: string): Promise<string> {
    const textContent = await this.page.textContent(selector);
    return textContent?.trim() ?? '';
  }

  async verifyPlanDetails(planNumber: number, expectedDetails: PlanDetails) {
    const selectors = this.getPlanSelectors(planNumber);
    const country = await this.getTextContent(selectors.country);
    const data = this.cleanText(await this.getTextContent(selectors.data), ['Data']);
    const valid = this.cleanText(await this.getTextContent(selectors.valid), ['Valid']);
    const planType = this.cleanText(await this.getTextContent(selectors.planType), ['Plan type']);
    const price = await this.getTextContent(selectors.price);

    // Perform assertions
    expect(country).toContain(expectedDetails.country);
    expect(data).toContain(expectedDetails.data);
    expect(valid).toContain(expectedDetails.valid);
    expect(planType).toContain(expectedDetails.planType);
    expect(price).toContain(expectedDetails.price);
  }
}

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { PlanPage } from '../pages/planPage';
import { expectedPlanDetails } from '../data/expectedPlanDetails'; // Adjust the path to where your expectedPlanDetails is located


test.describe('Better Roaming Plan Test', () => {
  test('Verify Thailand second plan details', async ({ page }) => {
    const homePage = new HomePage(page);
    const planPage = new PlanPage(page);

    // Open home page and interact
    await homePage.openHomePage();
    await homePage.acceptPrivacy();
    await homePage.selectCurrency('- USD$', 'Euro - €');
    await homePage.selectCountry('Thailand');

    // Verify 2nd Plan Details
    await planPage.verifyPlanDetails(2, expectedPlanDetails);
  });
});


//Edit a lead
import{test, expect} from "@playwright/test";
test('Test to launch a edge browser',async({page})=> {
    //Launch Edge browser

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.getByRole(`link`,{name:'CRM/SFA'}).click();
    await page.getByRole(`link`,{name:'Leads'}).click();//how to find is there any other link with same name
    await page.getByRole(`link`,{name:'Find Leads'}).click();
    //await page.locator(`#ext-gen248`).fill(`Sangeth2`);
    await page.locator('input').nth(35).fill('Sangeth2');
    //(//label[text()="First name:"]/following-sibling::div/input[@name='firstName'])[3]
    //await page.locator('button').nth(6).click();
    await page.getByRole(`button`,{name:'Find Leads'}).click();
    await page.waitForTimeout(30);
    //await page.locator('table.x-grid3-row-table > tbody > tr > td.x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first  > a.linktext').first().click();
    await page.locator('//table[@class="x-grid3-row-table"]//tr/td[@class="x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first "]//a').nth(0).click();
    await page.getByRole(`link`,{name:'Edit'}).click();
    await page.locator(`#updateLeadForm_companyName`).fill('Accenture13');
    await page.locator(`#updateLeadForm_annualRevenue`).fill('2.00');
    await page.locator(`#updateLeadForm_departmentName`).fill('Dev');
    await page.locator(`#updateLeadForm_description`).fill('This is description');
    await page.locator(`input[name="submitButton"]`).nth(0).click();
        //Verification section
    await expect(page.locator(`#viewLead_companyName_sp`)).toContainText('Accenture');
    await expect(page.locator(`#viewLead_annualRevenue_sp`)).toContainText('$2.00');
    await expect(page.locator(`#viewLead_departmentName_sp`)).toContainText('Dev');
    const title1 = await page.title();
    console.log(`This page title is ${title1}`);
    await page.waitForTimeout(3000);
});
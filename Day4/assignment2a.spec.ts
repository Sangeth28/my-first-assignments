import{chromium,test,expect} from "@playwright/test";
test('Test to launch a edge browser',async()=> {
    //Launch Edge browser
    const browser1 = await chromium.launch({channel:"msedge",headless:false});
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();
    await page1.goto(`http://leaftaps.com/opentaps/control/main`);

    await page1.locator(`#username`).fill(`Demosalesmanager`);
    await page1.locator(`#password`).fill(`crmsfa`);
    await page1.locator(`.decorativeSubmit`).click();
    await page1.getByRole(`link`,{name:'CRM/SFA'}).click();
    await page1.getByRole(`link`,{name:'Leads'}).click();
    await page1.getByRole(`link`,{name:'Create Lead'}).click();
    await page1.locator(`#createLeadForm_companyName`).fill('accenture2');
    await page1.locator(`#createLeadForm_firstName`).fill('Sangeth2');
    await page1.locator(`#createLeadForm_lastName`).fill('Raj2');
    await page1.locator(`#createLeadForm_personalTitle`).fill('Quality Engineer');
    await page1.locator(`#createLeadForm_generalProfTitle`).fill('Test Lead');
    await page1.locator(`#createLeadForm_annualRevenue`).fill('20L');
    await page1.locator(`#createLeadForm_departmentName`).fill('Testing');
    await page1.locator(`#createLeadForm_primaryPhoneNumber`).fill('1234567890');
    await page1.locator(`input[name="submitButton"]`).click();
    //Verification section
    await expect(page1.locator(`#viewLead_companyName_sp`)).toContainText('accenture2');
    await expect(page1.locator(`#viewLead_firstName_sp`)).toContainText('Sangeth2');
    await expect(page1.locator(`#viewLead_lastName_sp`)).toContainText('Raj2');
    await expect(page1.locator(`#viewLead_statusId_sp`)).toContainText('Assigned');
    //await page1.waitForTimeout(3000);
    const title1 = await page1.title();
    console.log(`This page title is ${title1}`);
});
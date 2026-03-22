import { Page, expect } from "@playwright/test";
import { expecteddata } from "../../utils/tabledata";
import path from 'path';
import fs from 'fs';

export class Homepage {
    constructor(private page: Page) { }

    async navigatetoHomapoage() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
        await expect(this.page).toHaveTitle('Automation Testing Practice');
    }
    async VerifyGUIElement() {
        await expect(this.page.getByRole('link', { name: 'GUI Elements' })).toBeVisible();
    }
    async enter_Name(User_name: string) {
        await this.page.getByPlaceholder("Enter Name").fill(User_name);
    }
    async enter_email(User_email: string) {
        await this.page.getByPlaceholder("Enter Email").fill(User_email);
    }
    async user_phone(User_phone: number) {
        const User_phone_str = User_phone.toString();
        await this.page.getByPlaceholder("Enter Phone").fill(User_phone_str);
    }
    async User_Address(User_address: string) {
        await this.page.getByLabel("Address").fill(User_address);
    }
    async select_Gender(User_gender: string) {
        await this.page.getByRole('radio', { name: User_gender }).check();
    }
    async select_Days(User_days: string) {
        await this.page.getByRole('checkbox', { name: User_days }).check();
    }
    async select_Country(User_country: string) {
        await this.page.getByRole('combobox', { name: 'Country' }).selectOption(User_country);
    }
    async slect_colors(User_colors: string) {
        await this.page.locator('#colors').selectOption(User_colors);
    }
    async select_Sortedlist(User_sortedlist: string) {
        await this.page.locator('#animals').selectOption(User_sortedlist);
    }
    async selectDate() {
        await this.page.locator('#datepicker').click();
    }
    async Currentdate() {
        await this.page.locator('.ui-datepicker-calendar .ui-state-highlight').click();
    }
    async selectDateRange(startDate: string, endDate: string) {
        await this.page.fill('#start-date', startDate);
        await this.page.fill('#end-date', endDate);
    }

    async submitForm() {
        await this.page.locator("//button[@class='submit-btn']").click();
    }

    async verifyDateRangeMessage(startDate: string, endDate: string) {

        const start = new Date(startDate);
        const end = new Date(endDate);

        const diffTime = end.getTime() - start.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        const expectedMessage = `You selected a range of ${diffDays} days.`;

        await expect(this.page.locator('#result')).toHaveText(expectedMessage);
    }
    // async click_Uploadfile() {

    //     // const filepath = "/Users/akshivishnoi/Downloads/Resume202506050425.pdf";
    //     const filepath = "test-data/Resume.pdf";
    //     await this.page.locator('#singleFileInput').setInputFiles(filepath);

    // }
    async click_Uploadfile() {

    const filepath = "test-data/Resume.pdf";

    const fullPath = path.resolve(filepath);
    console.log("File being used:", fullPath);

    console.log("File exists:", fs.existsSync(fullPath));

    await this.page.locator('#singleFileInput').setInputFiles(filepath);
}
    async validatestatictable() {
        const table = await this.page.locator("//div[@id='HTML1']//table");
        const rows = await table.locator("tr").count();
        const expecteddata = [
            ["Learn Selenium", "Amit", "Selenium", "300"],
            ["Learn Java", "Mukesh", "Java", "500"],
            ["Learn JS", "Animesh", "Javascript", "300"],
            ["Master In Selenium", "Mukesh", "Selenium", "3000"],
            ["Master In Java", "Amod", "JAVA", "2000"],
            ["Master In JS", "Amit", "Javascript", "1000"]
        ];
        for (let i = 1; i < rows; i++) {

            for (let j = 1; j <= 4; j++) {

                const actualText = await this.page
                    .locator(`//table[@name='BookTable']//tr[${i + 1}]/td[${j}]`)
                    .textContent();

                expect(actualText?.trim()).toBe(expecteddata[i - 1][j - 1]);

            }

        }
    }
    async validDynamicTable(){
        
    }
    

}




import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/pages/Homepage';
import { calculateDays } from '../utils/datediff';
import { getPreviousWeekToToday } from '../utils/dateutils';
import { generateRandomUser } from '../utils/Userdata';
import { getRandomItem } from '../utils/Userdata';
//import {getPreviousWeekToToday} from '../utils/dateutils';


test('should display the correct title', async ({ page }) => {
    // await page.goto('https://testautomationpractice.blogspot.com/');
    // await expect(page).toHaveTitle('Automation Testing Practice');    

    const homepage = new Homepage(page);
    const User_Data = generateRandomUser();
    const User_Gender = getRandomItem(['Male', 'Female']);
    const User_Days = getRandomItem(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    const User_Country = getRandomItem(['India', 'United States', 'United Kingdom', 'Australia']);
    const User_Colors = getRandomItem(['Red', 'Green', 'Blue', 'Yellow']);
    const User_Sortedlist = getRandomItem(['Dog', 'Cat', 'Elephant', 'Lion']);
    const { startDate, endDate } = getPreviousWeekToToday();

    await homepage.navigatetoHomapoage();


    await homepage.VerifyGUIElement();

    await homepage.enter_Name(User_Data.User_name);
    await homepage.enter_email(User_Data.User_email);
    await homepage.user_phone(User_Data.User_phone);
    await homepage.User_Address(User_Data.User_address);
    await homepage.select_Gender(User_Gender);
    await homepage.select_Days(User_Days);
    await homepage.select_Country(User_Country);
    await homepage.slect_colors(User_Colors);
    await homepage.select_Sortedlist(User_Sortedlist);
    await homepage.selectDate();
    await homepage.Currentdate();
    await homepage.selectDateRange("2026-03-12", "2026-03-20");
    await homepage.submitForm();
    await homepage.verifyDateRangeMessage("2026-03-12", "2026-03-20");


    // await homepage.selectDateRange(startDate, endDate);
    await homepage.click_Uploadfile();
    await homepage.validatestatictable();

    // const expectedAlertMessage = 'Form submitted successfully!';
    // await homepage.VerifyAlertMessage(expectedAlertMessage);

    //api testing



}
)

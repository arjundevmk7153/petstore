const { Given, When } = require('@wdio/cucumber-framework');

Given('the app is launched', async () => {
    // Appium launches the app automatically
});

When('I click the get started button', async () => {
    const continueButton = await $('id=com.monefy.app.lite:id/buttonContinue');
    if (await continueButton.isDisplayed()) {
        await continueButton.click();
    }
});

When('I click the amazing button', async () => {
    const continueButton = await $('id=com.monefy.app.lite:id/buttonContinue');
    if (await continueButton.isDisplayed()) {
        await continueButton.click();
    }
});

When('I click the Yes,Please button', async () => {
    const continueButton = await $('id=com.monefy.app.lite:id/buttonContinue');
    if (await continueButton.isDisplayed()) {
        await continueButton.click();
    }
});

When('I allow the permission popup', async () => {
    const allowButton = await $('id=com.android.permissioncontroller:id/permission_allow_button');
    if (await allowButton.isDisplayed()) {
        await allowButton.click();
    }
});

When('I click the I am ready button', async () => {
    const continueButton = await $('id=com.monefy.app.lite:id/buttonContinue');
    if (await continueButton.isDisplayed()) {
        await continueButton.click();
    }
});

When('I click the close button', async () => {
    const closeButton = await $('id=com.monefy.app.lite:id/buttonClose');
    await closeButton.waitForDisplayed({ timeout: 5000 });
    await closeButton.click();
});

When('I click the income button', async () => {
    const incomeButton = await $('//android.widget.LinearLayout[@resource-id="com.monefy.app.lite:id/transaction_type_button_layout"]/android.widget.RelativeLayout[2]');
    await incomeButton.waitForDisplayed({ timeout: 10000 });
    await incomeButton.click();
});

When('I click the keyboard 2 button', async () => {
    const key2 = await $('id=com.monefy.app.lite:id/buttonKeyboard2');
    await key2.waitForDisplayed({ timeout: 5000 });
    await key2.click();
});

When('I click the keyboard 0 button three times', async () => {
    const key0 = await $('id=com.monefy.app.lite:id/buttonKeyboard0');
    for (let i = 0; i < 3; i++) {
        await key0.waitForDisplayed({ timeout: 5000 });
        await key0.click();
    }
});

When('I click the save button', async () => {
    const saveButton = await $('id=com.monefy.app.lite:id/keyboard_action_button');
    await saveButton.waitForDisplayed({ timeout: 5000 });
    await saveButton.click();
});

When('I select the salary category', async () => {
    const salaryCategory = await $('(//android.widget.ImageView[@resource-id="com.monefy.app.lite:id/imageView"])[2]');
    await salaryCategory.waitForDisplayed({ timeout: 5000 });
    await salaryCategory.click();
});

When('I should see the snackbar text {string}', async (expectedText) => {
    const snackbar = await $('id=com.monefy.app.lite:id/snackbar_text');
    await snackbar.waitForDisplayed({ timeout: 5000 });
    const snackbarText = await snackbar.getText();
    if (snackbarText !== expectedText) {
        throw new Error(`Snackbar text mismatch: ${snackbarText}`);
    }
});

When('the balance should be {string}', async (expectedBalance) => {
    const balance = await $('id=com.monefy.app.lite:id/balance_amount');
    await balance.waitForDisplayed({ timeout: 5000 });
    const balanceText = await balance.getText();
    if (balanceText !== expectedBalance) {
        throw new Error(`Balance text mismatch: ${balanceText}`);
    }
});

When('I click the expense button', async () => {
    const simplyclick = await $('id=com.monefy.app.lite:id/transaction_type_button_layout');
    await simplyclick.waitForDisplayed({ timeout: 10000 });
    await simplyclick.click();
    const expenseButton = await $('//android.widget.LinearLayout[@resource-id="com.monefy.app.lite:id/transaction_type_button_layout"]/android.widget.RelativeLayout[1]');
    await expenseButton.waitForDisplayed({ timeout: 10000 });
    await expenseButton.click(); 
});

When('I click the keyboard 1 button', async () => {
    const key1 = await $('id=com.monefy.app.lite:id/buttonKeyboard1');
    await key1.waitForDisplayed({ timeout: 5000 });
    await key1.click();
});

When('I click the keyboard 0 button three times for expense', async () => {
    const key0 = await $('id=com.monefy.app.lite:id/buttonKeyboard0');
    for (let i = 0; i < 3; i++) {
        await key0.waitForDisplayed({ timeout: 5000 });
        await key0.click();
    }
});

When('I click the save button for expense', async () => {
    const saveButton = await $('id=com.monefy.app.lite:id/keyboard_action_button');
    await saveButton.waitForDisplayed({ timeout: 5000 });
    await saveButton.click();
});

When('I select the expense category', async () => {
    const expenseCategory = await $('(//android.widget.ImageView[@resource-id="com.monefy.app.lite:id/imageView"])[2]');
    await expenseCategory.waitForDisplayed({ timeout: 5000 });
    await expenseCategory.click();
});

When('the balance should now be {string}', async (expectedBalance) => {
    const balance = await $('id=com.monefy.app.lite:id/balance_amount');
    await balance.waitForDisplayed({ timeout: 5000 });
    const balanceText = await balance.getText();
    if (balanceText !== expectedBalance) {
        throw new Error(`Balance text mismatch: ${balanceText}`);
    }
}); 



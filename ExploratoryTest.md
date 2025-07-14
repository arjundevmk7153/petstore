# Monefy App - Simple Testing Plan

## 1. Goal

The goal is to check whether the Monefy app works as expected when it comes to adding and removing money, showing expenses clearly in charts, and maintaining ease of use. We’ll also see how well it handles incorrect inputs and whether the balance is always accurate.

---

## 2. What We’ll Test

- Adding income and expenses  
- Viewing the balance and pie chart  
- Using different expense categories  
- Entering invalid or very large inputs  
- Using the app in both portrait and landscape modes  

---

## 3. What We Won’t Test

- Syncing with other apps or backup services  
- Paid features or subscriptions  
- Generating detailed reports or exporting data  

---

## 4. Test Ideas (Charters)

- Try using the + and - buttons to make sure they correctly update the balance  
- Add expenses under different categories and check if the pie chart updates accurately  
- Try entering incorrect inputs (like letters) and observe how the app handles them  
- Rotate the phone to landscape mode and see if the layout adjusts properly  
- Navigate to previous months and check if past data is visible  
- Try changing or adding new categories to see how flexible the app is  

---

## 5. Test Cases

### Adding and Removing Money

- Add income and confirm that the balance increases  
- Add an expense and verify that the balance decreases  
- Try adding a very large amount and ensure the app handles it without crashing  
- Enter letters instead of numbers and check whether the app shows an error or blocks it  
- Spend more than the current balance to see if the app allows it or shows a warning  

### Category and Pie Chart

- Add expenses across multiple categories and check if the pie chart updates correctly  
- Add a small expense and make sure it's still visible in the chart  
- Tap on a slice of the pie chart and see if it shows more information or details about that category  

### Layout and Screen Size

- Rotate the phone to landscape and verify that the layout remains functional and readable  
- Use the app on a small screen to ensure all buttons and text are still usable  

### Navigation

- Navigate to the previous month and check if the app displays old data correctly  
- Switch to another month and verify that the data updates accordingly  

---

## 6. Risks and Concerns

- The app might allow the balance to go negative without a warning, which could lead to confusion. Ideally, a clear warning should be shown in such cases.  
- If invalid inputs (like text instead of numbers) are accepted, it could cause bugs or confusion. These should be blocked or result in an informative error message.  
- Small slices in the pie chart might be hard to tap or see clearly. The app should ideally allow zooming or tapping for more details.  
- If there’s no backup support, users risk losing their data. Adding a cloud sync or export option would help.  
- Fixed categories might not fit everyone’s budgeting needs. Letting users create or modify categories would improve usability.  

---

## 7. Suggestions for Improvement

- Show a warning when the balance goes negative  
- Support multiple currencies for international users  
- Allow users to add, remove, or rename categories  
- Provide an option to export data to a file or cloud  
- Make the pie chart interactive, with tap-to-view details  

# Monefy App - Simple Testing Plan

## 1. Goal

Check if the Monefy app works as expected for adding/removing money and showing expenses in charts. Make sure it's easy to use, handles wrong inputs well, and shows the right balance.

---

## 2. What We’ll Test

- Adding income and expenses
- Seeing the balance and pie chart
- Using different expense categories
- Trying wrong or big inputs
- Using the app in portrait and landscape

---

## 3. What We Won’t Test

- Syncing with other apps or backups
- Paid features or subscriptions
- Detailed reports/exporting data

---

## 4. Test Ideas (Charters)

| ID  | What to Explore                                 | Why                                         |
|-----|--------------------------------------------------|----------------------------------------------|
| C1  | Try using the + and - buttons                    | Make sure they update the balance correctly  |
| C2  | Add expenses in different categories             | Check if the pie chart shows the right amounts |
| C3  | Add wrong inputs (like letters)                  | See how the app handles errors               |
| C4  | Turn the phone sideways                          | Check if the layout still works              |
| C5  | Try looking at past months                       | See if you can view older data               |
| C6  | Try changing or adding categories                | Check if categories are flexible             |

---

## 5. Test Cases

###  Adding and Removing Money

| Test | What to Do                           | What Should Happen              |
|------|--------------------------------------|----------------------------------|
| TC1  | Add income                           | Balance goes up                  |
| TC2  | Add expense                          | Balance goes down                |
| TC3  | Add large amount                     | App doesn’t crash and updates balance |
| TC4  | Type letters instead of numbers      | App blocks it or shows error     |
| TC5  | Spend more than balance              | Balance goes negative or shows warning |

###  Category and Pie Chart

| Test | What to Do                                   | What Should Happen                   |
|------|----------------------------------------------|---------------------------------------|
| TC6  | Add many expenses in different categories     | Pie chart updates correctly           |
| TC7  | Add small expense                             | Small slice still shows up            |
| TC8  | Tap pie chart slice                           | Opens more info or category view      |

###  Layout and Screen Size

| Test | What to Do                      | What Should Happen           |
|------|---------------------------------|-------------------------------|
| TC9  | Turn phone sideways             | Layout adjusts properly       |
| TC10 | Try on small screen             | Buttons and text are usable   |

###  Navigation

| Test  | What to Do                      | What Should Happen           |
|-------|---------------------------------|-------------------------------|
| TC11  | Go to last month                | Old data is shown             |
| TC12  | Change month                    | Data updates correctly        |

---

## 6. Risks

| Problem                        | Why It Matters                        | Fix Idea                          |
|--------------------------------|----------------------------------------|-----------------------------------|
| Can go negative without warning| User might not know they overspent    | Show a warning message            |
| Accepts wrong input            | Can cause confusion or bugs           | Block or show error for bad inputs|
| Small pie slices are hard to see| User misses details                  | Let user zoom or tap for details  |
| No backup                      | Risk of losing data                   | Add cloud sync or export          |
| Fixed categories               | Not personal enough                   | Allow adding/editing categories   |

---

## 7. Suggestions

- Show warning if balance goes negative
- Allow different currencies
- Let users change or add categories
- Add export to file or cloud
- Make pie chart interactive

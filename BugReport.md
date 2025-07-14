# Monefy App - Bug Report

---

## Bug 1: Donut Chart Lines Missing Randomly

**Summary:**  
Lines or indicators in the donut (pie) chart sometimes disappear randomly when viewing multiple expense categories.

**Steps to Reproduce:**
1. Add expenses across multiple categories.
2. Open the pie chart view.
3. Observe the lines connecting categories to their labels.

**Expected Result:**  
All lines should be consistently visible for each category.

**Actual Result:**  
Some lines are missing or not rendered, making it hard to identify categories.

**Impact:**  
Affects visual clarity and usability of the expense chart.

---

## Bug 2: Calculator Fails on Large Numbers

**Summary:**  
Adding two large numbers like 999999999 + 999999999 results in zero instead of the correct sum.

**Steps to Reproduce:**
1. Open the built-in calculator in the app.
2. Enter: `999999999 + 999999999`
3. Observe the result.

**Expected Result:**  
Calculator should return `1,999,999,998`.

**Actual Result:**  
Calculator displays `0`.

**Impact:**  
Critical functionality broken for users entering large values. Could lead to incorrect calculations or data entry.

---

## Bug 3: Budget Value Not Cleared

**Summary:**  
Budget value remains even after attempting to reset or clear it.

**Steps to Reproduce:**
1. Set a monthly budget.
2. Try clearing the data or resetting the budget.
3. Check if the budget value is removed.

**Expected Result:**  
Budget value should be cleared or reset as per user action.

**Actual Result:**  
Old budget value still appears in the app.

**Impact:**  
Prevents users from updating or removing budgets as needed.

---

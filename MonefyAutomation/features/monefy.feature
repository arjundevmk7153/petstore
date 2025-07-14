Feature: Clearly states the main business goal: adding a salary income, verifying the balance and expenses.

  Scenario: Describes the full user journey, from onboarding to transaction and validation of income, expenses and balance.
    When I click the get started button
    When I click the amazing button
    When I click the Yes,Please button
    When I allow the permission popup
    When I click the I am ready button
    When I click the close button
    When I click the income button
    When I click the keyboard 2 button
    When I click the keyboard 0 button three times
    When I click the save button
    When I select the salary category
    When I should see the snackbar text "Salary: $2,000.00 added"
    When the balance should be "Balance $2,000.00"
    When I click the expense button
    When I click the keyboard 1 button
    When I click the keyboard 0 button three times
    When I click the save button
    When I select the expense category
    When the balance should now be "Balance $1,000.00"
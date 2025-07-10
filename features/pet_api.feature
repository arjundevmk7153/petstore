Feature: Pet API CRUD operations

  Scenario: Create a new pet
    Given I have a valid pet payload
    When I send a request to create the pet
    Then I should receive a 200 response
    And The response should contain the pet ID

  Scenario: Get the created pet
    When I send a request to get the pet by ID
    Then I should receive a 200 response
    And The response should contain the pet details

  Scenario: Update the pet
    Given I have an updated pet payload
    When I send a request to update the pet
    Then I should receive a 200 response
    And The response should contain the updated pet details

  Scenario: Delete the pet
    When I send a request to delete the pet by ID
    Then I should receive a 200 response
    And The response should confirm deletion
    When I send a request to get the pet by ID
    Then I should receive a 404 response
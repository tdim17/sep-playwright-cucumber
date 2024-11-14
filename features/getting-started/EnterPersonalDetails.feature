@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        When user is on the step one and 'Test Automation with Selenium' title is displayed


    Scenario: verify that user is able to enter personal details
        Given
        Given I am on the 'Checkout' page enter my Personal details
        And I fill in the 'First Name' field with 'John'


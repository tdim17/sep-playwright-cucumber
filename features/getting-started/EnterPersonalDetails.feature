@sep10 @well
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

    #* AC1: Default field types and values should be as follows:
    @sep10-1
    Scenario: verify that user is on the step one page
        Given user is on the step one and 'Test Automation with Selenium' title is displayed
    @sep10-2
    Scenario: verify that default field types and values should be next
        Then 'first name' input field is visible
        And text field is present in 'first name'
        Then 'last name' input field is visible
        And text field is present in 'last name'
        Then 'email address' input field is visible
        And 'email address' text field is present
        Then 'phone' input field is visible
        And 'phone' text field is present

    @sep10-3
    Scenario: verify that 'email address' field only allows strict limited format
        Given user fills in only the required fields        
        Then 'email address' text field validates for email format

    @sep10-4
    Scenario: verify that 'phone' field only allows numbers
        Given user fills in only the required fields    
        Then 'phone' text field allows numbers only

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    @sep10-5   
    Scenario: verify that a standard dropdown list is present
        Then dropdovn list is visible in the dropdown window
        Then dropdown contains list of elements

    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    @sep10-6
    Scenario: verify that the next button is disabled if any required data is missing or invalid
        When user fills in only the required fields
        And user deleted required field last name
        Then next button1 is disabled

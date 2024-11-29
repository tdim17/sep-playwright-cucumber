@sep19 @well
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario: Verify if the next button is clickable after filling in only the required fields

        When user fills in only the required fields
        And  the next button1 is enabled
        Then user clicks on the next button1
        Then user is on step two of the enrollment process

    @sep19-2
    Scenario: Verify if the next button is clickable after filling in all fields

        When user fills in all fields
        And  the next button1 is enabled
        Then user clicks on the next button1
        Then user is on step two of the enrollment process


@sep29 @well
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."


    #TODO: Create scenarios that cover all the acceptance criteria


    Background:
        Given user is on the enrollment page
        When user fills in all fields
        And user clicks on the next button1
        Then user is on step two of the enrollment process
        When user clicks upfront payment option
        #    When user clicks installments payment option
        And user clicks on the next button2
        Then user is on step three and can see the total cost

    Scenario:
        When user enters the short CVC number
        Then CVC error message "Your card's security code is incomplete." should be thrown




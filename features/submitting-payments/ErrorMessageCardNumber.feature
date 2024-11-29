@sep25 @wip
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


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

    # AC1:
    Scenario: if the card number is too short then an immediate error message should be thrown
        When user sequentially enters a short card number from 1 to 15 characters
        Then card error message "Your card number is incomplete." should be thrown immediately

    # AC2:
    Scenario: if the card number is wrong an immediate error message should be thrown
        When user enters the "1111 1111 1111 1111" card number
        Then card error message "Your card number is invalid." should be thrown immediately



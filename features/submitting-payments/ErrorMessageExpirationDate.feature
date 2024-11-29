@sep27 @well
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed.


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        When user fills in all fields
        And user clicks on the next button1
        Then user is on step two of the enrollment process
        # When user clicks upfront payment option
        When user clicks installments payment option
        And user clicks on the next button2
        Then user is on step three and can see the total cost

    Scenario:
        When user enters the short expiration number
        Then a message "Your card's expiration date is incomplete." should be thrown

    Scenario:
        When user enters the "1221" expiration number
        Then a message "Your card's expiration year is in the past." should be thrown
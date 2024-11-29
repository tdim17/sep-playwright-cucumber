@sep11 @wipErr
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep11-1
    Scenario: Verify that the program start date and refund date are deisplayed    
        Then the program start date is displayed
        Then the refund date is displayed

    @sep11-2
    Scenario: Verifi that the program start date and refund date are correct    
        Then the displayed start date is correct
    #    Then the displayed refund date are correct




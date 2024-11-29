@sep14 @well
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background: 
    Given user is on the enrollment page
    And user fills in all fields
    And user clicks on the next button1

    @sep14-1
    Scenario: User can select upfront payment plan, it should be highlighted, the next button should become active and user can change selected plan
        Given user is on step two of the enrollment process
        And the next button2 is disabled by default
        When user clicks upfront payment option
        Then upfront payment option should be highlighted
        Then the next button2 is enabled
        When user clicks installments payment option
        Then installments payment option should be highlighted
        Then the next button2 is enabled


    @sep14-2
    Scenario: User can select installments payment plan, it should be highlighted, the next button should become active and user can change selected plan
        Given user is on step two of the enrollment process
        And the next button2 is disabled by default
        When user clicks installments payment option
        Then installments payment option should be highlighted
        Then the next button2 is enabled
        When user clicks upfront payment option
        Then upfront payment option should be highlighted
        Then the next button2 is enabled

     


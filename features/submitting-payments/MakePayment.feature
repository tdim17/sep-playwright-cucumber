@sep23
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox,
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.

    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.


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

    @sep23-1
    Scenario: user should be redirect to the confirmation page.
        When user enters valid card information and necessary data and click the Pay button
        Then user should be redirected to the confirmation page.

    #Scenario: user should see green steps in the stepper.
    #    Then all steps should be green in the step4 stepper

    #Scenario: The correct program name should be displayed
    #    Then program name "Test Automation with Selenium" should be displayed

    #Scenario: The correct user email should be displayed
    #    Then correct user email address should be displayed

    #Scenario: The correct company contact information should be displayed
    #    Then email address1 "enrollment@cydeo.com" should be displayed
    #    Then email address2 "support@cydeo.com" should be displayed






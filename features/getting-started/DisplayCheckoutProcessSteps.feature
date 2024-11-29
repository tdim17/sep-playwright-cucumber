@sep08 @wip
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    
    Scenario: verify that the steps of the checkout process are displayed correctly
        Given user is on the step one and 'Test Automation with Selenium' title is displayed    
        Then '1-Start Application' is displayed on the stepper
        And  '2-Payment Plan' is displayed on the stepper
        And  '3-Review' is displayed on the stepper

    Scenario: verify Start Application collor
        Given user is on the step one and 'Test Automation with Selenium' title is displayed
        Then 'Start Application' is highlighted in blue

    Scenario: verify Payment Plan and Review collors
        Given user is on the step one and 'Test Automation with Selenium' title is displayed
        Then 'Payment Plan' is highlighted in grey
        And 'Review' is highlighted in grey





@sep16 @well
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.

    #TODO: Create scenarios that cover all the acceptance criteria

    #* AC1: Clicking on any plan should activate the next button

    Background:
        Given user is on the enrollment page
        Given user fills in only the required fields
        Then user clicks on the next button1

    @sep16-1
    Scenario: verify that the next button is disabled by default
        And user is on step two of the enrollment process
        Then the next button2 is disabled by default

    @sep16-2
    Scenario: verify that the next button will be activated when user selects upfront payment option
        When user clicks upfront payment option
        Then the next button2 is enabled

    @sep16-3
    Scenario: verify that the next button will be activated when user selects installments payment option
        When user clicks installments payment option
        Then the next button2 is enabled

    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.

    @sep16-4
    Scenario: verify that the next button will take user to step 3 when user selects upfront payment option
        When user clicks upfront payment option
        And user clicks on the next button2
        Then user is on step three and can see the payment form

    @sep16-5
    Scenario: verify that the next button will take user to step 3 when user selects installments payment option
        When user clicks installments payment option
        And user clicks on the next button2
        Then user is on step three and can see the payment form

    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.

    @sep16-6
    Scenario: verify that the stepper icons are green for steps 1 and 2, and blue for step 3 in step 3 when user selected upfront payment option
        When user clicks upfront payment option
        And user clicks on the next button2
        Then check if step 1 is green
        Then check if step 2 is green
        Then check if step 3 is blue

    @sep16-7
    Scenario: verify that the stepper icons are green for steps 1 and 2, and blue for step 3 in step 3 when user selected installments payment option
        When user clicks installments payment option
        And user clicks on the next button2
        Then check if step 1 is green
        Then check if step 2 is green
        Then check if step 3 is blue

    #* AC4: The payment component should be displayed.

    @sep16-8
    Scenario: verify that the payment component is displayed in step 3 after user selected upfront payment option
        When user clicks upfront payment option
        And user clicks on the next button2
        Then user is on step three and can see the payment form

    @sep16-9
    Scenario: verify that the payment component is displayed in step 3 after user selected installments payment option
        When user clicks installments payment option
        And user clicks on the next button2
        Then user is on step three and can see the payment form

    #* AC5: A price summary should be displayed.

    @sep16-10
    Scenario: verify that the total prise is displayed when the user comes to step 3 by selecting upfront payment option
        When user clicks upfront payment option
        And user clicks on the next button2
        Then user is on step three and can see the total cost

    @sep16-11
    Scenario: verify that the total prise is displayed when the user comes to step 3 by selecting installments payment option
        When user clicks installments payment option
        And user clicks on the next button2
        Then user is on step three and can see the total cost


    #* AC6: The back button should be displayed.

    @sep16-12
    Scenario: verify that the back button is displayed and clickable when the user on 3rd step
        When user clicks upfront payment option
        And user clicks on the next button2
        Then back button should be displayed and clickable

    #* AC7: By default, the pay button should be displayed.

    @sep16-13
    Scenario: verify that the pay button is displayed when the user on 3rd step
        When user clicks upfront payment option
        And user clicks on the next button2
        Then pay button should be displayed by default
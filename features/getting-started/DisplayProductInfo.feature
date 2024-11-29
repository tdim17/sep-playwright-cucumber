@sep09 @wip
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background: Background name
        Given user is on the enrollment page
    # take all data from qa_data.json

    @sep09-1
    #* AC1: The product name should be displayed on the information card.    
    Scenario: verify the te product name is displayed on the infocard
        Then user is on the step one and 'Test Automation with Selenium' title is displayed

    @sep09-2
    #* AC2: The product name on the information card matches the product name on the left side of the screen.    
    Scenario: verify the product name on the infocard matches the product name on the left side of the screen
        Then product name on the infocard match the product name on the left side

    @sep09-3
    #* AC3: The price of the product should be displayed.    
    Scenario: verify the price of the product is displayed
        Then price of the product is displayed

    @sep09-4
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    Scenario: verify the flexible payment plan text is displayed
        Then flexible payment plan text is displayed

    @sep09-5
    #* AC5: The program start date should be displayed.    
    Scenario: verify the program start date is displayed
        Then program start date is displayed

    @sep09-6
    #* AC6: The return policy and the final date for returns should be displayed.
    Scenario: verify the return policy and final date for returns are displayed
        Then return policy text is displayed
        And final date for returns is displayed


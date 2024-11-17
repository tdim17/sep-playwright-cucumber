@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order:
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy

    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
    #* AC5: The system should be compatible with both desktop and mobile devices.



    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep07-1
    #* AC1: The system displays the text "Cydeo Secure Checkout"
    Scenario: verify the text "Cydeo Secure Checkout" sould be displayed on the leftMain page
        Then 'Cydeo Secure Checkout' has to be displayed

    @sep07-2
    #* AC2: The system should display the program name
    Scenario: the program name has to be displayed
        Then 'program name' has to be displayed

    #* AC3: Users should see a footer on the left side of the page that includes by order:
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    Scenario: the footer has to be displayed on the leftMain page
        Then 'logo' has to be displayed on the leftMain page
        And 'Terms and Conditions' has to be displayed on the leftMain page
        And 'Privacy Policy' has to be displayed on the leftMain page
        And 'Disclaimer' has to be displayed on the leftMain page
        And 'Cookie Policy' has to be displayed on the leftMain page


    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
    Scenario: the 'contact us' text has to be displayed in the footer
        Then 'contact us' has to be displayed in the footer on the right page

    #* AC5: The system should be compatible with both desktop and mobile devices.
    Scenario: check the copability of the system with desktop and mobile
        Then system should be cross-platform capable


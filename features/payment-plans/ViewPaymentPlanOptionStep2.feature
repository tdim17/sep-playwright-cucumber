@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
         Given user is on the enrollment page
        Given user fills in all fields
        Then user clicks on the next button1
        And user is on step two of the enrollment process
    
    Scenario: verify upfront price block    
        Then there should be only one upfront price
        Then tex the first row should be "Upfront"        
        Then the second row should be "'$400' pay once"


    #Scenario: verify installment price block
    #    Then there must be total <num> Payment Plans
    #    Then there can be <number_of_installments> installments
    #    Then text of first row sould be '<number_of_installments> Installments' 
    #    Then text of second row sould be '<$ <monthly_price> per month'
    #    Then installment plans should be unique 




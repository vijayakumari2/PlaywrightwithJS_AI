Feature: Issuer Login

@reg
Scenario: Store Cookies of Issuer
    Given I open a 'Chrome' Browser
    And   I go to URL
    When  I Click on Log in button in Landing Page
    Given I enter 'Issuer' credentials in Cp Login Page
    And   I click on Continue button
    Then  I verify Home Page - 'Marketplace'
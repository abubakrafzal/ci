Feature: TS 4 OMS: Update shipping/billing from OMS
  TC-17: Verify that Super User is able to update the Billing data.
  TC-19: Verify that update Billing Address data for order in OMS Should be update in WooAdmin against that order.
  TC-20: Verify that Super User is able to update the Shipping data.
  TC-22: Verify that update Shipping Address data for order in OMS Should be update in WooAdmin against that order.



  @OMS @Update
  Scenario Outline: User able to update billing and shipping and verify from WOOAdmin Site

    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS Order from Panel
    And   User Select applied static Order from the List
    When  User Go to Billing Address Block
    And   Update The Billing "<MetaData>" FirstName
    And   Update The Billing "<MetaData>" LastName
    And   Update The Billing "<MetaData>" Address1
    And   Update The Billing "<MetaData>" Address2
    And   Update The Billing "<MetaData>" Country
    And   Update The Billing "<MetaData>" State
    And   Update The Billing "<MetaData>" Email
    And   Update The Billing "<MetaData>" City
    And   Update The Billing "<MetaData>" Postcode
    And   Update The Billing "<MetaData>" Phone
    Then  User Go to Shipping Address Block
    And   Update The Shipping "<MetaData>" FirstName
    And   Update The Shipping "<MetaData>" LastName
    And   Update The Shipping "<MetaData>" Address1
    And   Update The Shipping "<MetaData>" Address2
    And   Update The Shipping "<MetaData>" Country
    And   Update The Shipping "<MetaData>" State
    And   Update The Shipping "<MetaData>" City
    And   Update The Shipping "<MetaData>" Postcode
    When  User hit the OMS Update Button
    And   Verify order alert Success
    Then  Close All the tabs except Base
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to second order Static details
    And   User hit the Update Button
    When  User go to Edit the Billing Data
    Then  User get new the Values of Billing
    Then  User go to Edit the Shipping Data
    Then  User Verify the Billing "<MetaData>" from WooAdmin
    And   User Verify the Shipping "<MetaData>" from WooAdmin

    Examples:
      | Credential | MetaData  | OrderNumber |
      | SuperAdmin | OrderData | Update      |

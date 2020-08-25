Feature: TS 1 OMS: Place the order of Different Plush Products
 OMS: Plush clone - No workflow



  @Dump
  Scenario: TC-10: Dump Data to go smooth OMS
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to order Static details
    And   User hit the Update Button
    When  User go to Edit the Billing Data
    Then  User get the Values of Billing
    Then  User go to Edit the Shipping Data
    And   User get the Values of Shipping
    Then  User get the values of Item
    Then  Dump all the data to the Static YamlFile
    Then  Close All the tabs except Base


  @Smoke @OMS @regression
  Scenario Outline: TC-10: Verify the Order is placed and sync to OMS
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS Order from Panel
    And   User Select applied Order from the List

    Examples:
          | Credential    |
          | SuperAdmin    |


  @Smoke @OMS @regression
  Scenario Outline: TC-11: Verify the Shipping , Order, billing Meta Data.
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS Order from Panel
    And   User Select applied Order from the List
    Then  User Verify the "<MetaData>" Order Date
    When  User Go to Billing Address Block
    And   Verify The Billing "<MetaData>" FirstName
    And   Verify The Billing "<MetaData>" LastName
    And   Verify The Billing "<MetaData>" Address1
    And   Verify The Billing "<MetaData>" Address2
    And   Verify The Billing "<MetaData>" Country
    And   Verify The Billing "<MetaData>" State
    And   Verify The Billing "<MetaData>" Email
    And   Verify The Billing "<MetaData>" City
    And   Verify The Billing "<MetaData>" Postcode
    And   Verify The Billing "<MetaData>" Phone
    Then  User Go to Shipping Address Block
    And   Verify The Shipping "<MetaData>" FirstName
    And   Verify The Shipping "<MetaData>" LastName
    And   Verify The Shipping "<MetaData>" Address1
    And   Verify The Shipping "<MetaData>" Address2
    And   Verify The Shipping "<MetaData>" Country
    And   Verify The Shipping "<MetaData>" State
    And   Verify The Shipping "<MetaData>" City
    And   Verify The Shipping "<MetaData>" Postcode


    Examples:
      | MetaData      | Credential    |
      | OrderData     | SuperAdmin    |

  @Smoke @OMS @regression @line
  Scenario Outline: TC-12: Verify the plush order is assigned to Plush Manager and status "New Item"
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item "<MetaData>" details
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    And   Assignment Manager Should be "<Item Status>"
    When  User Go to OMS "Employees" from Panel
    Then  User Verify the "<Item Status>" Manager Email with Title




    Examples:
      | Credential    | MetaData      |  Item Status      |
      | SuperAdmin    | OrderData     |  New Item         |


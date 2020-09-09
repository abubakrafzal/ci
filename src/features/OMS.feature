@OMSFEATURE
Feature:TS3,TS4 Updating statuses in OMS reflects back to WooCommerce
  OMS: Plush clone - No workflow

  @Dump @OMS @checkvxs
  Scenario: TC-10: Dump Data to go smooth OMS
    Then  User Post "OMS" data
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    Then  User go to Order ID "OMS"
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
    And   User Select "OMS" applied Order from the List

    Examples:
      | Credential |
      | SuperAdmin |

  @Smoke @OMS @regression @updateshipping
  Scenario Outline: TC-11: Verify the Shipping , Order, billing Meta Data.
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to Order ID "OMS"
    And   User hit the Update Button
    Then  Close All the tabs except Base
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS Order from Panel
    Then  User go to Order "OMS" Number
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
      | MetaData  | Credential |
      | OMS       | SuperAdmin |
  @Smoke @OMS @regression @Employee
  Scenario Outline: TC-12: Verify the plush order is assigned to Plush Manager and status "New Item"
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item "<MetaData>" details
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    Then  User wait for the Line Item Successful Alert
    And   Assignment Manager Should be "<Item Status>"
    When  User Go to OMS "Employees" from Panel
    Then  User click to display all employes
    Then  User Verify the "<Item Status>" Manager Email with Title

    Examples:
      | Credential | MetaData  | Item Status                  |
      | SuperAdmin | OMS       | Approved                     |


  @Smoke @OMS @regression @Roles_status
  Scenario Outline: TC-12: Verify the plush order is assigned to Plush Manager and status "New Item"
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item "<MetaData>" details
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    Then  User wait for the Line Item Successful Alert
    And   Assignment Manager Should be "<Item Status>"

    Examples:
      | Credential | MetaData  | Item Status                  |
      | SuperAdmin | OMS       | Approved                     |
#      | SuperAdmin | OrderData | On Hold                      |
#      | SuperAdmin | OrderData | Patterns Assigned            |
#      | SuperAdmin | OrderData | Shaping Assigned             |
#      | SuperAdmin | OrderData | Airbrushing Assigned         |
#      | SuperAdmin | OrderData | Approved with Changes        |
#      | SuperAdmin | OrderData | Shipped to HQ                |
#      | SuperAdmin | OrderData | QA Review                    |
#      | SuperAdmin | OrderData | Shipped                      |
#      | SuperAdmin | OrderData | Pictures Ready               |
#      | SuperAdmin | OrderData | Customer Feedback Required   |
#      | SuperAdmin | OrderData | CSR Follow Up Needed         |
#      | SuperAdmin | OrderData | Pending Remake               |
#      | SuperAdmin | OrderData | Returned                     |
#      | SuperAdmin | OrderData | Cancelled                    |
#      | SuperAdmin | OrderData | Ready for Shipment           |
#      | SuperAdmin | OrderData | Shipping Hold                |
#      | SuperAdmin | OrderData | Arrived to HQ                |
#      | SuperAdmin | OrderData | Shipped Directly to Customer |
#      | SuperAdmin | OrderData | Change Outside Workflow      |
#      | SuperAdmin | OrderData | Feedback Provided            |
#      | SuperAdmin | OrderData | CSR Refund Needed            |
#      | SuperAdmin | OrderData | CSR Call Needed              |
#      | SuperAdmin | OrderData | Shipped Back to China        |
#      | SuperAdmin | OrderData | Pending Return               |

  @Status @Smoke @TS3
  Scenario Outline: TS 3 OMS: Updating statuses in OMS reflects back to WooCommerce
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item "<MetaData>" details
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    Then  User copy the order number
    And   Close All the tabs except Base
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    Then  User go to Order ID "<MetaData>"
    And   Verify OMS "<Item Status>" from WooCommerce
    Then  Verify WooAdmin "<Item Status>" from WooCommerce

    Examples:
      | Credential | MetaData  | Item Status       |
      | SuperAdmin | OMS       | Feedback Provided |





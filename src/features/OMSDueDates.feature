@ru
Feature:TS 5 OMS: Plush Due Dates
  TC-23:TC-24:TC-25:TC-26:TC-27:TC-28:TC-29:TC-30:

  @Smoke @Add_to_cart @regression @Rush
  Scenario Outline: Add a Plush Clone Product
    Given User is on HomePage
    When  User go to product
    And   User click on "Plush Clone" item category
    Then  User click on get your product button
    And   User select pet from the modal
    When  User confirm order of product
    And   User click add to cart
    When  User click on finish checkout
    Then  User verify the item in cart
    And   User apply "<Rush>" to the item
    When  User proceed to checkout
    Then  User is able to view Order Summary
    Then  User use a Debit new method for payment
    And   User Enter "<Payment>" Card Number
    And   User Enter "<Payment>" Expiry Date
    And   User Enter "<Payment>" CVC
    When  User accept Discrete packaging
    And   User Place the Order
    Then  User Verify the successful message of Order
    And   User Close the Order After Verification
    Then  User Save Rush Order ID
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to order Static details
    And   User hit the Update Button

    Examples:
      | Payment     | Rush    |
      | Debit       | 2_rush  |

  @Status @Smoke @Due_dates
  Scenario Outline: TS 3 OMS: Updating statuses in OMS reflects back to WooCommerce
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Orders" from Panel
    Then  User go to selected Order ID
    And   User Select "<Rush>" for the order
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item against order
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    Then  User get the rush Weeks
    Then  User Go To Fulfillment Dates
    Then  Verify Dates for the "<Item Status>" or "<Rush>"


    Examples:
      | Credential          |  Item Status                          | Rush           |
      | SuperAdmin          |  Shipped                              | 2 Weeks        |


  @Status @Smoke @Request
  Scenario Outline: Verify User is able to generate request
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Orders" from Panel
    Then  User go to selected Order ID
    Then  User Go to OMS "Line Items" from Panel
    And   User Go to  Line Item against order
    When  User click on request builder tab
    Then  User go to new request
    And   User check mark Custom message
    Then  User is able to Enter Custom "Custom Message"
    When  User Hit the Confirm Button
    Then  Verify Request Builder request alert
    And   User hit the send email button
    Then  User verify success sent alert
    And   Close All the tabs except Base
    Given User is on HomePage
    Then  User go to accounts details
    And   User go to account order details
    Then  Verify the "Custom Message"

    Examples:
      | Credential          |
      | SuperAdmin          |
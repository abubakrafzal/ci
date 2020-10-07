@fund
Feature:TS 7 OMS : Partial order refund
  TS 8 OMS: Partial item refund
  TS 9 OMS: Item return - order with multiple items (at least 1 item returned, but not all)

  @Dump @OMS @checkvxs
  Scenario: TC-10: Dump Data to go smooth OMS
    Then  User Post "Refund" data
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    Then  User go to Order ID "Refund"
    And   User hit the Update Button
    Then  Close All the tabs except Base



#  @Smoke @Multiple @regression @Rush @rrr
#  Scenario Outline: Add a Plush Clone Product with multiple items
#    Given User is on HomePage
#    When  User go to product
#    And   User click on "Plush Clone" item category
#    Then  User click on get your product button
#    And   User select pet from the modal
#    When  User confirm order of product
#    And   User click add to cart
#    When  User click continue Shopping
#    When  User go to product
#    And   User click on "Slippers" item category
#    Then  User click on get your product button
#    And   User select pet from the modal
#    When  User confirm order of product
#    And   User click add to cart
#    When  User click on finish checkout
#    Then  User verify the item in cart
#    And   User apply "<Rush>" to the item
#    When  User proceed to checkout
#    Then  User is able to view Order Summary
#    Then  User use a Debit new method for payment
#    And   User Enter "<Payment>" Card Number
#    And   User Enter "<Payment>" Expiry Date
#    And   User Enter "<Payment>" CVC
#    When  User accept Discrete packaging
#    And   User Place the Order
#    Then  User Verify the successful message of Order
#    And   User Close the Order After Verification
#    Then  User Save Refund Order ID
#    Given Super User go to Admin Site
#    When  User click On Wocommerce from side panel
#    And   User go to orders list
#    Then  User go to order Static details
#    And   User hit the Update Button
#
#    Examples:
#      | Payment     | Rush    |
#      | Debit       | 4       |

  @Status @Smoke @refundOrder
  Scenario Outline: Partial refund order
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Orders" from Panel
    Then  User go to Order "Refund" Number
#    Then  User go to refund Order ID
    And   User click new refund
    Then  User Enter reason for the refund
    And   User Enter Refunded Amount
    Then  User sumbit the amount
    And   User Verify the refund Amount alert
    Then  Close All the tabs except Base
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to Order ID "Refund"

#    Then  User go to order Static Refund details
    And   User hit the Update Button
    Then  User verify the Refund admin amount



    Examples:
      | Credential          |
      | SuperAdmin          |

  @Status @Smoke @refund
  Scenario Outline: Partial refund order
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Orders" from Panel
    Then  User go to Order "Refund" Number
#
#    Then  User go to refund Order ID
    And   User Go to  Line Item "<MetaData>" details

#    And   User Go to refund first Line Item against order
    And   User click new refund Item
    Then  User Enter reason for the refund
    And   User Enter Refunded Amount
    Then  User sumbit the amount
    And   User Verify the refund Amount alert
    Then  Close All the tabs except Base
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to Order ID "Refund"

#    Then  User go to order Static Refund details
    And   User hit the Update Button
    Then  User verify the Refund admin amount

    Examples:
      | Credential          |MetaData       |
      | SuperAdmin          |  Refund      |


  @Status @Smoke @Return
  Scenario Outline: Partial refund order
    Given User is on Login Page of OMS
    When  User Login With "<Credential>" Username and Password
    Then  User Go to OMS "Orders" from Panel
#    Then  User go to refund Order ID
    Then  User go to Order "<MetaData>" Number
    And   User Go to  Line Item "<MetaData>" details

#    And   User Go to refund first Line Item against order
    Then  User Verify Item "<Item Status>" Status
    When  User hit the OMS Update Button
    Then  User copy the order number
    And   Close All the tabs except Base
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to Order ID "Refund"

#    Then  User go to order Static Refund details
    And   User hit the Update Button
    And   Verify OMS "<MetaData>" partial "<Item Status>" from WooCommerce
    Then  Verify WooAdmin "<MetaData>" partial "<Item Status>" from WooCommerce
    Examples:
      | Credential          |Item Status      |MetaData      |
      | SuperAdmin          |Returned         | Refund       |


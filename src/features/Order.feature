@order
Feature: TS 1 WOO: Place the order of Different Plush Products
  with verification of Pre REQ like ADD PET verify Cart and etc.


  As a user can place Order On WooCommerce Site
  @Smoke @Add_pet @regression
  Scenario Outline: Add a PET
    Given User is on HomePage
    Then  User click on my account
    When  User go to pet link
    Then  User click on add pet
    And   User enter "<Pet>" name
    And   User select "<Pet>" Specy and breed
    When  Then User go to next step
    Then  User upload face image
    And   User select "<Pet>" of both eyes
    Then  User select Left and Right ear positions
    And   User select "<Pet>" Age
    Then  User click on next button

    Examples:
      | Pet       |
      | Pet_dog   |

  @Smoke @Add_to_cart @regression @plush
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

    Examples:
             | Payment     |
             | Debit       |
  @Smoke @Add_to_cart @regression @Add_slipper
  Scenario Outline: Add a Plush Slipper Product
    Given User is on HomePage
    When  User go to product
    And   User click on "Slippers" item category
    Then  User click on get your product button
    And   User select pet from the modal
    Then  User select size of "<Pet>" slipper
    When  User confirm order of product
    And   User click add to cart
    When  User click on finish checkout
    Then  User verify the item in cart
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
    Then  User get the Order ID
    And   User Save the Order ID
    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to order "<Order>" details
    And   User hit the Update Button
    When  User go to Edit the Billing Data
    Then  User get the Values of Billing
    Then  Dump all the data to the YamlFile


    Examples:
      | Payment     |  Pet       | Order       |
      | Debit       |  Pet_dog   | Order_data  |


  @Smoke @Add_to_cart @regression @WooCommerce
  Scenario Outline: Get data from  Woocommerce Admin Website

    Given Super User go to Admin Site
    When  User click On Wocommerce from side panel
    And   User go to orders list
    Then  User go to order "<Order>" details
    And   User hit the Update Button
    When  User go to Edit the Billing Data
    Then  User get the Values of Billing
    Then  User go to Edit the Shipping Data
    And   User get the Values of Shipping
    Then  User get the values of Item
    Then  Dump all the data to the YamlFile
    Then  Close All the tabs except Base

    Examples:
             | Order       |
             | Order_data  |




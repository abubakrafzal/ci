Feature: TS 1 WOO: Place the order of Plush Clone

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

  @Smoke @Add_to_cart @regression
  Scenario Outline: Add a Plush Clone
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



    Examples:
      | Pet       |
      | Pet_dog   |



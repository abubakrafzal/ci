export const ElementHome = {
    addPet: "//div[@class='add_pet_sidebar_button']",
};

export const ElementOrder = {
    modal: "//div[@class='add_pet_contain']//h5",

    add_pet: '#new_pets_name',

    specyelem: '#new_pets_species',

    breedelem: '#new_pets_breed',

    uploadFaceImage:
        "//body[@class='page-template page-template-template-add_edit-pet_profile page-template-template-add_edit-pet_profile-php page page-id-388 logged-in wp-custom-logo wp-embed-responsive theme-CuddleCloneTheme woocommerce-js has_paypal_express_checkout group-blog elementor-default jdgm--leex-script-loaded']/input[1]",

    uploadbtn: "//div[@class='photo_uploads section']//div[@class='left_side']//label",

    leftEar: "#pet_details_page > div.ear_positions.section > div.right_side > div.left_column > div:nth-child(3)",

    RightEar: "#pet_details_page > div.ear_positions.section > div.right_side > div.right_column > div:nth-child(3)",

    ageElem: "//select[@id='age']",

    productElem: "//li[@class='dropdown menu-large nav-item']//a[@class='dropdown-toggle nav-link']",

    dropdownShowElem: "//ul[@class='dropdown-menu megamenu show']",

    productBtnElem: "//a[@class='get-product-button customize btn-white-arrow']",

    headerElem: "//div[@class='change_pet']//h5",

    selectPet: "(//div[@class='pet_box']//a//b)[1]",

    nxtBtn: "//div[contains(text(),'Next Step')]",

    confirmElem: "//a[contains(@class,'confirm')]",

    modalCart:
        "//div[@class='modal-dialog modal-dialog-centered confirm_order_outer_container']",

    addCartelem: 'div.add_to_cart_button',

    finishCheckoutElem: "//div[@class='no_thanks drk-btn']",

    verifyCartMessage: "//div[@class='cart_count']",

    proceedBtnElem: "//a[@class='btn btn-primary btn-lg btn-block']",

    orderSuccessMessage: "//div[@class='thank_you_contain']//h2",

    slipperSizeElem: "//select[@id='attribute_pa_size']",

    orderIdElem: "//div[@id='orderStatus']//h4//b",
};
export const ElementCheckout = {
    orderSummary: "//h3[@id='order_review_heading']",

    useNewPaymentMethod:
        "//li[@class='woocommerce-SavedPaymentMethods-new']//label",

    totalAmount:
        "//div[@id='order_review']//tr[@class='order-total b-top']//span[@class='woocommerce-Price-amount amount']",

    placeOrder: "//div[@class='confirm_checkout_button']",

    cardElem: 'input[name="cardnumber"]',

    expireDateElem: 'input[name="exp-date"]',

    cvcElem: '//form/span[2]/span/input[@name ="cvc"]',

    discretePackagingElem: '#Discreet_Packaging_one',

    placeOrderElem: "//div[@class='confirm_checkout_button']",

    thankYouMessageElem: "//div[@class='thank_you_contain']//h2",

    closeBtnElem: "//button[@class='close']",
};
export const ElementAdmin={
    title:"Dashboard ‹ Cuddle Clones",
    url: "wp-admin",
    dashboardElem:"//div[@class='wrap']//h1",
    wooCommerceElem : "//div[@class='wp-menu-name'][contains(text(),'WooCommerce')]",
    ordersLiElem : "//a[@class='wp-first-item current']",
    updateButtonElem : "//button[@name='save']",

    /*
    todo
    Billing Admin Elemenet
     */
    billingEditIconElem: "//h3[contains(text(),'Billing')]//a[@class='edit_address'][contains(text(),'Edit')]",

    billingfirstNameElem : "//input[@id='_billing_first_name']",
    billingLastNameElem : "//input[@id='_billing_last_name']",
    billingCompanyElem : "//input[@id='_billing_company']",
    billingAddressLine1Elem : "//input[@id='_billing_address_1']",
    billingSddressLine2Elem : "//input[@id='_billing_address_2']",
    billingCityElem : "//input[@id='_billing_city']",
    billingPostcodeZIPElem : "//input[@id='_billing_postcode']",
    billingSelectCountryElem : "//span[@id='select2-_billing_country-container']",
    billingStateCountyElem : "//input[@id='_billing_state']",
    billingEmailAddressElem : "//input[@id='_billing_email']",
    billingPhoneElem : "//input[@id='_billing_phone']",
    billingDebitCreditAffirElem : "//select[@id='_payment_method']",
    billingTransactionIDElem : "//input[@id='_transaction_id']",
/*
Todo

Shipping ELement WPADMIN

 */

    shippingEditIconElem : "//h3[contains(text(),'Shipping')]//a[@class='edit_address'][contains(text(),'Edit')]",
    shippingFirstNameElem : "//input[@id='_shipping_first_name']",
    shippingLastNameElem : "//input[@id='_shipping_last_name']",
    shippingCompanyElem : "//input[@id='_shipping_company']",
    shippingAddressLine1Elem : "//input[@id='_shipping_address_1']",
    shippingAddressLine2Elem : "//input[@id='_shipping_address_2']",
    shippingCityElem : "//input[@id='_shipping_city']",
    shippingPostcodeZIPElem : "//input[@id='_shipping_postcode']",
    shippingSelectCountryElem : "//span[@id='select2-_shipping_country-container']",
    shippingStateCountyElem : "//input[@id='_shipping_state']",
    shippingCustomerProvidedNoteElem : "//textarea[@id='excerpt']",


}

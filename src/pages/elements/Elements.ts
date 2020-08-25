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
    orderDateElem: "//input[@name='order_date']",
    lineItemFirstElem: "//tbody[@id='order_line_items']//td[@class='name']//div[2]",
    /*
    todo
    Billing Admin Elemenet
     */
    billingEditIconElem: "//h3[contains(text(),'Billing')]//a[@class='edit_address'][contains(text(),'Edit')]",

    billingfirstNameElem : "//input[@id='_billing_first_name']",
    billingLastNameElem : "//input[@id='_billing_last_name']",
    billingCompanyElem : "//input[@id='_billing_company']",
    billingAddressLine1Elem : "//input[@id='_billing_address_1']",
    billingAddressLine2Elem : "//input[@id='_billing_address_2']",
    billingCityElem : "//input[@id='_billing_city']",
    billingPostcodeZIPElem : "//input[@id='_billing_postcode']",
    billingSelectCountryElem : "//span[@id='select2-_billing_country-container']",
    billingStateCountryElem : "//span[@id='select2-_billing_state-container']",
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
    shippingStateCountyElem : "//span[@id='select2-_shipping_state-container']",
    shippingCustomerProvidedNoteElem : "//textarea[@id='excerpt']",

//finished


    orderOMSItemStatus:"//tbody[@id='order_line_items']/tr[1]//table[@class='display_meta']//th[.='Item Status (OMS):']//following-sibling::td",
    orderWooItemStatus:"//tbody[@id='order_line_items']/tr[1]//table[@class='display_meta']//th[.='Item Status (Woocommerce):']//following-sibling::td",
    rushOMSItemStatus:"//tbody[@id='order_line_items']/tr[2]//table[@class='display_meta']//th[.='Item Status (OMS):']//following-sibling::td",
    rushWooItemStatus:"//tbody[@id='order_line_items']/tr[2]//table[@class='display_meta']//th[.='Item Status (Woocommerce):']//following-sibling::td",
    rushDeliveryDuration:"/html//tbody[@id='order_line_items']/tr[2]/td[@class='name']/div[4]",

}
export const ElementOMSHome = {
    headingElem: "//div[@id='login']//h2",

    usernameElem : "//input[@id='employee_email']",
    passwordElem : "//input[@id='employee_password']",
    rememberMeElem : "//input[@id='employee_remember_me']",
    submitElem : "//input[@name='commit']",
    pageTitleElem: "//h2[@id='page_title']",
    orderPanelElem :"//li[@id='orders']//a",

    dashboardElem : "//li[@id='dashboard']//a",
    employeesElem : "//li[@id='employees']//a",
    holidaysElem : "//li[@id='holidays']//a",
    importProductsElem : "//li[@id='import_products']//a",
    lineItemsElem : "//li[@id='line_items']//a",
    productsElem : "//li[@id='products']//a",
    shipStationOrdersElem : "//li[@id='shipstation_orders']//a",
    statusMappingsElem : "//li[@id='status_mappings']//a",

    orderNumberElem : "//input[@id='order_id']",

};

export const ElementOMSOrder = {
    firstNameElem : "//input[@id='order_customer_attributes_first_name']",
    lastNameElem : "//input[@id='order_customer_attributes_last_name']",
    shippingNotesElem : "//textarea[@id='order_shipping_notes']",
    orderDateElem : "//input[@id='order_date_created']",
    orderStatusElem : "//input[@id='order_status']",
    paymentViaElem : "//input[@id='order_payment_method']",
    rushElem : "//select[@id='order_rush']",
    discreetPackagingElem : "//label[contains(text(),'Discreet packaging')]",
    lineItemFirstElem : "(//td[@class='col col-item_number']//a)[1]",

    billingBarElem : "//a[contains(text(),'Billing Address')]",
    billingfirstNameElem : "//input[@id='order_billing_address_attributes_first_name']",
    billinglastNameElem : "//input[@id='order_billing_address_attributes_last_name']",
    billingAddress1Elem : "//input[@id='order_billing_address_attributes_address_1']",
    billingAddress2Elem : "//input[@id='order_billing_address_attributes_address_2']",
    billingcountryElem : "//input[@id='order_billing_address_attributes_country']",
    billingstateElem : "//input[@id='order_billing_address_attributes_state']",
    billingemailElem : "//input[@id='order_billing_address_attributes_email']",
    billingcityElem : "//input[@id='order_billing_address_attributes_city']",
    billingpostcodeElem : "//input[@id='order_billing_address_attributes_postcode']",
    billingphoneElem : "//input[@id='order_billing_address_attributes_phone']",
    billingphoneTwilioElem : "//input[@id='order_billing_address_attributes_phone_twilio']",

    shippingBarElem : "//a[contains(text(),'Shipping Address')]",
    shippingfirstNameElem : "//input[@id='order_shipping_address_attributes_first_name']",
    shippinglastNameElem : "//input[@id='order_shipping_address_attributes_last_name']",
    shippingaddress1Elem : "//input[@id='order_shipping_address_attributes_address_1']",
    shippingaddress2Elem : "//input[@id='order_shipping_address_attributes_address_2']",
    shippingcountryElem : "//input[@id='order_shipping_address_attributes_country']",
    shippingstateElem : "//input[@id='order_shipping_address_attributes_state']",
    shippingcityElem : "//input[@id='order_shipping_address_attributes_city']",
    shippingpostcodeElem : "//input[@id='order_shipping_address_attributes_postcode']",


};
export const ElementOMSLineItem = {

    lineItemStatusElem : "//span[@id='select2-line_item_slug-container']",
    lineorderNumberElem : "//input[@id='line_item_order_id']",
    lineitemNumberElem : "//input[@id='line_item_id']",
    lineassigendUserElem: "//span[@id='select2-line_item_employee_id-container']",
    lineassigendStaticUserElem: "//span[@class='select2-container select2-container--default select2-container--open']//li[2]",
    lineproductNameElem : "//input[@id='line_item_product_name']",

    linetranslateToChineseElem : "//a[@id='translate-to-chinese-button']",
    lineaddRefundElem : "//a[contains(text(),'Add Refund')]",
    linesendEmailElem : "//a[@id='send-email-button']",
    lineviewCodeElem : "//a[@id='view-code-button']",
    lineupdateElem : "//a[@class='nav-form-submit']",
    linefirstNameElem : "//input[@id='line_item_customer_first_name']",
    linelastNameElem : "//input[@id='line_item_customer_last_name']",
    lineemailElem : "//input[@id='line_item_customer_email']",
    linephoneNumberElem : "//input[@id='line_item_customer_phone']",
    lineproductIDElem : "//li[@id='line_item_product_attributes_id_input']//input[@id='line_item_product_attributes_id']",
    linevariationIDElem : "//li[@id='line_item_product_variation_attributes_id_input']//input[@id='line_item_product_variation_attributes_id']",
    linepetIDElem : "//input[@id='line_item_lineable_attributes_pet_profile_attributes_pet_id']",
    linepetAgeElem : "//input[@id='line_item_lineable_attributes_pet_profile_attributes_pet_age']",
    lineshippingNotesElem : "//textarea[@id='line_item_order_attributes_shipping_notes']",
    lineAssignmentGroupElem : "//input[@id='line_item_status_mapping_attributes_auto_assignment_group']",
    linequantityElem : "//input[@id='line_item_quantity']",
    linetotalElem : "//input[@id='line_item_total']",
    linerushElem : "//span[@id='select2-line_item_order_attributes_rush-container']",
    linechinaTrackingLinkElem : "//input[@id='line_item_lineable_attributes_china_box_tracking_link']",
    linechinaBoxIDElem : "//input[@id='line_item_lineable_attributes_china_shipping_box_id']",
    lineshipstationTrackingUrlElem : "//input[@id='line_item_shipstation_tracking_url']",
    lineearliestShipDateElem : "//input[@id='line_item_earliest_ship_date']",
    linepetDetailsElem : "//a[@id='ui-id-21']",
    lineassignmentElem : "//a[@id='ui-id-22']",
    linefulfillmentDatesElem : "//a[@id='ui-id-23']",
    linefinishedImagesElem : "//a[@id='ui-id-24']",
    linenotesElem : "//a[@id='ui-id-25']",
    linewhiteCloneCompletedexpectedElem : "//input[@id='line_item_lineable_attributes_white_clone_completed_expected']",
    linewhiteCloneCompletedactualElem : "//input[@id='line_item_lineable_attributes_white_clone_completed_actual']",
    linepassQualityInspectionactualElem : "//input[@id='line_item_lineable_attributes_pass_quality_inspection_actual']",
    lineshipFromChinaToHqexpectedElem : "//input[@id='line_item_lineable_attributes_ship_from_china_to_hq_expected']",
    lineshipFromChinaToHqactualElem : "//input[@id='line_item_lineable_attributes_ship_from_china_to_hq_actual']",
    lineshipFromHqToCustomerexpectedElem : "//input[@id='line_item_lineable_attributes_ship_from_hq_to_customer_expected']",
    lineshipFromHqToCustomeractulElem : "//input[@id='line_item_lineable_attributes_ship_from_hq_to_customer_actual']",
    linerequestBuilderElem : "//a[@id='ui-id-26']",
    linenewElem : "//div[@id='notifications']//a[contains(text(),'New')]",
    lineRemakesElem : "//a[@id='ui-id-27']",
};

export const ElementOMSEmploye = {

};



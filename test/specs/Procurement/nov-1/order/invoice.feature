@invoice
Feature: Cek skema potongan flashsale

    @invoice-customer-1
    Scenario Outline: Memastikan untuk kolom potongan pada SKU flashsale akan bernilai 0 pada invoice customer
    Given api user login
    When open dashboard superapp
    And User open an invoice contains sku flash sale
    Then Assert that the nominal discount for "invoice customer" equal to 0

    @invoice-customer-2
    Scenario Outline: Memastikan untuk kolom total pada SKU flashsale akan menghitung harga per unit * qty (tanpa ada potongan) pada invoice customer
    Given api user login
    When open dashboard superapp
    And User open an invoice contains sku flash sale
    Then Assert that the total for sku flash sale on "invoice customer" equal to qty * harga

    @invoice-audit-1
    Scenario Outline: Memastikan untuk kolom potongan pada SKU flashsale akan bernilai 0 pada invoice audit
    Given api user login
    When open dashboard superapp
    And User open an invoice contains sku flash sale
    Then Assert that the nominal discount for "invoice audit" equal to 0

    @invoice-audit-2
    Scenario Outline: Memastikan untuk kolom total pada SKU flashsale akan menghitung harga per unit * qty (tanpa ada potongan) pada invoice audit
    Given api user login
    When open dashboard superapp
    And User open an invoice contains sku flash sale
    Then Assert that the total for sku flash sale on "invoice audit" equal to qty * harga
@bundle-direct
Feature: Produk bundle penjualan direct

    @bundle-direct-1
    Scenario Outline: Memastikan tampil sku product bundle pada create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "Honey Bee Bundle" in "pilihProductModalDirect"
    Then Assert that SKU Bundle exist for direct selling

    @bundle-direct-2
    Scenario Outline: Memastikan tampil button lihat isi bundle saat produk sudah dipilih pada modal saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    Then Assert that button lihat isi bundle is displayed

    @bundle-direct-3
    Scenario Outline: Memastikan tampil kode sku bundle di bawah dropdown nama sku bundle saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    Then Assert that SKU bundle is displayed

    @bundle-direct-4
    Scenario Outline: Memastikan satuan default adalah bundle saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "inputSatuanModalMP"
    And User type enter button
    Then Assert that satuan default is bundle

    @bundle-direct-5
    Scenario Outline: Memastikan terdapat informasi sisa stok bundle saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    Then Assert that sisa stok is displayed

    @bundle-direct-6
    Scenario Outline: Memastikan tampil modal berisi informasi isi bundle saat button lihat isi bundle di klik
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "btnLihatIsiBundle"
    Then Assert that modal is displayed with informasi isi bundle

    @bundle-direct-7
    Scenario Outline: Memastikan pada modal isian bundle terdapat kolom no saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "btnLihatIsiBundle"
    Then Assert that table in the modal consist of column "No."

    @bundle-direct-8
    Scenario Outline: Memastikan pada modal isian bundle terdapat kolom produk satuan saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "btnLihatIsiBundle"
    Then Assert that table in the modal consist of column "Produk Satuan"

    @bundle-direct-9
    Scenario Outline: Memastikan pada modal isian bundle terdapat kolom Qty per Bundle saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "btnLihatIsiBundle"
    Then Assert that table in the modal consist of column "Qty per Bundle"

    @bundle-direct-10
    Scenario Outline: Memastikan pada modal isian bundle terdapat kolom Satuan saat create penjualan direct
    Given api user login
    When open dashboard superapp
    And User wait for 3 seconds
    And User click "navMenuOrder" in global page
    And User click "menuPenjualan" in "navMenuOrder"
    And User wait for 5 seconds
    And User refresh the page
    And User click "btnAddOrder"
    And User click "btnDirect" in "btnAddOrder"
    And User click "agenPemesanMarketPlace"
    And User type "082210803538" in "agenPemesanMarketPlace"
    And User type enter button
    And User click "alamatKirimMarketPlace"
    And User type "warung" in "alamatKirimMarketPlace"
    And User type enter button
    And User click "tipePtDirect"
    And User type "gsa" in "tipePtDirect"
    And User type enter button
    And User click "addProductDirect"
    And User click "addProductModalDirect"
    And User click "pilihProductModalDirect"
    And User input "bundle" in "pilihProductModalDirect"
    And User type enter button
    And User click "btnLihatIsiBundle"
    Then Assert that table in the modal consist of column "Satuan"
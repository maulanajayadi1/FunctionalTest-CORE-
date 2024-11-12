@retur-nota
Feature: Tampilkan dokumen hasil upload saat incoming CN

    @retur-nota-1
    Scenario Outline: Memastikan tampil section BA penarikan barang pada dokumen pendukung
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    Then Assert that the section "BA penarikan barang" is shown

    @retur-nota-2
    Scenario Outline: Memastikan tampil file BA penarikan barang
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "BA penarikan barang"
    Then Assert that the file "BA penarikan barang" is shown

    @retur-nota-3
    Scenario Outline: Memastikan tampil label BA penarikan barang
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "BA penarikan barang"
    Then Assert that label "BA penarikan barang" is shown

    @retur-nota-4
    Scenario Outline: Memastikan file BA penarikan barang dapat di perbesar
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "BA penarikan barang"
    And User click file "BA penarikan barang"
    Then Assert that file can be enlarged

    @retur-nota-5
    Scenario Outline: Memastikan tampil section Retur nota customer pada dokumen pendukung
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    Then Assert that the section "Retur nota customer" is shown

    @retur-nota-6
    Scenario Outline: Memastikan tampil file Retur nota customer
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "Retur nota customer"
    Then Assert that the file "Retur nota customer" is shown

    @retur-nota-7
    Scenario Outline: Memastikan tampil label Retur nota customer
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "Retur nota customer"
    Then Assert that label "Retur nota customer" is shown

    @retur-nota-8
    Scenario Outline: Memastikan file Retur nota customer dapat di perbesar
    Given api user login
    When open dashboard superapp
    And User click menu order
    And User click menu retur nota
    And User click filter by period
    And User select option 30 hari terakhir
    And User click detail on list with status disetujui
    And User click tab dokumen pendukung
    And User click section "Retur nota customer"
    And User click file "Retur nota customer"
    Then Assert that file can be enlarged
import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import { browser } from '@wdio/globals'
import rn from '../../pageobjects/procurement/invoice-page'

When ('User click menu order', async () => {
    await rn.menuOrder.waitForDisplayed();
    await rn.menuOrder.scrollIntoView();
    await rn.menuOrder.click();
})

When ('User click menu retur nota', async () => {
    await rn.menuReturNota.waitForDisplayed();
    await rn.menuReturNota.click();
    await browser.pause(1000);
})

When ('User click filter by period', async () => {
    await rn.filterPeriode.click();
})

When ('User select option 30 hari terakhir', async () => {
    await rn.optionPeriode30HariTerakhir.click();
})

When ('User click detail on list with status disetujui', async () => {
    await rn.btnDetailReturNota.click();
})

When ('User click tab dokumen pendukung', async () => {
    await rn.tabDokumenPendukung.scrollIntoView();
    await rn.tabDokumenPendukung.click();
})

When ('Assert that the section {string} is shown', async (type) => {
    if(type == "BA penarikan barang"){
        let isDisplayed = await rn.sectionBAPenarikanBarang.isDisplayed();
        expect(isDisplayed).to.be.true;
    } else if(type == "Retur nota customer"){
        let isDisplayed = await rn.sectionReturNotaCustomer.isDisplayed();
        expect(isDisplayed).to.be.true;
    }
})

When ('User click section {string}', async (type) => {
    if(type == "BA penarikan barang"){
        await rn.sectionBAPenarikanBarang.click();
    } else if(type == "Retur nota customer"){
        await rn.sectionReturNotaCustomer.click();
    }
})

When ('Assert that the file {string} is shown', async (type) => {
    if(type == "BA penarikan barang"){
        await rn.imgBAPenarikanBarang.waitForExist();
        let isExisting = await rn.imgBAPenarikanBarang.isExisting();
        expect(isExisting).to.be.true;
    } else if(type == "Retur nota customer"){
        await rn.imgReturNotaCustomer.waitForExist();
        let isExisting = await rn.imgReturNotaCustomer.isExisting();
        expect(isExisting).to.be.true;
    }
})

When ('Assert that label {string} is shown', async (type) => {
    if(type == "BA penarikan barang"){
        await rn.labelBAPenarikanBarang.waitForExist();
        let isExisting = await rn.labelBAPenarikanBarang.isExisting();
        expect(isExisting).to.be.true;
    } else if(type == "Retur nota customer"){
        await rn.labelReturNotaCustomer.waitForExist();
        let isExisting = await rn.labelReturNotaCustomer.isExisting();
        expect(isExisting).to.be.true;
    }
})

When ('User click file {string}', async (type) => {
    if(type == "BA penarikan barang"){
        await rn.imgBAPenarikanBarang.click();
    } else if(type == "Retur nota customer"){
        await rn.imgReturNotaCustomer.click();
    }
})

When ('Assert that file can be enlarged', async () => {
    await rn.imgEnlarged.waitForExist();
    let isExisting = await rn.imgEnlarged.isExisting();
    expect(isExisting).to.be.true;
})
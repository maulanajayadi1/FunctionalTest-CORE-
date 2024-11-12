import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import { browser } from '@wdio/globals'
import bd from '../../../../pageobjects/Procurement/nov-1/order/bundle-direct-page.ts'

When ('Assert that SKU Bundle exist for direct selling', async () => {
    await bd.dropdownSKUBundle.waitForExist();
    let isExisting = await bd.dropdownSKUBundle.isExisting();
    expect(isExisting).to.be.true;
})

When ('Assert that button lihat isi bundle is displayed', async () => {
    await bd.btnLihatIsiBundle.waitForExist();
    let isExisting = await bd.btnLihatIsiBundle.isExisting();
    expect(isExisting).to.be.true;
})

When('Assert that SKU bundle is displayed', async () => {
    await bd.textBundleCode.waitForExist();
    let skucode = await bd.textBundleCode.getText();
    expect(skucode).contain('BDL');
})

When('Assert that satuan default is bundle', async () => {
    await bd.satuanBundle.waitForExist();
    let isExisting = await bd.satuanBundle.isExisting();
    expect(isExisting).to.be.true;
})

When('Assert that sisa stok is displayed', async () => {
    await bd.textSisaStok.waitForExist();
    let skucode = await bd.textSisaStok.getText();
    expect(skucode).contain('Sisa Stok');
})

When('User click "btnLihatIsiBundle"', async () => {
    await bd.btnLihatIsiBundle.click();
})

When ('Assert that modal is displayed with informasi isi bundle', async () => {
    await bd.modalIsiBundle.waitForExist();
    let isExisting = await bd.modalIsiBundle.isExisting();
    expect(isExisting).to.be.true;
})

When('Assert that table in the modal consist of column {string}', async (columnName) => {
    if(columnName == "No."){
        await bd.kolomNo.waitForExist();
        let kolomText = await bd.kolomNo.getText();
        console.log(kolomText);
        expect(kolomText).contain('No.');
    } else if(columnName == "Produk Satuan"){
        await bd.kolomProdukSatuan.waitForExist();
        let kolomText = await bd.kolomProdukSatuan.getText();
        console.log(kolomText);
        expect(kolomText).contain('Produk Satuan');
    } else if(columnName == "Qty per Bundle"){
        await bd.kolomQtyPerBundle.waitForExist();
        let kolomText = await bd.kolomQtyPerBundle.getText();
        console.log(kolomText);
        expect(kolomText).contain('Qty per Bundle');
    } else if(columnName == "Satuan"){
        await bd.kolomSatuan.waitForExist();
        let kolomText = await bd.kolomSatuan.getText();
        console.log(kolomText);
        expect(kolomText).contain('Satuan');
    }  
})
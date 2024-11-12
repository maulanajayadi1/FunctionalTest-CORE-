import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'
import { browser } from '@wdio/globals'
import invoice from '../../../pageobjects/Procurement/nov-1/order/invoice-page.ts'

When ('User open an invoice contains sku flash sale', async function () {
    await browser.navigateTo('https://v3-web-app-micro.staging.superapp.co.id/order/penjualan/invoice/1435422364');
    // await browser.url(`https://v3-web-app-micro.staging.superapp.co.id/order/penjualan/invoice/1435422364`);
})

When ('Assert that the nominal discount for {string} equal to 0', async (type) => {
    if(type == "invoice customer"){
        await invoice.elementPotonganInvoiceCustomer.scrollIntoView();
        let nominal = await invoice.elementPotonganInvoiceCustomer.getText();
        const nominalInt = parseInt(nominal.replace('Rp. ', '').trim());
        console.log(nominalInt);
        expect(nominalInt).to.equal(0);
    } else if(type == "invoice audit"){
        await invoice.elementPotonganInvoiceAudit.scrollIntoView();
        let nominal = await invoice.elementPotonganInvoiceAudit.getText();
        const nominalInt = parseInt(nominal.replace('Rp. ', '').trim());
        console.log(nominalInt);
        expect(nominalInt).to.equal(0);
    }
})

When ('Assert that the total for sku flash sale on {string} equal to qty * harga', async (type) => {
    if(type == "invoice customer"){
        await invoice.qtyInvoiceCustomer.scrollIntoView();
        let qty = await invoice.qtyInvoiceCustomer.getText();
        const qtyInt = parseInt(qty.replace('Rp. ', '').trim());
        let harga = await invoice.hargaInvoiceCustomer.getText();
        const hargaInt = parseInt(harga.replace('Rp. ', '').trim());
        let total = await invoice.totalInvoiceCustomer.getText();
        let totalInt = parseInt(total.replace('Rp. ', '').trim());
        let calculate = qtyInt * hargaInt;
        expect(totalInt).to.equal(calculate);

    } else if(type == "invoice audit"){
        await invoice.qtyInvoiceAudit.scrollIntoView();
        let qty = await invoice.qtyInvoiceAudit.getText();
        const qtyInt = parseInt(qty.replace('Rp. ', '').trim());
        let harga = await invoice.hargaInvoiceAudit.getText();
        const hargaInt = parseInt(harga.replace('Rp. ', '').trim());
        let total = await invoice.totalInvoiceAudit.getText();
        let totalInt = parseInt(total.replace('Rp. ', '').trim());
        let calculate = qtyInt * hargaInt;
        expect(totalInt).to.equal(calculate);
    }
})
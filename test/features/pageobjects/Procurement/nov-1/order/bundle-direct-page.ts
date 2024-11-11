export default new class bundle_direct_page{

    public get dropdownSKUBundle() {
        return $('//*[@class="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open"]');
    }

    public get btnLihatIsiBundle() {
        return $('//*[@class="cursor-pointer font-bold color-primary m-top-3 Form_skuContainer__X98i8"]');
    }

    public get textBundleCode() {
        return $('//*[@class="font-mini Form_skuContainer__X98i8"]');
    }

    public get satuanBundle() {
        return $('(//*[@title="Bundle"])[1]');
    }

    public get textSisaStok() {
        return $('(//*[@class="font-mini"])[2]');
    }

    public get modalIsiBundle() {
        return $('//*[@class="ant-modal-content"]');
    }

    public get kolomNo() {
        return $('(//*[@class="ant-table-thead"])[4]/tr/th[1]');
    }

    public get kolomProdukSatuan() {
        return $('(//*[@class="ant-table-thead"])[4]/tr/th[2]');
    }

    public get kolomQtyPerBundle() {
        return $('(//*[@class="ant-table-thead"])[4]/tr/th[3]');
    }

    public get kolomSatuan() {
        return $('(//*[@class="ant-table-thead"])[4]/tr/th[4]');
    }
}
export default new class retur_nota_page{

    public get menuOrder() {
        return $('//*[@data-testid="Menu-Order"]');
    }

    public get menuReturNota() {
        return $('//*[@data-testid="Menu-ReturNota"]');
    }

    public get filterPeriode() {
        return $('(//*[@class="ant-select-selector"])[2]');
    }

    public get optionPeriode30HariTerakhir() {
        return $('//*[@title="30 hari terakhir"]');
    }

    public get btnDetailReturNota() {
        return $('(//tr[contains(@class, "ant-table-row") and .//span[@data-testid="tag-filled-success-disetujui"]]//button[@data-testid="button-link-small-detail"])[1]');
    }

    public get tabDokumenPendukung() {
        return $('//*[@data-testid="tabs-label-dokumen-pendukung"]');
    }

    public get sectionBAPenarikanBarang() {
        return $('//*[@data-testid="tabs-label-ba-penarikan-barang"]');
    }

    public get sectionReturNotaCustomer() {
        return $('//*[@data-testid="tabs-label-retur-nota-customer"]');
    }

    public get imgBAPenarikanBarang() {
        return $('(//*[@class="ant-image-mask"])[2]');
    }

    public get imgReturNotaCustomer() {
        return $('(//*[@class="ant-image-mask"])[2]');
    }

    public get btnClosePreviewImage() {
        return $('//button[@class="ant-image-preview-close"]');
    }

    public get labelBAPenarikanBarang() {
        return $('//div[contains(@class, "flex flex-col")]//div[text()="BA Penarikan Barang"]');
    }

    public get labelReturNotaCustomer() {
        return $('//div[contains(@class, "flex flex-col")]//div[text()="Retur Nota Customer"]');
    }

    public get imgEnlarged() {
        return $('//*[@class="ant-image-preview-img"]');
    }
}
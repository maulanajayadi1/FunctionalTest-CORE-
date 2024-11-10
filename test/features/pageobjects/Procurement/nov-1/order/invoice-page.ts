export default new class invoice_page{

    public get elementPotonganInvoiceCustomer() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[6])[1]');
    }

    public get elementPotonganInvoiceAudit() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[6])[2]');
    }

    public get qtyInvoiceCustomer() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[4])[1]');
    }

    public get qtyInvoiceAudit() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[3])[2]');
    }

    public get hargaInvoiceCustomer() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[5])[1]');
    }

    public get hargaInvoiceAudit() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[5])[2]');
    }

    public get totalInvoiceCustomer() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[7]/span/div[2])[1]');
    }

    public get totalInvoiceAudit() {
        return $('(//table[contains(@class, "Components_tableProduk__gSV+X")]//tbody/tr[td[contains(text(), "(Flash Sale)")]]/td[7])[2]');
    }
}
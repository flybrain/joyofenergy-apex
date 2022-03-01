import { LightningElement, api } from 'lwc';
import getAccounts from '@salesforce/apex/ReadingsStub.getAccounts'

export default class DisplayList extends LightningElement {

    @api recordId;

    data = []
    columns = [{ label: 'Account Name', fieldName: 'accountName' }]

    async connectedCallback() {
        const data = await getAccounts({});
        this.data = data;
        console.log(this.recordId);
    }

}
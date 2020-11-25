import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UtilityService {
    // list of regExp pattarn. Please maintain the ASCENDING ORDER
    regExp = {
        alphaNum: '^[a-zA-Z0-9]*$',
        gstn: '^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[a-zA-Z0-9]{3}$',
        password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
        phone: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$',
    };
    constructor() { }

    /**
     * this function is to check empty object
     * if empty return true else false
     * @param obj object to be passed
     * @returns boolean true | false
     */
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    /**
    * this function is to write either in local storage or session storage
    * @key name of the key
    * @value value to be set in localstorage or sessionStorage
    * @store type of storage either localStorage or sessionStorage
    * @remember is optional boolean if true set as localStorage else sessionStorage
    */
    writeStorage(key: string, value: any, store?, remember?: boolean): void {
        store = remember ? localStorage : (store || sessionStorage);
        value = (typeof value === 'object') ? JSON.stringify(value) : String(value);
        store.setItem(key, value);
    }

    /**
     * this function is to read and return the storage value
     * @param name of the key
     * @param store type of storage either localStorage or sessionStorage
     * @returns store data | false
     */
    readStorage(key, store): any | boolean {
        store = store || localStorage;
        const storeData = JSON.parse(store.getItem(key));
        return storeData ? storeData : false;
    }

    /**Compare two any two values for sorting the table data */
    compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
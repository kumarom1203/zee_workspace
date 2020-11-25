/**
 * Generic Sweet Alert Popup Open Service.
 * Author: Rajesh Malakar,
 * Email: rajeshmbg3@gmail.com
 */


import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
    providedIn: 'root'
})

export class SwalService {
    alert: any;
    constructor() {
        this.alert = {
            oops: (text?: string) =>
                Swal.fire({
                    title: 'Oops..!',
                    text: text || 'Something went wrong, please try again later',
                    icon: 'warning',
                    timer: 5000
                }),
            success: (text?: string , title?: string) =>
                Swal.fire({
                    title: title || 'Success..!',
                    text: text || 'Done successfully',
                    icon: 'success',
                    timer: 5000
                }),
            update: (text?: string) =>
                Swal.fire({
                    title: 'Updated..!',
                    text: text || 'Your data has been updated successfully',
                    icon: 'success',
                    timer: 5000
                }),
            info: (text?: string) =>
                Swal.fire({
                    title: 'Wow..!',
                    text: text || '',
                    icon: 'info',
                    timer: 5000
                }),
            delete: () =>
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'Once deleted could not be undo',
                    icon: 'warning',
                    timer: 5000,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((willDelete) => {
                    return new Promise((resolve, reject) => {
                        if (willDelete.value)
                            resolve(true);
                        else
                            reject(false);
                    });
                }),
            error: (text?: string) =>
                Swal.fire({
                    title: 'Oops..!',
                    text: text || 'An error has occured, please try again later',
                    icon: 'error',
                    timer: 5000
                })
        }
    }
}

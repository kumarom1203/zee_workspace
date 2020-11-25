import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
    providedIn: 'root'
})

export class SwalService {
    alert: any;
    constructor() {
        this.alert = {
            oops: (text) =>
                Swal.fire({
                    title: 'Oops..!',
                    text: text || 'Something went wrong, please try again later',
                    icon: 'warning',
                    timer: 5000
                }),
            success: (text) =>
                Swal.fire({
                    title: 'Success..!',
                    text: text || 'Done successfully',
                    icon: 'success',
                    timer: 5000
                }),
            update: (text) =>
                Swal.fire({
                    title: 'Success..!',
                    text: text || 'Your data has been updated successfully',
                    icon: 'success',
                    timer: 3000
                }),
            info: (text) =>
                Swal.fire({
                    title: 'Wow..!',
                    text: text || '',
                    icon: 'info',
                    timer: 5000
                }),
            delete: (cb) =>
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'Once deleted could not be undo',
                    icon: 'warning',
                    timer: 5000,
                }).then((willDelete) => {
                    if (willDelete) {
                        // console.log('cb ')
                        return cb(true);
                        // swal({ title : 'Poof..!',
                        //     text : text || 'Your data has been deleted successfully',
                        //     icon : 'success' });
                    } else {
                        return cb(false);
                        // swal({ title : 'Safe..!',
                        //     text : 'You are safe, your data has not been deleted',
                        //     icon : 'info'
                        // });
                    }
                }),
            error: (text) =>
                Swal.fire({
                    title: 'Oops..!',
                    text: text || 'An error has occured, please try again later',
                    icon: 'error',
                    timer: 5000
                })
        }
    }
}

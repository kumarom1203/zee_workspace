/**
 * This file we can use for any global variable.
 * You can keep adding the variable here as and when needed.
 * Finaly use your variable by injecting this class in the constructor of the particular component.
 * Author: Rajesh Malakar
 * Email: rajeshmbg3@gmail.com
 * Thank you.
 */
import { Injectable } from "@angular/core";

@Injectable()

export class AppGlobal {

    logoHeader: string = '';
    logoHeaderForScroll: string = '';
    logoFooter: string = '';
}
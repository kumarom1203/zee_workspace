import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBalanceComponent } from './update-balance/update-balance.component';
import { UpdateCreditLimitComponent } from './update-credit-limit/update-credit-limit.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';



@NgModule({
  declarations: [UpdateBalanceComponent, UpdateCreditLimitComponent, BankAccountDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }

import { Component } from '@angular/core';

@Component({
    selector: 'app-switch-view',
    templateUrl: './switch-view.component.html',
})
export class switchComponent { 
  useWallet = false;
  useWallets = true;
 code = `
   <iho-switch [(ngModel)]="useWallet" [label]="'استفاده از کیف پول ایران هتل'">


 `;
}

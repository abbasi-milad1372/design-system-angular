import { Component } from '@angular/core';

@Component({
    selector: 'app-switch-view',
    templateUrl: './switch-view.component.html',
})
export class switchComponent { 
  useWallet = false;
  useWallets = true;
 code = `
   <div class="grid grid-cols-1 my-5 w-1/2">
<iho-switch [(ngModel)]="useWallet" [label]="'استفاده از کیف پول ایران هتل'">
</iho-switch>
</div>
<div class="grid grid-cols-1 my-5 w-1/2">
<iho-switch [(ngModel)]="useWallets" [label]="'استفاده از کیف پول ایران هتل'">
</iho-switch>

</div>
<div class="grid grid-cols-1 my-5 w-1/2">
  <iho-switch [(ngModel)]="useWallet" [disabled]="true" [label]="'استفاده از کیف پول ایران هتل'">
  </iho-switch>
</div>
 `;
}

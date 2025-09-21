import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-view',
    templateUrl: './input-view.component.html',
})
export class InputViewComponent { 
    constructor(private fb: FormBuilder) { }
    form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
 code = `
    <div class="grid grid-cols-1 my-5 w-1/2">
    <iho-input [label]="'مقصد یا هتل'"></iho-input>

    </div>
    <div class="grid grid-cols-1 my-5 w-1/2">
    <iho-input [label]="'مقصد یا هتل'" [icon]="'iho-icon-city-03'"></iho-input>

    </div>
    <div class="grid grid-cols-1 my-5 w-1/2">

        <iho-input  [label]="'مقصد یا هتل'" [icon]="'iho-icon-city-03'"  [disabled]="true"></iho-input>
    </div>

    <div class="grid grid-cols-1 my-5 w-1/2">

        <iho-input error="خطای ورودی اشتباه است" [label]="'مقصد یا هتل'" [icon]="'iho-icon-city-03'"></iho-input>
    </div>




    <div class="flex w-full my-4">
    <iho-input label="از" [rounded]="'right'"></iho-input>
    <iho-input label="به" [rounded]="'left'"></iho-input>
    </div>
 `;
}

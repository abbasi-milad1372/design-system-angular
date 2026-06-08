import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-view',
    templateUrl: './input-view.component.html',
})
export class InputViewComponent { 
    constructor(private fb: FormBuilder) { }
    form = this.fb.group({
        usernamenew: [{value: 'محمد حسین طباطبایی', disabled: true}, [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
 code = `
<div class="grid grid-cols-1 my-5 w-1/2">
    <iho-input [label]="'مقصد یا هتل'" [size]="'md'" [template]="'floating'" [type]="'text'"></iho-input>
</div>

<div class="grid grid-cols-1 my-5 w-1/2">
    <iho-input [label]="'مقصد یا هتل'" [size]="'lg'" [template]="'floating'" [type]="'text'"></iho-input>

</div>
<div class="grid grid-cols-1 my-5 w-1/2">
    <form [formGroup]="form">

        <iho-input [label]="'مقصد یا هتل'" [type]="'text'" formControlName="usernamenew" [dirClass]="'right'"
            [template]="'inline'" [placeholder]="'مقصد یا هتل را وارد کنید'"></iho-input>
    </form>
</div>
<div class="grid grid-cols-1 my-5 w-1/2">
    <form [formGroup]="form">
        <iho-input [label]="'مقصد یا هتل'" [type]="'text'" formControlName="username" [template]="'inline'"
            [errorInline]="'مقصد یا هتل را وارد کنید'" [required]="false"
            [placeholder]="'مقصد یا هتل را وارد کنید'"></iho-input>

    </form>

</div>
<div class="grid grid-cols-1 my-5 w-1/2">
    <iho-input [label]="'مقصد یا هتل'" [icon]="'iho-icon-city-03'" [template]="'floating'"></iho-input>

</div>
<div class="grid grid-cols-1 my-5 w-1/2">

    <iho-input [label]="'مقصد یا هتل'" [icon]="'iho-icon-city-03'" [template]="'floating'"
        [disabled]="true"></iho-input>
</div>

<div class="grid grid-cols-1 my-5 w-1/2">

    <iho-input [errorFloating]="' لطفا مقصد خود را انتخاب نمایید'" [label]="'مقصد یا هتل'"
        [icon]="'iho-icon-city-03'"></iho-input>
</div>




<div class="flex w-full my-4">
    <iho-input label="از" [readonly]="true" [rounded]="'right'"></iho-input>
    <iho-input label="به" [rounded]="'left'"></iho-input>
</div>

 `;
}

import { Component } from '@angular/core';

@Component({ selector: 'app-checkbox-view', templateUrl: './checkbox-view.component.html' })
export class CheckBoxComponent {
    xsChecked = true;
    smChecked = true;
    mdChecked = true;
    unchecked = false;
    withSupporting = true;
    requiredValue = false;
}
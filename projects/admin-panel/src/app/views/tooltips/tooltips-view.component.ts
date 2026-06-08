import { Component, TemplateRef, ViewChild } from '@angular/core';
@Component({
    selector: 'app-tooltips-view',
    templateUrl: './tooltips-view.component.html',
})
export class tooltipsViewComponent { 
    showTooltip = false;
    showTooltipNew = false;
    onMouseEnter(value: boolean) {
        this.showTooltip = value;
    }
    onMouseLeave(value: boolean) {
        this.showTooltip = value;
    }
    onMouseEnterNew(value: boolean) {
        this.showTooltipNew = value;
    }
    onMouseLeaveNew(value: boolean) {
        this.showTooltipNew = value;
    }
    
    code = `
<div class="text-center w-full my-10">
    <iho-tooltip [isVisible]="showTooltip" [popUpTemplate]="tooltipTpl" position="right">
        <i class="iho-icon-arrow-right-01-sharp mt-6" style="font-size:32px;" (mouseenter)="onMouseEnter(true)"
            (mouseleave)="onMouseLeave(false)">
        </i>
    </iho-tooltip>

    <ng-template #tooltipTpl>
        <div class="text-text">این متن داخل تولتیپ نشان داده می‌شود</div>
    </ng-template>

</div>
<div class="text-center w-full my-10">
    <iho-tooltip [isVisible]="showTooltipNew" [popUpTemplate]="tooltipTplbottom" position="bottom">
        <i class="iho-icon-arrow-down-01-sharp mt-6" style="font-size:32px;" (mouseenter)="onMouseEnterNew(true)"
            (mouseleave)="onMouseLeaveNew(false)">
        </i>
    </iho-tooltip>

    <ng-template #tooltipTplbottom>
        <div class="text-text">این متن داخل تولتیپ نشان داده می‌شود</div>
    </ng-template>

</div>


    `
}

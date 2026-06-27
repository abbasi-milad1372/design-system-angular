import { Component } from '@angular/core';

@Component({
    selector: 'app-chips-view',
    templateUrl: './chips-view.component.html',
})
export class chipsViewComponent { 
    isSelected = false;
    onRemove() {
        console.log('remove');
    }
    onAdd() {
        console.log('add');
    }
   
    code =  ` 
    <!-- Action Chip -->
<iho-chip label="برچسب" variant="primary" type="action"
  (removed)="onRemove()" (added)="onAdd()">
</iho-chip>

<!-- Filter Chip -->
<iho-chip label="برچسب" variant="primary" type="filter"
  [(selected)]="isSelected">
</iho-chip>

<!-- Disabled -->
<iho-chip label="برچسب" [disabled]="true"></iho-chip>
    `;    
}

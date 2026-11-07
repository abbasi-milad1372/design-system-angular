import { Component, Input } from '@angular/core';
import { COMPONENT_APIS } from './component-api.data';
import {
  COMPONENT_DOCUMENTATION,
  DocumentationKey,
} from './component-examples.data';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  @Input() component!: DocumentationKey;

  get documentation() {
    return COMPONENT_DOCUMENTATION[this.component];
  }

  get apis() {
    return COMPONENT_APIS.filter((api) =>
      this.documentation?.apiNames.includes(api.name)
    );
  }
}

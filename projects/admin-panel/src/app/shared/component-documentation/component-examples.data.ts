import { ComponentDocumentation } from './documentation.model';

export type DocumentationKey =
  | 'button'
  | 'input'
  | 'badge'
  | 'tabs'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'dropdown'
  | 'tooltips'
  | 'breadcrumb'
  | 'accordian'
  | 'chips'
  | 'cards'
  | 'navbar'
  | 'footer'
  | 'bottomsheet'
  | 'notifications';

export const COMPONENT_DOCUMENTATION: Readonly<
  Record<DocumentationKey, ComponentDocumentation>
> = {
  button: {
    title: 'دکمه',
    apiNames: ['ButtonComponent', 'DesignSystemComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOButtonModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOButtonModule],\n})\nexport class ExampleModule {}",
    notes: [
      'RouterModule باید در ریشهٔ برنامه پیکربندی شده باشد. importهای نمونه را به ماژول پروژهٔ خود اضافه کنید.',
      'widthPx و widthPercent را هم‌زمان تنظیم نکنید؛ عرض پیکسلی اولویت دارد.',
    ],
    examples: [
      {
        title: 'همهٔ سبک‌ها',
        template:
          '<mytag-button variant="primary"><span label>primary</span></mytag-button>\n<mytag-button variant="secondary"><span label>secondary</span></mytag-button>\n<mytag-button variant="error"><span label>error</span></mytag-button>\n<mytag-button variant="default"><span label>default</span></mytag-button>\n<mytag-button variant="error-inside"><span label>error-inside</span></mytag-button>\n<mytag-button variant="ghost-primary"><span label>ghost-primary</span></mytag-button>\n<mytag-button variant="ghost-error"><span label>ghost-error</span></mytag-button>\n<mytag-button variant="ghost-secondary"><span label>ghost-secondary</span></mytag-button>\n<mytag-button variant="gray-inside"><span label>gray-inside</span></mytag-button>\n<mytag-button variant="primary-inside"><span label>primary-inside</span></mytag-button>\n<mytag-button variant="secondary-inside"><span label>secondary-inside</span></mytag-button>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'همهٔ اندازه‌ها',
        template:
          '<mytag-button size="sm"><span label>اندازه sm</span></mytag-button>\n<mytag-button size="md"><span label>اندازه md</span></mytag-button>\n<mytag-button size="lg"><span label>اندازه lg</span></mytag-button>\n<mytag-button size="xl"><span label>اندازه xl</span></mytag-button>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'غیرفعال، بارگذاری و رویداد انتخاب',
        template:
          '<mytag-button type="button" [disabled]="false" [showLoading]="false" (clickBtn)="lastEvent = \'انتخاب شد\'">\n  <span label>ثبت درخواست</span>\n</mytag-button>\n<p aria-live="polite">{{ lastEvent }}</p>\n<mytag-button [disabled]="true"><span label>غیرفعال</span></mytag-button>\n<mytag-button [showLoading]="true"><span label>در حال ثبت</span></mytag-button>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  lastEvent = '';\n}",
      },
      {
        title: 'لینک و تنظیم عرض',
        template:
          '<mytag-button type="link" href="/cards" [widthPercent]="100"><span label>مشاهده موارد</span></mytag-button>\n<mytag-button type="button" [widthPx]="180"><span label>عرض ثابت</span></mytag-button>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'آیکن در دو طرف برچسب',
        template:
          '<mytag-button>\n  <span icon-right class="iho-icon-user-11" aria-hidden="true"></span>\n  <span label>حساب کاربری</span>\n  <span icon-left class="iho-icon-arrow-left-01-sharp" aria-hidden="true"></span>\n</mytag-button>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'تگ ریشهٔ کتابخانه و ماژول پایه',
        template: '<mytag-design-system></mytag-design-system>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
        description:
          'این تگ پوستهٔ اولیهٔ کتابخانه است. DesignSystemModule فقط تگ ریشه را export می‌کند و جایگزین import ماژول کامپوننت‌های دیگر نیست.',
        module:
          "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOButtonModule, DesignSystemModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOButtonModule, DesignSystemModule],\n})\nexport class ExampleModule {}",
      },
    ],
  },
  input: {
    title: 'ورودی',
    apiNames: ['InputComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IHOInputModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IHOInputModule],\n})\nexport class ExampleModule {}",
    notes: [
      'برای ngModel به FormsModule و برای Reactive Forms به ReactiveFormsModule نیاز دارید.',
      'در Reactive Forms حالت غیرفعال را با FormControl یا متد disable کنترل کنید. نام ورودی readonly با حروف کوچک نوشته می‌شود.',
      'ورودی border در API تعریف شده است، اما قالب فعلی آن را مصرف نمی‌کند؛ نمونهٔ binding به معنی تغییر ظاهر در نسخه فعلی نیست.',
    ],
    examples: [
      {
        title: 'همهٔ نوع‌های ورودی',
        template:
          '<mytag-input type="text" label="عنوان" placeholder="text"></mytag-input>\n<mytag-input type="password" label="رمز عبور" placeholder="password"></mytag-input>\n<mytag-input type="email" label="ایمیل" placeholder="email"></mytag-input>\n<mytag-input type="number" label="تعداد" placeholder="number"></mytag-input>\n<mytag-input type="tel" label="تلفن" placeholder="tel"></mytag-input>\n<mytag-input type="url" label="نشانی وب" placeholder="url"></mytag-input>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'اندازه و قالب',
        template:
          '<mytag-input size="md" template="floating" label="عنوان" placeholder="مقدار دلخواه"></mytag-input>\n<mytag-input size="md" template="inline" label="عنوان" placeholder="مقدار دلخواه"></mytag-input>\n<mytag-input size="lg" template="floating" label="عنوان" placeholder="مقدار دلخواه"></mytag-input>\n<mytag-input size="lg" template="inline" label="عنوان" placeholder="مقدار دلخواه"></mytag-input>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'ورودی فرم، نام، تکمیل خودکار و متن راهنما',
        template:
          '<mytag-input [(ngModel)]="email" type="email" name="email" autocomplete="email"\n  label="ایمیل" placeholder="name@example.com" hint="نشانی ایمیل خود را وارد کنید"\n  [required]="true" [disabled]="false" [readonly]="false" [border]="true" dirClass="left"></mytag-input>\n<p>{{ email }}</p>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  email = '';\n}",
      },
      {
        title: 'پیام‌های خطا و موفقیت',
        template:
          '<mytag-input label="عنوان" template="floating" errorFloating="عنوان الزامی است"></mytag-input>\n<mytag-input label="عنوان" template="inline" errorInline="این مقدار معتبر نیست"></mytag-input>\n<mytag-input label="کد" successInline="کد معتبر است" [errorInline]="null" [errorFloating]="null"></mytag-input>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فقط خواندنی، غیرفعال، آیکن و گردی',
        template:
          '<mytag-input label="عنوان" value="مقدار ثابت" [readonly]="true" [required]="false"></mytag-input>\n<mytag-input label="غیرفعال" [disabled]="true"></mytag-input>\n<mytag-input label="نام کاربری" icon="iho-icon-user-11" iconClass="text-primary-500" dirClass="right" [border]="false"></mytag-input>\n<mytag-input label="از" rounded="right"></mytag-input>\n<mytag-input label="تا" rounded="left"></mytag-input>\n<mytag-input label="مستقل" rounded="none"></mytag-input>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فرم واکنشی و کنترل غیرفعال',
        template:
          '<form [formGroup]="form">\n  <mytag-input formControlName="title" label="عنوان" [required]="true"></mytag-input>\n  <mytag-input formControlName="reference" label="شناسه"></mytag-input>\n</form>\n<button type="button" (click)="form.controls.reference.enable()">فعال کردن شناسه</button>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FormControl, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  form = new FormGroup({\n    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),\n    reference: new FormControl({ value: 'REF-01', disabled: true }, { nonNullable: true }),\n  });\n}",
      },
    ],
  },
  badge: {
    title: 'نشان',
    apiNames: ['badgeComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOBadgeModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOBadgeModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'همهٔ سبک‌ها',
        template:
          '<mytag-badge variant="default" label="default"></mytag-badge>\n<mytag-badge variant="lite" label="lite"></mytag-badge>\n<mytag-badge variant="primary" label="primary"></mytag-badge>\n<mytag-badge variant="warning" label="warning"></mytag-badge>\n<mytag-badge variant="error" label="error"></mytag-badge>\n<mytag-badge variant="success" label="success"></mytag-badge>\n<mytag-badge variant="text-success" label="text-success"></mytag-badge>\n<mytag-badge variant="text-warning" label="text-warning"></mytag-badge>\n<mytag-badge variant="text-error" label="text-error"></mytag-badge>\n<mytag-badge variant="text-primary" label="text-primary"></mytag-badge>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'اندازه، حاشیه، گردی و متن متحرک',
        template:
          '<mytag-badge size="sm" label="کوچک" [border]="false" [radius]="false" [animatedLabel]="false"></mytag-badge>\n<mytag-badge size="md" label="متوسط" [border]="true" [radius]="true"></mytag-badge>\n<mytag-badge size="lg" label="این متن بلند برای نمایش حرکت برچسب است" [animatedLabel]="true"></mytag-badge>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'محتوای سفارشی، آیکن، نقطه و تصویر',
        template:
          '<mytag-badge label="کاربر" [mainContent]="false">\n  <span icon-right class="iho-icon-user-11" aria-hidden="true"></span>\n  <span dot aria-hidden="true">•</span>\n  <span icon-left class="iho-icon-tick-01" aria-hidden="true"></span>\n</mytag-badge>\n<mytag-badge [mainContent]="true"><span label>محتوای دلخواه</span></mytag-badge>\n<mytag-badge label="پروفایل"><img img [src]="image" width="16" height="16" alt=""></mytag-badge>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"%3E%3Ccircle cx="16" cy="16" r="16" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
      },
    ],
  },
  tabs: {
    title: 'تب',
    apiNames: ['TabComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOTabModule, IHOBadgeModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOTabModule, IHOBadgeModule],\n})\nexport class ExampleModule {}",
    notes: [
      'Tab خروجی اختصاصی برای انتخاب ندارد؛ برای تغییر active از رویداد click روی تگ استفاده کنید.',
    ],
    examples: [
      {
        title: 'اندازه‌ها و حالت‌های انتخاب',
        template:
          '<mytag-tab size="sm" variant="outline" label="اول" [active]="active === \'first\'" [disabled]="false" (click)="active = \'first\'"></mytag-tab>\n<mytag-tab size="md" label="دوم" [active]="active === \'second\'" (click)="active = \'second\'"></mytag-tab>\n<mytag-tab label="غیرفعال" [disabled]="true" [active]="false"></mytag-tab>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  active = 'first';\n}",
      },
      {
        title: 'قاب و گردی',
        template:
          '<mytag-tab label="بدون قاب" [border]="false" [roundedFull]="false"></mytag-tab>\n<mytag-tab label="قاب‌دار" [border]="true"></mytag-tab>\n<mytag-tab label="گرد" [border]="true" [roundedFull]="true"></mytag-tab>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'چیدمان، آیکن و نشان',
        template:
          '<mytag-tab label="حساب" layout="default">\n  <span icon-right class="iho-icon-user-11" aria-hidden="true"></span>\n  <span icon-left class="iho-icon-arrow-left-01-sharp" aria-hidden="true"></span>\n</mytag-tab>\n<mytag-tab label="خانه" layout="icon-top"><span icon-top class="iho-icon-home-heart" aria-hidden="true"></span></mytag-tab>\n<mytag-tab label="پیام‌ها"><mytag-badge badge label="۳" variant="error" size="sm"></mytag-badge></mytag-tab>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  checkbox: {
    title: 'چک‌باکس',
    apiNames: ['IhoCheckboxComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IhoCheckboxModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IhoCheckboxModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'همهٔ اندازه‌ها و رنگ‌ها',
        template:
          '<mytag-checkbox size="xs" color="gray" label="xs / gray" [ngModel]="true"></mytag-checkbox>\n<mytag-checkbox size="xs" color="black" label="xs / black" [ngModel]="true"></mytag-checkbox>\n<mytag-checkbox size="sm" color="gray" label="sm / gray" [ngModel]="true"></mytag-checkbox>\n<mytag-checkbox size="sm" color="black" label="sm / black" [ngModel]="true"></mytag-checkbox>\n<mytag-checkbox size="md" color="gray" label="md / gray" [ngModel]="true"></mytag-checkbox>\n<mytag-checkbox size="md" color="black" label="md / black" [ngModel]="true"></mytag-checkbox>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فرم، نام، شناسه و رویداد تغییر',
        template:
          '<mytag-checkbox [(ngModel)]="accepted" name="terms" id="terms-example"\n  label="پذیرش شرایط" supportingText="برای ادامه شرایط را بخوانید"\n  [required]="true" [disabled]="false" [indeterminate]="false" dir="rtl"\n  (changed)="lastValue = $event"></mytag-checkbox>\n<p aria-live="polite">{{ lastValue }}</p>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  accepted = false;\n  lastValue: boolean | null = null;\n}",
      },
      {
        title: 'انتخاب میانی، غیرفعال و جهت',
        template:
          '<mytag-checkbox label="انتخاب میانی" [indeterminate]="true" [required]="false"></mytag-checkbox>\n<mytag-checkbox label="غیرفعال انتخاب‌شده" [ngModel]="true" [disabled]="true"></mytag-checkbox>\n<mytag-checkbox label="غیرفعال خالی" [ngModel]="false" [disabled]="true"></mytag-checkbox>\n<mytag-checkbox label="چیدمان چپ به راست" dir="ltr"></mytag-checkbox>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فرم واکنشی',
        template:
          '<form [formGroup]="form"><mytag-checkbox formControlName="accepted" label="پذیرش شرایط"></mytag-checkbox></form>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  form = new FormGroup({ accepted: new FormControl(false, { nonNullable: true }) });\n}",
      },
    ],
  },
  radio: {
    title: 'رادیو و گروه رادیو',
    apiNames: ['RadioComponent', 'IhoRadioGroupComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IHORadioModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IHORadioModule],\n})\nexport class ExampleModule {}",
    notes: [
      'مقدار انتخاب‌شدهٔ گروه را با ngModel یا FormControl کنترل کنید. checked برای مقدار اولیهٔ نمونه بدون مدل به کار می‌رود.',
    ],
    examples: [
      {
        title: 'گروه با مدل و مقدار عددی',
        template:
          '<mytag-radio-group [(ngModel)]="selection" name="example-options" [disabled]="false">\n  <mytag-radio [radioValue]="1" label="گزینه اول" dir="rtl" [disabled]="false"></mytag-radio>\n  <mytag-radio [radioValue]="2" label="گزینه دوم"></mytag-radio>\n  <mytag-radio [radioValue]="3" label="گزینه غیرفعال" [disabled]="true"></mytag-radio>\n</mytag-radio-group>\n<p>{{ selection }}</p>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  selection = 1;\n}",
      },
      {
        title: 'انتخاب اولیه بدون مدل و گروه غیرفعال',
        template:
          '<mytag-radio-group name="initial-options">\n  <mytag-radio radioValue="first" label="اول" [checked]="true"></mytag-radio>\n  <mytag-radio radioValue="second" label="دوم" [checked]="false"></mytag-radio>\n</mytag-radio-group>\n<mytag-radio-group name="disabled-options" [disabled]="true">\n  <mytag-radio radioValue="fixed" label="انتخاب ثابت" [checked]="true" dir="ltr"></mytag-radio>\n</mytag-radio-group>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فرم واکنشی',
        template:
          '<form [formGroup]="form"><mytag-radio-group formControlName="choice" name="reactive-choice"><mytag-radio radioValue="a" label="اول"></mytag-radio><mytag-radio radioValue="b" label="دوم"></mytag-radio></mytag-radio-group></form>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  form = new FormGroup({ choice: new FormControl('a', { nonNullable: true }) });\n}",
      },
    ],
  },
  switch: {
    title: 'سوئیچ',
    apiNames: ['IhoSwitchComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IhoSwitchModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IhoSwitchModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'روشن و خاموش، شناسه و رویداد',
        template:
          '<mytag-switch [(ngModel)]="enabled" label="دریافت اعلان‌ها" name="notifications" id="notification-switch"\n  [required]="true" [disabled]="false" (changed)="lastValue = $event"></mytag-switch>\n<p aria-live="polite">{{ lastValue }}</p>\n<mytag-switch [ngModel]="true" label="روشن" [required]="false"></mytag-switch>\n<mytag-switch [ngModel]="false" label="خاموش"></mytag-switch>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  enabled = false;\n  lastValue: boolean | null = null;\n}",
      },
      {
        title: 'غیرفعال و اتصال به فرم واکنشی',
        template:
          '<mytag-switch [ngModel]="true" [disabled]="true" label="غیرفعال روشن"></mytag-switch>\n<mytag-switch [ngModel]="false" [disabled]="true" label="غیرفعال خاموش"></mytag-switch>\n<form [formGroup]="form"><mytag-switch formControlName="updates" label="به‌روزرسانی‌ها"></mytag-switch></form>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  form = new FormGroup({ updates: new FormControl(false, { nonNullable: true }) });\n}",
      },
    ],
  },
  dropdown: {
    title: 'انتخاب و گزینه‌ها',
    apiNames: ['IhoSelectComponent', 'IhoOptionComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IhoSelectModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IhoSelectModule],\n})\nexport class ExampleModule {}",
    notes: [
      'مقدار انتخاب‌شده را روی Select با ngModel یا FormControl نگه دارید؛ selected گزینه را برای کنترل مدل جایگزین نکنید.',
    ],
    examples: [
      {
        title: 'انتخاب ساده، اندازه و رویدادها',
        template:
          '<mytag-select [(ngModel)]="choice" size="md" placeholder="یک گزینه انتخاب کنید" [required]="true"\n  [searchable]="false" [borderless]="false" [disabled]="false" (valueChange)="lastValue = $event">\n  <mytag-option value="first" label="گزینه اول" id="first-option" [disabled]="false" [selected]="false" [searchable]="false" (optionClick)="clickedLabel = $event.label || \'\'">گزینه اول</mytag-option>\n  <mytag-option value="second" label="گزینه دوم">گزینه دوم</mytag-option>\n  <mytag-option value="third" label="غیرفعال" [disabled]="true">غیرفعال</mytag-option>\n</mytag-select>\n<p aria-live="polite">{{ lastValue }} / {{ clickedLabel }}</p>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  choice: string | null = null;\n  lastValue: unknown = null;\n  clickedLabel = '';\n}",
      },
      {
        title: 'جستجو، مقادیر عددی و گزینه‌های پویا',
        template:
          '<mytag-select [(ngModel)]="choice" size="lg" [searchable]="true" [required]="false" [borderless]="true" placeholder="جستجوی گزینه">\n  <mytag-option *ngFor="let option of options" [value]="option.id" [label]="option.label" [searchable]="true">{{ option.label }}</mytag-option>\n</mytag-select>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  choice: number | null = 1;\n  options = [{ id: 1, label: 'اول' }, { id: 2, label: 'دوم' }];\n}",
      },
      {
        title: 'خطا، غیرفعال و گزینهٔ انتخاب اولیه',
        template:
          '<mytag-select placeholder="انتخاب الزامی" error="یک گزینه انتخاب کنید"><mytag-option value="a" label="اول">اول</mytag-option></mytag-select>\n<mytag-select [disabled]="true" [ngModel]="\'a\'" placeholder="غیرفعال"><mytag-option value="a" label="اول" [selected]="true">اول</mytag-option></mytag-select>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فرم واکنشی',
        template:
          '<form [formGroup]="form"><mytag-select formControlName="choice" placeholder="انتخاب"><mytag-option value="first" label="اول">اول</mytag-option><mytag-option value="second" label="دوم">دوم</mytag-option></mytag-select></form>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  form = new FormGroup({ choice: new FormControl('first', { nonNullable: true }) });\n}",
      },
    ],
  },
  tooltips: {
    title: 'راهنمای شناور',
    apiNames: ['TooltipComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOTooltipModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOTooltipModule],\n})\nexport class ExampleModule {}",
    notes: [
      'isVisible ورودی وضعیت اولیه است و خروجی متناظر آن visibleChange نام دارد؛ از نحو دوطرفهٔ isVisible استفاده نکنید. برای نمایش با موقعیت تازه از متد show نمونه استفاده کنید.',
      'offset می‌تواند عدد یا شیئی از فاصله‌های top، bottom، left و right باشد.',
      'forcePosition در نسخهٔ فعلی فقط به‌عنوان ورودی تعریف شده و در محاسبهٔ موقعیت استفاده نمی‌شود.',
    ],
    examples: [
      {
        title: 'چهار موقعیت و محتوای قالب',
        template:
          '<ng-template #tip><span>اطلاعات تکمیلی</span></ng-template>\n<mytag-tooltip position="top" [popUpTemplate]="tip" [offset]="8" [showArrow]="true"><button type="button">top</button></mytag-tooltip>\n<mytag-tooltip position="bottom" [popUpTemplate]="tip" [offset]="8" [showArrow]="true"><button type="button">bottom</button></mytag-tooltip>\n<mytag-tooltip position="left" [popUpTemplate]="tip" [offset]="8" [showArrow]="true"><button type="button">left</button></mytag-tooltip>\n<mytag-tooltip position="right" [popUpTemplate]="tip" [offset]="8" [showArrow]="true"><button type="button">right</button></mytag-tooltip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'فاصلهٔ جهتی، تأخیر و رویدادها',
        template:
          '<ng-template #tip><span>اطلاعات تکمیلی</span></ng-template>\n<mytag-tooltip [popUpTemplate]="tip" position="bottom" classList="bg-primary-900 text-white"\n  [offset]="{ top: 4, bottom: 12, left: 6, right: 6 }" [forcePosition]="true" [showArrow]="false"\n  [delayEnter]="0" [delayLeave]="300" [isVisible]="false"\n  (closed)="lastEvent = \'بسته شد\'" (visibleChange)="visible = $event">\n  <button type="button">نمایش راهنما</button>\n</mytag-tooltip>\n<p>{{ lastEvent }} / {{ visible }}</p>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  lastEvent = '';\n  visible = false;\n}",
      },
      {
        title: 'لنگر بیرونی و نمایش برنامه‌ای',
        template:
          '<button #anchorButton type="button" (click)="popup.show()">نمایش راهنمای لنگر</button>\n<ng-template #tip><span>به دکمهٔ بیرونی متصل هستم.</span></ng-template>\n<mytag-tooltip #popup [anchor]="anchorButton" [popUpTemplate]="tip" [forcePosition]="false" [delayEnter]="75" [delayLeave]="150" [showArrow]="true"></mytag-tooltip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'نمایان بودن اولیه',
        template:
          '<ng-template #tip><span>محتوای راهنما</span></ng-template>\n<mytag-tooltip [isVisible]="true" [popUpTemplate]="tip"><button type="button">نمایش اولیه</button></mytag-tooltip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  breadcrumb: {
    title: 'مسیر راهنما',
    apiNames: ['BreadcrumbComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOBreadcrumbModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOBreadcrumbModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'دادهٔ مسیر و جداکننده',
        template:
          '<mytag-breadcrumb [items]="items" separator="iho-icon-arrow-left-01-sharp"></mytag-breadcrumb>\n<mytag-breadcrumb [items]="items" separator="iho-icon-arrow-right-01-sharp"></mytag-breadcrumb>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  items = [{ name: 'خانه', url: '/' }, { name: 'موارد', url: '/cards' }, { name: 'جزئیات' }];\n}",
      },
      {
        title: 'مسیر کوتاه و حالت خالی',
        template:
          "<mytag-breadcrumb [items]=\"[{ name: 'خانه', url: '/' }, { name: 'جزئیات' }]\"></mytag-breadcrumb>\n<mytag-breadcrumb [items]=\"[]\"></mytag-breadcrumb>",
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
    notes: [
      'separator در API وجود دارد، اما قالب فعلی آیکن جداکنندهٔ ثابت دارد؛ نمونهٔ جداکنندهٔ سفارشی، صرفاً شیوهٔ binding را نشان می‌دهد.',
    ],
  },
  accordian: {
    title: 'آکاردئون',
    apiNames: ['AccordionComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { IHOAccordionModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, BrowserAnimationsModule, IHOAccordionModule],\n})\nexport class ExampleModule {}",
    notes: [
      'BrowserAnimationsModule را در ماژول ریشهٔ برنامه اضافه کنید. rounded زمانی ظاهر می‌شود که border فعال باشد.',
    ],
    examples: [
      {
        title: 'همهٔ اندازه‌ها و سبک‌ها',
        template:
          '<mytag-accordion title="sm / outline" size="sm" variant="outline"><p>محتوای بخش</p></mytag-accordion>\n<mytag-accordion title="sm / filled" size="sm" variant="filled"><p>محتوای بخش</p></mytag-accordion>\n<mytag-accordion title="md / outline" size="md" variant="outline"><p>محتوای بخش</p></mytag-accordion>\n<mytag-accordion title="md / filled" size="md" variant="filled"><p>محتوای بخش</p></mytag-accordion>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'باز، بسته، غیرفعال، حاشیه و گردی',
        template:
          '<mytag-accordion title="باز و گرد" [expanded]="true" [disabled]="false" [border]="true" [rounded]="true"><p>محتوای باز</p></mytag-accordion>\n<mytag-accordion title="بسته بدون قاب" [expanded]="false" [border]="false" [rounded]="false"><p>محتوا</p></mytag-accordion>\n<mytag-accordion title="غیرفعال" [disabled]="true"><p>قابل تغییر نیست.</p></mytag-accordion>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  chips: {
    title: 'چیپ',
    apiNames: ['ChipComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOChipModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOChipModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'همهٔ اندازه‌ها، رنگ‌ها و نوع‌ها',
        template:
          '<mytag-chip label="sm / neutral / action" size="sm" variant="neutral" type="action"></mytag-chip>\n<mytag-chip label="sm / neutral / filter" size="sm" variant="neutral" type="filter"></mytag-chip>\n<mytag-chip label="sm / primary / action" size="sm" variant="primary" type="action"></mytag-chip>\n<mytag-chip label="sm / primary / filter" size="sm" variant="primary" type="filter"></mytag-chip>\n<mytag-chip label="md / neutral / action" size="md" variant="neutral" type="action"></mytag-chip>\n<mytag-chip label="md / neutral / filter" size="md" variant="neutral" type="filter"></mytag-chip>\n<mytag-chip label="md / primary / action" size="md" variant="primary" type="action"></mytag-chip>\n<mytag-chip label="md / primary / filter" size="md" variant="primary" type="filter"></mytag-chip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
      {
        title: 'انتخاب، افزودن، حذف و رویدادها',
        template:
          '<mytag-chip label="فیلتر" type="filter" [selected]="selected" (selectedChange)="selected = $event"\n  [showAdd]="true" [showRemove]="true" [rounded]="true" [disabled]="false"\n  (added)="lastAction = \'افزوده شد\'" (removed)="lastAction = \'حذف شد\'"></mytag-chip>\n<p aria-live="polite">{{ selected }} / {{ lastAction }}</p>\n<mytag-chip label="دوطرفه" type="filter" [(selected)]="selected"></mytag-chip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  selected = false;\n  lastAction = '';\n}",
      },
      {
        title: 'غیرفعال، انتخاب‌شده و بدون کنترل اضافی',
        template:
          '<mytag-chip label="انتخاب‌شدهٔ غیرفعال" [selected]="true" [disabled]="true" [showAdd]="true" [showRemove]="true"></mytag-chip>\n<mytag-chip label="ساده" [selected]="false" [showAdd]="false" [showRemove]="false" [rounded]="false"></mytag-chip>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  cards: {
    title: 'کارت',
    apiNames: ['CardComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOCardModule, IHOBadgeModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOCardModule, IHOBadgeModule],\n})\nexport class ExampleModule {}",
    notes: [
      'نام‌های تاریخی مانند BoardPrice، withPriceDevider و isAddvertisement را با همین املای API استفاده کنید.',
      'letMeKnow و ورودی tagsAdd در خروجی فعلی کارت استفاده نمی‌شوند؛ برای محتوای تبلیغ از slotهای contentAdd و tagsAdd استفاده کنید.',
      'دکمهٔ action و unavailable مربوط به چیدمان horizontal است.',
      'رویداد clickBtnCard در مسیر دکمهٔ معمولی ارسال می‌شود؛ لینک‌های actionLink در نسخهٔ فعلی رویداد کلیک دکمه را ارسال نمی‌کنند.',
    ],
    examples: [
      {
        title: 'سه چیدمان و اطلاعات پایه',
        template:
          '<mytag-card type="standard" title="مجموعه ابزارها" location="کتابخانه دیجیتال" star="۵" rating="۴.۸" reviewCount="۲۸۸" tags="جدید" [image]="image"></mytag-card>\n<mytag-card type="category" title="منابع آموزشی" [image]="image"><span metadata>۲۶ مورد در این دسته</span></mytag-card>\n<mytag-card type="horizontal" title="مجموعه حرفه‌ای" titleLeftBody="پیشنهاد ویژه" location="دسترسی آنلاین" star="۵" rating="۴.۶" reviewCount="۳۲۰" [image]="image"></mytag-card>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
      },
      {
        title: 'قیمت، تخفیف و واحد',
        template:
          '<mytag-card type="standard" title="مجموعه ابزارها" [image]="image" [price]="5400000" [BoardPrice]="6000000"\n  discount="۱۰" priceUnit="بسته" [withPrice]="true" [withPriceDevider]="false"></mytag-card>\n<mytag-card type="standard" title="قیمت با جداکننده" [image]="image" [price]="5400000" [BoardPrice]="6000000"\n  discount="۱۰" [withPrice]="false" [withPriceDevider]="true" rating="۴.۶" reviewCount="۳۲۰">\n  <span quantity>یک مورد</span><span price-unit>/ بسته</span>\n</mytag-card>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
      },
      {
        title: 'ویژه، اطلاعات تکمیلی، انتخاب و ناموجود',
        template:
          '<mytag-card type="horizontal" title="مجموعه حرفه‌ای" [image]="image"\n  [featured]="true" featuredLabel="منتخب" badgeLabel="دسترسی" labelBadge="آنلاین"\n  [unavailable]="false" actionLabel="مشاهده جزئیات" actionLink=""\n  (clickBtnCard)="lastEvent = $event.type"><span card-badges>جدید</span><span card-badges-mobile>نسخه موبایل</span></mytag-card>\n<mytag-card type="horizontal" title="آرشیو" [featured]="false" [unavailable]="true" unavailableLabel="فعلاً در دسترس نیست" [image]="image"></mytag-card>\n<mytag-card type="horizontal" title="کارت لینک‌دار" [image]="image" actionLink="/cards" actionLabel="مشاهده موارد"></mytag-card>\n<p aria-live="polite">{{ lastEvent }}</p>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n  lastEvent = \'\';\n}',
      },
      {
        title: 'ارز و محتوای پیشنهاد سفارشی',
        template:
          '<mytag-card type="standard" title="مجموعه منابع" [image]="image" [price]="54000000" [withPrice]="true"\n  [currency]="true" [promotions]="true" [showPromotions]="true">\n  <ng-template #currency>ریال</ng-template>\n  <ng-template #promotions><mytag-badge label="پیشنهاد محدود" variant="primary"></mytag-badge></ng-template>\n</mytag-card>\n<mytag-card title="بدون پیشنهاد" [image]="image" [currency]="false" [promotions]="false" [showPromotions]="false"></mytag-card>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
      },
      {
        title: 'تصویر جایگزین و تبلیغ',
        template:
          '<mytag-card title="تصویر جایگزین" image="assets/missing-image.svg" [fallbackImage]="image" [isAddvertisement]="false"></mytag-card>\n<mytag-card title="محتوای ویژه" [image]="image" [isAddvertisement]="true">\n  <p contentAdd>توضیح محتوای تبلیغ</p><span tagsAdd><mytag-badge label="جدید"></mytag-badge></span>\n</mytag-card>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
      },
      {
        title: 'ورودی‌های قدیمی بدون اثر نمایشی',
        template:
          '<mytag-card title="محتوای نمونه" [image]="image" [letMeKnow]="true" [tagsAdd]="[\'جدید\']"></mytag-card>',
        typescript:
          'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  templateUrl: \'./example.component.html\',\n})\nexport class ExampleComponent {\n  image = \'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23ebf0fa"/%3E%3Ccircle cx="160" cy="90" r="44" fill="%230055ff"/%3E%3C/svg%3E\';\n}',
        description:
          'این ورودی‌ها برای تطبیق با API ثبت شده‌اند؛ در پیاده‌سازی فعلی اثر نمایشی ندارند.',
      },
    ],
  },
  navbar: {
    title: 'ناوبری',
    apiNames: ['NavbarComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHONavbarModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHONavbarModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'برند، لوگو، پیوندها و رویدادها',
        template:
          '<mytag-navbar brandName="پروژه من" [logoUrl]="image" homeUrl="/" menuLabel="بخش‌ها"\n  [menuItems]="menuItems" [links]="links" [utilityLinks]="utilityLinks" accountLabel="حساب کاربری"\n  (onToggleSideNav)="lastEvent = \'فهرست کناری\'" (openDialogModal)="lastEvent = \'حساب کاربری\'"></mytag-navbar>\n<p aria-live="polite">{{ lastEvent }}</p>',
        typescript:
          "import { Component } from '@angular/core';\nimport { NavigationLink } from '@iho/design-system';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  image = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 180\"%3E%3Crect width=\"320\" height=\"180\" fill=\"%23ebf0fa\"/%3E%3Ccircle cx=\"160\" cy=\"90\" r=\"44\" fill=\"%230055ff\"/%3E%3C/svg%3E';\n  menuItems: NavigationLink[] = [{ label: 'کامپوننت‌ها', href: '/cards' }];\n  links: NavigationLink[] = [{ label: 'راهنما', href: '/' }];\n  utilityLinks: NavigationLink[] = [{ label: 'اعلان‌ها', href: '/notifications', icon: 'iho-icon-notification-02' }];\n  lastEvent = '';\n}",
      },
      {
        title: 'حالت متنی و حذف حساب کاربری',
        template:
          '<mytag-navbar brandName="پروژه من" [logoUrl]="null" accountLabel="" [menuItems]="[]" [links]="[]" [utilityLinks]="[]"></mytag-navbar>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  footer: {
    title: 'پایین صفحه',
    apiNames: ['FooterComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { IHOFooterModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, IHOFooterModule],\n})\nexport class ExampleModule {}",
    examples: [
      {
        title: 'همهٔ ورودی‌ها و محتوای اختصاصی',
        template:
          '<mytag-footer-ds brandName="پروژه من" homeUrl="/" [logoUrl]="image" phoneNumber="00000000000"\n  [features]="features" [sections]="sections" [contacts]="contacts" [socialLinks]="socialLinks"\n  copyright="تمام حقوق پروژه من محفوظ است." [showLinks]="true">\n  <div links><a href="/cards">مشاهده کامپوننت‌ها</a></div>\n  <span certificates>نشان اختصاصی پروژه</span>\n</mytag-footer-ds>',
        typescript:
          "import { Component } from '@angular/core';\nimport { FooterFeature, FooterSection, FooterContact, NavigationLink } from '@iho/design-system';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  image = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 180\"%3E%3Crect width=\"320\" height=\"180\" fill=\"%23ebf0fa\"/%3E%3Ccircle cx=\"160\" cy=\"90\" r=\"44\" fill=\"%230055ff\"/%3E%3C/svg%3E';\n  features: FooterFeature[] = [{ title: 'دسترسی آنلاین', description: 'همیشه در دسترس', imageUrl: this.image }];\n  sections: FooterSection[] = [{ title: 'راهنما', links: [{ label: 'کامپوننت‌ها', href: '/cards' }] }];\n  contacts: FooterContact[] = [{ label: 'ایمیل', value: 'support@example.com', href: 'mailto:support@example.com' }];\n  socialLinks: NavigationLink[] = [{ label: 'کد منبع', href: 'https://github.com/abbasi-milad1372/design-system-angular' }];\n}",
      },
      {
        title: 'بدون لوگو و محتوای اختیاری',
        template:
          '<mytag-footer-ds brandName="سامانه طراحی" [logoUrl]="null" [showLinks]="false"\n  [features]="[]" [sections]="[]" [contacts]="[]" [socialLinks]="[]"></mytag-footer-ds>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
      },
    ],
  },
  bottomsheet: {
    title: 'پنل کشویی',
    apiNames: ['IhoBottomsheetComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IHOBottomsheetModule } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IHOBottomsheetModule],\n})\nexport class ExampleModule {}",
    notes: [
      'محتوای پنل با ViewContainerRef و BottomsheetService تزریق می‌شود؛ محتوای معمولی داخل تگ پنل projection ندارد.',
      'ورودی data به‌تنهایی چیزی رندر نمی‌کند. نمونهٔ سرویس، داده را به کامپوننت محتوای سفارشی می‌رساند.',
    ],
    examples: [
      {
        title: 'همهٔ موقعیت‌ها و ورودی‌های پنل',
        template:
          '<button type="button" (click)="opened = true">باز کردن پنل</button>\n<select aria-label="موقعیت" [(ngModel)]="position"><option *ngFor="let item of positions" [value]="item">{{ item }}</option></select>\n<mytag-bottomsheet [position]="position" [isOpen]="opened" [fullHeight]="false" [disabled]="false"\n  dir="rtl" title="اطلاعات تکمیلی" [data]="{ id: 1 }" iconClass="iho-icon-information-circle"\n  [contentContainerPadding]="true" (closed)="opened = false"></mytag-bottomsheet>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  opened = false;\n  positions: Array<'bottom' | 'top' | 'left' | 'right'> = ['bottom', 'top', 'left', 'right'];\n  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';\n}",
      },
      {
        title: 'تمام‌قد، بدون فاصله و جهت مخالف',
        template:
          '<button type="button" (click)="opened = true">باز کردن</button>\n<mytag-bottomsheet position="right" [isOpen]="opened" [fullHeight]="true" [disabled]="false"\n  [contentContainerPadding]="false" dir="ltr" title="پنل تمام‌قد" (closed)="opened = false"></mytag-bottomsheet>\n<mytag-bottomsheet [isOpen]="false" [disabled]="true" title="نمونهٔ پنل غیرفعال"></mytag-bottomsheet>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  opened = false;\n}",
      },
      {
        title: 'تزریق محتوای سفارشی با سرویس',
        template:
          '<ng-container #sheetHost></ng-container>\n<button type="button" (click)="open()">باز کردن محتوای سفارشی</button>\n<p aria-live="polite">{{ lastEvent }}</p>',
        typescript:
          "import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';\nimport { BottomsheetService } from '@iho/design-system';\n\n@Component({\n  selector: 'app-sheet-content',\n  template: '<p>{{ data?.message }}</p><button type=\"button\" (click)=\"close.emit()\">بستن</button>',\n})\nexport class SheetContentComponent {\n  @Input() data?: { message: string };\n  @Output() close = new EventEmitter<void>();\n}\n\n@Component({ selector: 'app-example', templateUrl: './example.component.html' })\nexport class ExampleComponent {\n  @ViewChild('sheetHost', { read: ViewContainerRef }) host!: ViewContainerRef;\n  lastEvent = '';\n  constructor(private sheets: BottomsheetService) {}\n  open(): void {\n    this.host.clear();\n    const ref = this.sheets.open(this.host, {\n      component: SheetContentComponent,\n      data: { message: 'محتوای سفارشی پنل' },\n      position: 'bottom', dir: 'rtl', title: 'اطلاعات',\n      fullHeight: false, disabled: false, iconClass: 'iho-icon-information-circle',\n    });\n    ref.instance.closed.subscribe(() => this.lastEvent = 'بسته شد');\n  }\n}",
        module:
          "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { IHOBottomsheetModule } from '@iho/design-system';\nimport { ExampleComponent, SheetContentComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent, SheetContentComponent],\n  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, IHOBottomsheetModule],\n})\nexport class ExampleModule {}",
      },
    ],
  },
  notifications: {
    title: 'اعلان‌ها',
    apiNames: ['NotificationComponent'],
    module:
      "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { NotificationComponent } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  imports: [CommonModule, RouterModule, NotificationComponent],\n})\nexport class ExampleModule {}",
    notes: [
      'در کل صفحه فقط یک mytag-notifications قرار دهید. این میزبان در showcase از قبل در پوستهٔ اصلی وجود دارد.',
      'گزینه‌های سرویس شامل duration، dismissible، position و action هستند؛ پیش‌فرض‌های NOTIFY_DEFAULTS شامل maxStack هم می‌شوند.',
      'قالب فعلی اعلان فقط عنوان و پیام را نمایش می‌دهد؛ action و dismissible در سرویس ذخیره می‌شوند ولی دکمه‌های آن‌ها در قالب رندر نمی‌شوند. از close و clearAll برای بستن برنامه‌ای استفاده کنید.',
    ],
    examples: [
      {
        title: 'چهار نوع اعلان و بستن برنامه‌ای',
        template:
          '<mytag-notifications></mytag-notifications>\n<button type="button" (click)="show(\'success\')">موفقیت</button>\n<button type="button" (click)="show(\'info\')">اطلاعات</button>\n<button type="button" (click)="show(\'warning\')">هشدار</button>\n<button type="button" (click)="show(\'error\')">خطا</button>\n<button type="button" (click)="closeLast()">بستن آخرین اعلان</button>\n<button type="button" (click)="notify.clearAll()">بستن همه</button>',
        typescript:
          "import { Component } from '@angular/core';\nimport { NotificationService } from '@iho/design-system';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  lastId = '';\n  constructor(public notify: NotificationService) {}\n  show(type: 'success' | 'info' | 'warning' | 'error'): void {\n    this.lastId = this.notify[type]('عنوان اعلان', 'توضیحات اعلان');\n  }\n  closeLast(): void { if (this.lastId) this.notify.close(this.lastId); }\n}",
      },
      {
        title: 'همهٔ موقعیت‌ها، مدت نمایش، دکمه بستن و اکشن',
        template:
          '<mytag-notifications></mytag-notifications>\n<button *ngFor="let position of positions" type="button" (click)="show(position)">{{ position }}</button>\n<button type="button" (click)="persistent()">اعلان ماندگار</button>\n<p aria-live="polite">{{ lastAction }}</p>',
        typescript:
          "import { Component } from '@angular/core';\nimport { NotificationService } from '@iho/design-system';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n  positions: Array<'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'> = ['bottom-right', 'bottom-left', 'top-right', 'top-left'];\n  lastAction = '';\n  constructor(private notify: NotificationService) {}\n  show(position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'): void {\n    this.notify.info('اطلاعات', 'اعلان دارای اکشن', {\n      duration: 5000, dismissible: true, position,\n      action: { label: 'مشاهده', onClick: () => this.lastAction = 'اکشن انتخاب شد' },\n    });\n  }\n  persistent(): void { this.notify.warning('اعلان ماندگار', 'از سرویس برای بستن استفاده کنید.', { duration: 0, dismissible: false }); }\n}",
      },
      {
        title: 'پیش‌فرض‌های تزریق‌شونده',
        description: 'این provider را در ماژول ریشه اضافه کنید.',
        template: '<mytag-notifications></mytag-notifications>',
        typescript:
          "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './example.component.html',\n})\nexport class ExampleComponent {\n\n}",
        module:
          "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { NotificationComponent, NOTIFY_DEFAULTS } from '@iho/design-system';\nimport { ExampleComponent } from './example.component';\n\n@NgModule({\n  declarations: [ExampleComponent],\n  providers: [{ provide: NOTIFY_DEFAULTS, useValue: { duration: 4000, dismissible: true, maxStack: 5, position: 'bottom-right' } }],\n  imports: [CommonModule, RouterModule, NotificationComponent],\n})\nexport class ExampleModule {}",
      },
    ],
  },
};

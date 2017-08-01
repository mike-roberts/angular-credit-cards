import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

export * from './card.component';
export * from './card-data.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CreditCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CreditCardModule,
      providers: []
    };
  }
}

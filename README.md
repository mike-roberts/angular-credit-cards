# angular-credit-cards

## Installation

To install this library, run:

```bash
$ npm install angular-credit-cards --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-credit-cards
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { CreditCardModule } from 'angular-credit-cards';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<credit-card
  [cardData]="cardData"></credit-card>
```

```ts
// app.component.ts
import { Component } from '@angular/core'
// import the Model
import { CardData } from 'angular-credit-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cardData: CardData = {
    network: 'visa',
    last4: 1234,
    name: 'John Doe',
    expDate: '12/21',
    background: 'https://url.to.background.image'
  }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Mike Roberts](mailto:mikerobertsproductions@gmail.com)

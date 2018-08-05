import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Hergestellt von <b><a href="http://rpa-factory.de" target="_blank">Mike Walter</a></b> 2018</span>
  `,
})
export class FooterComponent {
}

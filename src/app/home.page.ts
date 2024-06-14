import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h3>This is the home page for {{ title }}</h3>`,
})
export default class HomePage {
  title = 'lab-host';
}

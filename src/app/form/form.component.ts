import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent{
  demoForm = new FormGroup({
    'navn': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'tlf': new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}\\s[0-9]{2}\\s[0-9]{2}\\s[0-9]{2}$')]),
    'jegErEnig': new FormControl('', [Validators.requiredTrue])
  })

  constructor() { }

  get navn() {return this.demoForm.get('navn')}
  get tlf() {return this.demoForm.get('tlf')}

}

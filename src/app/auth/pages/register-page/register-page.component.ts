import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from './../../../shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.canBestStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators:[
      this.validatorsService.isFieldOneEqualsFieldTwo('password','password2'),
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService,
  ) { }

  /**
   * Verifica si un campo del formulario es válido y ha sido tocado por el usuario.
   * @param field El nombre del campo a verificar.
   * @returns True si el campo tiene errores y ha sido tocado por el usuario, de lo contrario, devuelve false.
   */
  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  /**
   * Marca todos los campos del formulario como tocados.
   */
  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}

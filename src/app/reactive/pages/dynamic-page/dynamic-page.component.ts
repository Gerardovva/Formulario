import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})

export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required])

  constructor(private fb: FormBuilder) { }

  get favoriteGames() {
    return this.myForm.get('favoriteGame') as FormArray;
  }

  isvalidField(field: string): boolean | null {
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched;
  }


  getFielerror(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requaredLength} caracteres`
      }
    }
    return null;
  }



  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors &&
      formArray.controls[index].touched;
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index)
  }

  onAddToFavorite(): void {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.fb.control(newGame, Validators.required)
    );

    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();

  }


}


import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })

export class ValidatorsService {


    // Expresiones regulares para validar el formato del nombre y apellido, y el correo electrónico
    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



    /**
     * Función de validación personalizada que verifica si el valor del control no es 'strider'.
     * @param control El control FormControl que se está validando.
     * @returns Un objeto de errores de validación si el valor es 'strider', de lo contrario, devuelve nulo.
     */
    public canBestStrider = (control: FormControl): ValidationErrors | null => {
        // Obtener el valor del control, eliminar espacios en blanco y convertir a minúsculas
        const value: string = control.value.trim().toLowerCase();

        // Verificar si el valor es igual a 'strider'
        if (value === 'strider') {
            // Si es 'strider', devolver un objeto de errores con la propiedad 'noStrider' establecida en true
            return {
                noStrider: true,
            }
        }
        // Si el valor no es 'strider', devolver nulo para indicar que no hay errores de validación
        return null;
    }


    public isValidField(form: FormGroup, field: string) {
        // Comprueba si el campo tiene errores y ha sido tocado por el usuario.
        // form.controls[field] accede al control del formulario asociado al campo especificado.
        // form.controls[field].errors devuelve los errores asociados con ese control, si los hay.
        // form.controls[field].touched devuelve true si el campo ha sido tocado (visitado) por el usuario.
        return form.controls[field].errors && form.controls[field].touched;
    }


/**
 * Comprueba si el valor de un campo es igual al valor de otro campo en el mismo FormGroup.
 * @param field1 El nombre del primer campo.
 * @param field2 El nombre del segundo campo.
 * @returns Una función de validación que devuelve un objeto de errores si los campos no son iguales, de lo contrario, devuelve null.
 */
isFieldOneEqualsFieldTwo(field1: string, field2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
        const fieldValue1 = formGroup.get(field1)?.value;
        const fieldValue2 = formGroup.get(field2)?.value;

        if (fieldValue1 !== fieldValue2) {
            formGroup.get(field2)?.setErrors({ notEqual: true });
            return { notEqual: true }
        }
        formGroup.get(field2)?.setErrors(null);
        return null;
    }
}


}
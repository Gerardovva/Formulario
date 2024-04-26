import { FormControl, ValidationErrors } from "@angular/forms";

// Expresiones regulares para validar el formato del nombre y apellido, y el correo electrónico
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

/**
 * Función de validación personalizada que verifica si el valor del control no es 'strider'.
 * @param control El control FormControl que se está validando.
 * @returns Un objeto de errores de validación si el valor es 'strider', de lo contrario, devuelve nulo.
 */
export const canBestStrider = (control: FormControl): ValidationErrors | null => {
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

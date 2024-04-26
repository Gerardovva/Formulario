
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {



    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors | null>((subcriber) => {

            console.log({ email });
            if (email === 'gvsvasquez90@gmail.com') {
                subcriber.next({ emaltaken: true });
                subcriber.complete();
            }

            subcriber.next(null);
            subcriber.complete();

        }).pipe(
            delay(3000)
        )

        return httpCallObservable;
    }

}


/* validate(control: AbstractControl): Observable<ValidationErrors | null> {
     const email = control.value;
     console.log({ email });

     return of({
         emailTaken: true
     }).pipe(
         delay(2000)
     )
 }*/


/**
 * return this.http.get<any[]>(`http://localHost:300/user?=${email}`)
 * .pipe(
 * map(resp =>{
 *  return(resp.length ===0)?null:{emailTaken:tur}
 * })
 * )
 */
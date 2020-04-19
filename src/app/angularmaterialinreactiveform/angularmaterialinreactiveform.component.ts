import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Person } from '../model/person';

@Component({
  selector: 'app-angularmaterialinreactiveform',
  // templateUrl: './angularmaterialinreactiveform.component.html',
  //templateUrl: './angularmaterialinreactiveform.component.tabular.html',
  templateUrl: './angularmaterialinreactiveform.component.angularmaterial.html',
  styleUrls: ['./angularmaterialinreactiveform.component.css']
})
export class AngularmaterialinreactiveformComponent implements OnInit {

  title: string = 'Person Registration Form';
  personForm: FormGroup;;

  constructor(private fromBuilder: FormBuilder) {
    this.personForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return this.fromBuilder.group({
      "id": new FormControl('', [Validators.required]),
      "firstName": new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
      "lastName": new FormControl('', [Validators.required]),
      "address": new FormControl(),
      "dateOfBirth": new FormControl({ value: new Date() }, Validators.compose([Validators.required])),
      "gender": new FormControl(null, Validators.required),
      "playList": new FormControl(null, Validators.required),
      "email": new FormControl('', Validators.compose([Validators.required, Validators.email])),
      "isAccepted": new FormControl(null)
    });

  }


  ngOnInit(): void {
  }

  onSubmitForm() {
    if (this.personForm.invalid) {
      return;
    } else {
      const person: Person = Object.assign({}, this.personForm.value);
      console.log(JSON.stringify(person));

      //OR
      /* console.log(this.personForm.get('id').value);
      console.log(this.personForm.get('firstName').value);
      console.log(this.personForm.get('lastName').value);
      console.log(this.personForm.get('address').value);
      console.log(this.personForm.get('dateOfBirth').value);
      console.log(this.personForm.get('gender').value);
      console.log(this.personForm.get('playList').value);
      console.log(this.personForm.get('email').value);
      console.log(this.personForm.get('isAccepted').value); */
    }
  }


  onChange(event: any) {
    if (event.checked == true) {
      this.personForm.get('isAccepted').setValue(1);
    } else {
      this.personForm.get('isAccepted').setValue(0);
    }

  }

  defaultPerson() {
    this.personForm.patchValue({
      id: 1,
      firstName: 'Amsidh',
      lastName: 'Lokhande',
      address: 'Pune',
      dateOfBirth: new Date('05/05/1983'),
      gender: 'Male',
      playList: 'YeMatKhahoKudhaSe',
      email: 'amsidhlokhande@gmail.com',
      isAccepted: 1
    })
  }

  resetForm() {
    this.personForm.reset({
      id: 0
    })
  }

}

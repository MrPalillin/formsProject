import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	user: FormGroup;

	constructor(private fb: FormBuilder){

	}

	ngOnInit(): void {

		this.user = this.fb.group({
			name: new FormControl('', [Validators.required, Validators.minLength(2)]),
			password: new FormControl('', Validators.required),
			passwordRepeat: new FormControl('', Validators.required),
		});

	}

	passwordMatchValidator(g: FormGroup){
		return g.get('password').value == g.get('passwordRepeat').value ? null : {'mismatch': true};
	}

	onSubmit(){

	}

}

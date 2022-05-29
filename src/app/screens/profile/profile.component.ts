import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import swal from "sweetalert2";
import {Student} from "../../models/student";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractRestService} from "../../../services/genericservice";
import {environment} from "../../../environments/environment";

@Component({
	selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	formGroup!: FormGroup;
	student !: Student;
	studentId: number = 0;
	private path = `${environment.url}/users`;
	imageProfile !: string;
	constructor(private activateRoute: ActivatedRoute, private service: AbstractRestService<Student>,
				private router: Router) {
	}

	ngOnInit(): void {
		this.formGroup = new FormGroup({
			firstname: new FormControl('', [Validators.required]),
			lastname: new FormControl('', [Validators.required]),
			username: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			description: new FormControl('', [Validators.required]),
			address: new FormControl('', [Validators.required]),
			country: new FormControl('', [Validators.required]),
			city: new FormControl('', [Validators.required]),
			zipCode: new FormControl('', [Validators.required]),
			profileImage: new FormControl('', [Validators.required]),
			about: new FormControl('', [Validators.required])
		});
		this.activateRoute.params.subscribe((params) => {
			this.studentId = params['id'];
			this.service.get(this.path, params['id']).subscribe((response) => {
				this.student = response;
				this.formGroup.controls['firstname'].setValue(this.student.firstname);
				this.formGroup.controls['lastname'].setValue(this.student.lastname);
				this.formGroup.controls['username'].setValue(this.student.username);
				this.formGroup.controls['email'].setValue(this.student.email);
				this.formGroup.controls['country'].setValue(this.student.localisation.country);
				this.formGroup.controls['city'].setValue(this.student.localisation.city);
				this.formGroup.controls['zipCode'].setValue(this.student.localisation.zipCode);
				this.formGroup.controls['address'].setValue(this.student.address);
				this.formGroup.controls['about'].setValue(this.student.about);
				this.imageProfile = response.imageProfile;
			});
		});
	}

	submit($event: Event): void {
		$event.preventDefault();
		this.student.about = this.formGroup.value.about;
		this.student.address = this.formGroup.value.address;
		this.student.firstname = this.formGroup.value.firstname;
		this.student.lastname = this.formGroup.value.lastname;
		this.student.description = this.formGroup.value.description;
		this.student.telephone = this.formGroup.value.telephone;
		this.student.username = this.formGroup.value.username;
		this.student.email = this.formGroup.value.email;
		this.student.localisation = {
			country: this.formGroup.value.country,
			city: this.formGroup.value.city,
			zipCode: this.formGroup.value.zipCode
		};
		this.service.put(this.path, this.studentId, this.student).subscribe((response) => {
			swal.fire({
			title: "Good job!", text: "votre profile est changé", buttonsStyling: false, customClass: {
				confirmButton: "btn btn-success",
			}, icon: "success"
		}).then(() => {
			this.router.navigate([''])
		});
		});
	}
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../services/genericservice";
import {SecureStorageService} from "../services/secure-storage.service";
import {Student} from "./models/student";
import swal from 'sweetalert2';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'walha';
	username: string = '';
	formGroup !: FormGroup;
	user !: Student;
	private path = `http://localhost:8000/api/users`;

	constructor(private userService: AbstractRestService<Student>, private secureStorageService: SecureStorageService,
				) {
	}

	ngOnInit(): void {
		this.user = {
			internships: [
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 1
				},
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 1
				},
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 2
				},
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 3
				},
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 4
				},
				{
					subject: 'this is a subject for internship 1',
  					description: 'this is a description for internship1',
  					companyName: 'djagora',
  					dateStart: new Date('2014-02-01'),
  					dateEnd: new Date('2014-03-01'),
  					percentageAchievement: 80,
 	 				id: 1
				}
			],
			certifications: [
				{
					id: 1,
					title: 'certification 1',
					description: 'description of certification 1',
					dateBeingCertified: new Date('2017-01-02'),
					image: '/assets/img/certificate.png',
					percentage: 15
				}, {
					id: 2,
					title: 'certification 2',
					description: 'description of certification 2',
					dateBeingCertified: new Date('2017-05-02'),
					image: '/assets/img/certificate.png',
					percentage: 25
				}, {
					id: 3,
					title: 'certification 1',
					description: 'description of certification 1',
					dateBeingCertified: new Date('2017-01-02'),
					image: '/assets/img/certificate.png',
					percentage: 15
				}, {
					id: 4,
					title: 'certification 1',
					description: 'description of certification 1',
					dateBeingCertified: new Date('2017-01-02'),
					image: '/assets/img/certificate.png',
					percentage: 15
				}, {
					id: 5,
					title: 'certification 1',
					description: 'description of certification 1',
					dateBeingCertified: new Date('2017-01-02'),
					image: '/assets/img/certificate.png',
					percentage: 15
				}, {
					id: 6,
					title: 'certification 1',
					description: 'description of certification 1',
					dateBeingCertified: new Date('2017-01-02'),
					image: '/assets/img/certificate.png',
					percentage: 15
				}],
			competitions: [
				{
					title: 'competion 1',
					subject: 'subject of competion 1',
					dateParticipation: new Date('2011-02-02'),
					percentageAchievement: 24
				},
				{
					title: 'competion 1',
					subject: 'subject of competion 1',
					dateParticipation: new Date('2011-02-02'),
					percentageAchievement: 24
				},
				{
					title: 'competion 1',
					subject: 'subject of competion 1',
					dateParticipation: new Date('2011-02-02'),
					percentageAchievement: 24
				},
				{
					title: 'competion 1',
					subject: 'subject of competion 1',
					dateParticipation: new Date('2011-02-02'),
					percentageAchievement: 24
				},
				{
					title: 'competion 1',
					subject: 'subject of competion 1',
					dateParticipation: new Date('2011-02-02'),
					percentageAchievement: 24
				}
			],
			participationList: [{
				dateStart: new Date('2015-02-01'),
				dateEnd: new Date('2018-01-01'),
				trainingCourse: {
					title: 'traning course 1',
					school: 'lycée 20 mars'
				}
			}, {
				dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
					title: 'traning course 1', school: 'lycée 20 mars'
				}
			}, {
				dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
					title: 'traning course 1', school: 'lycée 20 mars'
				}
			}, {
				dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
					title: 'traning course 1', school: 'lycée 20 mars'
				}
			}, {
				dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
					title: 'traning course 1', school: 'lycée 20 mars'
				}
			}, {
				dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
					title: 'traning course 1', school: 'lycée 20 mars'
				}
			},],
			dateJoined: new Date('2015-01-01'),
			firstname: 'walha',
			lastname: 'triki',
			email: 'walha@gmail.com',
			telephone: '24127616',
			username: '@walha123',
			description: "I'm a student with full of patient in programming",
			localisation: {
				country: 'tunisie',
				city: 'sfax',
				zipCode: '3093'
			},
			about: "I'm good in python, java and c++",
			address: "Tunisie sfax 3093"
		}
		this.username = this.user.username;
		this.formGroup = new FormGroup({
			firstname: new FormControl(this.user.firstname, [Validators.required]),
			lastname: new FormControl(this.user.lastname, [Validators.required]),
			username: new FormControl(this.user.username, [Validators.required]),
			email: new FormControl(this.user.email, [Validators.required, Validators.email]),
			description: new FormControl(this.user.description, [Validators.required]),
			about: new FormControl(this.user.about, [Validators.required]),
			address: new FormControl(this.user.address, [Validators.required]),
			country: new FormControl(this.user.localisation.country, [Validators.required]),
			city: new FormControl(this.user.localisation.city, [Validators.required]),
			zipCode: new FormControl(this.user.localisation.zipCode, [Validators.required]),
			profileImage: new FormControl('', [Validators.required]),
			imageProfile: new FormControl('', [Validators.required])
		});

		// const access = localStorage.getItem('access');
		// const userId = Number(localStorage.getItem('userId'));
		// if(access !== null)
		// {
		//   this.userService.get(this.path, userId, {
		//     headers: {
		//       Authorization: `Bearer ${this.secureStorageService.getToken(access)}`
		//     }
		//   })
		// }
	}

	submit($event: Event): void
	{
		$event.preventDefault();
		this.user.about = this.formGroup.value.about;
		this.user.address = this.formGroup.value.address;
		this.user.firstname = this.formGroup.value.firstname;
		this.user.lastname = this.formGroup.value.lastname;
		this.user.description = this.formGroup.value.description;
		this.user.telephone = this.formGroup.value.telephone;
		this.user.localisation = {
			country: this.formGroup.value.country,
			city: this.formGroup.value.city,
			zipCode: this.formGroup.value.zipCode
		}
		console.log(this.user);
		swal.fire({
              title: "Good job!",
              text: "votre profile est changé",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success",
              },
              icon: "success"
          });
	}
}

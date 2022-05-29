import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AbstractRestService} from "../services/genericservice";
import {SecureStorageService} from "../services/secure-storage.service";
import {Student} from "./models/student";


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	private path = `http://localhost:8000/api/users`;
	constructor(private userService: AbstractRestService<Student>, private secureStorageService: SecureStorageService,
				) {
	}

	ngOnInit(): void {

	}
}

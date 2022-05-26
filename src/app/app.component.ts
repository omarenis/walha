import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../services/genericservice";
import {SecureStorageService} from "../services/secure-storage.service";



interface User
{
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'walha';
  formGroup !: FormGroup;
  private path = `http://localhost:8000/api/users`;
  constructor(private userService: AbstractRestService<User>, private secureStorageService: SecureStorageService) {
  }
  async ngOnInit(): Promise<void> {

    this.formGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
      profileImage: new FormControl(''),
    });

    const access = localStorage.getItem('access');
    const userId = Number(localStorage.getItem('userId'));
    if(access !== null)
    {
      this.userService.get(this.path, userId, {
        headers: {
          Authorization: `Bearer ${this.secureStorageService.getToken(access)}`
        }
      })
    }
  }
}

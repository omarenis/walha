import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Client} from '../models/client';
export interface Token{
    access: string;
    refresh: string;
    userId: number;
    full_name: string;
}
export interface SignUpToken{
    access: string;
    message: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  path = `${environment.url}/api`;

    constructor(private httpClient: HttpClient) {}

    public login(username: string, password: string): Promise<Token> {
        return this.httpClient.post<Token>(`${this.path}/login`, {username, password}).toPromise();
    }

    public signup(person: Client): Promise<SignUpToken> {
        return this.httpClient.post<SignUpToken>(`${this.path}/signup`, person).toPromise();
    }

    public logout(refresh: string, access: string): Promise<void> {
        return this.httpClient.post<void>(`${this.path}/logout`, {refresh}, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        }).toPromise();
    }
    public activateAccount(access: string, token: string): Promise<{message: string}>
    {
        console.log(access);
        return this.httpClient.post<{message: string}>(`${this.path}/activate_account`, {token}, {
            headers: {
                Authorization: `Bearer  ${access}`
            }
        }).toPromise();
    }

    public resetPasswordPart1(username: string): Promise<{ access: string }>
    {
        return this.httpClient.post<{access: string}>(`${this.path}/forgot_password_part_1`, {username}).toPromise();
    }

    public resetPasswordPart2(newPassword: string, token: string, access: string): Promise<{message: string}> {
        return this.httpClient.post<{message: string}>(`${this.path}/forgot_password_part_2`,
            {new: newPassword, token}, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        }).toPromise();
    }
}

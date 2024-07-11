import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http: HttpClient = inject(HttpClient)
  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  constructor() { }

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}

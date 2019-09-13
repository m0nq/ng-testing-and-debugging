import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class XyzWebStorageService {

  constructor(private http: HttpClient) {
  }

  getRemote() {
    return this.http.get<any>('http://localhost:5984/user/settings');
  }

  setRemote(payload: object) {
    return this.http.put<any>('http://localhost:5984/user/settings', payload);
  }

  get(key: string) {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}

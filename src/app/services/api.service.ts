import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, of, onErrorResumeNext } from 'rxjs';
import { MockApiService } from './mock-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly base_url = 'http://127.0.0.1:3000';
  private readonly token_key: string = 'user_token'

  private request(url: string): string {
    return `${ this.base_url }/${ url }/`;
  }

  private get_user_token() {
    let token = localStorage.getItem(this.token_key);
    if (token === null) {
      token = '';
      localStorage.setItem(this.token_key, token);
    }
    return token;
  }

  private get_headers() {
    const user_token = this.get_user_token();
    return {headers: {'Authorization': `Token ${user_token}`}};
  }

  public isAuthenticated(): boolean {
    const token = this.get_user_token();
    return token !== '';
  }

  constructor(
    private mockApiService: MockApiService,
    private http: HttpClient,
  ) { }

  get_profile(): Observable<any> {
    const token = this.get_user_token();
    if (token === '') return of(JSON.stringify({ok: false}));
    return this.http.get(this.request('auth/users'), this.get_headers());
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.request('auth/token/login'), {username: username, password: password});
  }

  logout() {
    localStorage.setItem(this.token_key, '');
    return this.http.post(this.request('auth/token/logout'), {}, this.get_headers());
  }

  register(email: string, username: string, password: string) {
    return this.http.post(this.request('auth/users'), {email: email, username: username, password: password});
  }

  get_all_fridges(): Observable<any> {
    return this.http.get(this.request('fridges'), this.get_headers());
  }

  create_fridge(name: string) {
    return this.http.post(this.request('fridges'), {name: name}, this.get_headers());
  }

  get_fridge_by_id(id: number) {
    return this.http.get(this.request(`product/${id}/`), this.get_headers());
  }

  add_admin_to_fridge(fridge_id: number, user_id: number) {
    return this.http.post(this.request(`fridges/${fridge_id}/add_admin`), {user_id: user_id}, this.get_headers())
  }

  add_member_to_fridge(fridge_id: number, user_id: number) {
    return this.http.post(this.request(`fridges/${fridge_id}/add_member`), {user_id: user_id}, this.get_headers())
  }

  delete_fridge(id: number) {
    this.http.delete(this.request(`fridges/${id}/delete_fridge`), this.get_headers());
  }

  remove_admin_to_fridge(fridge_id: number, user_id: number) {
    return this.http.delete(this.request(`fridges/${fridge_id}/remove_admin`), this.get_headers())
  }

  remove_member_to_fridge(fridge_id: number, user_id: number) {
    return this.http.delete(this.request(`fridges/${fridge_id}/remove_member`), this.get_headers())
  }
}

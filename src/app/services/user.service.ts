import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl = 'https://sheet.best/api/sheets/2700f5da-81b4-4a0a-8658-08b8a981c70c1';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //CRUD
  //retorna a lista de usuarios -> READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //salva usuario no banco -> CREATE
  postUser(User: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, User, this.httpOptions);
  }

  //exclui o usuario do banco -> DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //editar usuario -> UPDATE
  updateUser(id: string, User: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, User, this.httpOptions)
  }

  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }

}

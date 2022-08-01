import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(
    private formBuider: FormBuilder,
    private userService: UserService,
    private activateRouter: ActivatedRoute,
    private router: Router) {
    this.userForm = this.formBuider.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);

      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
        // this.userService.updateUser(this.userId)
      } else {

      }

    })

    // this.getUsers();
  }

  createUser() {
    //console.log(this.userForm.value);
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuario ${result.nome} ${result.sobrenome} cadastrado com sucesso`)
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('Usuario Atualizado', result);
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }


  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

}

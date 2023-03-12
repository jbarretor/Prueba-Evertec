import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonInformation } from 'src/app/interfaces/person-information';
import { Response } from 'src/app/interfaces/response';
import { ApiService } from 'src/app/services/api.service';

declare var window: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rs: Response
  personInfo: PersonInformation
  formModal: any
  form: FormGroup
  archivo: any

  constructor(private apiService: ApiService) {
    this.rs = {
      success: false,
      message: '',
      data: null
    }

    this.personInfo = {
      id: 0,
      firstName: '',
      lastName: '',
      birth: new Date(),
      photo: '',
      maritalStatus: 0,
      hasSiblings: false
    }

    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      birth: new FormControl(),
      maritalStatus: new FormControl(),
      hasSiblings: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.apiService.Read().subscribe((res) => {
      this.rs.data = res.data;
    });

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('Modal')
    )

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('PhotoView')
    )
  }

  ViewImg(img: any) {
    this.archivo = img
    this.formModal.show()
  }

  OpenModal() {
    this.formModal.show()
  }

  edit(personInfo: any) {
    this.personInfo = personInfo
    this.archivo = personInfo.photo
    this.form = new FormGroup({
      firstName: new FormControl(personInfo.firstName),
      lastName: new FormControl(personInfo.lastName),
      birth: new FormControl(personInfo.birth.split('T')[0]),
      maritalStatus: new FormControl(personInfo.maritalStatus),
      hasSiblings: new FormControl(personInfo.hasSiblings),
    })
    this.formModal.show()
  }

  getFile(event: any): any {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.archivo = reader.result;
    };
  }

  delete(id: number) {
    this.apiService.Delete(id).subscribe((res) => { 
      if(res.success){
        this.apiService.Read().subscribe((res) => {
          this.rs.data = res.data;
        });
      }
    });
  }

  onSubmit() {
    this.personInfo = {
      id: this.personInfo.id,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      birth: this.form.value.birth,
      photo: this.archivo.toString(),
      maritalStatus: this.form.value.maritalStatus,
      hasSiblings: this.form.value.hasSiblings
    }
    if (this.personInfo.id == 0) {
      this.apiService.Create(this.personInfo).subscribe((res) => { 
        if(res.success){
          this.apiService.Read().subscribe((res) => {
            this.rs.data = res.data;
          });
        }
      });
    } else {
      this.apiService.Update(this.personInfo).subscribe((res) => { 
        if(res.success){
          this.apiService.Read().subscribe((res) => {
            this.rs.data = res.data;
          });
        }
      });
    }

    this.closeModal()
  }

  closeModal() {
    this.personInfo = {
      id: 0,
      firstName: '',
      lastName: '',
      birth: new Date(),
      photo: '',
      maritalStatus: 0,
      hasSiblings: false
    }

    this.formModal.hide()
  }
}

import { Component, Inject,  OnInit } from '@angular/core';
import { PersonInformation } from 'src/app/interfaces/person-information';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.scss']
})
export class PersonInformationComponent implements OnInit {

  personInfo: PersonInformation

  constructor() {
    this.personInfo = {
      id: 0,
      firstName: '',
      lastName: '',
      birth: new Date(),
      photo: '',
      maritalStatus: 0,
      hasSiblings: false
    }
  }

  ngOnInit(): void { }

}

import {Component, OnInit} from '@angular/core';
import {Certification} from "../../models/certification";

@Component({
  selector: 'app-certifications-table',
  templateUrl: './certifications-table.component.html',
  styleUrls: ['./certifications-table.component.css']
})
export class CertificationsTableComponent implements OnInit {
  rows: Certification[] = [{
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }, {
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }, {
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }, {
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }, {
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }, {
    title: 'certification 1',
    description: 'description of certification 1',
    dateBeingCertified: new Date('2017-01-02'),
    image: '/assets/img/certificate.png'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}

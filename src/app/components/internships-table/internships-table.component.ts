import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../models/internship";

@Component({
  selector: 'app-internships-table',
  templateUrl: './internships-table.component.html',
  styleUrls: ['./internships-table.component.css']
})
export class InternshipsTableComponent implements OnInit {
  @Input() rows ?: Internship[];
  constructor() { }

  ngOnInit(): void {
  }

}

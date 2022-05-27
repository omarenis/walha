import {Component, Input, OnInit} from '@angular/core';
import {Competition} from "../../models/competition";

@Component({
  selector: 'app-competitions-table',
  templateUrl: './competitions-table.component.html',
  styleUrls: ['./competitions-table.component.css']
})
export class CompetitionsTableComponent implements OnInit {
	@Input() rows?: Competition[];

  constructor() { }

  ngOnInit(): void {
  }

}

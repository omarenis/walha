import { Component, OnInit } from '@angular/core';
import {Competition} from "../../models/competition";

@Component({
  selector: 'app-competitions-table',
  templateUrl: './competitions-table.component.html',
  styleUrls: ['./competitions-table.component.css']
})
export class CompetitionsTableComponent implements OnInit {
	rows: Competition[] = [
		{
			title: 'competion 1',
			subject: 'subject of competion 1',
			dateParticipation: new Date('2011-02-02'),
			percentageAchievement: 24
		},
		{
			title: 'competion 1',
			subject: 'subject of competion 1',
			dateParticipation: new Date('2011-02-02'),
			percentageAchievement: 24
		},
		{
			title: 'competion 1',
			subject: 'subject of competion 1',
			dateParticipation: new Date('2011-02-02'),
			percentageAchievement: 24
		},
		{
			title: 'competion 1',
			subject: 'subject of competion 1',
			dateParticipation: new Date('2011-02-02'),
			percentageAchievement: 24
		},
		{
			title: 'competion 1',
			subject: 'subject of competion 1',
			dateParticipation: new Date('2011-02-02'),
			percentageAchievement: 24
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}

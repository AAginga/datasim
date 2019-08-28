import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  page = 4;

  constructor() { }

  ngOnInit() {
  }

}

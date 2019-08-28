import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-agentsedit',
  templateUrl: './agentsedit.component.html',
})
export class AgentseditComponent implements OnInit {
  editing: boolean = false;
  
  constructor(activeRoute: ActivatedRoute) {

    this.editing = activeRoute.snapshot.params["mode"] == "edit";
   }

  ngOnInit() {
  }

}

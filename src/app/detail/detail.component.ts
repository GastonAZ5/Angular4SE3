import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: number;

  constructor(
    private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.activatedroute.snapshot.params['id'];
  }

}

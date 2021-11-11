import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})

export class EmployeDetailComponent implements OnInit {

employe : Employe | undefined;

  constructor(
    private route : ActivatedRoute,
    private emplService : EmployeService,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getEmploye();
  }
  getEmploye(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.emplService.getEmploye(id)
      .subscribe(employe => this.employe = employe);
  }
  save (): void {
    if (this.employe) {
      this.emplService.updateEmployee(this.employe).subscribe(() => this.goBack());
    }
  }
  goBack(): void {
    this.location.back();
  }

}

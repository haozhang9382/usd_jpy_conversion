import { Component } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent {
  constructor(public convertService:ConvertService) {}
}

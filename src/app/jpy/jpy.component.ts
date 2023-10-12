import { Component } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-jpy',
  templateUrl: './jpy.component.html',
  styleUrls: ['./jpy.component.css']
})
export class JpyComponent {
  constructor(public convertService:ConvertService) {}
}

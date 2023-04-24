import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complaint-box',
  templateUrl: './complaint-box.component.html',
  styleUrls: ['./complaint-box.component.css']
})
export class ComplaintBoxComponent {
  @Input() complaint:any;
}

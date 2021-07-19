import { Component, OnInit } from '@angular/core';
import { QuicksortService } from '../services/quicksort.service';

@Component({
  selector: 'app-viwer',
  templateUrl: './viwer.component.html',
  styleUrls: ['./viwer.component.scss']
})
export class ViwerComponent implements OnInit {

  constructor(private quicksortService: QuicksortService) { }

  ngOnInit(): void {
  }

}

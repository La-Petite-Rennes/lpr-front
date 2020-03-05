import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'lpr-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdherentComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}

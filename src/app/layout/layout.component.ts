import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service'

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(beservice: BackEndService) {}

    ngOnInit() {}
}

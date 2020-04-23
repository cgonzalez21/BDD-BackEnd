import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BackEndService } from '../../../service';
import { Empresa } from '../../../model/empresa.model'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    public empresa: Empresa[];


    constructor(private translate: TranslateService, public router: Router,
        public beservice: BackEndService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('es');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.getEmpresa();
    }

    getEmpresa() {
        this.beservice.getEmpresa().subscribe((data: any) => {
            const resp = data.data;
            if (data.code == 404) {
                this.router.navigate["/"];
                localStorage.removeItem('isLoggedin');
                localStorage.removeItem('sucID');
                localStorage.removeItem('sucName');
            }
            else {
                for (let i in resp) {
                    this.empresa = resp[i];
                }
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('sucID');
        localStorage.removeItem('sucName');
    }

}

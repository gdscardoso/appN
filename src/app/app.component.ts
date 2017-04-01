import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: FirebaseListObservable<any[]>;
    model: Cliente = new Cliente();

    constructor(
        private _af: AngularFire
    ) {
        this.items = this._af.database.list("task");
        this.items.subscribe(console.log);
    }

    doSalvar() {
        this.items.push(this.model);
        this.model = new Cliente();
    }

}

export class Cliente {
    id: number;
    chamado: number;
    setor: string;
    tipo: string;
    usuarioAbertura: string;
}
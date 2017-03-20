import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: FirebaseListObservable<any[]>;
    model: Cliente = new Cliente();

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar, private _af: AngularFire) {
        this.items = this._af.database.list("clientes");
        this.items.subscribe(cliente => console.log(cliente));
    }

    doSalvar() {
        this.items.update(this.model.nome, this.model);
        this.model = new Cliente();
    }

}

export class Cliente {
    nome: string;
    idade: number;
}
import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isDarkTheme: boolean = false;
    lastDialogResult: string;

    foods: any[] = [
        {name: 'Pizza', rating: 'Excellent'},
        {name: 'Burritos', rating: 'Great'},
        {name: 'French fries', rating: 'Pretty good'},
    ];

    items: FirebaseListObservable<any[]>;
    progress: number = 0;

    model: ModelForm;

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar, private _af: AngularFire) {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);

        this.items = this._af.database.list("clientes");
    }

    openDialog() {
    }

    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }

    doSalvar() {
        console.log(this.model);
        // this.items.push();
    }
}


export interface ModelForm {
    nome?: string,
    idade?: number
}
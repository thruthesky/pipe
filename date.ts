import {Pipe} from '@angular/core';
@Pipe({ name: 'shortDate' })
export class shortDate {
    transform( value ) {
        let d = new Date(value);
        let t = new Date();

        console.log( d.toString() );
        console.log( t.toString() );
        if (
            d.getFullYear() == t.getFullYear() &&
            d.getMonth() == t.getMonth() &&
            d.getDate() == t.getDate()
        ) {
            return d.getHours() + ':' + d.getMinutes();
        }
        else {
            return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
        }
    }
}

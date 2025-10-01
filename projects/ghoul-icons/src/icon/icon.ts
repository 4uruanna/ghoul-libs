import { Component, Input } from '@angular/core';

@Component({
    selector: 'gc-icon',
    imports: [],
    templateUrl: './icon.html',
    styleUrl: './icon.scss',
})
export class Icon {
    @Input({ required: true })
    name!: 'ghoul';

    @Input()
    size: string | number = 24;

    @Input()
    color = 'black';
}

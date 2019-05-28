import { Component, Prop, h, Host } from '@stencil/core';

@Component({
    tag: 'my-first-component',
    shadow: true,
    styleUrl: './my-first-component.css'
})
export class myComponent {
    @Prop() name: string;

    render() {
        return (
            <Host>
                <slot></slot>
                <p>
                    My name is {this.name}
                </p>
            </Host>
        )
    }
}
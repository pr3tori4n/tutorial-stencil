import { Component, h, Element, Host } from '@stencil/core';

let shadow = null;

@Component({
    tag: 'calcite-select-variant',
    shadow: true,
    styleUrl: './calcite-select.scss'
})
export class CalciteSelectVarient {
    @Element() el: HTMLElement;

    componentDidLoad() {
        shadow = this.el.shadowRoot;
        const select = shadow.querySelector("select");
        this.el.querySelectorAll("option").forEach(option => {
            select.appendChild(option)
        });
    }

    render() {
        return (
            <Host>
                <select></select>
                <slot></slot>
            </Host>
        )
    }
}
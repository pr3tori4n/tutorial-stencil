import { Component, h, Element, Prop, Host } from '@stencil/core';

@Component({
    tag: 'calcite-select',
    shadow: true,
    styleUrl: './calcite-select.scss'
})
export class CalciteSelect {
    @Element() el: HTMLElement;

    @Prop() options;

    parseOptionsJSON(jsonData) {
        let result = null;
        try {
            result = JSON.parse(jsonData);
        } catch (e) {
            console.error(e);
            result = [];
        }
        return result;
    }

    render() {
        console.log(this.options);
        const options = JSON.parse(this.options);
        console.log(options)
        return (
            <Host>
                {options.length > 0 ?
                <select>
                    {options && options.map((option) =>
                        <option>{option.value}</option>
                    )}
                </select> : null}
            </Host>
        )
    }
}
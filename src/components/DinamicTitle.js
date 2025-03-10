class DinamicTitle extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: 'open'
        });

        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("notice");

        const style = document.createElement('style');
        style.textContent = `
        h1{
            color: red;
        }
        `;

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('dinamic-title', DinamicTitle);
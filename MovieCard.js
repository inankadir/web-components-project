const template = document.createElement("template")
template.innerHTML = `
<style>
h3 {
    color: green;
}
img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>
<h3></h3>
<img />
<p>
<slot />
</p>
`

class MovieCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector("h3").innerHTML = this.getAttribute("title");
        this.shadowRoot.querySelector("img").src = this.getAttribute("poster");
        this.shadowRoot.querySelector("p").innerHTML = "Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.";
   
        
    }
}

window.customElements.define("movie-card", MovieCard)
class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const author = document.createElement('span');
        author.textContent = "Por " + (this.getAttribute("author") || "Anonimo");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');
        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo');

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .card{
            width: 900px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }

        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: 600;
        }

        .card_left > p{
            color: gray;
        }

        .card_left > span{
            font-weight: 400;
        }

        .card_right > img{
            width: 400px;
        }
        `;

        return style;
    }
}

customElements.define('card-news', Cardnews);
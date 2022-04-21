let collection = [
    {
        name: "Ezreal",
        position: "Adc",
        civilization: "Piltover",
        picture:"",
        winrate: "49,67%"

    },
    {
        name: "Jhin",
        position: "Adc",
        civilization: "Ionian prisonner",
        picture: "",
        winrate: "50,32%"
    },
    {
        name: "Zeri",
        position: "Adc",
        civilization: "Zaun",
        picture: "",
        winrate: "44,15%"
    },
    {
        name: "Lucian",
        position: "Adc",
        civilization: "Demacia",
        picture: "",
        winrate: "51,91%"
    },
    {
        name: "Xayah",
        position: "Adc",
        civilization: "Lhotlan",
        picture: "",
        winrate: "50,85%"
    },
    {
        name: "Vayne",
        position: "Adc",
        civilization: "Demacia",
        picture: "",
        winrate: "51,41%"
    },
    {
        name: "Viego",
        position: "Jungler",
        civilization: "A lost Kingdom",
        picture: "",
        winrate: "48,43%"
    },
    {
        name: "Singed",
        position: "Top",
        civilization: "Zaun",
        picture: "",
        winrate: "54,14%"
    },
    {
        name: "Tryndamere",
        position: "Top",
        civilization: "Freljord",
        picture: "",
        winrate: "52,75%"
    },
    {
        name: "Gwen",
        position: "Top",
        civilization: "Iles Obscures",
        picture: "",
        winrate: "50,88%"
    }
]

let body = document.querySelector('body')
let header0 = document.createElement ("header")
body.appendChild(header0)
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')

header0.appendChild(h1);
header0.appendChild(h2);
h1.innerHTML="collection"
h2.innerHTML = "my favorite league of legends champs"
let main = document.createElement("main")
body.appendChild(main)

for (let i = 0; i < collection.length; i++) {
    let article = document.createElement('article');
    main.appendChild(article);
    let img = document.createElement('img')
    img.innerHTML = collection[i].picture;
    let header  =document.createElement('header')
    article.appendChild(header)
    header.appendChild(img)

    let div = document.createElement('div')
    header.appendChild(div)
    let h3 = document.createElement('h3')
    div.appendChild(h3);
    h3.innerHTML = collection[i].name
      
    let h4 = document.createElement('h4')
    h4.innerHTML = collection[i].civilization
    div.appendChild(h4)

    let footer = document.createElement('footer')
    let em = document.createElement('em');
    em.innerHTML = collection[i].position;
    footer.appendChild(em)
    article.appendChild(footer)

    let italic = document.createElement('i')
    italic.innerHTML = collection[i].winrate;
    footer.appendChild(italic);}
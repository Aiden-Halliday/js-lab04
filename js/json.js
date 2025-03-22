
const header = document.querySelector("header");
const section = document.querySelector("section");


async function populate() { // populates the page with data

    const url = "https://aiden-halliday.github.io/js-lab04/js/i-scream.json";
    const request = new Request(url);
    const response = await fetch(request);
    const responseJson = await response.json();
    console.log(responseJson);
    populateHeader(responseJson);
    showTopFlavors(responseJson);
}

populate();

function populateHeader(jsonBody) { //creates the header of the page
    let h1 = document.createElement("h1"); 
    let p = document.createElement("p");
    h1.textContent = jsonBody.companyName;
    p.textContent = `Head Office: ${jsonBody.headOffice}, est. ${jsonBody.established} - 
    Active: ${(jsonBody.active) ? "Yes" : "No"}`;
    header.appendChild(h1);
    header.appendChild(p);
}
function showTopFlavors(jsonBody) { //creates each flavour article section
    let topFlavors = jsonBody.topFlavours;
    for (let i = 0; i < topFlavors.length; i++) {
        console.log(topFlavors[i]);
        let article = document.createElement("article"); 
        let h2 = document.createElement("h2"); 
        let p1 = document.createElement("p"); 
        let p2 = document.createElement("p"); 
        let image = document.createElement("img"); 
        let list = document.createElement("ul"); 
        h2.textContent = topFlavors[i].name;
        p1.textContent = `Calories: ${topFlavors[i].calories}`;
        p2.textContent = `Type: ${topFlavors[i].type}`;
        image.setAttribute("src", topFlavors[i].image);

        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            console.log(ingredients[j]);
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            list.appendChild(listItem);
        }

        //appends all elements to each article
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        article.appendChild(image);

        section.appendChild(article);
    }
}

// Lab: Extend the JavaScript application built in class to include two more flavors of ice cream.


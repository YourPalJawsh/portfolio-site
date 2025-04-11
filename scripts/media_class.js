class ItemOfLegend {
    #wielder;
    constructor(artifact, rarity, wielder, lore, image){
        this.artifact = artifact;
        this.rarity = rarity;
        this.#wielder = wielder;
        this.lore = lore;
        this.image = image;
    }
    
    // GETTERS and SETTERS:
    // artifact
    get artifactName() {
        return this.artifact;
    }
    set artifactName(n) {
        if (n === "") {
            throw new Error("Artifact must have a name, if unknown, enter unknown!");
        }
        this.artifact = n;
    }

    // Rarity
    get artifRarity() {
        return this.rarity;
    }
    set artifRarity(r) {
        if (r === "") {
            throw new Error("Artifact must have a rarity, if unknown, enter unknown!");
        }
        this.rarity = r;
    }

    // Wielder
    get wielderName() {
        return this.#wielder;
    }
    set wielderName(w) {
        if (w === "") {
            throw new Error("Artifact must have a wielder, if unknown, enter unknown!");
        }
        this.#wielder = w;
    }

    // Lore
    get loreType() {
        return this.lore;
    }
    set loreType(l) {
        if (l === "") {
            throw new Error("Artifact must have lore, if unknown, enter unknown!");
        }
        this.lore = l;
    }

    // Image
    get imagePath() {
        return this.image;
    }
    set imagePath(i) {
        if (i === "") {
            throw new Error("Artifact must have an image path!");
        }
        this.image = i;
    }

    // Display attributes
    artifactToString() {
        console.log("To String!");
        return `Artifact: ${this.artifact}, Rarity: ${this.rarity}, Wielder: ${this.#wielder}, Lore: ${this.lore}, Image: ${this.image}`;
    }

    artifactToHTML() {
        // make another div
        const mediaContainer = document.querySelector("#media-container");
        const artifDiv = document.createElement('div');
        
        artifDiv.innerHTML = `
        <h3>${this.artifact}</h3>            
        <p>Rarity: ${this.rarity}</p>
        <p>Wielder: ${this.#wielder}</p>
        <p>Lore: ${this.lore}</p> 
        <img src="${this.image}"/>
        `
        // append div to media-container
        mediaContainer.appendChild(artifDiv);
    }
};

function clearDiv(){
    document.querySelector("#media-container").innerHTML = "";
}

async function fetchJSON() {
    console.log("fetching");
    try {
        const response = await fetch("../json/media_col.json");
        if (!response.ok){
            throw new Error("404, response is not ok");
        }
        console.log("fetch success");
        return response.json();
    }
    catch(error) {
        console.log("cool error");
        console.error(error);
        return null;
    }
}

async function jsonHandler() {
    console.log("running handler");
    const data = await fetchJSON();
    
    if (!data) throw new Error("404, jsonHandler()");

    clearDiv();

    // We're making the objects from json
    for (let item of data){
        console.log("Creating artifact from:", item);
        let artifact = makeArtifact(
            item.artifact,
            item.rarity,
            item.wielder,
            item.lore,
            item.image
        );
        artifact.artifactToHTML();
    }
}

function makeArtifact(artifact, rarity, wielder, lore, image) {
    return new ItemOfLegend(artifact, rarity, wielder, lore, image);
}

const jsonbtn = document.querySelector("#grabJSON");
    jsonbtn.addEventListener("click", () => {
        console.log("button activation");
        jsonHandler();
    });
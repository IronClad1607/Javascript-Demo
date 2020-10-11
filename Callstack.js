function ceo(){
    console.log("Lets call CTO")
    cto()
}

function cto(){
    console.log("Lets call VP Engg")
    vpEng()
}

function vpEng(){
    console.log("Lets call Tech lead")
    techLead()
}

function techLead(){
    console.log("Lets call developer")
    developer()
}

function developer(){
    console.log("Lets develop")
    throw new Error("The code didnt work")
}

ceo()

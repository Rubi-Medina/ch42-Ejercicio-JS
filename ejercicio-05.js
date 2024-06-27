let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];


console.log(personas);


personas.splice(personas.indexOf("Dani"), 1);
console.log(personas); 


personas.splice(personas.indexOf("Juan"), 1);
console.log(personas); 


personas.splice(personas.indexOf("Luis"), 1);
personas.unshift("Luis");
console.log(personas); 


personas.push("Alondra");
console.log(personas); 


for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
    if (personas[i] === "Maria") {
        break;
    }
}


console.log(personas.indexOf("Maria")); // 1


console.log(personas); 

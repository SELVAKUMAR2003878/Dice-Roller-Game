

//select the button
let btn = document.getElementById("btn").onclick = function() {

    const numOfDice = document.getElementById("input").value;
    const rollresult = document.getElementById("rollresult");
    const rollimage = document.getElementById("rollimage");
    const values = [];
    const images = [];

    for(i = 0; i < numOfDice; i++) {

        const value = Math.floor(Math.random() * 6) + 1;
        
        values.push(value);

        images.push(`<img src="diceImage/${value}.png" alt="Dice = ${value}">`);
    }
    rollresult.textContent =  "Dice:" + values.join(", ");
    rollimage.innerHTML = images.join(`   `);

}
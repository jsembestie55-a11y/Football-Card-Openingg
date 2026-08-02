const players = [
    {name: "Kylian Mbappé", rating: 91, position: "ST", rarity: "Gold"},
    {name: "Erling Haaland", rating: 91, position: "ST", rarity: "Gold"},
    {name: "Lionel Messi", rating: 88, position: "RW", rarity: "Legend"},
    {name: "Cristiano Ronaldo", rating: 86, position: "ST", rarity: "Legend"},
    {name: "Jude Bellingham", rating: 90, position: "CM", rarity: "Gold"},
    {name: "Vinícius Jr.", rating: 89, position: "LW", rarity: "Gold"}
];

let coins = 1000;

function openPack(){

    if(coins < 100){
        alert("Nemáš dost mincí!");
        return;
    }

    coins -= 100;
    document.getElementById("coins").innerHTML = coins;

    let random = Math.floor(Math.random() * players.length);
    let player = players[random];

    document.getElementById("card").innerHTML = `
    
    <div class="card">

        <h1>${player.rating}</h1>

        <div class="position">
        ${player.position}
        </div>

        <h2>${player.name}</h2>

        <p>${player.rarity}</p>

    </div>

    `;
}

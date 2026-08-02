const players = [
    {name: "Kylian Mbappé", rating: 91, rarity: "Gold"},
    {name: "Erling Haaland", rating: 91, rarity: "Gold"},
    {name: "Lionel Messi", rating: 88, rarity: "Legend"},
    {name: "Cristiano Ronaldo", rating: 86, rarity: "Legend"},
    {name: "Jude Bellingham", rating: 90, rarity: "Gold"},
    {name: "Vinícius Jr.", rating: 89, rarity: "Gold"}
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
        <div style="
        background:#222;
        padding:20px;
        border-radius:15px;">
        
        <h2>${player.name}</h2>
        <h1>${player.rating}</h1>
        <p>${player.rarity}</p>

        </div>
    `;
}

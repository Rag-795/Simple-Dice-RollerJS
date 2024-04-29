
function roll()
{
    const numofDice = document.querySelector(".in").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    if(numofDice > 100 || numofDice <=0)
    {
        diceResult.innerHTML= "Invalid input! Please enter a number between  1 and 100.";
        return;
    }

    for(let i=0; i < numofDice; i++)
    {
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src="resources/dice-${random}.png" alt="Dice-${random}">`);
    }
    
    diceResult.innerHTML = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

const btn = document.getElementById("rollbtn");
btn.addEventListener('click', () => {roll()});

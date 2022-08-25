let quote = document.getElementById("quote");
function generateQuote(){
    let i = Math.floor(Math.random()*172);
    quote.textContent = `"${arr[i].quote}"`;
}
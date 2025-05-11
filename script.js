const quotes = [
    "Tici sev - tas ir pirmais solis uz panākumiem",
    "Katru dienu ir iespēja kļūt labākam",
    "Neatskaties - tu neesi tas, kas bija, bet tas, kas topi",
    "Panākumi sākas ar vēlmi un neatlaidību",
    "Nav svarīgi, cik reizes tu krīti, bet cik reizes celies.",
    "Beidzot palaižot vaļā to cilvēku, kas reiz biji, tu atklāj to cilvēku, kas esi tagad, un par ko gribi būt",
    "Dažkārt mazākais solis pareizajā virzienā var izrādīties liels solis Tavā dzīvē",
    "Pirmais likums - neķer kreņķi par sīkumiem. Otrais likums - viss ir sīkumi",
    "Labākā atriebība ir milzīgi panākumi",
    "Cilvēkus iepazīst ar sirdi, nevis ar acīm vai prātu",
    "Lai ar tevi notiek nevis tas, kā tev gribas, lai notiek, bet tas, kas tev nāk par labu",
    "Tu esi stiprāks, nekā domā, un spēj vairāk, nekā iedomājies",
    "Tici sev, tas ir pirmais solis uz panākumiem",
    "Nekad nav par vēlu kļūt par to, kas vēlies būt",
    "Neatliec uz rītdienu to, ko vari izdarīt šodien"
];

function getRandomQuote() {
   
    const validQuotes = quotes.filter(quote => quote.length > 10);

    
    const randomIndex = Math.floor(Math.random() * validQuotes.length);
    return validQuotes[randomIndex];
}


document.addEventListener("DOMContentLoaded", function() {
    const quoteBox = document.getElementById("newQuoteBtn");

    
    quoteBox.addEventListener("click", () => {
        const quote = getRandomQuote();
        quoteBox.textContent = quote;
    });
});
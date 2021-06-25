const { bucinQuotes, galauQuotes, kehidupanQuotes } = require('./data/quotes.json'); // quote source: gugel😂

function Quotes(query) {
    validQuote = [
        "bucin",
        "galau",
        "kehidupan"
    ]

    if (!query) throw new Error(`Masukkan Query!\nQuote yang tersedia:\n${validQuote.map((q, i) => `${i + 1}. ${q}`).join('\n')}\n`);
    if (query.toLowerCase() == 'bucin') {
        const bucinQ = bucinQuotes[Math.floor(Math.random() * (bucinQuotes.length - 1))];

        return bucinQ;
    } else if (query.toLowerCase() == 'galau') {
        const galauQ = galauQuotes[Math.floor(Math.random() * (galauQuotes.length - 1))];

        return galauQ;
    } else if (query.toLowerCase() == 'kehidupan') {
        const kehidupanQ = kehidupanQuotes[Math.floor(Math.random() * (kehidupanQuotes.length - 1))];

        return kehidupanQ;
    } else {
        // throw new Error(`Quote \"${query}\" tidak ditemukan!`)
        return console.log(`Quote \"${query}\" tidak ditemukan! \nQuote yang tersedia:\n${validQuote.map((q, i) => `${i + 1}. ${q}`).join('\n')}\n`)
    }
}

module.exports.Quotes = Quotes;
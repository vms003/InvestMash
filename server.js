const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the static files from the appropriate directory
const indexPath = path.join(__dirname, 'screens', 'rsi-oversold-stocks');
app.use(express.static(indexPath));

// Sample stock data
const stocks = [
    { id: 1, name: "L&T Technology", cmp: 4574.00, pe: 38.44, marCap: 48373.96, divYld: 0.98, npQtr: 329.30, qtrProfitVar: 2.05, salesQtr: 2351.20, qtrSalesVar: 9.23, roce: 33.12, rsi: 21.27 },
    // Add more stocks as needed
];

app.get('/stocks', (req, res) => {
    res.json(stocks);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());

// // Set up a route to proxy the API request
// app.get('/api/daily-quote', async (req, res) => {
//   try {
//     // Fetch the daily quote from the API
//     const response = await fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731',{
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '7c9714d22emshc2352da39dbdaa3p1b9e22jsn3b4549331f80',
//             'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
//         }
//     });
//     const data = await response.json();

//     // Check if the response contains a quote
//     if (data.contents && data.contents.quotes && data.contents.quotes.length > 0) {
//       const quote = data.contents.quotes[0].quote;
//       res.json({ dailyQuote: quote });
//     } else {
//       res.status(404).json({ error: 'No quote available today.' });
//     }
//   } catch (error) {
//     console.error('Error fetching daily quote:', error);
//     res.status(500).json({ error: 'Failed to fetch the daily quote.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

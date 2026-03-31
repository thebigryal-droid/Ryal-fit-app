const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static HTML files
app.use(express.static('public'));

// Sample API Routes
app.get('/api/clients', (req, res) => {
    // Handle fetching client data
    res.send('Client data');
});

app.get('/api/attendance', (req, res) => {
    // Handle fetching attendance data
    res.send('Attendance data');
});

app.get('/api/revenue', (req, res) => {
    // Handle fetching revenue data
    res.send('Revenue data');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const app = express();

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const isDay = hours >= 6 && hours < 18;
    return {
        ampm: hours >= 12 ? "PM" : "AM",
        city: "Kolkata",
        country: "Asia",
        date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        isDay: isDay,
        time: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        timezone: "Asia/Kolkata"
    };
}

app.get('/api/time', (req, res) => {
    res.json(getCurrentTime());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
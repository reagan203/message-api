// Import the Express framework
const express = require('express');
// Create an instance of Express
const app = express();
// Set the port for the server to listen on, using either the environment port or default to 3000
const PORT = process.env.PORT || 3000;

// Array containing love messages
const loveMessages = [
    "You are the light in my darkness.",
    "Being with you feels like home.",
    "You are my soulmate, my everything.",
    "Your smile brightens my day.",
    "I cherish every moment spent with you.",
    "You are the best thing that's ever happened to me.",
    "Your love is my greatest treasure.",
    "I fall more in love with you every day.",
    "You complete me in every way possible.",
    "You are the music to my soul.",
    "With you, I am whole.",
    "Your love is the anchor that keeps me grounded.",
    "My heart belongs to you, now and forever.",
    "You are my happily ever after.",
    "I can't imagine my life without you in it.",
    "Your love is my greatest strength.",
    "You are my sunshine on a cloudy day.",
    "I love you more than yesterday, but less than tomorrow.",
    "You are the missing piece to my puzzle.",
    "You are my heart's desire.",
    "You are my rock, my safe haven.",
    "Loving you is the best decision I've ever made.",
    "You make me want to be a better person.",
    "You are the most beautiful person, inside and out.",
    "I love you to the moon and back.",
    "You are my best friend and my true love.",
    "I am grateful for every moment I spend with you.",
    "Your love is my source of strength.",
    "I am forever thankful for your love and support.",
    "You are my forever and always.",
    "Your love is my guiding light.",
    "You are the reason I believe in love.",
    "I am blessed to have you in my life.",
    "Your love fills my heart with joy.",
    "You are the one I want to grow old with.",
    "I love you more than words can express.",
    "You are my heart's greatest treasure.",
    "Your love is my sanctuary.",
    "You are my knight in shining armor.",
    "I am head over heels in love with you.",
    "You are the love of my life.",
    "Your love is the greatest gift I've ever received.",
    "I am endlessly grateful for your love.",
    "You are my everything.",
    "Your love is like a breath of fresh air.",
    "I am hopelessly devoted to you.",
    "You are my one and only.",
    "Your love is my greatest blessing.",
    "You are the best thing that's ever happened to me.",
    "I love you more than all the stars in the sky.",
    "You are the answer to my prayers.",
    "Your love makes every day worth living.",
    "I am forever yours.",
    "You are my heart's desire.",
    "Your love is my guiding light.",
    "You are the one I've been searching for.",
    "I am completely and utterly in love with you.",
    "You are the reason I believe in forever.",
    "Your love is the music of my heart.",
    "You are my soulmate, my partner in crime.",
    "I am enchanted by your love.",
    "You are the love of my life.",
    "Your love is my greatest treasure.",
    "You are the light that shines in my darkness.",
    "I am madly, deeply, and truly in love with you.",
    "You are the one who holds the key to my heart.",
    "Your love is the melody that plays in my soul.",
    "You are my sunshine on a cloudy day.",
    "I am forever grateful for your love.",
    "You are the fire in my soul.",
    "Your love is my inspiration.",
    "You are the reason I smile every day.",
    "I am blessed to have you in my life.",
    "You are my happily ever after.",
    "Your love is my greatest adventure.",
    "You are my dream come true.",
    "I am forever yours.",
    "You are the love of my life.",
    "Your love is my greatest strength.",
    "You are the one who makes my heart skip a beat.",
    "I am hopelessly in love with you.",
    "You are the one who makes me believe in love.",
    "Your love is my paradise.",
    "You are my heart's desire.",
    "Your love is the best gift I've ever received.",
    "You are my soulmate, my true love.",
    "I am completely and utterly devoted to you.",
    "You are the one who makes every day brighter.",
    "Your love is my sanctuary.",
    "You are the one who makes me feel alive.",
    "I am forever yours.",
    "You are the one who completes me.",
    "Your love is my anchor in the storm.",
    "You are my everything.",
    "Your love is my greatest blessing.",
    "You are the one who makes my dreams come true.",
    "I am deeply in love with you.",
    "You are the one who makes me whole.",
    "Your love is the greatest gift of all.",
    "You are my forever and always.",
    "Your love is my reason to smile.",
    "You are the one who makes life worth living.",
    "I am forever thankful for your love.",
    "You are the one who makes my heart sing.",
    "Your love is my endless joy.",
    "You are the one who makes every moment special.",
    "Your love is my eternal flame.",
    "You are the one who fills my heart with love.",
    "Your love is my forever home.",
    "You are the one who makes me believe in miracles.",
    "Your love is my greatest treasure.",
    "You are the one who makes me feel alive.",
    "Your love is my everything."
];

// Route to send a random love message
app.get('/love', (req, res) => {
    // Generate a random index within the range of the loveMessages array
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    // Retrieve a random love message using the random index
    const randomMessage = loveMessages[randomIndex];
    // Send the random love message as JSON response
    res.json({ message: randomMessage });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message to indicate that the server is running and on which port
    console.log(`Server is running on http://localhost:${PORT}`);
});

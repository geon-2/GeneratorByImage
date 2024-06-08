const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const { generateMeme } = require('./memeGenerator');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/meme', upload.single('image'), async (req, res) => {
    const { topText, bottomText } = req.body;
    const imageBuffer = req.file.buffer;

    try {
        const meme = await generateMeme(imageBuffer, topText, bottomText);
        res.json({ mene });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate meme' });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
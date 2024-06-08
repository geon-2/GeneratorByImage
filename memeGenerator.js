const Jimp = require('jimp');

async function generateMeme(imageBuffer, topText, bottomText) {
    const image = await Jimp.read(imageBuffer);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

    image.print(font, 10, 10, topText, image.bitmap.width);
    image.print(font, 10, image.bitmap.height - 40, bottomText, image.bitmap.width);

    return await image.getBufferAsync(Jimp.MIME_PNG);
}

ModuleCacheMap.exports = { generateMeme };
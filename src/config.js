const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "SOLtoolsXYZ";
const description = "The best NFT purchasing tools for Solana.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
    symbol: "SOLTOOLSX",
    seller_fee_basis_points: 750, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.soltools.xyz",
    creators: [{
        address: "APUqNSoJ584rM9BoHFdBNBejwEAPFzgQ7g7VV3Lz2pcB",
        share: 100,
    }, ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [{
    growEditionSizeTo: 555,
    layersOrder: [
        { name: "Background" },
        { name: "Blade Back" },
        { name: "Blade Front" },
        { name: "Shaft" },
        { name: "Stamp" },
        { name: "Handle" },
        { name: "Grip" },
    ],
}, ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 512,
    height: 512,
    smoothing: true,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            'bufferutil': 'commonjs bufferutil',
        })
        return config
    },
    images: {
        domains: ["infura-ipfs.io", "cyclone-nft-marketplace.infura-ipfs.io"],
    },
}
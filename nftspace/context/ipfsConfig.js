import { create } from "ipfs-http-client";

const projectId = "2KHfZsYP1zBOVsSZZYx4VJ9qzR0";
const projectSecretKey = "355244ba91064d11370befe1297ef660";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
    "base64"
)}`;

export const subdomain = "https://cyclone-nft-marketplace.infura-ipfs.io";

export const client = create({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});
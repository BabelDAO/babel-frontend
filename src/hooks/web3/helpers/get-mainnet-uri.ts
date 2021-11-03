import cfg from "../../../config.json";

export const getMainnetURI = (): string => {
    return cfg.rpcUrl || "https://api.avax.network/ext/bc/C/rpc";
};

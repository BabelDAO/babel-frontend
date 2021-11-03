import cfg from "../config.json";

export const TOKEN_DECIMALS = 9;

export enum Networks {
    AVAX = cfg.chainId,
}

export const DEFAULD_NETWORK = Networks.AVAX;

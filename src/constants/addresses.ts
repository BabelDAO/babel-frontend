import { Networks } from "./blockchain";
import cfg from "../config.json";

const AVAX_MAINNET = {
    MEMO_ADDRESS: cfg.sBabelAddress,
    TIME_ADDRESS: cfg.babelAddress,
    STAKING_ADDRESS: cfg.stakingAddress,
    STAKING_HELPER_ADDRESS: cfg.stakingHelperAddress,
    TIME_BONDING_CALC_ADDRESS: cfg.bondingCalcAddress,
    TREASURY_ADDRESS: cfg.treasuryAddress,
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};

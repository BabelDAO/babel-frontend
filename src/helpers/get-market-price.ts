import { ethers } from "ethers";
import { LpReserveContract } from "../abi";
import { mimTime, mim } from "../helpers/bond";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    const mimAddress = mim.getAddressForReserve(networkID);
    const mimTimeAddress = mimTime.getAddressForReserve(networkID);
    const pairContract = new ethers.Contract(mimTimeAddress, LpReserveContract, provider);
    const token0 = await pairContract.token0();
    const reserves = await pairContract.getReserves();
    const marketPrice = mimAddress === token0 ? reserves[0] / reserves[1] : reserves[1] / reserves[0];
    return marketPrice;
}

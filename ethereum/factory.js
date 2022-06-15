import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6926b7Fe484a89BA935f3feCab9BE2560c7e4d13"
);

export default instance;

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc26f05058973D549E34A56d55c1aBfe58D91C49F"
);

export default instance;

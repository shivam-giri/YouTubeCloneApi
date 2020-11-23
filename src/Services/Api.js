import axios from "axios";
const KEY = "AIzaSyBbG5m94BWDU14C5d8AD-qrHWQznbHUSoA";

export const baseParams = {
  part: "snippet",
  maxResult: 10,
  key: KEY
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

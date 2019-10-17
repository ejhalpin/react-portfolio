import axios from "axios";

let API = {
  sendMessage: obj => {
    return axios.post("/api/connect/", obj);
  },

  getApps: () => {
    return axios.get("/api/apps/");
  }
};

export default API;

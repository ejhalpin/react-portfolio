import axios from "axios";

export default {
  sendMessage: obj => {
    return axios.post("/api/connect", obj);
  },

  getApps: function() {
    return axios.get("/api/appList");
  },

  getFile: function(format) {
    return axios.get("/api/connect/resume/" + format, {responseType:"blob"});
  }
};

const { v4: uuidv4 } = require("uuid");
const clientId = "MgZIBjv_qb4K7g";

let getAuthToken = async () => {
  let data = new URLSearchParams("");
  data.append("grant_type", "https://oauth.reddit.com/grants/installed_client");
  data.append("device_id", uuidv4());

  let token = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    body: data,
    headers: {
      Authorization: "Basic " + btoa(clientId + ":" + clientId),
    },
  });

  return token.json();
};

export default getAuthToken;

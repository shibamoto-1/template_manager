import axios from "axios";

const templateBaseURL = () => { axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/templates`
  })
};

export const getTemplates = () => {
  return  templateBaseURL.get("/", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const createItem = async(title, body, category) => {
  return templateBaseURL.post("/",
  {
    title: title,
    body: body,
    name: category
  },
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  });
  fetch();
};


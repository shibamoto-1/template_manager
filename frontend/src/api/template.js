import axios from "axios";
import Cookies from 'js-cookie';

const templateBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/templates`
  });

export const getTemplates = () => {
  return  templateBaseURL.get("/", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const createTemplate = (title, body, category) => {
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
};

export const updateTemplate = (body, title, id) => {
  return templateBaseURL.patch(`/${id}`,
  {
    title: title,
    body: body
  },
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  });
};

export const deleteTemplate = (id) => {
  return templateBaseURL.delete(`/${id}`,
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  });
};

import axios from "axios";
import Cookies from 'js-cookie';

const templateBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true,
  });

export const getTemplates = () => {
  return  templateBaseURL.get("/templates", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const createTemplate = (title, body, category) => {
  return templateBaseURL.post("/templates",
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
  return templateBaseURL.patch(`/templates/${id}`,
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
  return templateBaseURL.delete(`/templates/${id}`,
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  });
};

export const updateCategoryName = (id, name) => {
  return templateBaseURL.patch(`/categories/${id}`,
  {
    name: name
  },
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}

export const deleteCategory = (id) => {
  return templateBaseURL.delete(`/categories/${id}`,
  {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  });
}

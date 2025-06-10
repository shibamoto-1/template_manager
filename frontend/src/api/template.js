import axios from "axios";
import Cookies from 'js-cookie';

const templateBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true,
  });

export const getTemplates = () => {
  return  templateBaseURL.get("/templates");
};

export const createTemplate = (title, body, category) => {
  return templateBaseURL.post("/templates",
  {
    title: title,
    body: body,
    name: category
  });
};

export const updateTemplate = (body, title, id) => {
  return templateBaseURL.patch(`/templates/${id}`,
  {
    title: title,
    body: body
  });
};

export const deleteTemplate = (id) => {
  return templateBaseURL.delete(`/templates/${id}`);
};

export const updateCategoryName = (id, name) => {
  return templateBaseURL.patch(`/categories/${id}`,{name: name})
}

export const deleteCategory = (id) => {
  return templateBaseURL.delete(`/categories/${id}`);
}

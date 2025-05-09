import { createContext, useEffect, useState } from 'react';

import { createTemplate, updateTemplate, deleteTemplate, getTemplates, deleteCategory, updateCategoryName } from '../../api/template';

export const TemplateContext = createContext();

export default function TemplateProvider({ children }) {
  const [ templates, setTemplates ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState(null);
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  const selectItem = (title) => {
    const matchContent =  templates.find((template) => template.title === title);
    setSelectedItem(matchContent);
  }

  const selectCategory = (name) => {
    setSelectedCategory(name ? categories.find((category) => category.name === name) : null);
  }

  const fetch = async() => {
    const res = await getTemplates();
    setTemplates(res.data.templates);
    setCategories(res.data.categories);
  }

  const handleCreateTemplate = async(title, body, category) => {
    await createTemplate(title, body, category);
    fetch();
  }

  const handleUpdateTemplate = async(body, title, id) => {
    await updateTemplate(body, title, id);
    fetch();
  }
  
  const handleDeleteTemplate = async(id) => {
    if (!window.confirm(`本当に削除しますか？`)) return;
    await deleteTemplate(id);
    fetch();
  }

  const handleUpdateCategoryName = async(id, name) => {
    await updateCategoryName(id, name);
    fetch();
  }

  const handleDeleteCategory = async(id) => {
    if (!window.confirm(`本当に削除しますか？`)) return;
    await deleteCategory(id);
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <TemplateContext.Provider value={{ templates, categories, selectItem, selectedItem, handleCreateTemplate, handleUpdateTemplate, handleDeleteTemplate, selectedCategory, selectCategory, handleUpdateCategoryName, handleDeleteCategory }}>
      {children}
    </TemplateContext.Provider>
  );
}
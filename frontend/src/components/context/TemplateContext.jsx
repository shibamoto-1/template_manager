import { createContext, useEffect, useState } from 'react';

import { createTemplate, updateTemplate, deleteTemplate, getTemplates, deleteCategory, updateCategoryName } from '../../api/template';

export const TemplateContext = createContext();
export const TemplateUpdateContext = createContext();
export const TemplateAPIContext = createContext();

export default function TemplateProvider({ children }) {
  const [ isUpdated, setIsUpdated ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ templates, setTemplates ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState(null);
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  const selectItem = (template) => {
    setSelectedItem(template);
  }

  const selectCategory = (name) => {
    setSelectedCategory(name ? categories.find((category) => category.name === name) : null);
  }

  const fetch = async() => {
    const res = await getTemplates();
    setTemplates(res.data.templates);
    setCategories(res.data.categories);
    selectItem(res.data.templates[0]);
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
    await deleteTemplate(id);
    fetch();
  }

  const handleUpdateCategoryName = async(id, name) => {
    await updateCategoryName(id, name);
    fetch();
  }

  const handleDeleteCategory = async(id) => {
    await deleteCategory(id);
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <TemplateContext.Provider value={{isUpdated, isEditing, templates, categories, selectedItem, selectedCategory }}>
      <TemplateUpdateContext value={{setIsUpdated, setIsEditing, selectItem, selectCategory}}>
          <TemplateAPIContext value={{handleCreateTemplate, handleUpdateTemplate, handleDeleteTemplate, handleUpdateCategoryName, handleDeleteCategory}}>
            {children}
          </TemplateAPIContext>
      </TemplateUpdateContext>
    </TemplateContext.Provider>
  );
}

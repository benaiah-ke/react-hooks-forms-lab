import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ items, setItems, onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce'
  });

  function onNameChange(event){
    setFormData({...formData, 
      name: event.target.value
    })
  }

  function onCategoryChange(event){
    setFormData({...formData,
      category: event.target.value
    })
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

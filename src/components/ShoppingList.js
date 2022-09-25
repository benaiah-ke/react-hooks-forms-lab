import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const itemsToDisplay = items.filter((item) => {
    return (item.category === selectedCategory || selectedCategory === "All") &&
      (item.name.indexOf(search) !== -1 || search === "");
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearch(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();

    const item = {
      id: uuid(),
      name: event.target.name.value,
      category: event.target.category.value,
    };
    
    setFormData({
      name: '',
      category: 'Produce'
    })

    setItems([...items, item]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        items = {items}
        setItems = {setItems}
        onItemFormSubmit = {addItem}
        />

      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

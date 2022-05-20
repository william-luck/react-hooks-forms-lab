import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputText, setInputText] = useState('')

  

  function handleSearchChange(event) {
    setInputText(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const [submittedData, setSubmittedData] = useState(items)

  


  function handleSubmit(newItem) {
     

    console.log(newItem)

    const dataArray = [...items, newItem]
    setSubmittedData(dataArray)
  }
    


  const itemsToDisplay = submittedData.filter((item) => {
    // if there's input text, do you thing, if not, go with the category.

    if (inputText) { // if there's input text, return all the elements that include the input text
      if (item.name.includes(inputText)) return true;
    } else {
      if (selectedCategory === "All") { // if there's no return text, will default to filter
        return true;
      } else {
        return item.category === selectedCategory;
      }
    }
    }    
  );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />

      <Filter onCategoryChange={handleCategoryChange} search={inputText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// When the form is submitted, a new item should be created and added to list of items.

function ItemForm({ onItemFormSubmit, // Good, use that in the handleSubmit function below
  // setItemFormCategory, 
  // setItemFormName, 
  // itemFormName, 
  // itemFormCategory 
}) {
  
  // Don't need to pass down the itemFormName itself, but will have to pass down the setter functions, so that I can re-render in the input down below. 

  // Will create two new functions here to handle the change of the input and select....

  // Need to review passing down as props and stuff. 

  const [itemFormCategory, setItemFormCategory] = useState('Produce')
  const [itemFormName, setItemFormName] = useState('')

  function addNewName(event) {
    setItemFormName(event.target.value)
  }

  function addNewCategory(event) {
    setItemFormCategory(event.target.value)
  }

  const newItem = {
    id: uuid(),
    name: itemFormName,
    category: itemFormCategory
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem) // IMPORTANTE

    setItemFormCategory('Produce')
    setItemFormName('')



  }




  return (

    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={itemFormName} onChange={addNewName} />
      </label>

      <label>
        Category:
        <select name="category" value={itemFormCategory} onChange={addNewCategory}>
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

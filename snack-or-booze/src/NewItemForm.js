import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewItemForm({ addItem }) {
  const INITIAL_STATE = {
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
    type: 'snacks'
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
    history.push("/");
  }

  return (
    <div>
      <h1 style={{ color: "black" }}>New Item Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type" style={{ color: "black" }}>Type</label>
        <select
          id="type"
          type="select"
          name="type"
          placeholder="Item Name"
          value={formData.type}
          onChange={handleChange}>
          <option value="snacks">Snacks</option>
          <option value="drinks">Drinks</option>
        </select>
        <label htmlFor="name" style={{ color: "black" }}>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* <label htmlFor="id" style={{color: "black"}}>ID</label>
        <input
          id="id"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        /> */}
        <label htmlFor="description" style={{ color: "black" }}>Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="recipe" style={{ color: "black" }}>Recipe</label>
        <input
          id="recipe"
          type="text"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
        <label htmlFor="serve" style={{ color: "black" }}>Serve</label>
        <input
          id="serve"
          type="text"
          name="serve"
          placeholder="How should item be served?"
          value={formData.serve}
          onChange={handleChange}
        />
        <button>Add Item</button>
      </form>
    </div>

  )
}

export default NewItemForm;
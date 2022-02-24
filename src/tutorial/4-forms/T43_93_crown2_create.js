import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//const rootUrl = 'http://localhost:3000';

const T43_93_crown2_create = () => {
  const [product, setProduct] = useState({
    id: 50,
    name: "hat 1",
    cat_id: "1",
    price: 20.99,
    remote_url: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    local_url: "https://i.ibb.co/XzcwL5s/black-shearling.png"
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    

    try {
      const url = `/crown2_93/create`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      setProduct('');
      
    } catch (err) {
      console.log(err);
    }

  }

  return <>
    <article>
      <form className="form"onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='id'>Id: </label>
          <input type='text' name='id' value={product.id} onChange={(e) => setProduct({...product, id: e.target.value})}/>
        </div>
        <div className="form-control">
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})}/>
        </div>
        <div className="form-control">
          <label htmlFor='cat_id'>Cat_id: </label>
          <input type='text' name='cat_id' value={product.cat_id} onChange={(e) => setProduct({...product, cat_id: e.target.value})}/>
        </div>
        <div className="form-control">
          <label htmlFor='price'>Price: </label>
          <input type='text' name='price' value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})}/>
        </div>
        <div className="form-control">
          <label htmlFor='remote_url'>Remote_url: </label>
          <input type='text' name='remote_url' value={product.remote_url} onChange={(e) => setProduct({...product, remote_url: e.target.value})}/>
        </div>
        <div className="form-control">
          <label htmlFor='local_url'>Local_url: </label>
          <input type='text' name='local_url' value={product.local_url} onChange={(e) => setProduct({...product, local_url: e.target.value})}/>
        </div>
        <button type="submit">Add Person</button>

      </form>
    </article>
  </>;
};

export default T43_93_crown2_create;
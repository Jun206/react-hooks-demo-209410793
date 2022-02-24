import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const rootUrl = 'http://localhost:3000';

const T41_93_ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(name && email) {
      const person = {
        id: new Date().getTime().toString(),
        name,
        email
      }
      setPeople( (people) => {
        return [...people, person];
      });
      setName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
    /*   
    if(!name || !email) return;

    const user = {name, email};

    try {
      const url = `${rootUrl}/crown_93/create`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      setName('');
      setEmail('');
      
    } catch (err) {
      console.log(err);
    }
*/
  }

  return <>
    <article>
      <form className="form"onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' value={name} onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <button type="submit">Add Person</button>
      </form>
      {people.map((person) => {
        const {id, name, email} = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  </>;
};

export default T41_93_ControlledInputs;
import React, { useState, useReducer } from 'react';
import T6_93_Modal from './T6_93_Modal';
import { data } from '../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = {id: new Date().getTime().toString(), name};
      setPeople([...people, newItem]);
      setIsModalOpen(true);
      setModalContent('item added');
      setName('');
    }else{

    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return <>
  { isModalOpen && <T6_93_Modal modalContent={modalContent} closeModal={closeModal} />}
  <form className ="form" onSubmit={handleSubmit}>
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <button type="submit">add</button>
  </form>
  {people.map( (person) => {
    return (
      <div key={person.id} className="item">
        <h4>{person.name}</h4>
        <button>Remove</button>
      </div>
    )
  })}
  </>;
};

export default Index;

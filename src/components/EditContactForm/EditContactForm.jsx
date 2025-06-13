import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import css from './EditContactForm.module.css';

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, data: { name, number } }));
    onClose();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <div className={css.btn}>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
      
    </form>
  );
};

export default EditContactForm;
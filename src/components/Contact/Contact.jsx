import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';
import EditContactForm from '../EditContactForm/EditContactForm';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`Контакт "${name}" видалено!`);
    } catch (error) {
      toast.error('Помилка при видаленні контакту');
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles['contact-item']}>
        <div className={styles['contact-info']}>
          <div className={styles['contact-text']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <p>{name}</p>
          </div>

          <div className={styles['contact-text']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <p>{number}</p>
          </div>
        </div>

        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </li>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
        message={`Видалити контакт "${name}"?`}
      />

      {isEditing && (
        <EditContactForm
          contact={{ id, name, number }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default Contact;
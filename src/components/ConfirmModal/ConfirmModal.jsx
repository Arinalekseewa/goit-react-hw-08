import React from 'react';
import Modal from 'react-modal';
import css from './ConfirmModal.module.css';

Modal.setAppElement('#root');

const ConfirmModal = ({ isOpen, onConfirm, onCancel, message }) => (
  <Modal
    className={css.modal}
    isOpen={isOpen}
    onRequestClose={onCancel}
    contentLabel="Confirm Delete"
  >
    <p className={css.message}>{message || 'Are you sure you want to delete this contact?'}</p>
    <button onClick={onConfirm} style={{ marginRight: '10px' }}>
      Yes, delete
    </button>
    <button onClick={onCancel}>Cancel</button>
  </Modal>
);

export default ConfirmModal;

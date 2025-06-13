import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Обовʼязкове поле'),
    number: Yup.string()
      .min(3)
      .max(50)
      .required('Обовʼязкове поле'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <label className={styles.contactLabel}>
          Name
          <Field name="name" className={styles.contactInput}/>
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={styles.contactLabel}>
          Number
          <Field name="number" className={styles.contactInput}/>
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
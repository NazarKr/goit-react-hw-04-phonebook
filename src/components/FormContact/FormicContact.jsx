import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FormContainer, Label, MyField } from './FormicContact.styled';
import ButtonIcon from '../shared/Buttons/ButtonIcon';
import { IoAddCircleOutline } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const FormicContact = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [formValues, setFormValues] = useState({
        name: '',
        number: ''
    });

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <FormContainer>
            <Formik
                initialValues={formValues}
                onSubmit={async (values, { resetForm }) => {
                    await new Promise((r) => setTimeout(r, 500));
                    props.onSubmit(values);
                    resetForm();
                }}
            >
                <Form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Label htmlFor={nameId}>Name</Label>
                    <Field
                        as={MyField}
                        id={nameId}
                        name="name"
                        placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                    <Label htmlFor={numberId}>Number</Label>
                    <Field
                        as={MyField}
                        id={numberId}
                        name="number"
                        placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    />
                    <ButtonIcon
                        primary={false}
                        // text="Add contact"
                        type="submit"
                        icon={IoAddCircleOutline}
                        iconSize={24}
                    >
                    </ButtonIcon>
                </Form>
            </Formik>
        </FormContainer>
    )
}


// FormicContact.propTypes = {
//     values: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
// }

export default FormicContact;
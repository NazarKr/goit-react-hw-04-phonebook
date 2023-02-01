import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { FormContainer, Label, MyField } from './FormicContact.styled';
import ButtonIcon from '../Buttons/ButtonIcon';
import { IoAddCircleOutline } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class FormicContact extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid();
    numberId = nanoid();

    render() {
        return (
            <FormContainer>
                <Formik
                    initialValues={this.state}
                    onSubmit={async (values, { resetForm }) => {
                        await new Promise((r) => setTimeout(r, 500));
                        this.props.onSubmit(values);
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
                        <Label htmlFor={this.nameId}>Name</Label>
                        <Field
                            as={MyField}
                            id={this.nameId}
                            name="name"
                            placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                        />
                        <Label htmlFor={this.numberId}>Number</Label>
                        <Field
                            as={MyField}
                            id={this.numberId}
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
}

export default FormicContact;

FormicContact.propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}
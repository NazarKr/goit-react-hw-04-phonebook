import React from 'react';
import { useState, useEffect } from 'react';
import FilterContact from './FilterContacts/FilterContacts';
import FormicContact from './FormContact/FormicContact';
import ContactsList from './ContactList/ContactsList';
import ModalWindow from './shared/Modal/ModalWindow';
import Notification from './Notification/Notification'
import ButtonTxt from './shared/Buttons/ButtonText';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PhoneBookDiv, PhoneBookH1, PhoneBookH2 } from './App.styled'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import initialContacts from '../components/shared/Data/Contact.json'

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`Sorry, ${name} is already in contacts.`);
      return;
    } else {
      setContacts([contact, ...contacts]);
    }
    toast.success('Contact successfully added!');
    // toggleModal();
    setShowModal(false)
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId),
    );
    toast.info('Contact was deleted');
  };

  const changeFilter = ({ target }) => setFilter(target.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

    const visibleContacts = getVisibleContacts();

    return (
      <PhoneBookDiv>
        <PhoneBookH1>Phonebook</PhoneBookH1>
        <FilterContact value={filter} onChange={changeFilter} onClick={toggleModal} />

        <PhoneBookH2>Contacts</PhoneBookH2>

        <ButtonTxt
          type="submit"
          text="Add contact"
          onClick={toggleModal}
          icon={AiOutlineUserAdd}
          iconSize={20}
          style={{
            marginLeft: '20px'
          }}
        />

        {showModal && (
          <ModalWindow onClose={toggleModal}>
            <FormicContact onSubmit={addContact} onClick={toggleModal} />
          </ModalWindow>
        )}

        {visibleContacts.length === 0 && <Notification message="There is no Contacts" />}
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          transition={Zoom}
          draggable
          Transition="zoom" />
      </PhoneBookDiv>
    )
};
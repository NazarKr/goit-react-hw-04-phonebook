import React, { Component } from 'react';
import FilterContact from './FilterContacts/FilterContacts';
import FormicContact from './FormContact/FormicContact';
import ContactsList from './ContactList/ContactsList';
import ModalWindow from './Modal/ModalWindow';
import ButtonTxt from './Buttons/ButtonText';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { PhoneBookDiv, PhoneBookH1, PhoneBookH2 } from './App.styled'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import initialContacts from './Data/Contact.json'
import Notification from './Notification/Notification'

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    showModal: false,
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      toast.error(`Sorry, ${name} is already in contacts.`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
    toast.success('Contact successfully added!');
    this.toggleModal();
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
    toast.info('Contact was deleted');
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { filter, showModal } = this.state;
    const visibleContacts = this.getVisibleContacts();


    return (
      <PhoneBookDiv>
        <PhoneBookH1>Phonebook</PhoneBookH1>
        <FilterContact value={filter} onChange={this.changeFilter} onClick={this.toggleModal} />

        <PhoneBookH2>Contacts</PhoneBookH2>

        <ButtonTxt
          type="submit"
          text="Add contact"
          onClick={this.toggleModal}
          icon={AiOutlineUserAdd}
          iconSize={20}
          style={{
            marginLeft: '20px'
          }}
        />

        {showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <FormicContact onSubmit={this.addContact} onClick={this.toggleModal} />
          </ModalWindow>
        )}

        {visibleContacts.length === 0 && <Notification message="There is no Contacts" />}
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
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
};

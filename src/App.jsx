import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { saveToLocalStore, loadLocalStore } from "./utils/localStorage";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const setContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some((i) => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  const deleteContact = (id) => {
    contacts.map((p) => ({
      contacts: p.contacts.filter((i) => i.id !== id),
    }));
  };

  useEffect(() => {
    saveToLocalStore("CONTACTS", contacts);
    loadContacts();
  });

  const setFilterFn = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
  };

  const loadContacts = () => {
    const newContacts = loadLocalStore("CONTACTS") || [];
    setContacts(newContacts);
    return contacts;
  };

  const getContacts = () => {
    return contacts.filter((i) => i.name.toLowerCase().includes(filter));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm submitForm={setContact} />
      <h2>Contacts</h2>
      <Filter filter={setFilterFn} />
      <ContactList contacts={getContacts} deleteContact={deleteContact} />
    </div>
  );
  // )
};

export default App;

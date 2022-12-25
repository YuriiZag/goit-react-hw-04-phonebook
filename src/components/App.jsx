import { useState, useEffect } from 'react';
import { Phonebook } from './phonebook/phonebook';
import { Contacts } from './contacts/contacts';

if (localStorage.getItem('contacts') === null) {
    localStorage.setItem('contacts', JSON.stringify([]))
}

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  
  const [filterRequest, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storedContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.length !== 0) {
      const nameList = contacts.map(contact => contact.name.toLowerCase());

      if (nameList.includes(data.name.toLowerCase())) {
        return window.alert(`${data.name} is already in list.`);
      } else {
        return setContacts(prevState => [data, ...prevState]);
      }
    } else {
      return setContacts(prevState => [data, ...prevState]);
    }
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    console.log(filterRequest);
  };

  const contactsFilter = () => {
    const normalizedFilter = filterRequest.toLowerCase();
    console.log(filterRequest);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = e => {
    const filterRequest = contacts.filter(
      contact => contact.name !== e.currentTarget.value
    );
    setContacts(filterRequest);
  };

  return (
    <>
      <Phonebook formSubmit={addContact}></Phonebook>
      <Contacts
        contactsData={contactsFilter()}
        onFilterChange={onFilterChange}
        filterValue={filterRequest}
        onDelete={deleteContact}
      ></Contacts>
    </>
  );
};

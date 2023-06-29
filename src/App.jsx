import { useState, useEffect,useRef } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");
  const isFirstRender = useRef(true);

  // Loading contacts from local storage
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
  }, []);

  // Saving contacts to local storage
  useEffect(() => {
    if (!isFirstRender.current) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    isFirstRender.current = false;
  }, [contacts]);

  const formSubmitHandler = (data) => {
    repeatControl(data);
  };

  const repeatControl = (data) => {
    let nameArray = [];
    nameArray = contacts.map((cur) => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      return setContacts(arrayCont);
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  const elementDelete = (arr, idContact) => {
    let newArr = arr.filter((elem) => elem.id !== idContact);
    return newArr;
  };

  const deleteContactFromContactList = (idContact) => {
    let newArrAfterDel = elementDelete(contacts, idContact);
    setContacts([...newArrAfterDel]);
  };

  const setFilterToState = (filterData) => {
    setFilter(`${filterData}`);
  };

  const filterArr = (fArr) => {
    let newArr = fArr.filter((cur) => cur.name.toUpperCase().includes(filter));
    return newArr;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter setFilterToState={setFilterToState} />
      <ContactList
        contacts={filterArr(contacts)}
        del={deleteContactFromContactList}
      />
      
    </div>
  );
};

export default App;

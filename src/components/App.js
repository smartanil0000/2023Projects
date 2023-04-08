
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './AddContacts';
import ContactList from './ContactList'
import ContactDetail from "./ContactDetails"

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );//React version 18 use this syntax to get item

//   const contacts = [
//   {
//     id:1,
//     name:"dipesh",
//     email:"dipesh@gmail.com"
//   },
//   {
//     id:2,
//     name:"mukesh",
//     email:"mukesh@gmail.com"
//   },
// ]
const addContactHandler =(contact) => {
  console.log(contact);
  setContacts([...contacts,{ id: uuidv4(),...contact }])

}
// useEffect(()=>{
//   const retrieveData= JSON.parse(localStorage.getItem('contacts'));
//  if(retrieveData) setContacts(retrieveData)
// },[]);  //before 18

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact)=>{
    return contact.id!==id;
  })
  setContacts(newContactList);
}

useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts))
},[contacts]);

  return (
    <div className='ui container'>

      <Header />
      <Router>
         <Routes>
          {/* <Route 
          path="/"
          exact
          render = {(props)=> (
            <ContactList
            {...props}
            contacts={contacts}
            getContactId={removeContactHandler}
            />
          )}
          /> */}
          <Route path='/' Component={()=> <ContactList contacts={contacts} getContactId={removeContactHandler}/>} />

          <Route path='/add' Component={()=> (<AddContact addContactHandler={addContactHandler} />
          )}
          />

          <Route path='/contact/:id' Component={ContactDetail} />
        </Routes>
     {/* <AddContact addContactHandler={addContactHandler}/> */}
    {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/>  */}

      </Router>
    
    </div>
  );
}

export default App;

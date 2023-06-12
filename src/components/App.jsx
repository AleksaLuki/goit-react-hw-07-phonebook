import ContactsForm from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';


export function App() {
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
}
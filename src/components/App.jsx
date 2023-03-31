import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { Container, TitleContact, TitleForm } from './App.styled';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

import {fetchContacts} from '../redux/operations'
import {getContacts, isLoadingContacts} from 'redux/seletors'

export default function App() {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const isLoading = useSelector(isLoadingContacts)

  useEffect (() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />

      <TitleContact>Contacts</TitleContact>
      {contacts.length === 0 && isLoading && <p>loading...</p> }
      {contacts.length === 0 && !isLoading ? <p>You don't have contacts ☹️</p> : <Contacts/>}

      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
}

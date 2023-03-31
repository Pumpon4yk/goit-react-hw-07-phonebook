import {Container, Contact, PhoneNumber, ButtonDelete } from './ContactsItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { isLoadingContacts } from 'redux/seletors';

export const ContactsItem = ({ contact: { id, name, phone }}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingContacts)
 
  return (
    <Container>
      <Contact>
        {name}
      </Contact>
      <PhoneNumber>{phone}</PhoneNumber>
      <ButtonDelete id={id} onClick={() => dispatch(deleteContact(id))} disabled={isLoading}>
      Delete
      </ButtonDelete>
    </Container>
  );
};

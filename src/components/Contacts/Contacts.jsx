import { Container} from './Contacts.styled';
import {SearchContact} from "../SearchContact"
import { ContactsList } from '../ContactsList';


const Contacts = () => {
  return (
    <Container>
      <SearchContact/>
      <ContactsList/>
    </Container>
  );
};

export default Contacts;

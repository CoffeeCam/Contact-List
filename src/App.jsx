import ContactList from './components/ContactList';
import './index.css';
import {useState} from 'react';

export default function App() {
const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList />
      )}
    </>
  );
}

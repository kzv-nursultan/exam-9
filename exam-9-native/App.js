import axios from './axiosBase';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ContactCart from './components/ContactCard/ContactCart';
import ModalWindow from './components/Modal/Modal'

export default function App() {
    const [contactList, setContactList] = useState({});
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');

    useEffect(()=>{
      const fetchData = async () => {
        const response = await axios.get('contacts/.json');
        setContactList(response.data);
      };
      fetchData().catch(console.error());
    },[]);

    const closeModal = () => {
      setShow(false);
    };

    let contacts = 'empty';

    if(contactList) {
      contacts = (
        Object.keys(contactList).map(key=>(
              <ContactCart key={key}
              photo={contactList[key]['photo']}
              name={contactList[key]['name']}
              setShow={setShow}
              setId={setId}
              id={key}
              />
          ))
      )
    }

  return (
    <View style={styles.container}>
        {contacts}
        <ModalWindow 
        show={show}
        close={closeModal}
        contactList={contactList}
        id={id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

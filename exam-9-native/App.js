import axios from './axiosBase';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ContactCart from './components/ContactCard/ContactCart';

export default function App() {
    const [contactList, setContactList] = useState({});

    useEffect(()=>{
      const fetchData = async () => {
        const response = await axios.get('contacts/.json');
        setContactList(response.data);
        console.log(response.data);
      };
      fetchData().catch(console.error());
    },[]);

    let contacts = 'empty';

    if(contactList) {
      contacts = (
        Object.keys(contactList).map(key=>(
              <ContactCart key={key}
              photo={contactList[key]['photo']}
              name={contactList[key]['name']}
              />
          ))
      )
    }

  return (
    <View style={styles.container}>
        {contacts}
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

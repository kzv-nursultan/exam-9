import React, {useState, useEffect} from 'react';
import { Modal,
    Text, 
    View, 
    StyleSheet,
    Button} from 'react-native';
import ContactInfo from '../ContactInfo/ContactInfo';

const ModalWindow = props => {
    const [contact, setContact] = useState(null);

    useEffect(()=>{
        if(props.contactList){
            setContact(props.contactList[props.id]);
        }
    },[props.id]);

    let list = 'empty';

    if (contact) {
        list = (
            <ContactInfo
            source={contact.photo}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}/>
        );
    };

      return (
         <View
         style = {{
             display: (props.show) ? 'block' : 'none',
             alignItems: 'center',
             backgroundColor: 'rgba(52, 52, 52, 0.8)',
             padding: 10,
             width:'100%',
             height:'100%',
             position:'absolute'}}>

            <Modal animationType = {"slide"} transparent = {true}>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Contact Info</Text>
                    <View>
                        <Text>
                            {list}
                        </Text> 
                    </View>
                                    
                    <View>
                        <Button title='close modal' onPress={props.close}/> 
                    </View>
               </View>
            </Modal>
         </View>
      )
}
export default ModalWindow;

const styles = StyleSheet.create ({
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10
   },
   text: {
      color: '#3f2949',
      margin: 10,
      fontSize: 20
   }
});
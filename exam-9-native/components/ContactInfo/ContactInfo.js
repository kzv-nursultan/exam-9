import React from 'react';
import {View, Text, Button, Image,StyleSheet} from 'react-native';

const ContactInfo = props => {
    return(
        <View>
            <Image style={styles.photo} source = {{uri:props.source}}/>
            <Text style={styles.text}>Name:{props.name}</Text>
            <Text style={styles.text}>Phone{props.phone}</Text>
            <Text style={styles.text}>Email:{props.email}</Text>
        </View>
    );
};

export default ContactInfo;

const styles = StyleSheet.create({
    photo:{
        width:100,
        height:100,
        margin:'auto'
    },
    text:{
        fontSize:20,
        margin:5
    }
})
import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

const ContactCart = props => {

    const onPress = () => {
        props.setShow(true);
        props.setId(props.id);
    };
    
    return (
        <View style={styles.container}>
            <Image style={styles.photo} source={{uri:(props.photo)}}/>
            <View style={styles.naming}>
                <Text style={styles.name}>{props.name}</Text>
                <Button title='more' onPress={onPress}/>
            </View>
        </View>
    );
};

export default ContactCart;

const styles = StyleSheet.create({
    container:{
        width:250,
        borderWidth:2,
        margin:3,
        flexDirection:'row', 
    },
    photo: {
        width:100,
        height:100,
    },
    naming:{
        justifyContent:'center',
        margin:5
    },
    name:{
        fontSize:20
    }
})


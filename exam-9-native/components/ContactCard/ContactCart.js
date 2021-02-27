import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ContactCart = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.photo} source={{uri:(props.photo)}}/>
            <View style={styles.naming}>
                <Text>{props.name}</Text>
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
    }
})


import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight, Alert , ScrollView,FlatList } from 'react-native';



export const Super = () => {
    return (
        <>
        <View style={styles.container} >

        <Text style={styles.titulo} >Supermercados</Text>
        <Text style={styles.supertext} >Lider</Text>
        <Text style={styles.supertext} >Jumbo</Text>
        <Text style={styles.supertext} >Unimarc</Text>

        </View>
            
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'teal',
      
    },
  
    titulo: {
      marginTop:60,
      fontSize:20,
      textAlign: 'center',
  
    },
    supertext: {
      marginTop:30,
      fontSize:17,
      textAlign: 'center',

    }
  

  });
  
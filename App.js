import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight, Alert , ScrollView,FlatList } from 'react-native';

export default function App() {


  const [lista, setLista] = useState([])

  const [producto, setProducto] = useState('')

  //  console.log('producto',producto)

   const añadirProducto = () => {

      if(producto === ''){
        Alert.alert(
          "Añade un producto",
          "Debes añadir un producto a la lista",
          [
            { text: "OK" }
          ]
        );
        return
      }

      setLista(
        [...lista,
        {producto,
        id:Date.now()
        }
        ])


      setProducto('')

   }

   const borrarProducto = (id) => {
    //  console.log('id',i)

    let filterProducto = lista.filter(item => item.id !== id);

    setLista(filterProducto)
     

   }

   console.log('lista',lista)


  return (
    
    
    
    <ScrollView style={styles.container}>
   
    <Text style={styles.titulo}>Lista de Compras</Text>
    
    <View style={styles.añadir}>

    <TextInput style={styles.input}
    placeholder="¿Que debes comprar?"
    onChangeText={text => setProducto(text)}
    value={producto}
    />
      
    <TouchableHighlight
    onPress={añadirProducto}
    
    style={styles.button}>
      <Text> Agregar </Text>
    </TouchableHighlight>

    </View>

    {lista.length !==0 ?  
    
    <View style={styles.lista} >
       
    <FlatList 
    data={lista}
    renderItem={data => {

      const {producto,id} = data.item
      console.log(data)
      return (
        

        <>
       
                
                <View style={styles.contenedorTextoLista} >

                <Text style={styles.textoLista} >  {producto}</Text>

              <TouchableHighlight
              onPress={() => borrarProducto(id)}
              
              style={{backgroundColor:'red', width:19, height:20, marginTop:5, marginRight:9}}>
                <Text> X </Text>
              </TouchableHighlight>
              </View>

            </>

      )


    }}
    keyExtractor={item => item.id}
    />

  </View>  : null
  }

    
      
    </ScrollView>
    
    
    
  );
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

  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white'
  },
   
  añadir:{
    // width:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40
  },
  button:{
    justifyContent:'center',
    backgroundColor:'pink',
    height:40
    // marginTop:10
  },

  lista: {
    marginTop:20,
    marginHorizontal:'9.5%',
    backgroundColor: "beige",
    borderWidth: 2,

  },

  textoLista:{
    fontSize:19,
    marginBottom:10

  },

  contenedorTextoLista:{
    flexDirection:'row',
    justifyContent:'space-between'
  }

});

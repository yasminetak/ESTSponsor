//LISTE DES PARRAINS

import React , {useState} from 'react'
import {View, Text,ActivityIndicator,FlatList, Alert, StyleSheet, StatusBar, TextInput, Image, Button, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import ListView from "deprecated-react-native-listview";

import { HeaderBackButton } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height}= Dimensions.get('window');


export default class BookmarkScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      text: '',
      data: []
    }
    this.arrayholder= [];
  }

  componentDidMount(){
    return fetch('http://192.168.1.103/Parrains_Site/ParrainsLists.php')
  .then((response)=> response.json())
  .then((responseJson)=> {
    this.setState({
      isLoading : false,
      data: responseJson,
    }, function() {
      this.arrayholder = responseJson;
      //In this block you can do smtg with new state
    });
  })
  .catch((error) => {
    console.error(error);
  });
}
// Cette fonction pour montrer le nom qu'on a choisi sous form d'alert
GetFlatlistItem(parrain_nom){
  Alert.alert(parrain_nom);
}


searchData(text) {
  const newData=this.arrayholder.filter(item => {
    const itemData= item.parrain_nom.toUpperCase();
    const textData= text.toUpperCase();
    return itemData.indexOf(textData)> -1
  });
  this.setState( {
    data: newData,
  text: text
  })
}

//Cette fonction pour separer chaque list d'un trait horizentale
ItemSeparator=()=> {
  return (
    <View style={{ height: 5, width: "100%", backgroundColor: 'teal'}}/>
  );
}


itemComponent=({item})=> {
  return (

    <View>
    <Text style = {styles.row}
            onPress={this.GetFlatlistItem.bind(this, item.parrain_nom)}>
                {item.parrain_nom}</Text>
                <Text style = {styles.row2}>
                            ({item.parrain_fillière})</Text>
    <Button style={{ padding : 1}}
    onPress={()=>{}}
    title="Demander parrainage"
    color='teal'>
    </Button>
    <Button style={{ padding : 1}}
    onPress={()=>{}}
    title="Voir Profil"
    color='#d02860'>
    </Button>
</View>
  )
}

  render() {
    console.disableYellowBox = true;

    if(this.state.isLoading) {
    return (
      <View style= {{ flex: 1 , paddingTop: 20}}>
      <ActivityIndicator/>
      </View>
    );
  }

  return (
  <View style = {styles.MainContainer}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.header}>
        <TextInput
          placeholder="Recherche..."
          placeholderTextColor="gray"
          value={this.state.text}
          onChangeText={(text) => this.searchData(text)}
          style={styles.input}
        />
      </View>


  <FlatList
  data= {this.state.data}
  keyExtractor = { (item, index) => index.toString()}
  ItemSeparatorComponent= {this.ItemSeparator}
  renderItem = {this.itemComponent}

  />
  </View>
);
}
}


const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },

  row: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  row2: {
    fontSize: 18,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 10,
    color: 'gray'
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    height: 150,
    width: 90,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

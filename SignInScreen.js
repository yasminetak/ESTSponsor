import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/AuthContext';


const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
     email: '',
     password: '',
     check_textInputChange: false,
     secureTextEntry: true
  });

  const { signIn }= React.useContext(AuthContext);

  const textInputChange = (val) => {
    if( val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
    });
  }}
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  }
const updateSecureTextEntry = () => {
  setData({
    ...data,
    secureTextEntry: !data.secureTextEntry
  });
}

    return (
      <View style={styles.container}>
    <StatusBar backgroundColor='teal' barStyle="light-content"/>
          <View style={styles.header}>
          <Text style={styles.text_header}>Bienvenue!</Text>
        </View>
        <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
        >
        <Text style={styles.text_footer}>Nom d'utilisateur</Text>
        <View style={styles.action}>
          <FontAwesome
          name="user-o"
          color="#05375a"
          size={20}
          />
        <TextInput
        placeholder="Saisissez votre nom d'utilisateur"
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={(val)=> textInputChange(val)}
        />
        {data.check_textInputChange ?
          <Animatable.View
             animation="bounceIn"
             >
        <Feather
           name="check-circle"
           color="green"
           size={20}
           />
           </Animatable.View>
           : null}
      </View>
      <Text style={[styles.text_footer,  {
        marginTop: 35
      }]}>Mot de passe</Text>
      <View style={styles.action}>
        <Feather
        name="lock"
        color="#05375a"
        size={20}
        />
      <TextInput
      placeholder="Saisissez votre mot de passe"
      secureTextEntry={data.secureTextEntry ? true : false}
      style={styles.textInput}
      autoCapitalize="none"
      onChangeText={(val)=> handlePasswordChange(val)}

      />
      <TouchableOpacity
      OnPress={updateSecureTextEntry}
      >
      <Feather
         name="eye-off"
         color="grey"
         size={20}
         />
         </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <LinearGradient
           colors={['purple' , 'teal']}
           style={styles.signIn}
           >

    <TouchableOpacity
          onPress={() =>{signIn()}}
            style={[styles.signIn, {
            borderColor: 'teal',
            boderWidth: 1,
            marginTop: 1
            }]}>
        <Text style={[styles.textSign, {
           color :'#fff'
           }]}> S'identifier</Text>
           </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignUpScreen')}
        style={[styles.signIn, {
          borderColor: 'teal',
          boderWidth: 1,
          marginTop: 15
        }]}
        >
        <Text style={[styles.textSign, {
          color: 'purple',
        }]}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
      </Animatable.View>
</View>

    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

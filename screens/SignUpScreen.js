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
    ScrollView,
    StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { EvilIcons } from '@expo/vector-icons';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel} from 'react-native-simple-radio-button';


const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
     email: '',
     password: '',
     check_textInputChange: false,
     secureTextEntry: true

  });
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
var user = [
  {label: "Fieul", value: 0},
  {label: "Parrain", value: 1}
];
var user1 = [

  {label: "Finace comptabilté", value: 0},
  {label: "génie des procédés", value: 1},
  {label: "génie éléctrique", value: 2},
  {label: "génie informatique", value: 3},
  {label: "Génie mécanique", value: 4},
  {label: "Technique de commercialisation", value: 5},
];

    return (
      <ScrollView>
      <View style={styles.container}>
    <StatusBar backgroundColor='teal' barStyle="light-content"/>
          <View style={styles.header}>
          <Text style={styles.text_header}>Inscrivez-vous maintenant!</Text>
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
      <Text style={[styles.text_footer, {
        marginTop: 35
      }]}>Email</Text>
      <View style={styles.action}>
        <Entypo
        name="email"
        color="#05375a"
        size={20}
        />
      <TextInput
      placeholder="Saisissez votre email"
      style={styles.textInput}
      keyboardType={'email-address'}
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
      <Text style={[styles.text_footer,  {
        marginTop: 35
      }]}>Confirmez votre mot de passe</Text>
      <View style={styles.action}>
        <Feather
        name="lock"
        color="#05375a"
        size={20}
        />
      <TextInput
      placeholder="Confirmez votre mot de passe"
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
      <Text style={[styles.text_footer, {
        marginTop: 35
      }]}>Numéro de téléphone</Text>
      <View style={styles.action}>
        <FontAwesome
        name="phone"
        color="#05375a"
        size={20}
        />
      <TextInput
      placeholder="Saisissez votre numéro de téléphone"
      style={styles.textInput}
      keyboardType={'numeric'}
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
    <Text style={[styles.text_footer, {
      marginTop: 35
    }]}>Êtes-vous</Text>

    <RadioForm style={[styles.text_footer, {
      marginTop:20
    }]}
            radio_props={user}
            initial={2}
            onPress={() => {}}
            buttonSize={20}
            buttonOuterSize={30}
            selectedButtonColor={'teal'}
            selectedLabelColor={'teal'}
            labelStyle={{fontSize: 20,}}
            disabled={false}
            formHorizontal={true}
            animation={true}
            borderColor={'teal'}

            />
            <Text style={[styles.text_footer, {
              marginTop: 35
            }]}>Quel est votre filière ?</Text>

            <RadioForm style={[styles.text_footer, {
              marginTop:20
            }]}
                    radio_props={user1}
                    initial={8}
                    onPress={() => {}}
                    buttonSize={20}
                    buttonOuterSize={30}
                    selectedButtonColor={'teal'}
                    selectedLabelColor={'teal'}
                    labelStyle={{fontSize: 20,}}
                    disabled={false}
                    formHorizontal={false}
                    animation={true}
                    borderColor={'teal'}

                    />
      <View style={styles.button}>
        <LinearGradient
           colors={['purple' , 'teal']}
           style={styles.signIn}
           >
           <TouchableOpacity
                 onPress={() => navigation.navigate('SignInScreen')}
                   style={[styles.signIn, {
                   borderColor: 'teal',
                   boderWidth: 1,
                   marginTop: 1
                   }]}
                             >
        <Text style={[styles.textSign, {
          color :'#fff'
        }]}> S'inscrire</Text>
        </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignInScreen')}
        style={[styles.signIn, {
          borderColor: 'teal',
          boderWidth: 1,
          marginTop: 15
        }]}
        >
        <Text style={[styles.textSign, {
          color: 'purple',
        }]}>S'identifier</Text>
        </TouchableOpacity>
      </View>
      </Animatable.View>
</View>
</ScrollView>
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

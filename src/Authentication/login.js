import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {

  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return(
      <SafeAreaProvider style={{backgroundColor: '#fff'}}>
        <SafeAreaView></SafeAreaView>
        <View style={{flex: 1}}>
          <View>
              <Text style={{color: '#112447', fontSize: 30,fontWeight: 'bold', marginHorizontal: 20, marginTop: 90,}}> 
                Welcome back!
              </Text>
            <View style={{flexDirection: 'row', marginHorizontal: 20, paddingTop: 5,}}>
            <Text style={{opacity: 0.4,}}>
              Don't have an account? 
            </Text>
            <TouchableOpacity><Text style={{color: 'blue'}}>Create it!</Text></TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 40,}}>
            <Text style={{marginLeft: 20, fontSize: 16, fontWeight: 'bold', color: '#112447'}}>Phone number</Text>
          <View style={{marginTop: 10, flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, marginHorizontal: 20,}}>
          <Feather name="smartphone" size={25} color="gray" style={{paddingTop: 11, paddingLeft: 15}}/>
            <TextInput  placeholder="Enter mobile number"
                        onChangeInput1={onChangeInput1}
                        Value={input1}
                        keyboardType="phone-pad"
                        style={{outline: 'none', paddingLeft: 5,}}
            />
          </View>
          <Text style={{color: '#112447', marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginVertical: 20,}}>Verification Code</Text>
          <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, marginHorizontal: 20,}}>
            <TextInput  placeholder="Enter verification code"
                        onChangeInput1={onChangeInput2}
                        Value={input2}
                        keyboardType="phone-pad"
                        style={{outline: 'none', paddingLeft: 20,}} />
            <TouchableOpacity><Text style={{color: 'blue', position: "relative", top: 15, left: 90}}>Send OTP</Text></TouchableOpacity>
          </View>
          </View>

          <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />

          <Button
            title="Order"
            color="red"
            onPress={() => navigation.navigate('OnBoard')}
            style={styles.butt1}
          />
        </View>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create ({

});

export default Login;
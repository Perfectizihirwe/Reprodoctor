import React, {useState} from "react"
import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import OnBoardScreen from "../onBoard/index";
import setShowRealApp from "../onBoard/index"



const Login = ({navigation}) => {

  const [text1, onChangeText1] = useState("");

  return(
      <View>
          <View>
            <Text style={styles.view1text1}> 
              Hey!
            </Text>
            <Text style={styles.view1text2}>
              Let's get your order.
            </Text>
          </View>
          <View>
            <TextInput  placeholder="🔍Search our delicious food"
                        style={styles.inputbox}
                        onChangeText={onChangeText1}
                        Value={text1}
            />
          </View>
          <View style={styles.view3}>
            <View style={styles.view31}>

            </View>
            <View style={styles.view32}>

            </View>
            <View style={styles.view33}>

            </View>
          </View>
          <Button
            title="Order"
            color="red"
            onPress={() => navigation.navigate('OnBoard')}
            style={styles.butt1}
          />
      </View>
    );
}

const styles = StyleSheet.create ({

});

export default Login;
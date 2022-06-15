import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const OnBoardScreen = ({navigation}) => {

  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <SafeAreaProvider
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <ImageBackground style={styles.introImageStyle} source={item.image}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
        </ImageBackground>
      </SafeAreaProvider>
    );
  };

  return (
    <>
      {showRealApp ? (
          navigation.navigate("Login")
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          showPrevButton={true}
          onSkip={onSkip}
          dotStyle={{width: 20, backgroundColor: '#2d6bad',}}
          activeDotStyle={{width: 20, backgroundColor: 'white',}}
        />
      )}
    </>
  );
}


export default OnBoardScreen;



const styles = StyleSheet.create ({
  loginContainer: {
      flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
    introImageStyle: {

      flex: 1,
      width: 400,
      height: 800,

    },
    introTextStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#2d6bad',
      textAlign: 'center',
      position: "absolute",
      top: 400,
      paddingHorizontal: 30,
    },
    introTitleStyle: {
      fontSize: 25,
      color: '#2d6bad',
      position: "absolute",
      top: 60,
      paddingHorizontal: 40,
      fontWeight: 'bold',
    },
    view1text1: {
      paddingLeft: 30,
      paddingTop: 5,
      fontSize: 35,
      fontWeight: 'bold',
      },

    view1text2: {
        paddingLeft:30,
        fontSize: 18,
        fontWeight: 'normal',
      },

    inputbox: {
      flex: 1,
      borderColor: "#000",
      paddingLeft: 10,
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      height: 40,
      borderColor: "#000",
      borderRadius: 10,
      borderWidth: 0.5,
      },

    view3: {
      flex: 1,
      marginTop: 20,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'center'
      },
    view31: {
      flex: 1,
      maxWidth: 100,
      borderRadius: 20,
      height: 150,
      backgroundColor: "red",     
      },
    view32: {
      flex: 1,
      maxWidth: 100,
      borderRadius: 20,
      flexDirection: 'row',
      height: 150,
      backgroundColor: "red", 

      },
    view33: {
      flex: 1,
      maxWidth: 100,
      borderRadius: 20,
      flexDirection: 'row',
      height: 150,
      backgroundColor: "red", 
      },
    butt1: {      
      maxWidth: "100"
    },
});



const slides = [
  {
    key: 's1',
    text: 'We have the best best doctors with 10+ years of experience dealing with the sexual lives of men',
    title: "Experts in men's sexual life",
    image: require('../../../assets/man.jpg'),
  },
  {
    key: 's2',
    title: "Experts in women's sexual life",
    text: 'We have the best best doctors with 15+ years of experience dealing with the sexual lives of women',
    image: require('../../../assets/woman.jpg'),
  },
  {
    key: 's3',
    title: 'Experts for teenagers too',
    text: "Our doctors have also a wide range of knowledge in dealing with sexual lives of teenagers as they go through puberty",
    image: require('../../../assets/teenage.jpg'),
  },
];

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import * as icons from "@expo/vector-icons";
import Department from "../../components/department";
import Pharmacy from "../../components/pharmacy";

const pharmacy = [
  {
    id: "1",
    image: <Image style={{width:60, height:60, borderRadius: 10,}} source={require("/home/perfect/reactNative/newapp/assets/man.jpg")} />,
    title: "Digestive Health",
    price: "$37.99",
  },
  {
    id: "2",
    image: <Image style={{width:60, height:60, borderRadius: 10,}} source={require("/home/perfect/reactNative/newapp/assets/man.jpg")} />,
    title: "Proactive immune",
    price: "$19.59",
  },
  {
    id: "3",
    image: <Image style={{width:60, height:60, borderRadius: 10,}} source={require("/home/perfect/reactNative/newapp/assets/man.jpg")} />,
    title: "Gut restore",
    price: "$33.99",
  },
];

const departments = [
  {
    id: "1",
    title: "Pediatrics",
    icon: (
      <icons.MaterialCommunityIcons
        name="account-child-circle"
        size={50}
        color="#16278e"
      />
    ),
  },
  {
    id: "2",
    title: "Dental",
    icon: <icons.FontAwesome5 name="tooth" size={40} color="#16278e" />,
  },
  {
    id: "3",
    title: "Lungs",
    icon: <icons.FontAwesome5 name="lungs" size={40} color="#16278e" />,
  },
  {
    id: "4",
    title: "Heart",
    icon: <icons.AntDesign name="heart" size={40} color="#16278e" />,
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 20 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 30, fontWeight: "bold", flex: 4 }}>
                Hi Paula
              </Text>
              <TouchableOpacity style={{paddingHorizontal: 8}}>
                <icons.AntDesign name="qrcode" size={24} color="#16278e" />
              </TouchableOpacity>
              <TouchableOpacity>
                <icons.Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#16278e"
                />
              </TouchableOpacity>
            </View>
            <Text>Welcome Back</Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: "row",
              backgroundColor: "#a8adad",
              opacity: 0.3,
              minHeight: 40,
              borderRadius: 20,
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <icons.EvilIcons name="search" size={24} color="black" />
            <TextInput placeholder="Hospitals, Doctors, Drugs"></TextInput>
          </View>
          <View
            style={{ flexDirection: "row", margin: 20, alignItems: "center" }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", flex: 4 }}>
              Departments
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#a8adad" }}>More ></Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {departments.map((departments, index) => {
              return (
                <Department
                  key={departments.id}
                  title={departments.title}
                  icon={departments.icon}
                />
              );
            })}
          </ScrollView>
          <View
            style={{ flexDirection: "row", margin: 20, alignItems: "center" }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", flex: 4 }}>
              Pharmacy
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#a8adad" }}>More ></Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pharmacy.map((pharmacy, index) => {
              return (
                <Pharmacy
                  key={pharmacy.id}
                  image={pharmacy.image}
                  title={pharmacy.title}
                  price={pharmacy.price}
                />
              );
            })}
          </ScrollView>
          
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

import React, {useState, useEffect} from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import * as icons from "@expo/vector-icons";
import Department from "../../components/department";
import Pharmacy from "../../components/pharmacy";
import MoviePoster from "../../components/MoviePoster";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions";
import { setDepartment } from "../../redux/actions";

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

// const data = [
//   {
//     id: "1",
//     title: "Pediatrics",
//     icon: (
//       <icons.MaterialCommunityIcons
//         name="account-child-circle"
//         size={50}
//         color="#16278e"
//       />
//     ),
//   },
//   {
//     id: "2",
//     title: "Dental",
//     icon: <icons.FontAwesome5 name="tooth" size={40} color="#16278e" />,
//   },
//   {
//     id: "3",
//     title: "Lungs",
//     icon: <icons.FontAwesome5 name="lungs" size={40} color="#16278e" />,
//   },
//   {
//     id: "4",
//     title: "Heart",
//     icon: <icons.AntDesign name="heart" size={40} color="#16278e" />,
//   },
// ];

const HomeScreen = () => {
  // const [department, setDepartment] = useState(null);
  //const [popmovie, setPopMovie] = useState();
  const [is_loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {pop_movies} = useSelector((state) => state.Movies);
  const {department} = useSelector((state) => state.Department);


  useEffect(()=>{
    // setDepartment(data);
    dispatch(fetchPopularMovies())
    dispatch(setDepartment())
  }, [])

  console.log(department);

  // const fetchPopMovies= async () => {
  //   setIsLoading(true)
  //   try{
  //     const {data} = await axios({
  //       method: "get",
  //       url: "https://api.themoviedb.org/3/movie/popular?api_key=caff9ec5965f31529c1d69befe0ae0b0",
  //     });

  //     if(data) {
  //       const popmovie = data.results;
  //       setIsLoading(false)
  //       setPopMovie(popmovie)
  //     }
   
    
  //   }

  //   catch(error){
  //     console.log(error)
  //   }
    
  //  };

  

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
                <icons.MaterialCommunityIcons name="line-scan" size={24} color="#16278e" />
              </TouchableOpacity>
              <TouchableOpacity>
                <icons.Ionicons
                  name="notifications"
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
            {department?.map((departments, index) => {
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
          <View>
          <View styles={{heght: 50, width: 200, backgroundColor: 'red', borderRadius: 20}}>
          <Text style={{ fontSize: 25, fontWeight: "bold", flex: 4, margin: 20 }}>
             Popular movies
            </Text>
            {is_loading && <ActivityIndicator  style={{size: 20, color: ""}}/>}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pop_movies?.map((movie, index) => {
              return (
                <MoviePoster
                  key={movie.id}
                  title={movie.title}
                  release_date={movie.release_date}
                  image={movie.poster_path}
                />
              );
            })}
          </ScrollView>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const MoviePoster = (props) => {

    const {title, release_date, image} = props;

   return(
    <TouchableOpacity style={styles.containerStyles}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${image}`}} style={{width: 50, height: 80}}/>
        <Text>{title}</Text>
        <Text>{release_date}</Text>
    </TouchableOpacity>
   );
}

export default MoviePoster;

const styles = StyleSheet.create({

    containerStyles: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: 100,
    height: 150,
    backgroundColor: "#a8adad",
    borderRadius: 15,
    opacity: 0.6,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
      },
});
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Icon from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

interface Props {
    onPress?: any;
    iconName: string;
    backgroundColor: string;
    style?: any;
}

export default function Button(props: Props) {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={[
                    { backgroundColor: props.backgroundColor },
                    props.style,
                    styles.button
                ]}
            >
                <AntDesign name={props.iconName as 'videocamera' | 'phone'} size={20} color="white" />
                {/* <Image source={require('../assets/favicon.png')} style={{ width: 24, height: 24 }} /> */}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        padding: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
})
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import normalize from '../utils/helpers/normalize';
import Icons from '../themes/Icons';

export default function Header(props) {
    function onPress(props) {
        if (props.onPress) {
            props.onPress()
        }
    }
    return (
        <View style={{ width: '100%', height: normalize(70), backgroundColor: '#1D9EC6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <TouchableOpacity
                style={{
                    height: normalize(40), width: normalize(40), borderTopEndRadius: 10,
                    backgroundColor: '#1D9EC6',
                    justifyContent: 'center'
                }}
                onPress={() => {
                    props.onPress()
                    // Alert.alert('hii')
                    // setIsModalVisible(true)
                }} >
                <Image source={Icons.menu} resizeMode='contain' style={{ height: 40, width: 40, tintColor: '#fff', marginTop: normalize(20) }} />

            </TouchableOpacity>
            <Text style={{ width: '60%', fontSize: normalize(20), marginTop: normalize(20) }}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})



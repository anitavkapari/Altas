import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import Modal from "react-native-modal";
import Icons from '../../themes/Icons';
import { useNavigation } from '@react-navigation/native';


export default function EditUnassignedCase(props) {
    const navigation = useNavigation()

    const [isModalVisible, setIsModalVisible] = useState(false);
    const serviceList = [
        {
            id: '1',
            caseName: 'Ranjan dev Test1',
            dispatchDate: '22-08-2023',
        },
        {
            id: '2',
            caseName: 'Ranjan dev Test1',
            dispatchDate: '17-08-2023',
        },

    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={Icons.Background}>
                <View style={{ width: '100%', height: 60, backgroundColor: '#1D9EC6', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 50, width: 50, marginTop: 10, borderTopEndRadius: 10,
                            backgroundColor: isModalVisible ? '#002F39' : '#1D9EC6',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            // Alert.alert('hii')
                            setIsModalVisible(true)
                        }} >
                        <Image source={Icons.padlock} resizeMode='contain' style={{ height: 40, width: 40, tintColor: '#fff' }} />

                    </TouchableOpacity>
                    <Text style={{ width: '45%' }}>
                        Un Assign Case
                    </Text>
                </View>

              
            </ImageBackground>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    caseTxt: { color: 'black', fontSize: 20, paddingHorizontal: 10, paddingVertical: 10, },
    caseImg: { height: 20, width: 20, tintColor: 'black' },
    card: {
        // flexDirection: 'row',
        height:100,
        justifyContent:'center',
        backgroundColor:'#1D9EC6',
        marginBottom:10,
        width:'95%',
        alignSelf:'center',
        padding:5
    }
})

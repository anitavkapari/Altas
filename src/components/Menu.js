import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Modal from "react-native-modal";
import Icons from '../themes/Icons';
import normalize from '../utils/helpers/normalize';
import { useNavigation } from '@react-navigation/native';


export default function Menu(props) {
    const navigation = useNavigation()

    const [isModalVisible, setIsModalVisible] = useState(props.isVisible);
    useEffect(() => {
        if (props.isVisible) {
            setIsModalVisible(props.isVisible)

        }
    }, [props.isVisible]);
    const serviceList = [
        {
            id: '1',
            name: 'DashBoard',
            img: Icons.logout,
        },
        {
            id: '2',
            name: 'Unassign Cases',
            img: Icons.logout,
        },
        {
            id: '3',
            name: 'Create Case',
            img: Icons.logout,
        },
        {
            id: '4',
            name: 'Ongoing Case',
            img: Icons.logout,

        },
        {
            id: '5',
            name: 'Case History',
            img: Icons.logout,

        },
        {
            id: '6',
            name: 'Ongoing Case',
            img: Icons.logout,

        },
        {
            id: '7',
            name: 'Create Event',
            img: Icons.logout,

        },
        {
            id: '8',
            name: 'Event History',
            img: Icons.logout,

        },
        {
            id: '9',
            name: 'Profile',
            img: Icons.logout,

        },
        {
            id: '10',
            name: 'Case Report',
            img: Icons.logout,

        },
        {
            id: '11',
            name: 'Logout',
            img: Icons.logout,

        },
    ];
    return (
        <Modal
            isVisible={isModalVisible}
            animationIn="fadeInLeft"
            animationOut="fadeOutLeft"
            onBackdropPress={() => setIsModalVisible(false)}
            onBackButtonPress={() => setIsModalVisible(false)}
            // animationInTiming={800}
            // animationOutTiming={1000}
            style={{
                width: '100%',
                alignSelf: 'center',
                margin: 0,

                position: 'absolute',
                // top: 60,
                justifyContent: 'center',
                // borderTopLeftRadius: normalize(20),
                // borderTopRightRadius: normalize(20),
            }}
        >
            <View style={{
                // padding: normalize(8),
                backgroundColor: '#002F39',
                // marginTop: 40,
                width: '50%',
                // position:'absolute',
                // left:1,
                // top:50
            }}>
                <FlatList
                    data={serviceList}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('UnassignedCase')

                                setIsModalVisible(false)
                            }}
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10, paddingVertical: 10,
                                alignContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image source={item.img} style={{
                                height: normalize(10), width: normalize(10), marginRight: normalize(10)
                            }} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{
                        paddingTop: normalize(50),
                        paddingBottom: 10000
                    }}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({})



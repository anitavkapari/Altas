import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../../utils/helpers/dimen';
import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Themes';
import { Icons } from '../../themes/Icons';
export default function DrawerTab({
    visible,
    onRequestClose = () => { },
    onLogout = () => { },

}) {

    const navigation = useNavigation()

    const menuList = [
        {
            id: 1,
            title: 'Home',
            navigateTo: 'BottomTabs',
        },
        {
            id: 2,
            title: 'Insights',
        },
        {
            id: 3,
            // image: Icons.community,
            title: 'Sample',
            navigateTo: 'Sample',
        },
        {
            id: 4,
            // image: Icons.livehelp,
            title: 'Help & Support',
            // navigateTo: 'MyCircle',
        },
        {
            id: 5,
            title: 'Settings',
        },
        {
            id: 6,
            // image: Icons.logout,
            title: 'Logout',
        },

    ];

    const Sample1Submenu = [
        {
            id: 1,
            // image: Icons.addnewvideo,
            title: 'Sample1',
            // navigateTo: 'AddVideoNew',
        },
    ];
    const Sample2Submenu = [
        {
            id: 1,
            // image: Icons.addnewvideo,
            title: 'Sample2',
            // navigateTo: 'AddVideoNew',
        },
    ];
    // const [subMenuVisibe, setSubMenuVisibe] = useState(false);
    // const [subMenuHelpVisibe, setSubMenuHelpVisibe] = useState(false);
    // const [fitizenPlusVisibe, setFitizenPlusVisibe] = useState(false);
    // const [communityVisibe, setCommunityVisibe] = useState(false);

    const renderItem = ({ item, index }) => {
        return (

            <TouchableOpacity
                key={index}
                onPress={
                    () => {
                        if (item.title == 'Home' || item.title == 'Sample') {
                            onRequestClose()
                            navigation.navigate(item.navigateTo);
                        } else {
                            console.log('can not navigate')
                        }
                    }}
                style={styles.listMainContainer}>
                <View
                    style={{
                        flexDirection: 'row', width: '70%',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.listingDescriptionTxt}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        );
    };
    const showVideoDataComponent = () => {
        return (
            <View pointerEvents="box-none"
                style={styles.modalMainContainer}>

                <View style={styles.modalView}>
                    <SafeAreaView>
                  
                      
                        <View style={{
                            backgroundColor:Colors.newBackground,
                            height:150,
                            width:'100%'
                        }}>
                        <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                            margin:10
                        }}
                        onPress={onRequestClose}>
                        <Image
                            resizeMode='contain'
                            source={Icons.close}
                            tintColor={Colors.white}
                            style={styles.modalCrossIcon} />
                    </TouchableOpacity>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={menuList}
                            contentContainerStyle={{}}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={(item, index) => renderItem(item, index)}
                        />
                    </SafeAreaView>
                </View>


            </View>
        );
    };
    return (
        <Modal
            propagateSwipe
            transparent={true}
            visible={visible}
            backdropOpacity={0}
            useNativeDriverForBackdrop={true}
            // animationIn={'slideInRight'}
            // animationOut={'slideOutRight'}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            useNativeDriver={true}
            // animationType="slide"
            // swipeDirection={['right']}
            avoidKeyboard={true}
            style={{ justifyContent: 'center', margin: 0 }}
            onBackButtonPress={() => onRequestClose()}
            onBackdropPress={() => onRequestClose()}>

            {showVideoDataComponent()}
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalMainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '60%',
        // alignSelf: 'flex-end',
        backgroundColor:Colors.bgColor,
        // backgroundColor: 'rgb(8 32 46)',
        height: '100%',
    },
    modalCrossIcon: {
        width: normalize(12),
        height: normalize(15),
    },
    listMainContainer: {
        height: normalize(59),
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: normalize(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


    listingDescriptionTxt: {
        fontFamily: Fonts.Inter_Medium,
        fontSize: normalize(13),
        textTransform: 'capitalize',
        color: Colors.white,
    },
})
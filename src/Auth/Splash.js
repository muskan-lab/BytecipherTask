import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native'
import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Font, Colors, mobileH, mobileW, localimag, firebaseprovider } from '../Provider/utilslib/Utils';


export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
           
        }

       
    }


     
      
    //----------for auth end ----------------------//
    

    async componentDidMount() {
        setTimeout(() => {
         this.props.navigation.navigate('Login')
        }, 2000);
            }
 





    render() {
        return (
            <View style={styles.container}>
                <StatusBar
          hidden={false}
           backgroundColor={Colors.whiteColor}
          translucent={false}
          barStyle="dark-content"
          networkActivityIndicatorVisible={true}
      />
                <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={localimag.Group1313}></Image>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor
    },
    logo: {
        resizeMode: 'contain',
        width: mobileW * 50 / 100,
    },



});
import React, { Component } from 'react';
import { Text, BackHandler,ScrollView, SafeAreaView, StatusBar, Alert, View, StyleSheet, Keyboard, TouchableOpacity, Image, TextInput } from 'react-native'
import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag } from '../Provider/utilslib/Utils';
import LinearGradient from 'react-native-linear-gradient';
class Login extends Component {

    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {

        super(props)

        this.state = {
            //predefined don't change
            securetext: true,
            remember_me: false,
            email: '',
            password: '',
            //your variable start here


        }
        this._didFocusSubscription = props.navigation.addListener('focus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
        );
    }
    componentDidMount() {
   
        this._willBlurSubscription = this.props.navigation.addListener('blur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
        );
    }
    
    //    for backhandler
    handleBackPress = () => {
        Alert.alert(
            Lang_chg.go_back_txt[config.language],
            Lang_chg.do_you_want_exit_txt[config.language], [{
                text: Lang_chg.no_txt[config.language],
                onPress: () => consolepro.consolelog('Cancel Pressed'),
            }, {
                text: Lang_chg.yes_txt[config.language],
                onPress: () => BackHandler.exitApp()
            }], {
            cancelable: false
        }
        ); // works best when the goBack is async
        return true;
    };
    // for password hide show
 
    //-------function for login start---
    loginBtn = async() => {
        Keyboard.dismiss()
       
           
            let { email, password } = this.state;
           


            //======================================email============================
            if (email.length <= 0) {
             
                msgProvider.toast(msgText.emptyEmail[config.language], 'center')
                return false
            }
            var reg = config.emailvalidation;
            if (reg.test(email) !== true) {
                msgProvider.toast(msgText.validEmail[config.language], 'center')
                return false
            }
            //=====================================password===================
            if (password.length <= 0) {
                msgProvider.toast(msgText.emptyPassword[config.language], 'center')
                return false
            }
            if (password.length <= 5) {
                msgProvider.toast(msgText.passwordMinLength[config.language], 'center')
                return false
            }
            let url = config.baseURL + "login";
            // var data = new FormData();
            // data.append('email', email)
            // data.append('password', password)
          

         
            let data=JSON.stringify({
                email:email,
                password: password,
                
              })
              apifuntion.postApi(url, data, 1).then((obj) => {
                if (obj.message == "success") {
                    var user_arr = obj.data;
                
              
                  
                    localStorage.setItemObject('user_arr', user_arr);
                    this.props.navigation.navigate('Home');

                    
                }
                else {
                  
                    setTimeout(() => {
                        msgProvider.alert(msgTitle.information[config.language], obj.message, false);
                        return false;
                    }, 300);

                }
            }).catch((error) => {
                consolepro.consolelog("-------- error ------- " + error);

            });
        
    }



    //-------function for login end---


    render() {
        return (
<View style={{flex:1}}>
            <SafeAreaView style={{flex:0}}/>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="dark-content"
                    networkActivityIndicatorVisible={true}
                />
                <LinearGradient
                 start={{x: 0.50, y: 0.50}} end={{x: 0.5, y: 1.0}}
                 locations={[0,0.1,0.6]}
                 colors={['#9F69D4', '#AC72C8', '#C685B0']}
                 style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: mobileW, }} keyboardShouldPersistTaps='handled'>
                <View style={{width:mobileW*90/100, alignSelf:'center',}}>
                    <View style={{width:mobileW, alignSelf:'center', alignItems:'center',marginTop:mobileW*12/100 }}>
                        <Image style={{width:mobileW*50/100, height:mobileW*40/100,resizeMode:'contain'}}  source={require('../Icons/LOGO.png')}></Image>
                    </View>
                {/* //============Welcome & signin Txt==========// */}
                 
                    <Text style={{color:Colors.whiteColor, fontFamily:Font.FontSemiBold, fontSize:mobileW*5.7/100}}>Sign In
                    </Text>
                    <Text style={{color:Colors.whiteColor, fontFamily:Font.FontRegular, fontSize:mobileW*4/100}}>with your phone number
                    </Text>
                 
                  {/* //============ End Welcome & signin Txt==========// */}

                        <View style={{ width: mobileW * 90 / 100, alignItems: 'center', alignSelf: 'center',marginTop:mobileH*3/100 }}>
                                        {/* //============ Enter Email Txt==========// */}

                        <View style={{width:mobileW*90/100, justifyContent:'center', alignSelf:'center',backgroundColor:'#D8C0E6',borderRadius:mobileW*2/100,
                        shadowColor: '#000000',
                                   elevation:4,
                                   shadowOffset: {
                                    width: 0,
                                    height: 3
                                    },
                                    shadowRadius: 5,
                                    shadowOpacity: 1.0 }}>
                                     <TextInput style={{
                                    fontFamily: Font.FontRegular, width: mobileW * 82 / 100, fontSize: mobileW * 3.9 / 100, color: Colors.black_color,
                                    marginLeft: mobileW * 2 / 100
                                }}
                                    placeholderTextColor={'#7F69D4'}
                                    placeholder={'Email-id'}
                                    keyboardType='email-address'
                                    returnKeyLabel='done'
                                    returnKeyType='done'
                                    ref={(input) => { this.mobilefield = input; }}
                                    onSubmitEditing={() => { Keyboard.dismiss() }}
                                    onFocus={() => { this.setState({ errorno: 0, activeinput: 1 }) }}
                                    onChangeText={(txt) => { this.setState({ email: txt }) }}
                                 
                                    maxLength={100}

                                />
                                </View>
                               
                        <View style={{marginTop:mobileW*3/100,width:mobileW*90/100, justifyContent:'center', alignSelf:'center',backgroundColor:'#D8C0E6',borderRadius:mobileW*2/100,shadowColor: '#000000',
                                   elevation:4,
                                   shadowOffset: {
                                    width: 0,
                                    height: 3
                                    },
                                    shadowRadius: 5,
                                    shadowOpacity: 1.0 }}>
                                     <TextInput style={{
                                    fontFamily: Font.FontRegular, width: mobileW * 82 / 100, fontSize: mobileW * 3.9 / 100, color: Colors.black_color,
                                    marginLeft: mobileW * 2/ 100
                                }}
                                    placeholderTextColor={'#7F69D4'}
                                    placeholder={'Password'}
                                    returnKeyLabel='done'
                                    returnKeyType='done'
                                    ref={(input) => { this.mobilefield = input; }}
                                    onSubmitEditing={() => { Keyboard.dismiss() }}
                                    onFocus={() => { this.setState({ errorno: 0, activeinput: 1 }) }}
                                    onChangeText={(txt) => { this.setState({password: txt }) }}
                                 
                                    maxLength={100}

                                />
                                </View>
                          
                           
                                <TouchableOpacity
                                    onPress={() => this.loginBtn()}
                                    activeOpacity={0.7} style={{
                                        backgroundColor: Colors.whiteColor,
                                         paddingVertical:mobileW*3/100,
                                         width: mobileW * 90 / 100,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        borderRadius:mobileW*2/100,
                                        marginTop: mobileW * 10 / 100,
                                        elevation:4,
                                        shadowOffset: {
                                        width: 0,
                                        height: 3
                                        },
                                        shadowRadius: 5,
                                        shadowOpacity: 1.0 
                                    }}>
                                    <Text style={{ color:'#7F69D4', fontFamily: Font.FontBold, fontSize: mobileW * 5 / 100 }}>Login</Text>
                                </TouchableOpacity>
                            

</View>
                       

                    </View>
                    {/* ==========Dont'n have an account Text========= */}
                    <View style={{ alignItems: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: mobileH * 30 / 100, marginBottom: mobileH * 4 / 100 }} >
                    <Text style={{ color: Colors.whiteColor, fontFamily: Font.FontRegular, fontSize: mobileW * 4 / 100 }}>Have not any account?
                    </Text>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Signup')}
                            activeOpacity={0.7} style={{
                                marginLeft: mobileW * 1 / 100
                            }}>
                            <Text style={{ color: Colors.whiteColor, fontFamily: Font.FontSemiBold, fontSize: mobileW * 4 / 100 }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
    
                </ScrollView>
                </LinearGradient>
                </View>
         


        )
    }
} export default Login

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor


    },
    view1:
    {
        backgroundColor: Colors.theme,
        height: mobileH * 8 / 100,

        flexDirection: 'row',
        width: mobileW * 88 / 100,
        alignSelf: 'center',
        alignItems: 'center',

    },



})


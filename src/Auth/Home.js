import React, { Component } from 'react';
import { Text, BackHandler, SafeAreaView, StatusBar, KeyboardAvoidingView, Alert, View, StyleSheet, Keyboard, Dimensions, ImageBackground, TouchableOpacity, Image, Modal, FlatList, ScrollView, RadioButton, Button, TextInput, RefreshControl } from 'react-native'
import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag } from '../Provider/utilslib/Utils';
import LinearGradient from 'react-native-linear-gradient';
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user_id: 0,
            profile_pic: '',
          //  notification_arr: 'NAA',
           // notification_arr1: 'BA',
            refresh: false,
            loaddata: true,
            offset: 0,
            user_arr_get:'NA',
        
        }
    }

    componentDidMount() {
        // if (config.app_status == 1) {
           this.getNotification(0)
        // }else{
        //     this.setState({notification_arr: 'NA'})
        // }
    }

    //-------------------function for get notification-------------------//

    getNotification = async () => {
        let user_details = await localStorage.getItemObject('user_arr');
        let header="Bearer "+user_details.Token
        console.log("hcgdvhfvffgbfb",header)
        let url = 'http://restapi.adequateshop.com/api/users?page=1';
         
          consolepro.consolelog('url',url)
          apifuntion.getApi(url,1,header).then((obj) => {
            console.log('obj',obj)
            this.setState({user_arr_get:obj.data})
     
   
    }).catch((error)=>{
    console.log("-------- error ------- " + error);
    })
    
    }
 

    render() {


        return (

            <View style={{ flex: 1, backgroundColor: Colors.white_color }}>
            <SafeAreaView style={{ backgroundColor: Colors.theme_color, flex: 0 }} />
   
                <View style={{ width: mobileW,flexDirection:'row',alignItems:'center',paddingVertical:mobileW*4/100,justifyContent:'center', backgroundColor: Colors.whiteColor, alignItems: 'center',  shadowOffset: { width: 0, },
                            shadowColor: '#000',
                            shadowOpacity: 0.5,
                            elevation: 4 }}>
                                <View style={{width:'15%'}}></View>
                                <Text style={{width:'60%',textAlign:'center',color:'#000',fontFamily:Font.FontSemiBold,fontSize:mobileW*5/100}}>HireTheART</Text>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Adduser')}} style={{width:'15%',alignItems:'flex-end'}}>
                                    <Image source={require('../Icons/add12.png')} style={{height:mobileW*6/100,width:mobileW*7/100,resizeMode:'contain'}}></Image>

                                </TouchableOpacity>
                        
                </View>
                
                     
                      
                     
                            <FlatList
                                data={this.state.user_arr_get}
                                contentContainerStyle={{paddingBottom:mobileW*3/100}}
                                horizontal={false}
                                renderItem={({ item, index }) =>
                                  <View style={{marginTop:mobileW*4/100,borderRadius:mobileW*2/100,width:mobileW*90/100,backgroundColor:'#E5E5E5',alignSelf:'center'}}>
                                   <ImageBackground imageStyle={{borderTopRightRadius:mobileW*2/100,borderTopLeftRadius:mobileW*2/100}} style={{width:'100%',height:mobileW*50/100}} source={{uri:item.profilepicture}}></ImageBackground>
                                 <View style={{width:'95%',alignItems:'center',alignSelf:'center',paddingVertical:mobileW*4/100}}>
                                   <Text style={{fontFamily:Font.FontSemiBold,color:'#000',fontSize:mobileW*5/100}}>{item.name}</Text>
                                   <Text style={{fontFamily:Font.FontRegular,color:'#979798',fontSize:mobileW*3.5/100,marginTop:mobileW*3/100}}>{item.email}</Text>
                                   <Text style={{fontFamily:Font.FontRegular,color:'#979798',fontSize:mobileW*3.5/100,marginTop:mobileW*1/100}}>{item.location}</Text>
                                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Details',{id:item.id})}} style={{marginTop:mobileW*3/100}}>
                                   <LinearGradient colors={['#8069D4', '#9D74C5', '#C283B2']} style={{width:mobileW*32/100,paddingVertical:mobileW*2/100,borderRadius:mobileW*2/100}}>
  <Text style={{textAlign:'center',color:'#fff',fontFamily:Font.FontRegular,fontSize:mobileW*3/100}}>
    View Profile
  </Text>
</LinearGradient>
</TouchableOpacity>
                               
                                </View>
                                  </View>
                                }
                            />

                        </View>
                        
                          


        )
    }
} export default Home

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.border_color
    },


})


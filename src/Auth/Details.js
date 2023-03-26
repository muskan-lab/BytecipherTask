import React, { Component } from 'react';
import { Text, BackHandler, SafeAreaView, StatusBar, KeyboardAvoidingView, Alert, View, StyleSheet, Keyboard, Dimensions, ImageBackground, TouchableOpacity, Image, Modal, FlatList, ScrollView, RadioButton, Button, TextInput } from 'react-native'
import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag } from '../Provider/utilslib/Utils';


class Details extends Component {

  constructor(props) {

    super(props)

    this.state = {
      message: '',
      imagearr:'',
      image_gte:'NA',
      user_id: '',
      id:this.props.route.params.id
    }


  }
  componentDidMount() {
   this.getDetails()
   this.getDetailsImages()
  }
 
  getDetails = async () => {
    let user_details = await localStorage.getItemObject('user_arr');
    let header="Bearer "+user_details.Token
   
    let url = 'http://restapi.adequateshop.com/api/users/'+this.state.id;
     
      consolepro.consolelog('url',url)
      apifuntion.getApi(url,1,header).then((obj) => {
        console.log('obj',obj)
        this.setState({profilepicture:obj.profilepicture,name:obj.name,email:obj.email,location:obj.location
        })
 

}).catch((error)=>{
console.log("-------- error ------- " + error);
})

}
getDetailsImages = async () => {
  let user_details = await localStorage.getItemObject('user_arr');
  let header="Bearer "+user_details.Token
 
  let url = "https://jsonplaceholder.typicode.com/photos";
   
    consolepro.consolelog('url',url)
    apifuntion.getApi(url,1,header).then((obj) => {
    console.log('obj',obj)
    this.setState({imagearr:obj})
     


}).catch((error)=>{
console.log("-------- error ------- " + error);
})

}

  render() {


    return (
<View>
      <SafeAreaView style={styles.container}/>
        <StatusBar
          hidden={false}
           backgroundColor={Colors.whiteColor}
          translucent={false}
          barStyle="dark-content"
          networkActivityIndicatorVisible={true}
        />
        <View style={{ width: mobileW, backgroundColor: Colors.whiteColor, alignItems: 'center',   shadowOffset: { width: 0, },
                            shadowColor: '#000',
                            shadowOpacity: 0.5,
                            elevation: 4 }}>
          <View style={{ backgroundColor: Colors.whiteColor, height: mobileH * 9.5 / 100, flexDirection: 'row', alignItems: 'center', width: mobileW * 92 / 100, justifyContent: 'space-between',  }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.goBack()}
              style={{ width: mobileW * 15/ 100,  alignItems: 'center', justifyContent: 'center', borderRadius: mobileW * 4.5 / 100 }}
            >
              <Image resizeMode='contain' style={{ width: mobileW * 6 / 100, height: mobileW * 6 / 100, }}
                source={localimag.back2}></Image>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', alignSelf: 'center', }}><Text style={{ fontSize: mobileW * 5.3 / 100, fontFamily: Font.FontSemiBold, color: Colors.black_color }}>Profile Details</Text></View>
            <TouchableOpacity
              style={{ width: mobileW * 7 / 100, height: mobileW * 9 / 100, alignItems: 'center', justifyContent: 'center', borderRadius: mobileW * 4.5 / 100 }}
            >
            </TouchableOpacity>
          </View>
        </View>
     



                  <View style={{width:mobileW*95/100,alignSelf:'center'}}>
                  <ImageBackground imageStyle={{borderTopRightRadius:mobileW*2/100,borderTopLeftRadius:mobileW*2/100}} style={{width:'100%',height:mobileW*50/100,marginTop:mobileW*3/100}} source={{uri:this.state.profilepicture}}></ImageBackground>
                  <View style={{width:'98%',alignItems:'center',alignSelf:'center',paddingVertical:mobileW*4/100,backgroundColor:'#fff',marginTop:mobileW*3/100,borderRadius:mobileW*2/100, shadowColor: '#000000',
                                   elevation:4,
                                   shadowOffset: {
                                    width: 0,
                                    height: 3
                                    },
                                    shadowRadius: 5,
                                    shadowOpacity: 1.0}}>
                                   <Text style={{fontFamily:Font.FontSemiBold,color:'#000',fontSize:mobileW*5/100}}>{this.state.name}</Text>
                                   <Text style={{fontFamily:Font.FontRegular,color:'#979798',fontSize:mobileW*3.5/100,marginTop:mobileW*3/100}}>{this.state.email}</Text>
                                   <Text style={{fontFamily:Font.FontRegular,color:'#979798',fontSize:mobileW*3.5/100,marginTop:mobileW*1/100}}>{this.state.location}</Text>
                                 
                                 </View>

                                 <Text style={{fontFamily:Font.FontBold,color:'#979798',fontSize:mobileW*4/100,width:'90%',alignSelf:'center',marginTop:mobileW*5/100}}>Gallery</Text>
                                 <View style={{width:mobileW*95/100,alignSelf:'center',alignItems:'center'}}>
                                 <FlatList
                                data={this.state.imagearr}
                                numColumns={3}
 
                                 renderItem={({ item, index }) => {
                                  console.log("request_status",item)
                                  if(this.state.imagearr!='NA'){
                                    return (

                                  <View style={{marginTop:mobileW*4/100}}>
                                    <View style={{width:mobileW*30/100,alignItems:'center'}}>
                                   <Image  style={{width:mobileW*24/100,height:mobileW*24/100,borderRadius:mobileW*3/100}} source={{uri:item.thumbnailUrl}}></Image>
                                 </View>
                                  </View>
                                    );
                                  }
                                }}
                                 />
                                 </View>
                                 </View>
                                 </View>
 )
  }
} export default Details

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.border_color
  },
  viewouter:{
    width:mobileW*92/100, alignSelf: 'center', marginTop: mobileH * 3 / 100, backgroundColor:Colors.whiteColor, paddingVertical:mobileH*1.5/100, paddingHorizontal:mobileW*3/100, borderRadius:mobileW*1.5/100,
   },
   viewtext:{
    width:mobileW*92/100, alignSelf: 'center', marginTop: mobileH * 1.5 / 100, backgroundColor:Colors.whiteColor, paddingVertical:mobileH*2/100, paddingHorizontal:mobileW*3/100, borderRadius:mobileW*1.5/100,
   },
   text:{
    color:Colors.black_color, fontFamily:Font.FontSemiBoldItalic, fontSize:mobileW*4/100
   },
   viewinner:{
    alignSelf:'center', flexDirection:'row', width:mobileW*92/100, paddingHorizontal:mobileW*3/100, alignItems:'center'
   }, 
  text:{
    color:Colors.black_color, fontFamily:Font.FontSemiBoldItalic, fontSize:mobileW*4/100
   },
   textinput:{
    fontFamily: Font.FontRegular, width: mobileW * 79 / 100, fontSize: mobileW * 4 / 100, backgroundColor: Colors.whiteColor,color:Colors.greyColor, 
   },
   text1:{
    fontFamily: Font.FontRegular, marginTop:mobileH*1.5/100,marginBottom:mobileH*1/100,  width: mobileW * 79 / 100, fontSize: mobileW * 4 / 100, backgroundColor: Colors.whiteColor,color:Colors.greyColor, 
   },
   image:{
    width:mobileW*5/100, height:mobileW*5/100
   }
})


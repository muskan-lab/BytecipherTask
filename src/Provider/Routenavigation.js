import React, { Component } from 'react'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

// dont change auth page start---
import Splash from '../Auth/Splash'
import Login from '../Auth/login';


// import CreatePassword from '../Auth/CreatePassword'
import Signup from '../Auth/Signup';
import Home from '../Auth/Home';
import Adduser from '../Auth/Adduser';
import Details from '../Auth/Details';

// import Notification from '../Auth/Notification';


// //-------for chat section start ------------
// import Chat from '../ChatProvider/Chat'
// import Inbox from '../ChatProvider/Inbox'
// import ViewImage from '../ChatProvider/ViewImage'
// import ChatReport from '../ChatProvider/ChatReport'

//------- for booking chat 
// import ChatBooking from '../ChatProvider/ChatBooking'
// import InboxBooking from '../ChatProvider/InboxBooking'
//-------for chat section end ------------


// // import Editprofile from '../Auth/Editprofile';

// import Home from '../Home';
// // new screen for this app
// import PersonalDetails from '../PersonalDetails';
// import Congratulation from '../Congratulation';
// import Following from '../Following';
// import Messaging from '../Messaging';
// import ChatDemo from '../ChatDemo';
// import Details from '../Details';
// import Demands from '../Demands';
// import Workhand from '../Workhand';
// import Profile from '../Profile';
// import Verifyme from '../Verifyme';
// import Followers from '../Followers';
// import JobsRequestApplied from '../JobsRequestApplied';
// import DetailsPending from '../DetailsPending';
// import DetailsAccepted from '../DetailsAccepted';
// import DetailsDemand from '../DetailsDemand';
// import Posts from '../Posts';
// import DetailsPainter from '../DetailsPainter';
// import CreateDemandJob from '../CreateDemandJob';
// import DetailsWorkhand from '../DetailsWorkhand';
// import DetailsWorkhand1 from '../DetailsWorkhand1';
// import CreatePost from '../CreatePost';
// import Profile1 from '../Profile1';
// import Mine from '../Mine';
// import Mine1 from '../Mine1';
// import EditProfile from '../Auth/Editprofile';
// import BusinessInformation from '../BussinessInformation';
// import ViewProposals from '../ViewProposals';
// import DemandRequestApplied from '../DemandRequestApplied';
// import Workhand1 from '../Workhand1';
// import Filter from '../Filter';
// import DemandDetailsAcceptReject from '../DemandDetailsAcceptReject';
// import DemandDetailsPending from '../DemandDetailsPending';
// import CreateDemand from '../CreateDemand';
// import ContactDetails from '../ContactDetails';
// import CreateWorkhand from '../CreateWorkhand';
// import SelectAlbum from '../SelectAlbum';
// import CreateAlbum from '../CreateAlbum';
// import WorkhandPurchasers from '../WorkhandPurchasers';
// import WorkhandAccept from '../WorkhandAccept';
// import WorkhandPaid from '../WorkhandPaid';
// import WorkhandTab0 from '../WorkhandTab0';
// import WorkhandPaynow from '../WorkhandPaynow';
// import SuccessPayment from '../SuccessPayment';
// import WorkhandPaidBack from '../WorkhandPaidBack';
// import WorkhandTab0Back from '../WorkhandTab0Back';
// import EditAlbum from '../EditAlbum';
// import EditPost from '../EditPost';
// import PostsProfile from '../PostsProfile';
// import WorkhandProfile from '../WorkhandProfile';
// import DemandsProfile from '../DemandsProfile';
// import DemandsDetailsAccepted from '../DemandsDetailsAccepted';
// dont change auth page end---
const Stack = createStackNavigator();


const Stacknav = (navigation) => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Adduser" component={Adduser} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
     
   
    
    </Stack.Navigator>
  );
}
export default Stacknav
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, AppConsumer } from './src/Provider/context/AppProvider';
import Stacknav from './src/Provider/Routenavigation';

global.MapAddress='NA';
class App extends Component{


  render()
  {
  return (
  <NavigationContainer>
      <AppProvider {...this.props}>
         <AppConsumer>{funcs => {
           global.props = { ...funcs }
           return <Stacknav {...funcs} />
         }}
       </AppConsumer>
     </AppProvider>
  </NavigationContainer>

  );
}
}

export default App;
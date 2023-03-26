import NetInfo from '@react-native-community/netinfo';

class ApiContainer {

  getApi = async (url,status,headers_get) => {
    console.log('headers_get',headers_get)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected == true) {
          if(status!=1)
          {
            global.props.showLoader();
          }
         // global.props.showLoader();
          fetch(url, {
            method: 'GET',
            headers: {
              Accept: "application/json",
             "Content-Type": "application/json",
              "Authorization":headers_get
             },
           }).then((response) => response.json())
            .then((obj) => {
              global.props.hideLoader();
              resolve(obj);
            })
            .catch((error) => {
              global.props.hideLoader();
              reject(error);
            });
        }else {
          global.props.hideLoader();
          reject('noNetwork');
        }
      })
    })
  }
  postApi = async (url,data,status) => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected == true) {
          if(status!=1)
          {
            global.props.showLoader();
          }
          // global.props.showLoader();
          fetch(url, {
            method: 'POST',
            headers: {
              Accept: "application/json",
             "Content-Type": "application/json",
            
             },
             body:data
           }).then((response) => response.json())
            .then((obj) => {
              global.props.hideLoader();
              resolve(obj);
            })
            .catch((error) => {
              global.props.hideLoader();
              reject(error);
            });
        }else {
          global.props.hideLoader();
          reject('noNetwork');
        }
      })
    })
  }
}
//--------------------------- Config Provider End -----------------------
export const apifuntion = new ApiContainer();

import { config } from '../configProvider';
import {Dimensions} from 'react-native';
import { localStorage }  from '../localStorageProvider';
import {Lang_chg}  from '../Language_provider';
import {consolepro} from '../Messageconsolevalidationprovider/Consoleprovider'
import { msgProvider, msgTitle, msgText } from '../Messageconsolevalidationprovider/messageProvider';
import { validation} from '../Messageconsolevalidationprovider/Validation_provider';
import Cameragallery from '../Mediaprovider/Cameragallery';
// import  {mediaprovider} from '../Mediaprovider/Mediaprovider'
import {apifuntion} from '../Apicallingprovider/apiProvider';
import {Colors,Font} from '../Colorsfont';
import {localimag} from '../Localimage'

const mobileH = Math.round(Dimensions.get('window').height);
const mobileW = Math.round(Dimensions.get('window').width);

export {config,localimag,apifuntion,Colors,Font,validation,mobileH,mobileW,Cameragallery,localStorage,Lang_chg,consolepro,msgProvider,msgTitle,msgText}


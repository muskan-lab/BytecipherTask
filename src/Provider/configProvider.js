import { Platform } from "react-native";
import base64 from 'react-native-base64'

global.player_id_me1 = '123456';
//--------------------------- Config Provider Start -----------------------
class configProvider {
	baseURL = 'http://restapi.adequateshop.com/api/authaccount/';
	
	login_type = 'app';
	
	mapkey = '';
	maplanguage = 'en';
	language = 0;
	player_id = '123456';
	player_id_me = '123456';
	device_type = Platform.OS;
	loading_type = false;
	latitude = 23.1815;
	longitude = 79.9864;
	country_code = '+1';
	demoemail='demo@mailinator.com'
	password='123456'
	namevalidation = /^[^-\s][a-zA-Z0-9_\s-]+$/;
	emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	mobilevalidation = /^[0-9\_]+$/;
	amountvalidation = /^[0-9\_.]+$/;
	passwordvalidation = /^\S{3,}$/;
	messagevalidation = /^[^-\s][a-zA-Z0-9_\s- ,]+$/;
	url_validation = new RegExp("^(http|https)://", "i");
	textalign = 'right';
	app_status = 1 //---0=prototype,1=dynamic
	appname='Demo'
	headersapi = {
		'Authorization': 'Basic ' + base64.encode(base64.encode('mario') + ":" + base64.encode('carbonell')),
		Accept: 'application/json',
		'Content-Type': 'multipart/form-data',
		'Cache-Control': 'no-cache,no-store,must-revalidate',
		'Pragma': 'no-cache',
		'Expires': 0,
	}
	GetPlayeridfunctin = (player_id) => {
		player_id_me1 = player_id
	}

	


};
//--------------------------- Config Provider End -----------------------

export const config = new configProvider();






import { Alert, ToastAndroid, I18nManager, Platform } from "react-native";
import { localStorage } from './localStorageProvider';
import { AsyncStorage } from 'react-native';
import { config } from "./configProvider";
// import RNRestart from 'react-native-restart';
import { consolepro } from './Messageconsolevalidationprovider/Consoleprovider'
global.language_key = 1;
class Language_provider {

  language_get = async () => {
    var item = await localStorage.getItemObject('language');
    console.log('check launguage option', item)

    consolepro.consolelog('is rtl', I18nManager.isRTL)
    consolepro.consolelog('is rtl config', config.textalign)

    if (item != null) {
      console.log('kya bat h developer', config.language)
      config.language = item;
    }
    console.log('language_key123', config.language)
    if (item != null) {
      if (item == 0) {

        config.textalign = 'left'
        config.inverted = false
      } else {

        config.textalign = 'right'
        config.inverted = true
      }

    } else {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      config.textalign = 'left'
      config.inverted = false
      localStorage.setItemObject('language', 0)

    }
  }

  language_set = async (languagem) => {

    console.log('I18nManager.isRTL Developer', I18nManager.isRTL)
    if (languagem == 0) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      config.textalign = 'left';
      config.inverted = false
      localStorage.setItemObject('language', 0)
      localStorage.removeItem('languagecathc')
      localStorage.removeItem('languagesetenglish');
      config.language = 0
    }
    else {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
      config.textalign = 'right';
      config.inverted = true
      localStorage.setItemObject('language', 1)
      localStorage.setItemObject('languagecathc', 0)
      config.language = 1
    }

    setTimeout(() => {
      RNRestart.Restart()
    }, 500);
  }
  // Media option ///////////////////
  MediaCamera = ['Choose Camera', ''];
  Mediagallery = ['Choose Gallery', ''];
  cancelmedia = ['Cancel', ''];

  //-----------not for developer use start ------------------//
  go_back_txt = ['Go back', 'Go back']
  do_you_want_exit_txt = ['Do you want to exit app', 'Do you want to exit app']
  do_you_want_goback_txt = ['Do you want to go back', 'Do you want to go back']
  verify_txt = ['Verify', 'Verify']
  resend_txt = ['Resend', 'Resend']
  email_txt = ['Email', 'Email']
  OTP_txt = ['OTP', 'OTP']
  Logout_txt = ['Logout', 'Logout']
  are_you_logout = ['Are you sure , you want to logout?', 'Are you sure , you want to logout?']
  notification_arr = ['Notification', 'Notification']
  terms_and_condition_txt = ['Terms and Conditions', 'Terms and Conditions']
  privacy_policy_txt = ['Privacy Policy', 'Privacy Policy']
  about_us_txt = ['About Us', 'About Us']
  delete_account_txt = ['Delete Account', 'حذف الحساب']
  are_you_sure_delete_txt = ['Are you sure, you want to delete an account?', 'هل انت متأكد من حذف الحساب؟']
  content_not_found = ['Content Not Available', 'Content Not Available']
  Contactus = ['Contact Us', 'Contact Us']
  changepassword_txt = ['Change Password', 'Change Password']
  Setting = ['Setting', 'Setting']
  notification = ['notification', 'notification']
  rate_app = ['Rate App', 'Rate App']
  share_app = ['Share App', 'Share App']
  Logout = ['Logout', 'Logout']
  Show = ['Show', 'Show']
  Hide = ['Hide', 'Hide']

  //--for chat start --------

  online_txt = ['Online',]
  offline_txt = ['Offline',]
  type_something_txt = ['Type Something',]

  //-----------------------chat page-------------------------------//
  chattextinputmessage = ['Message', '']
  chataction = ['Action', 'Action', '']
  chatreport = ['Report User', '']
  chatclear = ['Clear Chat', '']
  chatcancel = ['Cancel', '']
  reportmessagepopup = ['Are your sure you want to ? report', '']
  chatclearpopup = ['Are your sure you to ? clear chat', '']
  ChooseMedia = ['Choose', ''];
  Confirm = ["Confirm", '']
  block_permission = ['Are you sure? you want to block this user', '']
  unblock_permission = ['Are you sure? you want to unblock this user', '']
  select_option_txt = ['Select Option', '']
  report_txt = ['Report', '']
  chats_txt = ['Chats', '']
  block_txt = ['Block', '']
  unblock_txt = ['Unblock', '']
  cancel_txt = ['Cancel', '']
  submit_txt = ['Submit', '']
  reason_txt = ['Reason', '']
  search_here_txt = ['Search here',]
  you_blocked_this_user = ['You Block this person']
  no_txt = ['No', 'No']
  yes_txt = ['Yes', 'Yes']
  //--for chat end --------

  //-------create password start-------------//
  create_password_txt = ['Create Password']
  //-------create password end -------------//
  //-------Delete Account start-------------//
  delete_acc_txt = ['Delete Account']
  //-------Delete Account end -------------//
  //-------FAQ's"start-------------//
  faq_txt = ["FAQ's"]
  //-------FAQ's"end -------------//

  //-----------notification start ---------//
  notifications_txt = ['Notifications']
  clear_all = ['Clear All']
  info = ['Information']
  areyousure_txt = ['Are you sure , you want to clear notifications?']
  //-----------notification end

  //----------signup----------//
  signup_txt = ['Signup']
  fullname_txt = ['Full Name']
  mobile_no_txt = ['Mobile Number']
  address_txt = ['Address']
  pincode_txt = ['Pin Code']
  cpass_txt = ['Confirm Password']
  iaccept_txt = ['I accept all']
  terms_txt = ['Terms & Conditions']
  changepassword_txt = ['Change Password']
  and_txt = ['and']
  Privacy_policy_txt = ['Privacy Policy']
  you_already_txt = ['You already have an account?']
  email_txt = ['Email']
  india_txt = ['India']
  canada_txt = ['Canada']
  enter_password = ['Password'];
  login_txt = ['Login'];
  //========use for this aap=====//
  enter_email_txt =['Enter Email']
  enter_password_txt =['Enter Password']
  show_txt=['Show']
  hide_txt=['Hide']
  forgot_password_txt=['Forgot Password?']
  singn_in_to_continue_txt =['Sign in to continue']
  welcome_txt = ['Welcome']
  enter_name_txt = ['Enter Name']
  name_txt = ['Name']
  enter_mobile_number_txt = ['Enter Mobile Number']
  state_txt = ['State']
  select_state_txt = ['Select State']
  select_city_txt = ['Select City']
  city_txt = ['City']
  are_you_merchandiser_txt = ['Are you merchandiser?']
  rememeber_me_txt = ['Remember me']
  dont_have_an_account_txt= ["Don't have an account?" ]
  create_account_txt= ["Create Account" ]
  create_your_account_txt= ["Create your account" ]
  sign_up_to_get_started_txt= ["Sign up to get started!" ]
  already_txt = ['Already have an account?']
  confirm_password_txt = ['Confirm Password']
  enter_confirm_password_txt = ['Enter Confirm Password']
  otp_verification_txt = ['OTP Verification']
  please_type_the_verification_code_txt = ['Please type the verification code sent to']
  verify_and_pay_rs_txt = ['Verify & Pay (Rs 500)']
  modify_email_txt = ['Modify Email']
  jigarpatelemail_txt = ['Jigarpatel@gmail.com']
  personaldetails_txt = ['Personal Details']
  create_demand_job_txt = ['Create Demand job']
  create_demand_txt = ['Create Demand ']
  location_txt = ['Location']
  enter_location_txt = ['Enter Location']
  education_txt = ['Education']
  enter_education_txt = ['Enter Education']
  work_type_txt = ['Work Type']
  select_work_type_txt = ['Select Work Type']
  experience1_txt = ['Experience']
  enter_experience_txt = ['Enter Experience']
  about_txt = ['About']
  enter_about_yourself_txt = ['Enter About YourSelf']
  continue_txt = ['Continue']
  congratulation_txt = ['Congratulation']
  profile_created_successfully_txt = ['Profile Created Successfully']
  done_txt = ['Done']
  settings_txt = ['Settings']
  current_password_txt = ['Current Password']
  enter_current_password_txt = ['Enter Current Password']
  new_password_txt = ['New Password']
  enter_new_password_txt = ['Enter New Password']
  confirm_new_password_txt = ['Confirm New Password']
  enter_confirm_new_password_txt = ['Enter Confirm New Password']
  message_txt = ['Message']
  enter_message_txt = ['Enter Message']
  following_txt = ['Following']
  Gobacktxt = ['Go back'];
  Doyouwanttoexitapptxt = ['Do you want to exit app'];
  NoTxt = ['No'];
  YesTxt = ['Yes'];
  OkTxt = ['Ok'];
  hello_txt = ['Hello']
  jigarpatel_txt = ['Jigar Patel']
  search_txt = ['Search']
  select_option_txt = ['Select Option', '']
  report_txt = ['Report', '']
  chats_txt = ['Chats', '']
  chat_txt = ['Chat', '']
  block_txt = ['Block', '']
  unblock_txt = ['Unblock', '']
  cancel_txt = ['Cancel', '']
  submit_txt = ['Submit', '']
  reason_txt = ['Reason', '']
  search_here_txt = ['Search here',]
  you_blocked_this_user = ['You Block this person']
  no_txt = ['No', 'No']
  yes_txt = ['Yes', 'Yes']
  messaging_txt = ['Messaging']
  messages_txt=['Messages']
  asian_paints_txt = [ 'Asian Paints']
  consumer_goods_txt = [ 'Consume Goods']
  follow_txt = [ 'Follow']
  mumbai_txt = [ 'Mumbai, Maharastra']
  followers_txt = ['Followers']
  following_txt = ['Following']
  no500_txt = [ '500']
  no120_txt = [ '120']
  posts_txt = ['Posts']
  post_txt = ['Post']
  workhand_txt = ['Workhand']
  workhands_txt = ['Workhands']
  demand_txt = ['Demand']
  overview_txt = ['Overview']
  lacation_txt = ['Location']
  contact_txt = ['Contact']
  industry_txt = ['Industry']
  company_size_txt = ['Company Size']
  mobno_txt = ['+91 89765 63728']
  no50_1000_txt = ['500-1000 employees']
  website_txt = ['website']
  url_txt = ['https://www.asianpainsts.com']
  asain_paints_house_no_txt = ['Asian Paints House, 6A Shantinagar, Santacruz, Mumbai, Maharashtra']
  details_txt = ['Details']
  detail_txt = ['Detail']
  create_post_txt = ['Create Post']
  demand_jobs_txt = ['Demand Jobs']
  upload_photos_txt = ['Uplaod Photos']
  woodart_interiors_txt = ['WoodArt Interiors']
  work_hand_jobs_txt = ['Work Hand Job']
  profile_txt = ['Profile']
  jigar_patel_txt = ['Jigar Patel']
  verify_me_txt = ['Verify me']
  verified_txt = ['Verified']
  jobs_request_applied_txt = ['Jobs Request/Applied']
  mine_txt = ['Mine']
  saved_txt = ['Saved']
  edit_profile_txt = ['Edit profile']
  bsc_txt = ['B.sc(CS)']
  years2_txt = ['2 years']
  pali_naka_bandra_txt = ['55 Pali Naka Bandra, Mumbai']
  position_txt = ['Position']
  graphic_designer_txt = ['Graphic designer']
  no390_txt = ['390']
  company_license_number_txt = ['Company License Number']
  adhaar_card_txt = ['Adhaar Card']
  enter_job_title_txt = ['Enter Job Title']
  enter_job_date_txt = ['Enter Job Date']
  job_date_txt = ['Job Date']
  select_category_txt = ['Select Category']
  select_subcategory_txt = ['Select Sub-Category']
  subcategory_txt = ['Sub-Category']
  category_txt = ['Category']
  company_name_txt = ['Company Name']
  enter_company_name_txt = ['Enter Company Name']
  company_size_txt = ['Company Size']
  enter_company_size_txt = ['Enter Company Size']
  industry_txt = ['Industry']
  select_industry_txt = ['Select Industry']
  website_txt = ['Website']
  enter_website_txt = ['Enter Website']
  enter_contact_txt = ['Enter Contact']
  overview_txt = ['Overview']
  enter_overview_txt = ['Enter Overview']
  jobs_applied_txt = ['Job Applied']
  jobs_request_txt = ['Job Request']
  request_txt = ['Request']
  pending_txt = ['Pending']
  accepted_txt = ['Accepted']
  Update_Password_txt = ['Update Password']
  Send_txt = [' Send']
  job_description_txt = ['Job Description']
  job_title_txt = ['Job Title -']
  job_title1_txt = ['Job Title']
  job_type_txt = ['Job Type -']
  experience_txt = ['Experience -']
  salary_txt = ['Salary -']
  salary1_txt = ['Salary']
  enter_salary_txt = ['Enter Salary']
  Optional_txt = ['(Optional)']
  job_location_txt = ['Job Location -']
  job_location1_txt = ['Job Location']
  uiux_designer_txt = ['UI/UX Designer Designer']
  full_time_txt = ['Full Time']
  year1_2_txt = ['1-2 Years']
  rs_LPA_txt = ['Rs 3.4 LPA - Rs-4.0 LPA']
  skills_txt = ['Skills -']
  adobe_xd_txt = ['Adobe XD, illustrator, Figma, Corel draws, etc. Basic knowledge of HTML, CSS, image processing']
  description_txt=['Description - ']
  description1_txt=['Description']
  enter_description_txt=['Enter Description']
  attachment_photos_txt=['Attachment Photos']
  understand_project_needs_txt=['Understand project needs & participating in various design projects form concept to completion']
  we_are_looking_for_uiux_txt=['We are looking for ui/ux designer who can create super awesome designs, Developing web & mobile application layout based on UI designing standards']
  painter_txt= ['Painter']
  apply_txt= ['Apply']
  applied_txt= ['Applied']
  desai_chambers_modi_txt= ['19 st FI Desai Chambers Modi Stress Fort, Mumbai, 400001, India']
  once_upon_a_time_flea_txt = ['Once Upon A Time Flea']
  rs_150_onwards_txt = ['Rs 150 Onwards']
  dec_sunday_txt = ['18 Dec, Sunday']
  pm6_11_txt = ['06:00 PM to 11:00 PM']
  shivaji_udyog_nagar_txt = ['Shivaji Udyog Nagar, Dombivli, Mumbai']
  event_txt = ['Event']
  live_band_txt = ['Live Band']
  threeory_txt = ['Threeory']
  sundowner_txt = ['SUNDOWNER']
  dj_shrii_txt = ['DJ Shrii']
  view_proposals_txt = ['View Proposals']
  change_photo_txt = ['Change Photo']
  update_txt = ['Update']
  business_information_txt = ['Business Information']
  white_force_industry_txt = ['White Force Industry']
  architect_txt = ['Architect']
  due_dates_txt = ['Due Dates']
  payment_option_txt = ['Payment Option - ']
  other_txt = ['Other']
  view_pdf_txt = ['View PDF']
  job_request_15_txt = ['Job Request (15)']
  Payment_Option_If_There_txt = ['Payment Option/If There']
  home_txt = ['Home']
  enter_reason_txt = ['Enter Reason']
  enter_your_registered_email = ['Enter your registered email']
  forgot_password_email = ['Forgot Password']
  reset_password_txt = ['Reset Password']
  create_workhand_txt = ['Create Workhand']
  title_txt = ['Title']
  attachment_pdf_txt = ['Attachment Pdf']
  filter_txt = ['Filter']
  reset_txt = ['Reset']
  date_txt = ['Date']
  contact_details_txt = ['Contact Details']
  sent_proposal_txt = ['Sent Proposal']
  asianpaintsgmail_txt = ['asianpaints@gmail.com']
  payment_txt = ['Payment']
  payment1_txt = ['Payment - ']
  enter_amount_txt = ['Enter Amount']
  select_album_txt = ['Select Album']
  create_new_album_txt = ['Create new album']
  create_album_txt = ['Create Album']
  project_valley_txt = ['Project valley']
  interier_designing_txt = ['Interier designing']
  architecture_txt = ['Architecture']
  new_project_txt = ['New Project']
  album_name_txt = ['Album Name']
  enter_album_name_txt = ['Enter Album Name']
  create_and_post_txt = ['Create & Post']
  purchasers_txt = ['Purchasers']
  purchasersno_txt = ['Purchasers (90)']
  technical_architecture_and_patterns_txt = ['Technical Architecture and Patterns']
  paynow_txt = ['Pay Now']
  success_txt =['Success!']
  payment_tsuccessful_txt =['Payment Successful']
  transaction_id_txt = ['Transcation Id : ']
  project_valley_txt = ['Project Valley']
  edit_album_txt = ['Edit Album']
  delete_album_txt = ['Delete Album']
  edit_post_txt = ['Edit Post']
  we_are_professional_modular_txt = ['We are professional modular furniture designers and manufacture']
  demands_txt=['Demands']
  edit_txt =['Edit']
  delete_txt =['Delete']
  //-----------not for developer use end ------------------//


}
export const Lang_chg = new Language_provider();
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import InSight from '../../assets/insight.png';
import Transfer from '../../assets/Transfer.png';
import TransferForDebit from '../../assets/TransferForDebit.png';
import Deactivated from '../../assets/Deactivated.png';
import {styles} from './styles';
import { useDispatch } from 'react-redux'
import {getCardInfo} from '../../models/card/actions'
import { useSelector } from 'react-redux'
const DebitCardScreen = ({navigation}) => {
  const debitCardInfo = useSelector((state)=> state.card)
  const [debitCardNum, setDebitCardNum] = useState([])
  const [showCardDetails, setShowCardDetails] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCardInfo())
  },[])

  useEffect(()=>{
    if(debitCardInfo.card_number){
      let spilttedArray = [debitCardInfo.card_number.substring(0,4), debitCardInfo.card_number.substring(4,8), debitCardInfo.card_number.substring(8,12)]
      setDebitCardNum(spilttedArray)
    }
  },[debitCardInfo])

  const listItems = [
    {
      image: InSight,
      title: 'Top-up account',
      subTitle: 'Deposit money to your account to use with card',
    },
    {
      image: Transfer,
      title: 'Weekly spending limit',
      subTitle: 'You haven’t set any spending limit on card',
      hasSwitch: true,
      switchValue: false,
    },
    {
      image: TransferForDebit,
      title: 'Freeze card',
      subTitle: 'Your debit card is currently active',
      hasSwitch: true,
      switchValue: false,
    },
    {
      image: Deactivated,
      title: 'Deactivated cards',
      subTitle: 'Your previously deactivated cards',
    },
  ];

  const showHideCardDetails = () => {
    setShowCardDetails(!showCardDetails)
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTextStyle}>Debit Card</Text>
              <Image
                source={require('../../assets/Logo.png')}
                resizeMode="contain"
                style={styles.logoStyle}
              />
            </View>
            <View>
              <Text style={styles.availableBalanceStyle}>
                Available balance
              </Text>
              <View style={styles.availableBalanceContainer}>
                <View style={styles.currencyContainer}>
                  <Text style={styles.currencyTextStyle}>S$</Text>
                </View>
                <Text style={styles.availableBalanceNumberStyle}>{debitCardInfo.available_balance}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={showHideCardDetails}>
              <View style={styles.cardContainerChild}>
                <Image
                  source={!showCardDetails ? require('../../assets/hide.png') : require('../../assets/remove_red_eye.png')}
                  resizeMode="contain"
                  style={styles.eyeIconContainer}
                />
                <Text style={styles.showCardNumberStyle}>{!showCardDetails ? `Show card number` : `Hide card number`}</Text>
              </View>
              </TouchableOpacity>
              <View style={styles.cardLogoContainer}>
                <Image
                  source={require('../../assets/Aspire_Logo.png')}
                  resizeMode="contain"
                  style={styles.cardLogoStyle}
                />
                <Text style={styles.nameTextStyle}>{debitCardInfo.name}</Text>
                <View style={styles.cardNumberContainer}>
                  {debitCardNum.map((item,index) => (
                    !showCardDetails && index !== 2 ? <View style={{marginRight: 24,flexDirection: 'row'}}>{[1,2,3,4].map((item,index)=><View key={index.toString()} style={{width: 8,height: 8,borderRadius: 4, backgroundColor: '#FFFFFF',marginHorizontal: 1}} />)}</View> : <Text style={styles.cardNumberTextStyle}>{item}</Text>
                  ))}
                </View>
                <View style={styles.validityStyle}>
                  <Text style={styles.validityTextStyle}>{`Thru: ${debitCardInfo.validity}`}</Text>
                  <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
                  <Text style={styles.cvvTextStyle}>{`CVV: `}</Text>
                  {!showCardDetails ? <Text style={{fontSize: 24,color: '#ffffff',lineHeight: 24,fontWeight: '500'}}>***</Text> : <Text style={styles.cvvTextStyle}>{debitCardInfo.cvv}</Text>}
                  </View>
                  {/* {<Text style={styles.cvvTextStyle}>{`CVV: `}{!showCardDetails ? <Text style={{fontSize: 24,color: '#ffffff',lineHeight: 24,fontWeight: '500',marginTop: 10}}>***</Text> : <Text>{debitCardInfo.cvv}</Text>}</Text>} */}
                </View>
                <Image
                  source={require('../../assets/Visa_Logo.png')}
                  resizeMode="contain"
                  style={styles.visaLogoStyle}
                />
              </View>
            </View>

            <View>
              {listItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SpendingLimit')} disabled={index!==1}>
                    <View
                      style={styles.listitemContainer}
                      key={index.toString()}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={styles.listItemImageStyle}
                      />
                      <View style={styles.listItemTextContainer}>
                        <Text style={styles.listItemTitleText}>
                          {item.title}
                        </Text>
                        <Text style={styles.listItemSubTitleText}>
                          {item.subTitle}
                        </Text>
                      </View>
                      {item.hasSwitch ? (
                        <View style={styles.switchContainer}>
                          <ToggleSwitch
                            isOn={item.switchValue}
                            onColor="#01D167"
                            offColor="#EEEEEE"
                            size="small"
                            onToggle={isOn =>
                              console.log('changed to : ', isOn)
                            }
                          />
                        </View>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DebitCardScreen;

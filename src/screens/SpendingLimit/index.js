import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import { useSelector } from 'react-redux'
import {getWeeklySpendingLimits} from '../../models/card/actions'
import { useDispatch } from 'react-redux'
const SpendingLimit = ({navigation}) => {
    const weeklySpendingLimit = useSelector((state)=> state.card.weeklySpendingLimitArray)
    const [selectedItem, setSelectedItem] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWeeklySpendingLimits())
    },[])

    const onItemPress = (item) => {
        setSelectedItem(item)
    }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/back.png')}
              resizeMode="contain"
              style={styles.headerIconStyle}
            />
          </TouchableWithoutFeedback>
          <Image
            source={require('../../assets/Logo.png')}
            resizeMode="contain"
            style={styles.headerIconStyle}
          />
        </View>
        <Text style={styles.titleTextStyle}>Spending limit</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.spendingLimitContainer}>
            <Image
              source={require('../../assets/SpendingLimit.png')}
              resizeMode="contain"
              style={styles.spendingLimitIconStyle}
            />
            <Text style={styles.spendingLimitMsgStyle}>
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View style={styles.spendingLimitAmountContainer}>
            <View style={styles.currencyBoxStyle}>
              <Text style={styles.currencyTextStyle}>S$</Text>
            </View>
            <Text style={{color:'#222222', fontSize: 24,fontWeight: 'bold'}}>{selectedItem}</Text>
          </View>
          <Text style={styles.noteTextStyle}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <View style={styles.amountListContainer}>
            {weeklySpendingLimit.map((item,index) => (
                  <View style={styles.amountListItemStyle} key={index.toString()}>
                  <TouchableOpacity onPress={()=>onItemPress(item)}>
                        <Text style={styles.amountTextStyle}>{`S$ ${item}`}</Text>
              </TouchableOpacity>
                    </View>
            ))}
          </View>
          <View style={[styles.buttonContainer,{backgroundColor: selectedItem ? '#01D167' : '#EEEEEE'}]}>
            <Text style={styles.buttonTextStyle}>Save</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimit;

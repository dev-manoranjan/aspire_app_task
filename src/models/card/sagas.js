import {takeEvery, put, takeLatest, call} from 'redux-saga/effects';
import {
    GET_CARD_INFO, GET_WEEKLY_SPENDING_INFO
} from './actions';

function* handler() {
  yield takeLatest(GET_CARD_INFO, getCardInfo);
  yield takeLatest(GET_WEEKLY_SPENDING_INFO, getWeeklyInfo);
}

function* getCardInfo(action) {
  try {
    // API call
    const cardInfo = yield fetchCardInfo();
    yield put({type: GET_CARD_INFO, payload: cardInfo});
  } catch (err) {
    // Handle error
    console.log(err)
  }
}

function* getWeeklyInfo(action) {
    try {
      // API call
      const weeklyInfo = yield fetchWeeklyInfo();
      yield put({type: GET_WEEKLY_SPENDING_INFO, payload: weeklyInfo});
    } catch (err) {
      // Handle error
      console.log(err)
    }
  }

async function fetchCardInfo() {
    try{
        const response = await fetch("https://codecompel.com/api/demo/customer_card_data.php?method=getCardDetails");
        if (response.ok) {
            return await response.json();
        }
    }catch(err){
        console.log('Err: '+JSON.stringify(err))
        return {};
    }
 }

 async function fetchWeeklyInfo() {
    try{
        const response = await fetch("https://codecompel.com/api/demo/customer_card_data.php?method=getWeeklySpendingLimit");
        if (response.ok) {
            return await response.json();
        }
    }catch(err){
        console.log('Err: '+JSON.stringify(err))
        return {};
    }
 }

export {handler};
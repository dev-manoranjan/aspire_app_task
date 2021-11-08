import {GET_CARD_INFO, GET_WEEKLY_SPENDING_INFO} from './actions';

const initialState = {
  available_balance: '',
  name: '',
  card_number: '',
  validity: '',
  cvv:'',
  weekly_spending_limit: '',
  weeklySpendingLimitArray: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_INFO: {
        if(action.payload){
            const {
              available_balance,
              name,
              card_number,
              validity,
              cvv,
              weekly_spending_limit
            } = action.payload.data;
      
            return {
                ...state,
                available_balance,
              name,
              card_number,
              validity,
              cvv,
              weekly_spending_limit
            };
        }
        return state
    }
    case GET_WEEKLY_SPENDING_INFO: {
        if(action.payload){
            const weeklySpendingLimitArray = action.payload.data;
            return {
                ...state,
                weeklySpendingLimitArray
            };
        }
        return state
    }
    default:
      return state;
  }
};

export {reducer};
const GET_CARD_INFO = 'card/GET_CARD_INFO'
const GET_WEEKLY_SPENDING_INFO = 'card/GET_WEEKLY_SPENDING_INFO'

export function getCardInfo(){
    return {
       type: GET_CARD_INFO,
    }
}

export function getWeeklySpendingLimits(){
    return {
       type: GET_WEEKLY_SPENDING_INFO,
    }
}

export {
    GET_CARD_INFO,
    GET_WEEKLY_SPENDING_INFO
  };
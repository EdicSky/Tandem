//範例
export const cartIncrement = () => {
  return {
    type: 'CART_INCREMENT',
  }
}

export const activityLike = () => {
  return {
    type: 'ACTIVITY_LIKE',
  }
}

// export const showActivity = value => ({ type: 'ACTIVITY_DATA', value: value })

// 模擬與伺服器相連
// export const activityData = value => {
// return async => {
//   // 注意資料格式要設定，伺服器才知道是json格式
//   const request = new Request(`http://localhost:6001/activity/${value}`, {
//     method: 'GET',
//     credentials: 'include',
//     headers: new Headers({
//       Accept: 'application/json',
//       'Content-Type': 'appliaction/json',
//     }),
//   })
// }

// const response = await fetch(request)
// const data = await response.json()

// 設定資料
// dispatch(showActivity(data))
// }

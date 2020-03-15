export const userLeftMessage = userData =>({
    type:'LEAVE_MESSAGE',
    data:userData
})


export const userCommentAsync = (userCommentContent, callback) => {
    return async dispatch => {
      const request = new Request(
        'http://localhost:5555/comments/',
        {
          method: 'POST',
          body:JSON.stringify(userCommentContent),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
  
      console.log(JSON.stringify(userCommentContent))
  
      const response = await fetch(request)
      const data = await response.json()
      console.log('res data', data)
      
      dispatch(userLeftMessage(data))
      callback()
      if (data.length > 0) {
        console.log('留言成功')
      }
    }
  }
  
// 會員首頁轉層
export const displayChange = displayLayer => {
  return {
    type: 'DISPLAY_CHANGE',
    layer: displayLayer,
  }
}

// 紙娃娃系統呼叫
export const dollCall = showargu => {
  return {
    type: 'CALL_DOLL',
    call: showargu,
  }
}

export const NameChange = newname => {
  return {
    type: 'NAME_CHANGE',
    name: newname,
  }
}

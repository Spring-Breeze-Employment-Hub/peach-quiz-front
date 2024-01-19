import { ChangeEvent, useState } from 'react'

/**
 *
 * @param initialValue any로 설정한 이유 : 객체 형태 혹은, string 형태가 들어올 것이다.
 * 타입의 형태가 변했을 때 유동적으로 설정하기 위함.
 * @returns inputValue, onChangeEvent
 */
export const useInput = () => {
  const [inputValue, setInputValue] = useState('')
  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setInputValue(value)
    console.log(inputValue, 'input')
  }

  return { inputValue, onChangeEvent }
}

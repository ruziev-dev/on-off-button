import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ServerAPI } from './api'


const App = () => {
  const dispatch = useDispatch()
  const [isButtonOn, isLoading] = useSelector(state => [state.isButtonOn, state.isLoading])

  const onButtonClick = async () => {
    dispatch({ type: 'CHANGE_LOADING_STATE' })
    let res = await ServerAPI.putState({ isOn: !isButtonOn })
    if (res.ok) {
      dispatch({ type: 'CHANGE_BUTTON_STATE' })
      dispatch({ type: 'CHANGE_LOADING_STATE' })
    }

  }

  useEffect(() => {
    const initialization = async () => {
      let data = await ServerAPI.getData()
      dispatch({ type: 'SET_BUTTON_STATE', isButtonOn: data.isOn })
      dispatch({ type: 'CHANGE_LOADING_STATE' })
    }
    initialization()
  }, [])

  return (
    <div className="wrapper">
      <button className="circularButton" onClick={onButtonClick}>
        {
          isLoading
            ? <Loader />
            : isButtonOn
              ? "ON"
              : "OFF"
        }
      </button>
    </div>
  );
}

const Loader = () => <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>




export default App;

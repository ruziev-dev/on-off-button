import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const buttonState = useSelector(state => state.buttonState)

  const onButtonClick = () => dispatch({ type: 'CHANGE_BUTTON_STATE' })

  return (
    <div className="wrapper">
      <button className="circularButton" onClick={onButtonClick}>
        {
          buttonState ? "ON" : "OFF"
        }
      </button>
    </div>
  );
}




export default App;

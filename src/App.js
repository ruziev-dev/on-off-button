import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const isButtonOn = useSelector(state => state.isButtonOn)

  const onButtonClick = () => dispatch({ type: 'CHANGE_BUTTON_STATE' })

  return (
    <div className="wrapper">
      <button className="circularButton" onClick={onButtonClick}>
        {
          isButtonOn ? "ON" : "OFF"
        }
      </button>
    </div>
  );
}




export default App;

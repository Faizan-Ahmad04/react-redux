import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hook';
import {increment, decrement} from './redux/slices/counter/counterSlice'

function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <span>count is {count}</span><br />
      <button onClick={()=> dispatch(increment())}>Increment</button><br/>
      <button onClick={()=> dispatch(decrement())}>Decremnt</button>
    </div>
  );
}

export default App;
"You can add your basic HTML, CSS, and JavaScript project in finance to demonstrate how these technologies can be applied to a real-world scenario. For example, you could create a simple budget tracker that allows users to input their income and expenses, and then display the total balance in a certain color if it's above or below a certain threshold. This can be a great way to showcase your skills in a practical and relevant way to the finance industry.  "
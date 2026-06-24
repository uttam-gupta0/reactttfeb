import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store'

export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney(10000))}>
        Add 1000
      </button>
      <button onClick={() => dispatch(removeMoney(1000))}>
        Remove 500
      </button>
    </div>
  )
}
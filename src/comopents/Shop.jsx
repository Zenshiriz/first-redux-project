import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'
export default function Shop() {
  const dispatch = useDispatch()
  const balence = useSelector(state => state.amount)
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>deposit or wedrow money</h2>
      {/* <Button className='mx-2' onClick={()=> dispatch(actionCreators.withdrawMoney(100))}>-</Button>
      add this to cart
      <Button className='mx-2' onClick={()=> dispatch(actionCreators.depositMoney(100))}>+</Button> */}
        <Button className='mx-2' onClick={()=>withdrawMoney(100)}>-</Button>
      update the amount {balence}
      <Button className='mx-2' onClick={()=> depositMoney(100)}>+</Button>
    </div>
  )
}

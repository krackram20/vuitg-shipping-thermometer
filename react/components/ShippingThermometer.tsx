import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Thermometer from './Thermometer'

type Props={
  goal: number
}

const ShippingThermometer = ({goal = 200000}: Props) => {

  const {orderForm:{totalizers}} = useOrderForm()
  const total:number = (totalizers[0].value) /100
  const freeShippingPercentage: number = Math.round((total/goal)*100)
  const howMuchTillGoal: number = goal - total

  console.log('totalizer', total, freeShippingPercentage);

  return (
    (goal < total)
    ?
    <div>
      <p
      style={
        {color: 'rgb(0 102 1)',
         fontWeight: 'bold'
        }
        }>
        Congratulations! you get Free Shipping!
        </p>
    </div>
    :
  <div>
    <Thermometer width={freeShippingPercentage} />
    <p>
      {`You are still $${howMuchTillGoal} short to qualify for free shipping!`}
    </p>
  </div>
  )

}

export default ShippingThermometer

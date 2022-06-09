import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Thermometer from './Thermometer'
import { useCssHandles } from 'vtex.css-handles'

type Props={
  goal: number,
  goalComplete: string
}

const ShippingThermometer = (
  {
    goal = 200000,
    goalComplete = "Congratulations! you get Free Shipping!"
  }: Props) => {

  const {orderForm:{totalizers}} = useOrderForm()
  const total:number = (totalizers[0].value) /100
  const freeShippingPercentage: number = Math.round((total/goal)*100)
  const howMuchTillGoal: number = goal - total
  const CSS_HANDLES = ['thermometer__container',
                        'free__shipping__text',
                        'not__free__text',
                        'image__container',
                         'thermomether_color']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    (goal < total)
    ?
    <div className={handles.thermometer__container}>
      <p
      className= {handles.free__shipping__text}
      style={
        {color: 'rgb(0 102 1)',
         fontWeight: 'bold'
        }
        }>
        {goalComplete}
        </p>
    </div>
    :
  <div className={handles.thermometer__container}>
    <Thermometer
       width={freeShippingPercentage}
       className = {handles.image__container}
       thermometerColor = {handles.thermomether_color}/>
    <p className={handles.not__free__text}>
      {`You are still $${howMuchTillGoal} short to qualify for free shipping!`}
    </p>
  </div>
  )

}

export default ShippingThermometer

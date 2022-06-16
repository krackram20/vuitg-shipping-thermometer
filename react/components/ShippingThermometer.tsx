import React, { useState, useEffect } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Thermometer from './Thermometer'
import { useCssHandles } from 'vtex.css-handles'




type Props={
  promotionID: string
}

const ShippingThermometer = (
  { promotionID = '568c62a5-386d-477b-9b7a-bd38b1e3b78e'}: Props) => {

  const {orderForm:{totalizers}} = useOrderForm()

  const totalizerValue = totalizers[0]?.value
  const [promotionFloor, setPromotionFloor] = useState(500000)

  const promotionUrl = `/api/rnb/pvt/calculatorconfiguration/${promotionID}`

  const getPromotionData = () => {
      fetch(promotionUrl)
      .then(response => {
        return response.json()
      })
      .then(data => setPromotionFloor(data.totalValueFloor))
      .catch(err => console.log("ERROR:", err))
  }

   useEffect(() => {
    getPromotionData()
   }, [])


  const total:number =   (totalizerValue) /100

  const freeShippingPercentage: number = Math.round((total/promotionFloor)*100)

  const howMuchTillFreeShipping: number = promotionFloor - total

  const CSS_HANDLES = ['thermometer__container',
                        'free__shipping__text',
                        'not__free__text',
                        'image__container',
                         'thermomether_color']

  const handles = useCssHandles(CSS_HANDLES)


  return (
    (promotionFloor < total)
    ?
      <div className={handles.thermometer__container}>
        <Thermometer
        width={freeShippingPercentage}
        className = {handles.image__container}
        thermometerColor = {handles.thermomether_color}/>

        <p
        className= {handles.free__shipping__text}
        style={{color: 'rgb(0 102 1)', fontWeight: 'bold'}}>
          Congratulations! you get Free Shipping!
          </p>
      </div>

    :

      <div className={handles.thermometer__container}>
        <Thermometer
          width={freeShippingPercentage}
          className = {handles.image__container}
          thermometerColor = {handles.thermomether_color}/>

        <p className={handles.not__free__text}>
          {`You are still $${howMuchTillFreeShipping} short to qualify for free shipping!`}
        </p>
      </div>
  )


}

    ShippingThermometer.schema = {
      title: "Thermometer",
      type: "object",
      properties: {
        promotionID: {
          title: "id de la promocion",
          description: "los ids se pueden obtener de: {workspace}--{vendor}.myvtex.com/api/rnb/pvt/benefits/calculatorconfiguration/",
          type: "string",
          widget: {
            "ui:widget": "textarea"
          }
        }
      }

    }

export default ShippingThermometer

import React from 'react'

type Props = {
  width: number,
  className: string,
  thermometerColor: string
}

const Thermometer = ({width, className, thermometerColor }: Props) => {
    return (
      <div

      className= {className}
      style={
        {

          display: 'flex',
          alignItems: 'center',
          backgroundColor: "white",
          border: '2px solid white',
          marginTop: '5px',
          height: '70px',
          width: '90%'
          }
          }
          >
        <div
        style={

          {
            //parte inicial del termometro (palito)
            backgroundColor: "rgb(204 209 203)",
            zIndex: 2,
            marginTop: '5px',
            height: '20px',
            borderRadius: '10px',
            width: '85%',
            border: '2px solid rgb(204 209 203)'
            }
            }>
          <div
          className={thermometerColor}
          style={
          {
            // div que llenara progresivamente el termometro hasta el inicio de la bola
            width: `${(width > 85 ? 100 : width*1.2)}%`, //condicional para llenar de manera proporcial el inicio del termometro
            backgroundColor: "#23bf0b",
            height: '100%',
            maxWidth: '100%',
            borderRadius: '10px 0px 0px 10px'
            }
            }>

          </div>
        </div>
        <div
        style={
          {
            //parte final del termometro (bola)
            position: "relative",
            right: "9px",
            backgroundColor: "rgb(204 209 203)",
            zIndex: 1,
            marginTop: '5px',
            height: '50px',
            borderRadius: '50%',
            width: '15%',
            border: '2px solid rgb(204 209 203)',
            overflow: 'hidden',
            borderBlockColor: ''


            }
            }>
          <div
          className={thermometerColor}
          style={
          {
            // div que llenara progresivamente el termometro hasta el final
            width: `${(width > 85) ? (width - 85)*(100/15) : 0}%`, //condicional para llenar de manera proporcial el final del termometro
            backgroundColor: "#23bf0b",
            height: '100%',
            maxWidth: '100%'
            }
            }>
          </div>
        </div>
      </div>
      )
}

export default Thermometer

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
          backgroundColor: "transparent",
          marginTop: '5px',
          height: '60px',
          width: '90%'
          }
          }
          >
        <div
      style={
        {
          backgroundColor: "rgb(204 209 203)",
          zIndex: 2,
          marginTop: '5px',
          height: '20px',
          borderRadius: '10px',
          width: '85%'
          }
          }>
        <div
        className={thermometerColor}
        style={
        {
          width: `${(width > 85 ? 100 : width)}%`,
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


          position: "relative",
          right: "9px",
          backgroundColor: "rgb(204 209 203)",
          zIndex: 1,
          marginTop: '5px',
          height: '50px',
          borderRadius: '50%',
          width: '15%',
          overflow: 'hidden'


          }
          }>
        <div
        className={thermometerColor}
        style={
        {
          width: `${(width > 85) ? (width - 85)*6.6 : 0}%`,
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

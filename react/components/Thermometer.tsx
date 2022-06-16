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
            // First part of the thermometer (body)
            backgroundColor: "rgb(204 209 203)",
            zIndex: 2,
            marginTop: '5px',
            height: '20px',
            borderRadius: '10px',
            width: '85%',
            borderTop: '2px solid rgb(204 209 203)',
            borderBottom: '2px solid rgb(204 209 203)',
            borderLeft: '2px solid rgb(204 209 203)'

            }
            }>
          <div
          className={thermometerColor}
          style={
          {
            // This div will progressively fill the div above acording to the minicart totalizer
            width: `${(width > 85 ? 100 : width*1.2)}%`,
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
            //End of the thermometer (head)
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
            // This div fills up the head of the thermometer
            width: `${(width > 85) ? (width - 85)*(100/15) : 0}%`,
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

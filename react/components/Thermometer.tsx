import React from 'react'

type Props = {
  width: number
}

const Thermometer = ({width }: Props) => {
    return (
      <div
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
          borderTop: '1px solid #737475',
          borderLeft: '1px solid #737475',
          borderBottom: '1px solid #737475',
          backgroundColor: "white",
          zIndex: 2,
          marginTop: '5px',
          height: '20px',
          borderRadius: '10px',
          width: '85%'
          }
          }>
        <div  style={
        {
          width: `${(width > 85 ? 100 : width)}%`,
          backgroundColor: "#27d40d",
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

          borderTop: '1px solid #737475',
          borderRight: '1px solid #737475',
          borderBottom: '1px solid #737475',
          position: "relative",
          right: "7px",
          backgroundColor: "white",
          zIndex: 1,
          marginTop: '5px',
          height: '50px',
          borderRadius: '50%',
          width: '15%',
          overflow: 'hidden'


          }
          }>
        <div  style={
        {
          width: `${(width > 85) ? (width - 85)*6.6 : 0}%`,
          backgroundColor: "#27d40d",
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

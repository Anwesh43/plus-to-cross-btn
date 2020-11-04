import React from 'react'
import {
  useStyle, 
  useAnimatedScale, 
  useDimension 
} from './hooks'

const Presentational = ({scale, w, h, onClick}) => {
    const {
        lineStyle, 
        parentStyle, 
        circleStyle
    } = useStyle(w, h, scale)
    return <div style = {parentStyle()} onClick = {onClick}>
        <div style = {circleStyle()}>
        </div>
        {[0, 1].map(i => (<div key = {`line_${i}`} style = {lineStyle(i)}/>))}
    </div>
}

const PlusToCrossBtn = ({delay, speed, onClick}) => {
    const {scale, start} = useAnimatedScale(speed, delay)
    const {w, h} = useDimension()

    return (
        <Presentational scale = {scale} w = {w} h = {h} onClick = {() => {
          start(() => {
            onClick()
          })
        }}>
        </Presentational>
    )
}

export default PlusToCrossBtn
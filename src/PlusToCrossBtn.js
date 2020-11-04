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

const PlusToCrossBtn = (props) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()

    return (
        <Presentational scale = {scale} w = {w} h = {h} onClick = {start}>
        </Presentational>
    )
}

export default PlusToCrossBtn
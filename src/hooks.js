import { useState, useEffect } from 'react'

export const useAnimatedScale = (scGap = 0.02, delayInMs = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const intervalId = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)

                    if (currScale > 1) {
                        console.log(scale, currScale)
                        setScale(0)
                        setAnimated(false)
                        clearInterval(intervalId)
                    }
                }, delayInMs)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
          setW(window.innerWidth)
          setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }

    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const x = `${w / 2}px`
    const y = `${h / 2}px`
    const size = Math.min(w, h) / 6
    const sf = Math.sin(scale * Math.PI)
    return  { 
        parentStyle() {
            const left = x 
            const top = y 
            const WebkitTransform = `rotate(${45 * sf}deg)`
            return { 
                position, 
                left, 
                top,
                WebkitTransform
            }
        },

        lineStyle(i) {
            const WebkitTransform = `rotate(${90 * i}deg)`
            const lSize = size * 0.6
            const thickness = Math.min(w, h) / 90
            const width = `${thickness}px`
            const height = `${lSize}px`
            const top = `${-lSize / 2}px`
            const left = `${-thickness / 2}px`
            const background = '#E1E1E1'
            return {
                position, 
                width, 
                height, 
                left, 
                top,
                background,
                WebkitTransform
            }
        },

        circleStyle() {
            const width = `${size}px`
            const height = `${size}px`
            const background = 'indigo'
            const borderRadius = '50%'
            const top = `${-size / 2}px`
            const left = `${-size / 2}px`
            return {
                position, 
                left, 
                top, 
                width,
                height, 
                background,
                borderRadius
            }
        }
    }
}
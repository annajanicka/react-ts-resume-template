import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Fade = require('react-reveal/Fade')

interface Props {
  time: string
  title: string
  icon: IconProp
  left?: string
  children: React.ReactNode
}

export const Timeline:React.FC<Props> = ({time, title, icon, left, children}) => {

    const IconBox = styled.div({
      background: '#fff',
      fontSize: '24px',
      color: '#ff4c60',
      position: 'absolute',
      left: left ? left : '-10px',
      top: 0,
      zIndex: 1,
      fontWeight: 900
    })

    return (
      <div className="timeline-container">
        <Fade bottom>
          <div className="content">
            <span className="time">{time}</span>
            <h3 className="title">{title}</h3>
            {children}
          </div>
        </Fade>
        <IconBox>
          <FontAwesomeIcon icon={icon} />
        </IconBox>
      </div>
    )
  }

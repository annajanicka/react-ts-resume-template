import React from 'react'
import { Container } from 'react-bootstrap'

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({id, title, children}) => (
  <section id={id}>
    <Container>
      <h2 className="section-title mb-5">{title}</h2>

      {children}
    </Container>
  </section>
)
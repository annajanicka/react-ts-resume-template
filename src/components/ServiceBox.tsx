import React, { ReactText } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  backgroundColor: string;
  image: string;
  children: React.ReactNode;
}

export const ServiceBox: React.FC<Props> = ({
  title,
  backgroundColor,
  image,
  children,
}) => {
  const bgColor = backgroundColor ? backgroundColor : "##342054";
  const Wrapper = styled.div`
    background-color: ${bgColor};
  `;
  const Img = styled.img`
    height: 50px;
  `;

  return (
    <Wrapper className="service-box rounded data-background padding-30 text-center shadow-blue mb-4">
      <Img src={image} alt={title} />
      <h3 className="mb-3 mt-0">{title}</h3>
      {children}
    </Wrapper>
  );
};

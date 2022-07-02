import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface Props {
  title: string;
  percent: number;
  backgroundColor?: string;
}

interface State {
  completed: number;
  loaded: boolean;
}

export const Skill: React.FC<Props> = ({ title, percent, backgroundColor }) => {
  const [completed, setCompleted] = useState(0);
  const [loaded, setLoaed] = useState(false);
  const onChange = (isVisible: boolean) => {
    if (isVisible && !loaded) {
      setCompleted(percent);
      setLoaed(true);
    }
  };

  const bgColor = backgroundColor ? backgroundColor : "#f1f1f1";

  return (
    <div className="skill-item mb-4">
      <VisibilitySensor onChange={onChange}>
        <div className="skill-info clearfix">
          <h4 className="float-left mb-3 mt-0">{title}</h4>
          <span className="float-right">{`${percent}%`}</span>
        </div>
      </VisibilitySensor>
      <div className="progress">
        <div
          className="progress-bar data-background"
          style={{ width: `${completed}%`, backgroundColor: `${bgColor}` }}
        />
      </div>
    </div>
  );
};

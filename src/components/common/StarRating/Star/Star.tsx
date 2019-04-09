import * as React from 'react';
import './Star.scss';

interface Props {
  selected: boolean;
  onClick: (f: any) => void;
  show: boolean;
}

const Star: React.SFC<Props> = ({
  selected = false,
  onClick = f => f,
  show,
}) => (
    <div
      className={(selected) ? "star selected" : "star"}
      onClick={(show) ? (e) => e.preventDefault : onClick}
    />
  )

export default Star;
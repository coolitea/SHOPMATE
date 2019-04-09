import * as React from 'react';
import Button from './Button';
import { attribute } from 'store/models';
import './ColorPicker.scss';

interface ColorPickerProps {
  color: attribute[];
}
interface ColorPickerState {
  activeColor: string;
}

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
  state = {
    activeColor: '',
  }
  componentDidUpdate(prev: ColorPickerProps) {
    const { color } = this.props;
    if (prev === undefined) {
      return false;
    }
  }
  onChange(color: string) {
    setTimeout(() => {
      this.setState({
        activeColor: color,
      })
    }, 1)
  }
  render() {
    const { color } = this.props;
    const { activeColor } = this.state;
    return (
      <div className="color-picker">
        { color.map((att, i) =>
          <Button
            key={i}
            color={att.attribute_value}
            activeColor={activeColor}
            onClick={this.onChange.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default ColorPicker;
import * as React from 'react';
import Button from './Button';
import './SizePicker.scss';
import { attribute } from 'store/models';

interface SizePickerProps {
  size: attribute[];
}
interface SizePickerState {
  activeSize: string;
}

class SizePicker extends React.Component<SizePickerProps, SizePickerState> {
  state = {
    activeSize: '',
  }
  componentDidUpdate(prev: SizePickerProps) {
    const { size } = this.props;
    if (prev === undefined) {
      return false;
    }
  }
  onChange(size: string) {
    setTimeout(() => {
      this.setState({
        activeSize: size,
      })
    }, 1)
  }
  render() {
    const { size } = this.props;
    const { activeSize } = this.state;
    return (
      <div className="size-picker">
        {size.map((att, i) =>
          <Button
            key={i}
            size={att.attribute_value}
            activeSize={activeSize}
            onClick={this.onChange.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default SizePicker;
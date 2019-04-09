import * as React from 'react';
import Star from './Star';

interface StarRatingProps {
  totalStar: number;
  starsSelected: number;
  show: boolean;
}

interface StarRatingState {
  starsSelected: number;
}

class StarRating extends React.Component<StarRatingProps, StarRatingState> {
  static defaultProps = {
    totalStar: 5,
    show: false,
  }
  state = {
    starsSelected: 0,
  }
  componentWillMount() {
    const { starsSelected } = this.props;
    if (starsSelected) {
      this.setState({
        starsSelected
      })
    }
  }
  componentDidUpdate(prev: StarRatingProps) {
    const { starsSelected } = this.props;
    if(prev.starsSelected !== this.props.starsSelected) {
      this.setState({
        starsSelected: starsSelected
      })
    }
  }
  change(starsSelected: number) {
    this.setState({ starsSelected })
  }
  render() {
    const { totalStar, show } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStar)].map((n, i) =>
          <Star key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
            show={show}
          />
        )}
      </div>
    )
  }
}

export default StarRating;
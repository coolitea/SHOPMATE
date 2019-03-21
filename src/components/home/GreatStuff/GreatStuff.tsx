import * as React from 'react';
import { departments, categories } from 'store/models';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './GreatStuff.scss'

interface Props extends RouteComponentProps {
  departments: departments[],
  categories: categories[],
}

const GreatStuff: React.SFC<Props> = ({ departments, categories }) => {
  return (
    <div className="greatstuff">
      <div className="greatstuff_name">
        <div>Great Stuff</div>
        <div>more than 400 000 items</div>
      </div>
      <div className="stuff">
        <div className="stuff_categories"></div>
        <div className="stuff_departments">
          <div className="regional"></div>
          <div>
            <div className="seasonal"></div>
            <div className="natual"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(GreatStuff);
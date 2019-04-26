import * as React from "react";
import { departments, categories } from "store/models";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./GreatStuff.scss";
import Button from "components/common/Button";

interface Props extends RouteComponentProps {
  departments: departments[];
  categories: categories[];
}

const GreatStuff: React.SFC<Props> = ({ departments, categories, history }) => {
  return (
    <div className="greatstuff">
      <div className="greatstuff_name">
        <div>Great Stuff</div>
        <div>more than 400 000 items</div>
      </div>
      <div className="stuff">
        <div className="stuff_categories">
          <p>CATEGORY</p>
          <ul>
            {categories &&
              categories.map((data, i) => (
                <div
                  key={i}
                  className="categories"
                  onClick={() =>
                    history.push(`product/category/${data.category_id}`)
                  }
                >
                  {data.name}
                </div>
              ))}
          </ul>
        </div>
        <div className="stuff_departments">
          <div className="regional">
            {departments &&
              departments.slice(0, 1).map((data, i) => (
                <div
                  key={i}
                  onClick={() =>
                    history.push(`product/department/${data.department_id}`)
                  }
                >
                  {data.name}
                </div>
              ))}
          </div>
          <div>
            <div className="natual">
              {departments &&
                departments.slice(1, 2).map((data, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      history.push(`product/department/${data.department_id}`)
                    }
                  >
                    {data.name}
                  </div>
                ))}
            </div>
            <div className="seasonal">
              {departments &&
                departments.slice(2).map((data, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      history.push(`product/department/${data.department_id}`)
                    }
                  >
                    {data.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(GreatStuff);

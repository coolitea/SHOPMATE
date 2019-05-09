import * as React from "react";
import cn from "classnames";
import "./Personal.scss";
import { Input, Button } from "components/common";
import { shipping } from "store/models";
interface Props {
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
  clickNext: () => void;
  shipping: shipping[];
  changeSelect: (e: { target: HTMLSelectElement }) => void;
}

const Personal: React.SFC<Props> = ({
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
  clickNext,
  shipping,
  changeSelect
}) => {
  return (
    <div className="personal_container">
      <div className="title">Deliver</div>
      <Input
        type="text"
        placeholder="mobile phone"
        className="mob_phone"
        id="mob_phone"
        changeInput={changeInput}
        valCheck={valCheck}
        num={0}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[0] })}>
        {valCheckMsg[0]}
      </p>
      <Input
        type="text"
        placeholder="address"
        className="address"
        id="address_1"
        changeInput={changeInput}
        valCheck={valCheck}
        num={1}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[1] })}>
        {valCheckMsg[1]}
      </p>
      <Input
        type="text"
        placeholder="city"
        className="city"
        id="city"
        changeInput={changeInput}
        valCheck={valCheck}
        num={2}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[2] })}>
        {valCheckMsg[2]}
      </p>
      <Input
        type="text"
        placeholder="region"
        className="region"
        id="region"
        changeInput={changeInput}
        valCheck={valCheck}
        num={3}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[3] })}>
        {valCheckMsg[3]}
      </p>
      <Input
        type="text"
        placeholder="postal code"
        className="postal_code"
        id="postal_code"
        changeInput={changeInput}
        valCheck={valCheck}
        num={4}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[4] })}>
        {valCheckMsg[4]}
      </p>
      <Input
        type="text"
        placeholder="country"
        className="country"
        id="country"
        changeInput={changeInput}
        valCheck={valCheck}
        num={5}
      />
      <p className={cn("errMsg", { msgShow: valCheckMsg[5] })}>
        {valCheckMsg[5]}
      </p>
      <div className="custom-select">
        <select onChange={changeSelect}>
          {shipping.map((data, i) => (
            <option value={data.shipping_region_id} key={i}>
              {data.shipping_region}
            </option>
          ))}
        </select>
      </div>
      <Button className="medium1" onClick={clickNext}>
        Next
      </Button>
    </div>
  );
};

export default Personal;

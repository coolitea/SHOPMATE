import * as React from "react";
import cn from "classnames";
import "./Personal.scss";
import { Input, Button } from "components/common";
import { shipping, customer } from "store/models";
interface Props {
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  valCheckMsg: string[];
  checkAll: boolean;
  clickNext: () => void;
  shipping: shipping[];
  changeSelect: (e: { target: HTMLSelectElement }) => void;
  user: customer;
}

const Personal: React.SFC<Props> = ({
  changeInput,
  valCheck,
  valCheckMsg,
  checkAll,
  clickNext,
  shipping,
  changeSelect,
  user
}) => {
  return (
    <div className="personal_container">
      <div className="title">Deliver</div>
      <Input
        type="text"
        placeholder={user && user.mob_phone ? user.mob_phone : "mob phone"}
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
        placeholder={user && user.address_1 ? user.address_1 : "address"}
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
        placeholder={user && user.city ? user.city : "city"}
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
        placeholder={user && user.region ? user.region : "region"}
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
        placeholder={user && user.postal_code ? user.postal_code : "postal code"}
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
        placeholder={user && user.country ? user.country : "country"}
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
        <select required onChange={changeSelect}>
          {shipping.map((data, i) => (
            <option value={ i === 0 ? "": data.shipping_region_id} key={i}>
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

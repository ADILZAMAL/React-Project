import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
import Avatar from "react-avatar";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/contact";
import { useDispatch } from "react-redux";
import {
  delteChecked,
  insertCheckedId,
  removeCheckedId,
} from "../store/contact";
export default function Contact({ contact, checkHeader }) {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const checkHandler = () => {
    if (check == true) {
      setCheck(false);
      dispatch(removeCheckedId({ id: contact.id }));
    } else {
      setCheck(true);
      dispatch(insertCheckedId({ id: contact.id }));
    }
  };
  return (
    <tr className="">
      <td>
        <FormCheck
          onChange={checkHandler}
          checked={check || checkHeader}
          type="checkbox"
          label=""
        />
      </td>
      <td>
        <Avatar round name={contact.name} size="40" className="mr-1 " />
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td className="table__item__btn">
        <Link to={`/contact/edit/${contact.id}`}>
          <EditIcon style={{ color: "green" }} className="mr-1" />
        </Link>
        <RemoveCircleIcon
          onClick={() => {
            dispatch(deleteContact({ id: contact.id }));
          }}
          style={{ color: "red" }}
        />
      </td>
    </tr>
  );
}

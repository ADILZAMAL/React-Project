import React from "react";
import { FormCheck } from "react-bootstrap";
import Avatar from "react-avatar";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
export default function Contact({ sl, contact }) {
  return (
    <tr className="">
      <td>
        <FormCheck type="checkbox" label="" />
      </td>
      <td>
        <Avatar round name={contact.name} size="40" className="mr-1 " />
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td className="table__item__btn">
        <EditIcon style={{ color: "green" }} className="mr-1" />
        <RemoveCircleIcon style={{ color: "red" }} />
      </td>
    </tr>
  );
}

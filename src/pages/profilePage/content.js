import React from "react";
import { Typography } from "@material-ui/core";
import { Avatar } from "lib/ui";
import { format, parseISO } from "date-fns";

const Content = ({ values }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px" }}>
          <Avatar size="large" src={values.image} />
        </div>
        <div style={{ marginRight: "50px" }}>
          <Typography style={{ color: "gray" }} variant="subtitle2">
            Name
          </Typography>
          <Typography>
            {values.firstName} {values.secondName}
          </Typography>
          <Typography
            style={{ color: "gray", marginTop: "10px" }}
            variant="subtitle2"
          >
            Birth date
          </Typography>
          <Typography>{format(parseISO(values.birthdate), "d MMM. yyyy")} </Typography>
        </div>
        <div>
          <Typography style={{ color: "gray" }} variant="subtitle2">
            Email
          </Typography>
          {values.email ? (
            <Typography>{values.email} </Typography>
          ) : (
            <Typography
              style={{ color: "gray", fontStyle: "italic", fontSize: "10px" }}
            >
              Empty
            </Typography>
          )}

          <Typography
            style={{ color: "gray", marginTop: "10px" }}
            variant="subtitle2"
          >
            Phone number
          </Typography>
          {values.phone ? (
            <Typography>{values.phone} </Typography>
          ) : (
            <Typography
              style={{ color: "gray", fontStyle: "italic", fontSize: "10px" }}
            >
              Empty
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;

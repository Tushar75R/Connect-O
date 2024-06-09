import { Typography } from '@mui/material';
import {blue} from '../../Constants/Color'
import React,{memo} from 'react'
import moment from 'moment';

const MessegeComponent = ({message, user}) => {
  const { sender, content, attachments = [], createdAt } = message;
  const timeAgo = moment(createdAt).fromNow();
  const samesender = sender?._id === user?._id
    return (
      <div
        style={{
          alignSelf: samesender ? "flex-end" : "flex-start",
          color: "black",
          width: "fit-content",
          backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
          borderRadius: "16px",
          padding : "10px",
        }}
      >
        {!samesender && (
          <Typography
            bgcolor={blue}
            color={"white"}
            border={"1px black solid"}
            width={"inherit"}
            paddingLeft={"0.2rem"}
            paddingRight={"0.3rem"}
            borderRadius={"16px"}
          >
            {sender.name}
          </Typography>
        )}
        {content && (
          <Typography padding={"0.5rem 1.5rem"}>{content}</Typography>
        )}
        <Typography
          variant="caption"
          padding={"0rem 1.5rem"}
          color={"text.secondary"}
        >
          {timeAgo}
        </Typography>
      </div>
    );
}

export default memo(MessegeComponent)
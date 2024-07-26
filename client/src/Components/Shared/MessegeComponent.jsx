import { Box, Typography } from "@mui/material";
import { blue } from "../../Constants/Color";
import React, { memo } from "react";
import moment from "moment";
import { fileFormat } from "../../Lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessegeComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const timeAgo = moment(createdAt).fromNow();
  const samesender = sender?._id === user?._id;
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: samesender ? "flex-end" : "flex-start",
        color: "black",
        width: "fit-content",
        backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
        borderRadius: "16px",
        padding: "10px",
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

      {attachments.length > 0 &&
        attachments.map((i, index) => {
          const url = i.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}
      {content && <Typography padding={"0.5rem 1.5rem"}>{content}</Typography>}
      <Typography
        variant="caption"
        padding={"0rem 1.5rem"}
        color={"text.secondary"}
      >
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessegeComponent);

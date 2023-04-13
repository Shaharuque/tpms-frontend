import React from "react";
import Contacts from "./Contacts/Contacts";

import ChatInbox from "./ChatInbox/ChatInbox";

const Chat = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex">
        <Contacts />
        <ChatInbox />
      </div>
    </div>
  );
};

export default Chat;

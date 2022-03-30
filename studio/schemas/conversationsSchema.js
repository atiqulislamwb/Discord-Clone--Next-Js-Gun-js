export const conversationsSchema = {
  name: "conversations",
  type: "document",
  title: "Conversations",
  fields: [
    {
      name: "roomName",
      title: "Room Name",
      type: "string",
    },
    {
      name: "roomId",
      title: "Room Id",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "isDm",
      title: "Is Dm",
      type: "boolean",
    },
    {
      name: "userReference",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};

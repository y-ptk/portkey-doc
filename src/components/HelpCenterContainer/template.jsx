import React from "react";

export const HelpCenterContainerTemplate = {
  name: "helpCenterContainer",
  label: "HelpCenterContainer",
  fields: [
    {
      name: "items",
      label: "HelpCenterContainer",
      type: "object",
      list: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "rich-text",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
      ],
    },
  ],
};

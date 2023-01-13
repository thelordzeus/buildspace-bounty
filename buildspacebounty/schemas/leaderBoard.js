export default {
  name: "leaderBoard",
  title: "Leader Board",
  type: "document",
  fields: [
    {
      name: "personName",
      title: "Enter person name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "totalWinnings",
      title: "Enter the total winnimgs",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "personName",
      subtitle: "totalWinnings",
    },
  },
};

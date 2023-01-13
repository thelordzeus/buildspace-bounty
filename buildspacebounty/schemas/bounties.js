export default {
  name: "bounties",
  title: "Bounties",
  type: "document",
  fields: [
    {
      name: "bountyName",
      title: "Enter Bounty Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pricePool",
      title: "Enter Bounty Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "submission",
      title: "Enter the submission Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "bountyName",
    },
  },
};

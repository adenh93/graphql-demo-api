import { Context } from "../../../utils";

const newPost = {
  subscribe: (parent, args, { prisma }: Context) => {
    return prisma.$subscribe.post({ mutation_in: ["CREATED"] });
  },
  resolve: ({ node }, args, context) => {
    return node;
  }
};

export default newPost;

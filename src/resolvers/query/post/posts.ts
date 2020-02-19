import { Context } from "../../../utils";

const posts = (parent, args, { prisma }: Context) => {
  return prisma.posts();
};

export default posts;

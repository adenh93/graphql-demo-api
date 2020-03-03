import { Context } from "../../../utils";

const posts = (parent, args, { prisma }: Context) => {
  return prisma.posts({ orderBy: "id_DESC" });
};

export default posts;

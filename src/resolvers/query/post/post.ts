import { QueryPostArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const post = (parent, { id }: QueryPostArgs, { prisma }: Context) => {
  const post = prisma.post({ id });
  if (!post) throw Error("Post could not be found.");
  return post;
};

export default post;

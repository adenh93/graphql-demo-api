import { MutationUpdatePostArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const updatePost = async (
  parent,
  { id, data }: MutationUpdatePostArgs,
  { prisma }: Context
) => {
  const post = await prisma.post({ id });
  if (!post) throw Error("Post could not be found.");
  return prisma.updatePost({ where: { id }, data });
};

export default updatePost;

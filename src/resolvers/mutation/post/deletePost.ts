import { MutationDeletePostArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const deletePost = async (
  parent,
  { id }: MutationDeletePostArgs,
  { prisma }: Context
) => {
  const post = await prisma.post({ id });
  if (!post) throw Error("Post could not be found.");
  return prisma.deletePost({ id });
};

export default deletePost;

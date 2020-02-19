import { MutationCreatePostArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const createPost = async (
  parent,
  { data }: MutationCreatePostArgs,
  { prisma }: Context
) => {
  return prisma.createPost(data);
};

export default createPost;

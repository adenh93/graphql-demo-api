import { MutationCreateUserArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const createUser = (
  parent,
  { data }: MutationCreateUserArgs,
  { prisma }: Context
) => {
  return prisma.createUser(data);
};

export default createUser;

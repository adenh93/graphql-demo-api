import { MutationDeleteUserArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const deleteUser = (
  parent,
  { id }: MutationDeleteUserArgs,
  { prisma }: Context
) => {
  return prisma.deleteUser({ id });
};

export default deleteUser;

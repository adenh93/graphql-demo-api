import { MutationUpdateUserArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const updateUser = (
  parent,
  { id, data }: MutationUpdateUserArgs,
  { prisma }: Context
) => {
  return prisma.updateUser({ where: { id }, data });
};

export default updateUser;

import { QueryUserArgs } from "../../../generated/types";
import { Context } from "../../../utils";

const user = (parent, { id }: QueryUserArgs, context: Context) => {
  return context.prisma.user({ id });
};

export default user;

import { Context } from "../../../utils";

const users = (parent, args, context: Context) => {
  return context.prisma.users();
};

export default users;

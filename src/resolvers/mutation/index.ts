import userMutation from "./user";
import postMutation from "./post";

const Mutation = {
  ...userMutation,
  ...postMutation
};

export default Mutation;

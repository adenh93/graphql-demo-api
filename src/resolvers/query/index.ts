import userQuery from "./user";
import postQuery from "./post";

const Query = {
  ...userQuery,
  ...postQuery
};

export default Query;

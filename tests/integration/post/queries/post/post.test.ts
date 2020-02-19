import client from "../../../apolloClient";
import { prisma } from "../../../../../src/generated/prisma-client";
import { existingPost } from "./data";
import { QueryPostArgs, Post } from "../../../../../src/generated/types";
import { post } from "../../operations/queries";

const query = async (variables: QueryPostArgs) =>
  await client.query({ query: post, variables });

describe("post query integration tests", () => {
  let post: Post;

  beforeEach(async () => (post = await prisma.createPost(existingPost)));
  afterEach(async () => await prisma.deleteManyPosts());

  it("should get a post by id", async () => {
    const { id } = post;
    const { data } = await query({ id });
    expect(data.post.id).toBe(id);
  });
});

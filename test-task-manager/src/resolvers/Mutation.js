const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    return prisma.mutation.createUser({ data: args.data }, info);
  },
  async deleteUser(parent, args, { prisma }, info) {
    return prisma.mutation.deleteUser(args.query, info);
  },
  async updateUser(parent, args, { prisma }, info) {
    return prisma.mutation.updateUser(args.query, info);
  },
  async createPost(parent, args, { prisma }, info) {
    return prisma.mutation.createPost(args.query, info);
  },
  async deletePost(parent, args, { prisma }, info) {
    return prisma.mutation.deletePost(args.query, info);
  },
  async updatePost(parent, args, { prisma }, info) {
    return prisma.mutation.updatePost(args.query, info);
  },
  async createComment(parent, args, { prisma }, info) {
    return prisma.mutation.createComment(args.query, info);
  },
  async deleteComment(parent, args, { prisma }, info) {
    return prisma.mutation.deleteComment(args.query, info);
  },
  async updateComment(parent, args, { prisma }, info) {
    return prisma.mutation.updateComment(args.query, info);
  },
};

export { Mutation as default };

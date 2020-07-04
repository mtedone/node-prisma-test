import bcrypt from 'bcryptjs';

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    if (args.data.password.length < 8) {
      throw new Error('Password must be at least 8 characters or more');
    }
    const password = await bcrypt.hash(args.data.password, 10);
    return prisma.mutation.createUser(
      {
        data: {
          ...args.data,
          password,
        },
      },
      info
    );
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

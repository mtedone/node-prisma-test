import { prisma } from '../generated/prisma-client';

const Query = {
  users(parent, args, { prisma }, info) {
    return prisma.query.users(args.query, info);
  },
  posts(parent, args, { prisma }, info) {
    return prisma.query.posts(args.query, info);
  },
  comments(parent, args, { prisma }, info) {
    return prisma.query.comments(args.query, info);
  },
};

export { Query as default };

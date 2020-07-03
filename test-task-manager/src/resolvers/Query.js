const Query = {
  users(parent, args, { prisma }, info) {
    return prisma.query.users(args.query, info);
  },
  posts(parent, args, { prisma }, info) {
    return prisma.query.posts(args.query, info);
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
  post() {
    return {
      id: '092',
      title: 'GraphQL 101',
      body: '',
      published: false,
    };
  },
};

export { Query as default };

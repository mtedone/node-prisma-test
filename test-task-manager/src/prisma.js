import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/schema/schema.graphql',
  endpoint: 'http://localhost:4466',
});

// prisma.query prisma.mutation prisma.subscription prisma.exists

const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({ id: authorId });
  if (!userExists) {
    throw new Error(`USer id: ${authorId} does not exist`);
  }
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    },
    '{ author { id name email posts { id title published }}}'
  );

  return post.author;
};

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({ id: postId });
  if (!postExists) {
    throw new Error(`Post id: ${postId} does not exist`);
  }
  const user = await prisma.mutation.updatePost(
    {
      data,
      where: {
        id: postId,
      },
    },
    '{ author { id } }'
  );

  return user;
};

// createPostForUser('5efb9e60e03dd80007b12e41', {
//   title: 'My second post title updated',
//   body: 'My second body updated',
//   published: true,
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, null, 2));
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

updatePostForUser('5efbad3ce03dd80007b12e48', {
  title: 'My second post title updated',
  body: 'My second body updated',
  published: true,
})
  .then((user) => {
    console.log(JSON.stringify(user, null, 2));
  })
  .catch((e) => {
    console.log(e.message);
  });

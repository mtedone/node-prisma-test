import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/schema/schema.graphql',
  endpoint: 'http://localhost:4466',
});

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.query
//   .users(null, '{ id name posts {id title} }')
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(JSON.stringify(user, null, 2));
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// prisma.query
//   .comments(null, '{ id text author {id, name, email } }')
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: '101 GraphQL',
//         body: '',
//         published: false,
//         author: {
//           connect: {
//             id: '5efb9e60e03dd80007b12e41',
//           },
//         },
//       },
//     },
//     '{ id title body published}'
//   )
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//     return prisma.query
//       .users(null, '{ id name posts {id title} }')
//       .then((data) => {
//         data.forEach((user) => {
//           console.log(JSON.stringify(user, null, 2));
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

prisma.mutation
  .updatePost(
    {
      data: {
        published: true,
        body: 'This now contains something',
      },
      where: {
        id: '5efbad3ce03dd80007b12e48',
      },
    },
    '{id title body published}'
  )
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
    return prisma.query
      .posts(null, '{ id title published }')
      .then((posts) => {
        console.log(JSON.stringify(posts, null, 2));
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });

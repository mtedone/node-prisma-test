// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  book: (where?: BookWhereInput) => Promise<boolean>;
  review: (where?: ReviewWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  book: (where: BookWhereUniqueInput) => BookNullablePromise;
  books: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Book>;
  booksConnection: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BookConnectionPromise;
  review: (where: ReviewWhereUniqueInput) => ReviewNullablePromise;
  reviews: (args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Review>;
  reviewsConnection: (args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ReviewConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (args: {
    data: BookUpdateInput;
    where: BookWhereUniqueInput;
  }) => BookPromise;
  updateManyBooks: (args: {
    data: BookUpdateManyMutationInput;
    where?: BookWhereInput;
  }) => BatchPayloadPromise;
  upsertBook: (args: {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
  }) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;
  createReview: (data: ReviewCreateInput) => ReviewPromise;
  updateReview: (args: {
    data: ReviewUpdateInput;
    where: ReviewWhereUniqueInput;
  }) => ReviewPromise;
  updateManyReviews: (args: {
    data: ReviewUpdateManyMutationInput;
    where?: ReviewWhereInput;
  }) => BatchPayloadPromise;
  upsertReview: (args: {
    where: ReviewWhereUniqueInput;
    create: ReviewCreateInput;
    update: ReviewUpdateInput;
  }) => ReviewPromise;
  deleteReview: (where: ReviewWhereUniqueInput) => ReviewPromise;
  deleteManyReviews: (where?: ReviewWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
  review: (
    where?: ReviewSubscriptionWhereInput
  ) => ReviewSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ReviewOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC"
  | "isbn_ASC"
  | "isbn_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type BookWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ReviewWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  book?: Maybe<BookWhereInput>;
  author?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
  OR?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
  NOT?: Maybe<ReviewWhereInput[] | ReviewWhereInput>;
}

export interface BookWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  isbn?: Maybe<String>;
  isbn_not?: Maybe<String>;
  isbn_in?: Maybe<String[] | String>;
  isbn_not_in?: Maybe<String[] | String>;
  isbn_lt?: Maybe<String>;
  isbn_lte?: Maybe<String>;
  isbn_gt?: Maybe<String>;
  isbn_gte?: Maybe<String>;
  isbn_contains?: Maybe<String>;
  isbn_not_contains?: Maybe<String>;
  isbn_starts_with?: Maybe<String>;
  isbn_not_starts_with?: Maybe<String>;
  isbn_ends_with?: Maybe<String>;
  isbn_not_ends_with?: Maybe<String>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<BookWhereInput[] | BookWhereInput>;
  OR?: Maybe<BookWhereInput[] | BookWhereInput>;
  NOT?: Maybe<BookWhereInput[] | BookWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  reviews_every?: Maybe<ReviewWhereInput>;
  reviews_some?: Maybe<ReviewWhereInput>;
  reviews_none?: Maybe<ReviewWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type ReviewWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  username?: Maybe<String>;
}>;

export interface BookCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  author: String;
  isbn: String;
  reviews?: Maybe<ReviewCreateManyWithoutBookInput>;
}

export interface ReviewCreateManyWithoutBookInput {
  create?: Maybe<ReviewCreateWithoutBookInput[] | ReviewCreateWithoutBookInput>;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
}

export interface ReviewCreateWithoutBookInput {
  id?: Maybe<ID_Input>;
  text: String;
  rating: Int;
  author: UserCreateOneWithoutReviewsInput;
}

export interface UserCreateOneWithoutReviewsInput {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutReviewsInput {
  id?: Maybe<ID_Input>;
  username: String;
}

export interface BookUpdateInput {
  title?: Maybe<String>;
  author?: Maybe<String>;
  isbn?: Maybe<String>;
  reviews?: Maybe<ReviewUpdateManyWithoutBookInput>;
}

export interface ReviewUpdateManyWithoutBookInput {
  create?: Maybe<ReviewCreateWithoutBookInput[] | ReviewCreateWithoutBookInput>;
  delete?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  set?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  disconnect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  update?: Maybe<
    | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    | ReviewUpdateWithWhereUniqueWithoutBookInput
  >;
  upsert?: Maybe<
    | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    | ReviewUpsertWithWhereUniqueWithoutBookInput
  >;
  deleteMany?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  updateMany?: Maybe<
    | ReviewUpdateManyWithWhereNestedInput[]
    | ReviewUpdateManyWithWhereNestedInput
  >;
}

export interface ReviewUpdateWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutBookDataInput;
}

export interface ReviewUpdateWithoutBookDataInput {
  text?: Maybe<String>;
  rating?: Maybe<Int>;
  author?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
}

export interface UserUpdateOneRequiredWithoutReviewsInput {
  create?: Maybe<UserCreateWithoutReviewsInput>;
  update?: Maybe<UserUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<UserUpsertWithoutReviewsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutReviewsDataInput {
  username?: Maybe<String>;
}

export interface UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput;
  create: UserCreateWithoutReviewsInput;
}

export interface ReviewUpsertWithWhereUniqueWithoutBookInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutBookDataInput;
  create: ReviewCreateWithoutBookInput;
}

export interface ReviewScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  OR?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  NOT?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
}

export interface ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput;
  data: ReviewUpdateManyDataInput;
}

export interface ReviewUpdateManyDataInput {
  text?: Maybe<String>;
  rating?: Maybe<Int>;
}

export interface BookUpdateManyMutationInput {
  title?: Maybe<String>;
  author?: Maybe<String>;
  isbn?: Maybe<String>;
}

export interface ReviewCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
  rating: Int;
  book: BookCreateOneWithoutReviewsInput;
  author: UserCreateOneWithoutReviewsInput;
}

export interface BookCreateOneWithoutReviewsInput {
  create?: Maybe<BookCreateWithoutReviewsInput>;
  connect?: Maybe<BookWhereUniqueInput>;
}

export interface BookCreateWithoutReviewsInput {
  id?: Maybe<ID_Input>;
  title: String;
  author: String;
  isbn: String;
}

export interface ReviewUpdateInput {
  text?: Maybe<String>;
  rating?: Maybe<Int>;
  book?: Maybe<BookUpdateOneRequiredWithoutReviewsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutReviewsInput>;
}

export interface BookUpdateOneRequiredWithoutReviewsInput {
  create?: Maybe<BookCreateWithoutReviewsInput>;
  update?: Maybe<BookUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<BookUpsertWithoutReviewsInput>;
  connect?: Maybe<BookWhereUniqueInput>;
}

export interface BookUpdateWithoutReviewsDataInput {
  title?: Maybe<String>;
  author?: Maybe<String>;
  isbn?: Maybe<String>;
}

export interface BookUpsertWithoutReviewsInput {
  update: BookUpdateWithoutReviewsDataInput;
  create: BookCreateWithoutReviewsInput;
}

export interface ReviewUpdateManyMutationInput {
  text?: Maybe<String>;
  rating?: Maybe<Int>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  username: String;
  reviews?: Maybe<ReviewCreateManyWithoutAuthorInput>;
}

export interface ReviewCreateManyWithoutAuthorInput {
  create?: Maybe<
    ReviewCreateWithoutAuthorInput[] | ReviewCreateWithoutAuthorInput
  >;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
}

export interface ReviewCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  text: String;
  rating: Int;
  book: BookCreateOneWithoutReviewsInput;
}

export interface UserUpdateInput {
  username?: Maybe<String>;
  reviews?: Maybe<ReviewUpdateManyWithoutAuthorInput>;
}

export interface ReviewUpdateManyWithoutAuthorInput {
  create?: Maybe<
    ReviewCreateWithoutAuthorInput[] | ReviewCreateWithoutAuthorInput
  >;
  delete?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  connect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  set?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  disconnect?: Maybe<ReviewWhereUniqueInput[] | ReviewWhereUniqueInput>;
  update?: Maybe<
    | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    | ReviewUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    | ReviewUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<ReviewScalarWhereInput[] | ReviewScalarWhereInput>;
  updateMany?: Maybe<
    | ReviewUpdateManyWithWhereNestedInput[]
    | ReviewUpdateManyWithWhereNestedInput
  >;
}

export interface ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateWithoutAuthorDataInput;
}

export interface ReviewUpdateWithoutAuthorDataInput {
  text?: Maybe<String>;
  rating?: Maybe<Int>;
  book?: Maybe<BookUpdateOneRequiredWithoutReviewsInput>;
}

export interface ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUpdateWithoutAuthorDataInput;
  create: ReviewCreateWithoutAuthorInput;
}

export interface UserUpdateManyMutationInput {
  username?: Maybe<String>;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<BookWhereInput>;
  AND?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  OR?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  NOT?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
}

export interface ReviewSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ReviewWhereInput>;
  AND?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
  OR?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
  NOT?: Maybe<ReviewSubscriptionWhereInput[] | ReviewSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Book {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface BookNullablePromise
  extends Promise<Book | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface Review {
  id: ID_Output;
  text: String;
  rating: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ReviewPromise extends Promise<Review>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
  book: <T = BookPromise>() => T;
  author: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ReviewSubscription
  extends Promise<AsyncIterator<Review>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  book: <T = BookSubscription>() => T;
  author: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ReviewNullablePromise
  extends Promise<Review | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
  book: <T = BookPromise>() => T;
  author: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  username: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  reviews: <T = Promise<AsyncIterator<ReviewSubscription>>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  reviews: <T = FragmentableArray<Review>>(args?: {
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BookEdge>>() => T;
  aggregate: <T = AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T = BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ReviewConnection {
  pageInfo: PageInfo;
  edges: ReviewEdge[];
}

export interface ReviewConnectionPromise
  extends Promise<ReviewConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ReviewEdge>>() => T;
  aggregate: <T = AggregateReviewPromise>() => T;
}

export interface ReviewConnectionSubscription
  extends Promise<AsyncIterator<ReviewConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ReviewEdgeSubscription>>>() => T;
  aggregate: <T = AggregateReviewSubscription>() => T;
}

export interface ReviewEdge {
  node: Review;
  cursor: String;
}

export interface ReviewEdgePromise extends Promise<ReviewEdge>, Fragmentable {
  node: <T = ReviewPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ReviewEdgeSubscription
  extends Promise<AsyncIterator<ReviewEdge>>,
    Fragmentable {
  node: <T = ReviewSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateReview {
  count: Int;
}

export interface AggregateReviewPromise
  extends Promise<AggregateReview>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateReviewSubscription
  extends Promise<AsyncIterator<AggregateReview>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface BookPreviousValues {
  id: ID_Output;
  title: String;
  author: String;
  isbn: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  isbn: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  isbn: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ReviewSubscriptionPayload {
  mutation: MutationType;
  node: Review;
  updatedFields: String[];
  previousValues: ReviewPreviousValues;
}

export interface ReviewSubscriptionPayloadPromise
  extends Promise<ReviewSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ReviewPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ReviewPreviousValuesPromise>() => T;
}

export interface ReviewSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ReviewSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ReviewSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ReviewPreviousValuesSubscription>() => T;
}

export interface ReviewPreviousValues {
  id: ID_Output;
  text: String;
  rating: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ReviewPreviousValuesPromise
  extends Promise<ReviewPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  rating: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ReviewPreviousValuesSubscription
  extends Promise<AsyncIterator<ReviewPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;

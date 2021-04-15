import { auth } from './authLib';

export const getAllPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
  );
  const { posts } = await response.json();
  return posts;
};

export const createPost = async (data) => {
  const user = auth.currentUser();

  await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token.access_token}`,
    },
    body: JSON.stringify(data),
  });
};

import { test, expect}  from '@playwright/test';

test ('GET user returns correct data', async ({ request}) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1')

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.name).toBe('Leanne Graham');


});

test ('Get user returns a list of 10 users', async ({request}) => {
  const response = await request.get ('https://jsonplaceholder.typicode.com/users')

  expect (response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBe(10);
  
} )


test('Post creates a new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'my first post',
      content: 'hello world',
      userId: 1
    }
  });

  

  const body = await response.json();
  expect(body.title).toBe('my first post');
  expect(body.id).toBeDefined();
});
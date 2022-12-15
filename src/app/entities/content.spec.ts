import { Content } from './content';

test('it should be able to create a Notification content', () => {
  const content = new Content('Você recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});

test('It should not be able to create a Notification content with less than 5 characters', () => {
  expect(() => new Content('Oi')).toThrow();
});

test('It should not be able to create a Notification content with more than 240 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});

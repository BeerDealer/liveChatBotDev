export interface IChat {
  moderator: string;
  user: string;
  messages: Array<{ sender: string; text: string; timestamp: number }>;
}

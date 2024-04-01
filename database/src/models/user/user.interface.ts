export interface IUser {
  telegramId: string;
  moderator: string;
  chat: string;
  userInfo: {
    referer: string;
    phoneNumber: string;
    language: string;
    educationLevel: string;
    isForeigner: boolean;
    region: string;
  };
}

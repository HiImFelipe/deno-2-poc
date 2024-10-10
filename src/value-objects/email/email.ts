// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class Email {
  static ERROR_MESSAGES = {
    INVALID_EMAIL: "Invalid email provided",
  };

  private static isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static parse(email: string): string {
    if (!Email.isValid(email)) {
      throw new Error(Email.ERROR_MESSAGES.INVALID_EMAIL);
    }

    return email;
  }
}

import { db } from "@/lib/db";

export const getAccountByUserId = (userId: string) => {
  try {
    const account = db.account.findFirst({
      where: {
        userId,
      },
    });

    return account;
  } catch (error) {
    return null;
  }
};

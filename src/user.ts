import { db } from "./drizzle";
import { unstableCache } from "./util";

export async function getUsers() {
  return await db.query.user.findMany({
    columns: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });
}

export const getCachedUsers = unstableCache(async () => getUsers(), undefined, {
  tags: ["user"],
});
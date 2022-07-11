import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/connect";
import { getLampByType } from "../../lib/fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.body;

  await connectDB();
  const lampArray = await getLampByType(type);

  res.send(lampArray);
}

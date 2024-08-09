import logModel from "../database/models/logs.model";

export const getLogs = async () => {
  const logs = await logModel.find({});
  return logs;
};

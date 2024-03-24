import { StageType } from "../types/data-type";
import { api } from "../utils/fetcher";

export async function getStagesList() {
  const data = await api<StageType[]>("api/education/stages/", {
    method: "get",
  });

  return data;
}

import { ADDRESS, PORT, PATH } from "./constant";
import { getURL } from "./utils";
export { REGION as region } from "./constant";

export const url = getURL(ADDRESS, PORT, PATH);

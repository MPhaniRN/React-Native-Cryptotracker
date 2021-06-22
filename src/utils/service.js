import request from "src/utils/fetch";

/**
 * @signup
 * @param networkrequest
 * @returns {Promise<unknown>}
 */
export const getmessariassets = (networkrequest) =>
  request.get("assets", networkrequest);
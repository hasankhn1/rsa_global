export const validatePayload = (payload) => {
  if (typeof payload === 'object') {
    for (const key in payload) {
      if (typeof payload[key] === 'string') {
        payload[key] = payload[key]?.trim();
      }
      if (!payload[key]) {
        delete payload[key];
      }
    }
  }
  return payload;
};

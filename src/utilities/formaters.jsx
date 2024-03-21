export const cleanImageUrl = (url) => {
    if (url.startsWith('["') && url.endsWith('"')) {
      return url.slice(2, -1);
    }
    if (url.startsWith('["') && url.endsWith('"]')) {
      return url.slice(2, -2);
    }
    return url;
  };
export function cleanImageUrl (url) {
    if (url.startsWith('["') && url.endsWith('"')) {
      return url.slice(2, -1);
    }
    if (url.startsWith('["') && url.endsWith('"]')) {
      return url.slice(2, -2);
    }
    if (url.startsWith('"') && url.endsWith('"')) {
      return url.slice(1, -1);
    }
    if (url.startsWith('"') && url.endsWith('"]')) {
      return url.slice(1, -2);
    }
    return url;
  }
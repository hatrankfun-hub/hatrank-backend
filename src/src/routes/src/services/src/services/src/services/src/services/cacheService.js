const FRESH_TTL = parseInt(process.env.CACHE_TTL_FRESH || '3600');

async function getCached(username) {
  return null;
}

async function setCached(username, data) {
  return;
}

function isFresh(lastFetchedAt) {
  return (Date.now() - new Date(lastFetchedAt).getTime()) < FRESH_TTL * 1000;
}

module.exports = { getCached, setCached, isFresh };

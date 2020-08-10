module.exports = (deadNotifs) => {
  return deadNotifs.flatMap(deadNotif => deadNotif.deadEndpoints.flatMap(getOpBodyDuplets(deadNotif.user)))
}

function getOpBodyDuplets (user) {
  return deadEndpoint => {
    const op = { update: { _id: user, _index: 'users' } }
    const body = {
      script: {
        lang: 'painless',
        source: 'def matchSub; def subs = ctx._source.subscriptions; for (sub in subs) { if (sub.endpoint == params.endpoint) { matchSub = sub; } } subs.remove(subs.indexOf(matchSub))',
        params: {
          endpoint: deadEndpoint
        }
      }
    }
    return [op, body]
  }
}

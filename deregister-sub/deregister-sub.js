module.exports.handler = async (event) => {
  const getBulkBody = require('./helpers/get-bulk-body.js')
  const deleteSub = require('./helpers/delete-sub.js')
  return await deleteSub(getBulkBody(event.detail.responsePayload.deadNotifs))
    .then(esRes => {
      console.log(JSON.stringify(esRes, null, 2))
      return esRes
    })
}

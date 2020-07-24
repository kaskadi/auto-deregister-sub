module.exports.handler = async (event) => {
  const getBulkBody = require('./helpers/get-bulk-body.js')
  const deleteSub = require('./helpers/delete-sub.js')
  return await getBulkBody(event.detail.responsePayload.deadNotifs).then(deleteSub)
}

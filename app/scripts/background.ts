import { MessagePayload } from "../../app-src/shared/types/app"

/**
 * TIPS: background script の console.log の出力先は、「バックグラウンドページ」
 */
chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.id == null) {
    throw new Error(`Unexpected tab.id is null`)
  }

  chrome.tabs.sendMessage(tab.id, {
    type: "EXEC_CONVERT_TO_DRAWIO",
  } as MessagePayload)
})

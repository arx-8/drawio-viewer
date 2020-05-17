import { MessagePayload } from "../../app-src/shared/types/app"

/**
 * contentscript のエントリーポイント
 * background からイベントを受け取って実行
 */
chrome.runtime.onMessage.addListener((message: MessagePayload) => {
  if (message.type === "EXEC_CONVERT_TO_DRAWIO") {
    execConvertToDrawio()
  }
})

const execConvertToDrawio = (): void => {
  alert("Hello execConvertToDrawio")
}

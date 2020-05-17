import ex from "../../app-src/shared/libs/drawio_v13.1.2_viewer.min.js"
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
  console.log(ex)
  alert("Hello execConvertToDrawio")
}

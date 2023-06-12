import { App } from "vue";
import SFCButton from "./JSXButton";
import JSXButton from "./JSXButton";
import SButton from '../src/button/index'
// 导出单独组件
export {  SFCButton, JSXButton,SButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  },

};
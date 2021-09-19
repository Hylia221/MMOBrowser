const { JSFrame } = require('public/jsframe.js');
const jsFrame = new JSFrame();
const frame = jsFrame.create({
    title: 'ウィンドウ',
    left: 20, top: 20, width: 320, height: 220,
    movable: true,//マウスで移動可能
    resizable: true,//マウスでリサイズ可能
    html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Contents of window</div>'
});
//ウィンドウを表示する
frame.show();
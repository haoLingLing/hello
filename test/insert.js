
var script = document.createElement('script');
script.type = 'text/javascript'; // 设置script的type
script.async = true; // 设置script的async属性
script.src = 'https://widgets.outbrain.com/outbrain.js'; // 设置script的源地址

// 将script元素插入到文档的<head>中（也可以是<body>，视情况而定）
document.head.appendChild(script);

document.addEventListener('DOMContentLoaded', function () {
  // 可选：在脚本加载完成后执行回调函数
  insetHtml();
});


const insetHtml = () => {
  let url = "https://www.outbrain.com/blog/123.html";

  // 待插入的HTML内容，确保内容以字符串形式提供
  var htmlContent = `<div 
    class="OUTBRAIN" 
    data-ob-contentUrl=${url}
    data-widget-id="AR_1" 
    data-ob-installation-key="DEMOP1MN24J3E1MGLQ92067LH"
    data-ob-test = "true"
  > 测试数据 </div>`;


  // var targetElement = document.getElementById('insertHtml');
  let targetElement = document.getElementsByTagName('body')

  // 插入HTML内容
  if (targetElement) {
    let newContent = document.createElement('div');
    newContent.innerHTML = htmlContent;
    document.body.appendChild(newContent);
  }

}
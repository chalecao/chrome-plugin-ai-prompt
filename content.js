// 创建侧边栏
var sidebar = document.createElement('div');
sidebar.className = 'sidebar';

// 创建选项卡
var tabs = ['A', 'B', 'C'];
for (var i = 0; i < tabs.length; i++) {
    var tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerText = tabs[i];
    tab.setAttribute('data-index', i);
    sidebar.appendChild(tab);

    // 点击选项卡切换container
    tab.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        setActiveTab(index);
    });
}

function createIframe(src) {
    var iframe = document.createElement('iframe');
    iframe.className = 'container-iframe';
    iframe.src = src;
    return iframe;
}

// 创建container
var containers = document.createElement('div');
containers.id = 'containers';

for (var i = 0; i < tabs.length; i++) {
    var container = document.createElement('div');
    container.className = 'container';
    if(i==0){
       var currentPage =  createIframe(location.href);
       container.append(currentPage);
    }
    containers.appendChild(container);
}

// 将侧边栏和container添加到页面中
document.body.innerHTML = '';
document.body.appendChild(sidebar);
document.body.appendChild(containers);

// 初始化选中第一个选项卡
setActiveTab(0);

// 设置选中的选项卡和对应的container
function setActiveTab(index) {
    var tabs = document.querySelectorAll('.tab');
    var containers = document.querySelectorAll('.container');

    // 取消之前选中的选项卡和container
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        containers[i].style.display = 'none';
    }

    // 设置当前选中的选项卡和对应的container
    tabs[index].classList.add('active');
    containers[index].style.display = 'block';
}
// 导航字点击后有阴影
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    // 移除其他项的active类
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.remove('active');
    });
    // 为当前点击项添加active类
    this.classList.add('active');
  });
});
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

        // 初始化
        document.addEventListener('DOMContentLoaded', function() {
            // 加载默认页面
            loadPage(window.location.hash || '#');
            
            // 监听导航点击
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('#');
                    loadPage(pageId);
                });
            });
            
            // 监听hash变化
            window.addEventListener('hashchange', () => {
                loadPage(window.location.hash);
            });
        });

        // 加载页面函数
        function loadPage(pageId) {
            pageId = pageId.replace('#', '');
            
            // 更新导航状态
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.querySelector('.nav-link').getAttribute('href') === `#${pageId}`) {
                    item.classList.add('active');
                }
            });
             // 加载内容
            const page = pages[pageId] || pages.home;
            document.getElementById('content').innerHTML = `
                <h1>${page.title}</h1>
                ${page.content}
            `;
            
            // 更新URL（不刷新）
            if (window.location.hash !== `#${pageId}`) {
                history.pushState(null, null, `#${pageId}`);
            }
        }
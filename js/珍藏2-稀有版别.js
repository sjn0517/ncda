document.addEventListener('DOMContentLoaded', function() {
    const mainImage1 = document.getElementById('mainImage1');
    const mainImage2 = document.getElementById('mainImage2');
    const hoverContent1 = document.getElementById('hoverContent1');
    const hoverContent2 = document.getElementById('hoverContent2');
    
    // 初始状态隐藏
    hoverContent1.style.opacity = '0';
    hoverContent2.style.opacity = '0';
    hoverContent1.style.transition = 'opacity 0.3s ease';
    hoverContent2.style.transition = 'opacity 0.3s ease';
    
    // 添加标志变量来跟踪是否固定显示
    let isFixed1 = false;
    let isFixed2 = false;
    
    // 主图1的鼠标事件
    mainImage1.addEventListener('mouseenter', function() {
        if (!isFixed1) {
            hoverContent1.style.opacity = '1';
        }
    });
    
    mainImage1.addEventListener('mouseleave', function() {
        if (!isFixed1) {
            hoverContent1.style.opacity = '0';
        }
    });
    
    // 主图2的鼠标事件
    mainImage2.addEventListener('mouseenter', function() {
        if (!isFixed2) {
            hoverContent2.style.opacity = '1';
        }
    });
    
    mainImage2.addEventListener('mouseleave', function() {
        if (!isFixed2) {
            hoverContent2.style.opacity = '0';
        }
    });
    
    // 主图1的点击事件 - 固定显示
    mainImage1.addEventListener('click', function() {
        isFixed1 = !isFixed1; // 切换状态
        if (isFixed1) {
            hoverContent1.style.opacity = '1';
            // 可以在这里添加固定显示的其他样式
        } else {
            hoverContent1.style.opacity = '0';
        }
    });
    
    // 主图2的点击事件 - 固定显示
    mainImage2.addEventListener('click', function() {
        isFixed2 = !isFixed2; // 切换状态
        if (isFixed2) {
            hoverContent2.style.opacity = '1';
            // 可以在这里添加固定显示的其他样式
        } else {
            hoverContent2.style.opacity = '0';
        }
    });
});

// 
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageIndex = urlParams.get('page');
    let currentPageIndex = pageIndex !== null ? parseInt(pageIndex, 10) : 0;

    const pages = [
        './珍藏2-稀有版别1.html',
        './珍藏2-稀有版别2.html',
        './珍藏2-稀有版别3.html',
        './珍藏2-稀有版别4.html'
        // 添加更多页面URL
    ];

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', function() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            window.location.href = `${pages[currentPageIndex]}?page=${currentPageIndex}`;
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            window.location.href = `${pages[currentPageIndex]}?page=${currentPageIndex}`;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const actor = document.getElementById('actor1');
    const action1 = document.querySelector('.action-1');
    const action2 = document.querySelector('.action-2');

    // 鼠标悬停时显示
    actor.addEventListener('mouseenter', function () {
        action1.style.display = 'block';
        action2.style.display = 'block';
    });

    // 鼠标移出时隐藏
    actor.addEventListener('mouseleave', function () {
        if (!actor.classList.contains('fixed')) { // 如果未被固定，则隐藏
            action1.style.display = 'none';
            action2.style.display = 'none';
        }
    });

    // 点击时固定显示
    actor.addEventListener('click', function () {
        actor.classList.toggle('fixed'); // 切换固定状态
        if (actor.classList.contains('fixed')) {
            action1.style.display = 'block';
            action2.style.display = 'block';
        } else {
            action1.style.display = 'none';
            action2.style.display = 'none';
        }
    });
});
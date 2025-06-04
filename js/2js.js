document.addEventListener('DOMContentLoaded', () => {
            const pages = document.querySelectorAll('.page');
            let currentPageIndex = 0;
            let isAnimating = false;
            
            // 初始化页面
            arrangePages();
            
            // 点击翻页
            document.querySelector('.book').addEventListener('click', (e) => {
                const bookRect = document.querySelector('.book').getBoundingClientRect();
                const clickX = e.clientX - bookRect.left;
                
                // 点击左侧25%区域 - 向后翻页（只翻转左页）
                if (clickX < bookRect.width * 0.25) {
                    flipPreviousPage();
                } 
                // 点击右侧25%区域 - 向前翻页（只翻转右页）
                else if (clickX > bookRect.width * 0.75) {
                    flipNextPage();
                }
            });
            
            // 键盘控制
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') flipPreviousPage();
                if (e.key === 'ArrowRight') flipNextPage();
            });
            
            // 向后翻页（只翻转左页）
            function flipPreviousPage() {
                if (isAnimating || currentPageIndex === 0) return;
                
                isAnimating = true;
                const leftPage = pages[(currentPageIndex - 1) * 2];
                
                leftPage.classList.add('flipping');
                
                setTimeout(() => {
                    currentPageIndex--;
                    arrangePages();
                    isAnimating = false;
                }, 800);
            }
            
            // 向前翻页（只翻转右页）
            function flipNextPage() {
                if (isAnimating || currentPageIndex * 2 + 1 >= pages.length - 1) return;
                
                isAnimating = true;
                const rightPage = pages[currentPageIndex * 2 + 1];
                
                rightPage.classList.add('flipping');
                
                setTimeout(() => {
                    currentPageIndex++;
                    arrangePages();
                    isAnimating = false;
                }, 800);
            }
            
            // 排列页面
            function arrangePages() {
                // 重置所有页面状态
                pages.forEach(page => {
                    page.classList.remove('flipping');
                });
                
                // 设置页面位置和层级
                pages.forEach((page, index) => {
                    if (index < currentPageIndex * 2) {
                        // 已翻过的左页
                        if (index % 2 === 0) {
                            page.style.transform = 'rotateY(-180deg)';
                        }
                        page.style.zIndex = pages.length - index;
                    } else if (index > currentPageIndex * 2 + 1) {
                        // 未翻到的右页
                        if (index % 2 === 1) {
                            page.style.transform = 'rotateY(0deg)';
                        }
                        page.style.zIndex = pages.length - index;
                    } else {
                        // 当前可见页
                        page.style.transform = 'rotateY(0deg)';
                        page.style.zIndex = pages.length - index;
                    }
                });
            }
        });
// 初始化液态玻璃效果
function initLiquidGlass() {
    // 检查applyLiquidGlass是否存在
    if (typeof applyLiquidGlass !== 'undefined') {
        // 应用到玻璃卡片
        const glassCards = document.querySelectorAll('.glass-card');
        glassCards.forEach(card => {
            applyLiquidGlass(card, { intensity: 'normal' });
        });
        
        // 应用到底部导航
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            applyLiquidGlass(bottomNav, { intensity: 'subtle' });
        }
    }
}

// 处理导航点击事件
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // 添加活动状态到当前项
            this.classList.add('active');
        });
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initLiquidGlass();
    initNavigation();
});
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
            applyLiquidGlass(bottomNav, { intensity: 'normal' });
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

// 加载并渲染功能卡片
function loadCards() {
    fetch('assets/data/cards.json')
        .then(response => response.json())
        .then(data => {
            renderCards(data.cards);
        })
        .catch(error => {
            console.error('加载卡片数据失败:', error);
        });
}

// 渲染卡片到页面
function renderCards(cards) {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.style.borderColor = card.color;
        
        cardElement.innerHTML = `
            <img src="${card.icon}" alt="${card.title}">
            <h4>${card.title}</h4>
            <p>${card.description}</p>
            <a href="${card.link}" class="card-link">查看</a>
        `;
        
        container.appendChild(cardElement);
        
        // 应用液态玻璃效果
        if (typeof applyLiquidGlass !== 'undefined') {
            applyLiquidGlass(cardElement, { intensity: 'normal' });
        }
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initLiquidGlass();
    initNavigation();
    loadCards();
});
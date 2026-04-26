let currentPageName = '';

const scheduleData = [
    { time: "07:00 - 07:30", event: "早餐时间" },
    { time: "07:30 - 08:00", event: "早自习" },
    { time: "08:00 - 08:45", event: "第一节课" },
    { time: "08:55 - 09:40", event: "第二节课" },
    { time: "09:40 - 10:00", event: "课间操" },
    { time: "10:00 - 10:45", event: "第三节课" },
    { time: "10:55 - 11:40", event: "第四节课" },
    { time: "11:40 - 13:30", event: "午餐 & 午休" },
    { time: "13:30 - 14:15", event: "第五节课" },
    { time: "14:25 - 15:10", event: "第六节课" },
    { time: "15:10 - 15:30", event: "眼保健操" },
    { time: "15:30 - 16:15", event: "第七节课" },
    { time: "16:25 - 17:10", event: "第八节课" },
    { time: "17:10 - 18:00", event: "课外活动" },
    { time: "18:00 - 19:00", event: "晚餐时间" },
    { time: "19:00 - 21:00", event: "晚自习" },
    { time: "21:00 - 21:30", event: "洗漱就寝" }
];

const mapData = [
    { icon: "🚽", name: "卫生间", location: "每层楼东侧和西侧" },
    { icon: "💧", name: "饮水机", location: "教学楼每层中间位置" },
    { icon: "🏥", name: "医务室", location: "行政楼一层101" },
    { icon: "🍜", name: "食堂", location: "校园东北角" },
    { icon: "📚", name: "图书馆", location: "教学楼四层" },
    { icon: "⚽", name: "操场", location: "校园西侧" }
];

const phoneData = [
    { name: "保安室", number: "010-12345678" },
    { name: "教务处", number: "010-23456789" },
    { name: "医务室", number: "010-34567890" },
    { name: "班主任办公室", number: "010-45678901" },
    { name: "食堂办公室", number: "010-56789012" },
    { name: "总务处", number: "010-67890123" }
];

const calendarData = [
    { date: "周一", title: "大扫除", desc: "各班教室及公共区域大扫除" },
    { date: "周三", title: "体育活动", desc: "全校体育活动时间" },
    { date: "周五", title: "班会课", desc: "各班召开主题班会" },
    { date: "周六", title: "校园开放日", desc: "家长参观校园" },
    { date: "下周一", title: "升旗仪式", desc: "全校师生参加" }
];

const homeworkData = {
    "1": [
        { subject: "语文", content: "完成练习册第三课", teacher: "王老师" },
        { subject: "数学", content: "习题集第15-20题", teacher: "李老师" },
        { subject: "英语", content: "背诵Unit 2单词", teacher: "张老师" }
    ],
    "2": [
        { subject: "语文", content: "作文《我的梦想》", teacher: "王老师" },
        { subject: "数学", content: "完成试卷一张", teacher: "李老师" },
        { subject: "物理", content: "实验报告", teacher: "赵老师" }
    ],
    "3": [
        { subject: "语文", content: "古诗背诵", teacher: "王老师" },
        { subject: "化学", content: "实验报告撰写", teacher: "刘老师" },
        { subject: "英语", content: "阅读理解练习", teacher: "张老师" }
    ]
};

let lostFoundList = [
    { type: "found", title: "黑色钱包", desc: "在操场捡到，内有身份证", time: "2024-04-15 14:30" },
    { type: "lost", title: "蓝色书包", desc: "丢失于食堂，内有课本", time: "2024-04-14 18:00" },
    { type: "found", title: "钥匙串", desc: "教学楼三楼男厕所", time: "2024-04-14 10:00" }
];

let suggestList = [
    { type: "canteen", content: "建议食堂增加早餐种类", time: "2024-04-14" },
    { type: "facility", content: "操场灯光太暗，晚上看不清", time: "2024-04-13" },
    { type: "hygiene", content: "希望增加卫生间清洁频率", time: "2024-04-12" }
];

const albumData = [
    { title: "运动会精彩瞬间", date: "2024-04-10" },
    { title: "春游活动照片", date: "2024-04-05" },
    { title: "班级才艺表演", date: "2024-03-28" },
    { title: "科技节作品展", date: "2024-03-20" }
];

// 社区论坛数据
const communityData = [
    { id: 1, author: "小明", avatar: "🎓", title: "求推荐校园美食", content: "各位同学，有什么好吃的食堂推荐吗？一楼还是二楼？", category: "life", likes: 23, comments: 12, time: "2小时前", liked: false, commentsList: [
        { author: "吃货小王", content: "二楼的红烧肉超好吃！", time: "1小时前" },
        { author: "食堂常客", content: "一楼的麻辣烫不错", time: "30分钟前" }
    ]},
    { id: 2, author: "小红", avatar: "📚", title: "期中考试复习技巧", content: "分享一些复习方法给大家：1.制定计划 2.抓住重点 3.多做练习。希望有帮助！", category: "study", likes: 56, comments: 28, time: "5小时前", liked: false, commentsList: [
        { author: "学霸附体", content: "很实用，感谢分享！", time: "4小时前" },
        { author: "加油考生", content: "收藏了，考试周用得上", time: "3小时前" }
    ]},
    { id: 3, author: "学霸李", avatar: "🏆", title: "数学竞赛报名", content: "有没有想参加数学竞赛的同学？一起报名吧！可以互相学习。", category: "study", likes: 18, comments: 9, time: "昨天", liked: false, commentsList: [
        { author: "数学爱好者", content: "我想参加！", time: "昨天" }
    ]},
    { id: 4, author: "体育健将", avatar: "⚽", title: "篮球赛时间", content: "下周篮球赛，欢迎大家来加油！时间：周三下午4点，地点：操场篮球场。", category: "activity", likes: 42, comments: 15, time: "2天前", liked: false, commentsList: [
        { author: "篮球迷", content: "一定去！", time: "2天前" },
        { author: "啦啦队", content: "需要啦啦队吗？", time: "2天前" }
    ]},
    { id: 5, author: "音乐王子", avatar: "🎵", title: "校园歌手大赛", content: "一年一度的校园歌手大赛开始报名了！有兴趣的同学快来参加吧！", category: "activity", likes: 67, comments: 32, time: "3天前", liked: false, commentsList: []},
    { id: 6, author: "电脑高手", avatar: "💻", title: "编程社团招新", content: "编程社团开始招新了！零基础也没关系，我们有培训。想学编程的同学快来！", category: "study", likes: 45, comments: 20, time: "3天前", liked: false, commentsList: [
        { author: "萌新一枚", content: "我也想学！", time: "3天前" }
    ]},
    { id: 7, author: "美食达人", avatar: "🍜", title: "食堂新菜品", content: "发现食堂最近上新了一款小龙虾，味道很不错，推荐大家去尝尝！", category: "life", likes: 88, comments: 42, time: "4天前", liked: false, commentsList: [
        { author: "吃货本货", content: "真的吗？晚上就去！", time: "4天前" },
        { author: "馋嘴猫", content: "多少钱一份啊？", time: "4天前" }
    ]},
    { id: 8, author: "环保小卫士", avatar: "🌱", title: "校园环保倡议", content: "大家一起来保护校园环境吧！不乱扔垃圾，节约用电用水。", category: "life", likes: 35, comments: 8, time: "5天前", liked: false, commentsList: []}
];

function initLiquidGlass() {
    if (typeof applyLiquidGlass !== 'undefined') {
        const glassCards = document.querySelectorAll('.glass-card');
        glassCards.forEach(card => {
            applyLiquidGlass(card, { intensity: 'normal' });
        });
    }
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    const backBtn = document.getElementById('backBtn');

    document.querySelectorAll('.feature-page').forEach(p => p.style.display = 'none');

    switch(page) {
        case 'home':
            if (hero) hero.style.display = 'flex';
            if (cards) cards.style.display = 'block';
            if (backBtn) backBtn.style.display = 'none';
            currentPageName = '';
            break;
        case 'search':
            if (hero) hero.style.display = 'none';
            if (cards) cards.style.display = 'none';
            if (backBtn) backBtn.style.display = 'flex';
            showSearchPage();
            break;
        case 'notice':
            if (hero) hero.style.display = 'none';
            if (cards) cards.style.display = 'none';
            if (backBtn) backBtn.style.display = 'flex';
            showNoticePage();
            break;
        case 'community':
            if (hero) hero.style.display = 'none';
            if (cards) cards.style.display = 'none';
            if (backBtn) backBtn.style.display = 'flex';
            showCommunityPageDirect();
            break;
        case 'about':
            if (hero) hero.style.display = 'none';
            if (cards) cards.style.display = 'none';
            if (backBtn) backBtn.style.display = 'flex';
            showAboutPageDirect();
            break;
    }
}

function showSearchPage() {
    let page = document.getElementById('searchPage');
    if (!page) {
        page = document.createElement('section');
        page.id = 'searchPage';
        page.className = 'feature-page';
        page.style.display = 'none';
        page.innerHTML = `
            <h3>搜索</h3>
            <div class="feature-content">
                <div style="position:relative;margin-bottom:20px;">
                    <img src="assets/icons/HarmonyOS_Icons/ic_public_search.svg" style="position:absolute;left:15px;top:50%;transform:translateY(-50%);width:20px;height:20px;filter:invert(1);opacity:0.7;">
                    <input type="text" id="searchInput" placeholder="搜索功能..." style="width:100%;padding:12px 12px 12px 45px;border-radius:25px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.15);color:white;font-size:14px;box-sizing:border-box;">
                </div>
                <div id="searchResults" style="margin-top:10px;"></div>
            </div>
        `;
        document.querySelector('.app-content').appendChild(page);
    }
    page.style.display = 'block';
    const searchInput = page.querySelector('#searchInput');
    searchInput.oninput = function() {
        const query = this.value.toLowerCase();
        const results = document.getElementById('searchResults');
        results.innerHTML = '';
        if (query.length > 0) {
            const allCards = [
                {title:'作息时间表', link:'schedule'}, {title:'校园地图', link:'map'},
                {title:'失物招领', link:'lostfound'}, {title:'匿名建议箱', link:'suggest'},
                {title:'作业汇总', link:'homework'}, {title:'班级相册', link:'album'},
                {title:'校园电话', link:'phone'}, {title:'活动日历', link:'calendar'},
                {title:'社区论坛', link:'community'}, {title:'关于我们', link:'about'}
            ];
            const filtered = allCards.filter(c => c.title.toLowerCase().includes(query));
            if (filtered.length === 0) {
                results.innerHTML = '<div style="text-align:center;color:rgba(255,255,255,0.5);padding:30px;">未找到相关功能</div>';
            } else {
                filtered.forEach(c => {
                    results.innerHTML += `<div class="search-result-item" onclick="openFeaturePage('${c.link}','${c.title}')" style="background:rgba(255,255,255,0.15);padding:15px;border-radius:12px;margin-bottom:10px;color:white;cursor:pointer;display:flex;align-items:center;gap:12px;">
                        <img src="assets/icons/HarmonyOS_Icons/ic_contacts_card_single.svg" style="width:20px;height:20px;filter:invert(1);opacity:0.8;">
                        <span>${c.title}</span>
                    </div>`;
                });
            }
        }
    };
}

function showNoticePage() {
    let page = document.getElementById('noticePage');
    if (!page) {
        page = document.createElement('section');
        page.id = 'noticePage';
        page.className = 'feature-page';
        page.style.display = 'none';
        page.innerHTML = `
            <h3>通知</h3>
            <div class="feature-content">
                <div class="notice-list" id="noticeList">
                    <div class="notice-item" style="background:rgba(255,255,255,0.15);padding:15px;border-radius:12px;margin-bottom:12px;border-left:4px solid #667eea;">
                        <div style="color:white;font-weight:500;margin-bottom:5px;display:flex;align-items:center;gap:8px;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_help.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.9;">系统通知
                        </div>
                        <div style="color:rgba(255,255,255,0.7);font-size:13px;">欢迎使用 NovaCampus Service！</div>
                        <div style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:8px;">刚刚</div>
                    </div>
                    <div class="notice-item" style="background:rgba(255,255,255,0.15);padding:15px;border-radius:12px;margin-bottom:12px;border-left:4px solid #4CAF50;">
                        <div style="color:white;font-weight:500;margin-bottom:5px;display:flex;align-items:center;gap:8px;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_clock.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.9;">活动提醒
                        </div>
                        <div style="color:rgba(255,255,255,0.7);font-size:13px;">明天下午有班会课，请同学们准时参加。</div>
                        <div style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:8px;">1小时前</div>
                    </div>
                    <div class="notice-item" style="background:rgba(255,255,255,0.15);padding:15px;border-radius:12px;margin-bottom:12px;border-left:4px solid #FF9800;">
                        <div style="color:white;font-weight:500;margin-bottom:5px;display:flex;align-items:center;gap:8px;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_file.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.9;">作业通知
                        </div>
                        <div style="color:rgba(255,255,255,0.7);font-size:13px;">本周五前提交数学作业</div>
                        <div style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:8px;">昨天</div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.app-content').appendChild(page);
    }
    page.style.display = 'block';
}

function showCommunityPageDirect() {
    const page = document.getElementById('communityPage');
    if (page) {
        page.style.display = 'block';
        currentPageName = 'community';
        initCommunity(page.querySelector('.feature-content'));
    }
}

function showAboutPageDirect() {
    const page = document.getElementById('aboutPage');
    if (page) {
        page.style.display = 'block';
        currentPageName = 'about';
        initAbout(page.querySelector('.feature-content'));
    }
}

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

function renderCards(cards) {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.innerHTML = `
            <img src="${card.icon}" alt="${card.title}">
            <h4>${card.title}</h4>
            <p>${card.description}</p>
        `;
        cardElement.addEventListener('click', () => openFeaturePage(card.link.replace('#', ''), card.title));
        container.appendChild(cardElement);
        if (typeof applyLiquidGlass !== 'undefined') {
            applyLiquidGlass(cardElement, { intensity: 'normal' });
        }
    });
}

function openFeaturePage(pageName, pageTitle) {
    currentPageName = pageName;

    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'none';
    if (cards) cards.style.display = 'none';

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'flex';

    const featurePage = document.getElementById(pageName + 'Page');
    if (featurePage) {
        featurePage.style.display = 'block';
        initFeaturePage(pageName, featurePage.querySelector('.feature-content'));
    }
}

function closeFeaturePage() {
    currentPageName = '';

    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'flex';
    if (cards) cards.style.display = 'block';

    document.querySelectorAll('.feature-page').forEach(page => {
        page.style.display = 'none';
    });

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'none';

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector('.nav-item[data-page="home"]').classList.add('active');
}

function initFeaturePage(page, container) {
    container.innerHTML = '';
    switch(page) {
        case 'schedule': initSchedule(container); break;
        case 'map': initMap(container); break;
        case 'lostfound': initLostFound(container); break;
        case 'suggest': initSuggest(container); break;
        case 'homework': initHomework(container); break;
        case 'album': initAlbum(container); break;
        case 'phone': initPhone(container); break;
        case 'calendar': initCalendar(container); break;
        case 'community': initCommunity(container); break;
        case 'about': initAbout(container); break;
    }
}

function initSchedule(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">作息时间表</h4>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <thead><tr style="background:rgba(0,0,0,0.05);"><th style="padding:10px;text-align:left;">时间段</th><th style="padding:10px;text-align:left;">内容</th></tr></thead>
            <tbody id="scheduleTableBody"></tbody>
        </table>
    `;
    const tbody = container.querySelector('#scheduleTableBody');
    scheduleData.forEach(item => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
        tr.innerHTML = `<td style="padding:10px;">${item.time}</td><td style="padding:10px;">${item.event}</td>`;
        tbody.appendChild(tr);
    });
}

function initMap(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">校园地图</h4>
        <div class="map-grid" id="mapGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;"></div>
    `;
    const grid = container.querySelector('#mapGrid');
    mapData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'map-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:15px;text-align:center;';
        div.innerHTML = `
            <div class="icon" style="font-size:28px;margin-bottom:8px;">${item.icon}</div>
            <div class="name" style="font-weight:500;margin-bottom:4px;">${item.name}</div>
            <div class="location" style="font-size:12px;opacity:0.7;">${item.location}</div>
        `;
        grid.appendChild(div);
    });
}

function initLostFound(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">失物招领</h4>
        <button class="action-btn" id="addLostFoundBtn" style="background:#007aff;color:white;border:none;padding:10px 20px;border-radius:8px;margin-bottom:15px;cursor:pointer;width:100%;">发布失物/招领</button>
        <div class="lostfound-list" id="lostfoundList"></div>
    `;
    const list = container.querySelector('#lostfoundList');
    lostFoundList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'lostfound-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:12px;margin-bottom:10px;';
        div.innerHTML = `
            <span class="type ${item.type}" style="display:inline-block;padding:3px 10px;border-radius:12px;font-size:11px;margin-bottom:8px;background:${item.type === 'lost' ? 'rgba(244,67,54,0.3)' : 'rgba(76,175,80,0.3)'};">${item.type === 'lost' ? '寻物' : '招领'}</span>
            <div class="title" style="font-weight:500;margin-bottom:4px;">${item.title}</div>
            <div class="desc" style="font-size:13px;opacity:0.8;margin-bottom:6px;">${item.desc}</div>
            <div class="time" style="font-size:11px;opacity:0.5;">${item.time}</div>
        `;
        list.appendChild(div);
    });

    container.querySelector('#addLostFoundBtn').onclick = () => showAddLostFoundModal(container);
}

function showAddLostFoundModal(container) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    modal.style.display = 'flex';
    modalBody.innerHTML = `
        <h3 style="margin-bottom:20px;text-align:center;">发布失物/招领</h3>
        <div class="modal-form" style="display:flex;flex-direction:column;gap:12px;">
            <div class="type-select" style="display:flex;gap:10px;">
                <label style="flex:1;text-align:center;padding:10px;border-radius:10px;background:rgba(0,0,0,0.05);cursor:pointer;"><input type="radio" name="lfType" value="lost" checked style="display:none;"><span>寻物</span></label>
                <label style="flex:1;text-align:center;padding:10px;border-radius:10px;background:rgba(0,0,0,0.05);cursor:pointer;"><input type="radio" name="lfType" value="found" style="display:none;"><span>招领</span></label>
            </div>
            <input type="text" id="lfTitle" placeholder="物品名称" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;color:white;">
            <textarea id="lfDesc" placeholder="详细描述" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:12px;color:white;min-height:80px;resize:vertical;"></textarea>
            <button class="action-btn" onclick="addLostFound()" style="background:#007aff;color:white;border:none;padding:12px;border-radius:8px;cursor:pointer;">发布</button>
        </div>
    `;
}

function addLostFound() {
    const type = document.querySelector('input[name="lfType"]:checked').value;
    const title = document.getElementById('lfTitle').value;
    const desc = document.getElementById('lfDesc').value;
    if (!title || !desc) return;

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    lostFoundList.unshift({ type, title, desc, time: timeStr });
    closeModal();
    const featurePage = document.getElementById(currentPageName + 'Page');
    if (featurePage) initLostFound(featurePage.querySelector('.feature-content'));
}

function initSuggest(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">匿名建议箱</h4>
        <div class="suggest-form" style="margin-bottom:20px;">
            <select id="suggestType" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.3);margin-bottom:10px;background:rgba(255,255,255,0.15);color:white;">
                <option value="canteen">食堂建议</option>
                <option value="hygiene">卫生建议</option>
                <option value="facility">设施建议</option>
                <option value="other">其他</option>
            </select>
            <textarea id="suggestContent" placeholder="请输入您的建议..." style="width:100%;min-height:80px;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.3);resize:vertical;box-sizing:border-box;background:rgba(255,255,255,0.15);color:white;"></textarea>
            <button id="submitSuggestBtn" style="width:100%;padding:12px;background:#007aff;color:white;border:none;border-radius:8px;cursor:pointer;margin-top:10px;">提交建议</button>
        </div>
        <h4 style="color:white;margin-bottom:10px;font-size:14px;">往期建议</h4>
        <div class="suggest-list" id="suggestList"></div>
    `;
    const list = container.querySelector('#suggestList');
    suggestList.forEach(item => {
        const typeMap = { canteen: '食堂', hygiene: '卫生', facility: '设施', other: '其他' };
        const div = document.createElement('div');
        div.className = 'suggest-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:12px;margin-bottom:10px;';
        div.innerHTML = `
            <span class="suggest-type-badge" style="display:inline-block;padding:3px 10px;border-radius:10px;font-size:11px;background:rgba(0,122,255,0.2);margin-right:10px;">${typeMap[item.type] || '其他'}</span>
            <div class="content" style="font-size:13px;line-height:1.5;margin:10px 0;">${item.content}</div>
            <div class="time" style="font-size:11px;opacity:0.5;">${item.time}</div>
        `;
        list.appendChild(div);
    });

    container.querySelector('#submitSuggestBtn').onclick = submitSuggest;
}

function submitSuggest() {
    const type = document.getElementById('suggestType').value;
    const content = document.getElementById('suggestContent').value;
    if (!content) return;

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

    suggestList.unshift({ type, content, time: timeStr });
    document.getElementById('suggestContent').value = '';
    const featurePage = document.getElementById(currentPageName + 'Page');
    if (featurePage) initSuggest(featurePage.querySelector('.feature-content'));
}

function initHomework(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">作业汇总</h4>
        <select id="gradeSelect" onchange="initHomeworkInWindow()" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.3);margin-bottom:15px;background:rgba(255,255,255,0.15);color:white;">
            <option value="1">一年级</option>
            <option value="2">二年级</option>
            <option value="3">三年级</option>
        </select>
        <div class="homework-list" id="homeworkList"></div>
    `;
    updateHomeworkList(container);
}

function updateHomeworkList(container) {
    const grade = container.querySelector('#gradeSelect')?.value || '1';
    const list = container.querySelector('#homeworkList');
    if (!list) return;
    const homeworks = homeworkData[grade] || [];
    list.innerHTML = '';
    homeworks.forEach(item => {
        const div = document.createElement('div');
        div.className = 'homework-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:12px;margin-bottom:10px;border-left:4px solid #007aff;';
        div.innerHTML = `
            <div class="subject" style="font-weight:500;margin-bottom:5px;">${item.subject}</div>
            <div class="content" style="font-size:13px;opacity:0.9;margin-bottom:5px;">${item.content}</div>
            <div class="teacher" style="font-size:11px;opacity:0.5;">${item.teacher}</div>
        `;
        list.appendChild(div);
    });
}

window.initHomeworkInWindow = function() {
    const featurePage = document.getElementById(currentPageName + 'Page');
    if (featurePage) updateHomeworkList(featurePage.querySelector('.feature-content'));
};

function initAlbum(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">班级相册</h4>
        <div class="album-grid" id="albumGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;"></div>
    `;
    const grid = container.querySelector('#albumGrid');
    albumData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'album-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;overflow:hidden;';
        div.innerHTML = `
            <div class="album-img" style="width:100%;height:80px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;font-size:30px;">📷</div>
            <div class="album-info" style="padding:10px;">
                <div class="album-title" style="font-size:13px;font-weight:500;margin-bottom:4px;">${item.title}</div>
                <div class="album-date" style="font-size:11px;opacity:0.5;">${item.date}</div>
            </div>
        `;
        grid.appendChild(div);
    });
}

function initPhone(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">校园电话</h4>
        <div class="phone-list" id="phoneList" style="display:flex;flex-direction:column;gap:10px;"></div>
    `;
    const list = container.querySelector('#phoneList');
    phoneData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'phone-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:15px;display:flex;justify-content:space-between;align-items:center;';
        div.innerHTML = `
            <div class="info">
                <div class="name" style="font-weight:500;margin-bottom:4px;">${item.name}</div>
                <div class="number" style="font-size:14px;opacity:0.8;">${item.number}</div>
            </div>
            <a href="tel:${item.number}" style="background:rgba(76,175,80,0.3);border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;text-decoration:none;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_phone.svg" alt="拨打" style="width:18px;height:18px;filter:invert(1);">
            </a>
        `;
        list.appendChild(div);
    });
}

function initCalendar(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">活动日历</h4>
        <div class="calendar-list" id="calendarList" style="display:flex;flex-direction:column;gap:12px;"></div>
    `;
    const list = container.querySelector('#calendarList');
    calendarData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'calendar-item';
        div.style.cssText = 'background:rgba(255,255,255,0.15);border-radius:10px;padding:12px;border-left:4px solid #00bcd4;';
        div.innerHTML = `
            <div class="date" style="font-size:11px;color:#00bcd4;font-weight:500;margin-bottom:4px;">${item.date}</div>
            <div class="event-title" style="font-weight:500;margin-bottom:4px;">${item.title}</div>
            <div class="event-desc" style="font-size:12px;opacity:0.8;">${item.desc}</div>
        `;
        list.appendChild(div);
    });
}

/**
 * 初始化社区论坛功能
 * @param {HTMLElement} container - 社区论坛容器元素
 */
function initCommunity(container) {
    let currentTab = 'all';
    let currentPosts = [...communityData];

    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">社区论坛</h4>
        <div class="community-search" style="margin-bottom:15px;">
            <div style="position:relative;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_search.svg" style="position:absolute;left:15px;top:50%;transform:translateY(-50%);width:18px;height:18px;filter:invert(1);opacity:0.7;">
                <input type="text" id="communitySearchInput" placeholder="搜索帖子..." class="liquid-glass-direct intensity-subtle" style="width:100%;padding:10px 15px 10px 45px;border-radius:20px;border:none;color:white;font-size:14px;box-sizing:border-box;">
            </div>
        </div>
        <div class="community-tabs" style="display:flex;gap:10px;margin-bottom:20px;overflow-x:auto;padding-bottom:5px;">
            <button class="community-tab active" data-tab="all" style="padding:8px 16px;border-radius:20px;border:none;background:linear-gradient(135deg,rgba(102,126,234,0.6),rgba(118,75,162,0.6));color:white;cursor:pointer;white-space:nowrap;font-size:13px;position:relative;overflow:hidden;">全部</button>
            <button class="community-tab" data-tab="study" style="padding:8px 16px;border-radius:20px;border:none;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);cursor:pointer;white-space:nowrap;font-size:13px;position:relative;overflow:hidden;">学习</button>
            <button class="community-tab" data-tab="life" style="padding:8px 16px;border-radius:20px;border:none;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);cursor:pointer;white-space:nowrap;font-size:13px;position:relative;overflow:hidden;">生活</button>
            <button class="community-tab" data-tab="activity" style="padding:8px 16px;border-radius:20px;border:none;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);cursor:pointer;white-space:nowrap;font-size:13px;position:relative;overflow:hidden;">活动</button>
        </div>
        <div class="community-posts" id="communityPosts"></div>
        <button class="action-btn" id="createPostBtn" style="background:linear-gradient(135deg,rgba(102,126,234,0.8),rgba(118,75,162,0.8));color:white;border:none;padding:14px 24px;border-radius:25px;font-size:14px;cursor:pointer;width:100%;margin-top:20px;display:flex;align-items:center;justify-content:center;gap:8px;position:relative;overflow:hidden;">
            <img src="assets/icons/HarmonyOS_Icons/ic_public_add.svg" style="width:18px;height:18px;filter:invert(1);">发布新帖
        </button>
    `;

    const postsContainer = container.querySelector('#communityPosts');
    const searchInput = container.querySelector('#communitySearchInput');
    const tabs = container.querySelectorAll('.community-tab');

    if (typeof applyLiquidGlass !== 'undefined') {
        applyLiquidGlass(searchInput, { intensity: 'subtle' });
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = '';
        if (posts.length === 0) {
            postsContainer.innerHTML = '<div style="text-align:center;color:rgba(255,255,255,0.5);padding:40px;">暂无帖子</div>';
            return;
        }
        posts.forEach(post => {
            const categoryMap = { study: '学习', life: '生活', activity: '活动' };
            const categoryColors = { study: '#4CAF50', life: '#FF9800', activity: '#E91E63' };
            const postDiv = document.createElement('div');
            postDiv.className = 'community-post liquid-glass-card';
            postDiv.style.cssText = 'border-radius:16px;padding:0;margin-bottom:15px;cursor:pointer;position:relative;overflow:hidden;';
            postDiv.innerHTML = `
                <div class="liquid-glass" style="border-radius:16px;"></div>
                <div style="padding:15px;position:relative;z-index:1;">
                    <div class="post-header" style="display:flex;align-items:center;margin-bottom:10px;">
                        <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;margin-right:10px;font-size:20px;">
                            ${post.avatar}
                        </div>
                        <div style="flex:1;">
                            <div style="color:white;font-weight:500;font-size:14px;">${post.author}</div>
                            <div style="color:rgba(255,255,255,0.5);font-size:11px;">${post.time}</div>
                        </div>
                        <span class="post-category" style="padding:4px 10px;border-radius:10px;font-size:11px;background:${categoryColors[post.category] || '#667eea'};color:white;">${categoryMap[post.category] || '全部'}</span>
                    </div>
                    <div class="post-title" style="color:white;font-weight:500;font-size:15px;margin-bottom:8px;">${post.title}</div>
                    <div class="post-content" style="color:rgba(255,255,255,0.8);font-size:13px;line-height:1.5;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${post.content}</div>
                    <div class="post-actions" style="display:flex;gap:20px;color:rgba(255,255,255,0.6);font-size:13px;">
                        <button class="like-btn ${post.liked ? 'liked' : ''}" data-id="${post.id}" style="display:flex;align-items:center;gap:5px;background:none;border:none;color:${post.liked ? '#e91e63' : 'rgba(255,255,255,0.6)'};cursor:pointer;font-size:13px;padding:0;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_thumbsup.svg" style="width:16px;height:16px;filter:${post.liked ? 'hue-rotate(320deg)' : 'invert(1)'};opacity:0.7;"> ${post.likes}
                        </button>
                        <span style="display:flex;align-items:center;gap:5px;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_comments.svg" style="width:16px;height:16px;filter:invert(1);opacity:0.7;"> ${post.comments}
                        </span>
                    </div>
                </div>
            `;

            if (typeof applyLiquidGlass !== 'undefined') {
                applyLiquidGlass(postDiv, { intensity: 'normal' });
            }

            // 悬停效果已在CSS中定义
            postDiv.addEventListener('click', (e) => {
                if (!e.target.closest('.like-btn')) {
                    showPostDetail(post.id);
                }
            });

            const likeBtn = postDiv.querySelector('.like-btn');
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleLike(post.id);
                renderPosts(getFilteredPosts());
            });

            postsContainer.appendChild(postDiv);
        });
    }

    function getFilteredPosts() {
        const query = searchInput.value.toLowerCase();
        let filtered = [...communityData];

        if (currentTab !== 'all') {
            filtered = filtered.filter(p => p.category === currentTab);
        }

        if (query.length > 0) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.content.toLowerCase().includes(query) ||
                p.author.toLowerCase().includes(query)
            );
        }

        return filtered;
    }

    function toggleLike(postId) {
        const post = communityData.find(p => p.id === postId);
        if (post) {
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
        }
    }

    function showPostDetail(postId) {
        const post = communityData.find(p => p.id === postId);
        if (!post) return;

        const categoryMap = { study: '学习', life: '生活', activity: '活动' };
        const categoryColors = { study: '#4CAF50', life: '#FF9800', activity: '#E91E63' };

        const detailPage = document.createElement('div');
        detailPage.className = 'post-detail-page';
        detailPage.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);backdrop-filter:blur(5px);z-index:3000;display:flex;align-items:center;justify-content:center;padding:20px;';
        detailPage.innerHTML = `
            <div class="liquid-glass-modal" style="border-radius:24px;max-width:500px;width:100%;max-height:80vh;overflow-y:auto;color:white;position:relative;">
                <div class="liquid-glass" style="border-radius:24px;"></div>
                <div style="padding:0;position:relative;z-index:1;">
                    <div style="padding:20px;border-bottom:1px solid rgba(255,255,255,0.15);display:flex;align-items:center;gap:15px;">
                        <button class="back-to-list" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
                            <img src="assets/icons/HarmonyOS_Icons/ic_public_back.svg" style="width:18px;height:18px;filter:invert(1);">
                        </button>
                        <span style="font-size:16px;font-weight:500;">帖子详情</span>
                    </div>
                    <div style="padding:20px;">
                        <div class="post-header" style="display:flex;align-items:center;margin-bottom:15px;">
                            <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;margin-right:12px;font-size:24px;">
                                ${post.avatar}
                            </div>
                            <div style="flex:1;">
                                <div style="font-weight:500;font-size:15px;">${post.author}</div>
                                <div style="font-size:12px;opacity:0.6;">${post.time}</div>
                            </div>
                            <span class="post-category" style="padding:4px 12px;border-radius:12px;font-size:12px;background:${categoryColors[post.category] || '#667eea'};">${categoryMap[post.category] || '全部'}</span>
                        </div>
                        <h2 style="font-size:18px;margin-bottom:12px;">${post.title}</h2>
                        <p style="font-size:14px;line-height:1.6;opacity:0.9;margin-bottom:20px;">${post.content}</p>
                        <div class="post-actions" style="display:flex;gap:20px;padding:15px 0;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);margin-bottom:15px;">
                            <button class="like-btn ${post.liked ? 'liked' : ''}" data-id="${post.id}" style="display:flex;align-items:center;gap:6px;background:none;border:none;color:${post.liked ? '#e91e63' : 'rgba(255,255,255,0.7)'};cursor:pointer;font-size:14px;padding:0;">
                                <img src="assets/icons/HarmonyOS_Icons/ic_public_thumbsup.svg" style="width:18px;height:18px;filter:${post.liked ? 'hue-rotate(320deg)' : 'invert(1)'};opacity:0.9;"> ${post.likes} 点赞
                            </button>
                            <span style="display:flex;align-items:center;gap:6px;color:rgba(255,255,255,0.7);font-size:14px;">
                                <img src="assets/icons/HarmonyOS_Icons/ic_public_comments.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.9;"> ${post.comments} 评论
                            </span>
                        </div>
                        <div class="comments-section">
                            <h4 style="font-size:14px;margin-bottom:15px;display:flex;align-items:center;gap:8px;">
                                <img src="assets/icons/HarmonyOS_Icons/ic_public_comments.svg" style="width:16px;height:16px;filter:invert(1);opacity:0.8;"> 评论列表
                            </h4>
                            <div class="comments-list" id="detailCommentsList" style="max-height:200px;overflow-y:auto;margin-bottom:15px;"></div>
                            <div class="comment-input" style="display:flex;gap:10px;">
                                <input type="text" id="commentInput" placeholder="写下你的评论..." class="liquid-glass-direct intensity-subtle" style="flex:1;padding:12px 15px;border-radius:25px;border:none;color:white;font-size:14px;">
                                <button id="submitCommentBtn" style="padding:12px 20px;border-radius:25px;border:none;background:linear-gradient(135deg,rgba(102,126,234,0.8),rgba(118,75,162,0.8));color:white;font-size:14px;cursor:pointer;">发送</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(detailPage);

        const modalEl = detailPage.querySelector('.liquid-glass-modal');
        if (typeof applyLiquidGlass !== 'undefined') {
            applyLiquidGlass(modalEl, { intensity: 'normal' });
        }

        const commentsList = detailPage.querySelector('#detailCommentsList');
        if (post.commentsList && post.commentsList.length > 0) {
            post.commentsList.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.style.cssText = 'background:rgba(255,255,255,0.1);border-radius:12px;padding:12px;margin-bottom:10px;';
                commentDiv.innerHTML = `
                    <div style="font-weight:500;font-size:13px;margin-bottom:4px;">${comment.author}</div>
                    <div style="font-size:13px;opacity:0.9;">${comment.content}</div>
                    <div style="font-size:11px;opacity:0.5;margin-top:4px;">${comment.time}</div>
                `;
                commentsList.appendChild(commentDiv);
            });
        } else {
            commentsList.innerHTML = '<div style="text-align:center;color:rgba(255,255,255,0.5);padding:20px;">暂无评论，快来抢沙发！</div>';
        }

        const likeBtn = detailPage.querySelector('.like-btn');
        likeBtn.addEventListener('click', () => {
            toggleLike(post.id);
            likeBtn.classList.toggle('liked');
            likeBtn.style.color = post.liked ? '#e91e63' : 'rgba(255,255,255,0.7)';
            likeBtn.innerHTML = `<img src="assets/icons/HarmonyOS_Icons/ic_public_thumbsup.svg" style="width:18px;height:18px;filter:${post.liked ? 'hue-rotate(320deg)' : 'invert(1)'};opacity:0.9;"> ${post.likes} 点赞`;
            renderPosts(getFilteredPosts());
        });

        const submitCommentBtn = detailPage.querySelector('#submitCommentBtn');
        const commentInput = detailPage.querySelector('#commentInput');

        if (typeof applyLiquidGlass !== 'undefined' && commentInput) {
            applyLiquidGlass(commentInput, { intensity: 'subtle' });
        }

        submitCommentBtn.addEventListener('click', () => {
            const content = commentInput.value.trim();
            if (!content) return;

            const timeStr = '刚刚';

            post.commentsList.unshift({ author: '我', content, time: timeStr });
            post.comments++;

            commentInput.value = '';
            renderPosts(getFilteredPosts());

            const newComment = document.createElement('div');
            newComment.style.cssText = 'background:rgba(255,255,255,0.1);border-radius:12px;padding:12px;margin-bottom:10px;';
            newComment.innerHTML = `
                <div style="font-weight:500;font-size:13px;margin-bottom:4px;">我</div>
                <div style="font-size:13px;opacity:0.9;">${content}</div>
                <div style="font-size:11px;opacity:0.5;margin-top:4px;">刚刚</div>
            `;
            if (commentsList.querySelector('div[style*="暂无评论"]')) {
                commentsList.innerHTML = '';
            }
            commentsList.insertBefore(newComment, commentsList.firstChild);
        });

        commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitCommentBtn.click();
        });

        const backBtn = detailPage.querySelector('.back-to-list');
        backBtn.addEventListener('click', () => {
            detailPage.remove();
        });

        detailPage.addEventListener('click', (e) => {
            if (e.target === detailPage) {
                detailPage.remove();
            }
        });
    }

    function showCreatePostModal() {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');
        modal.style.display = 'flex';
        modalBody.className = 'liquid-glass-modal';
        modalBody.style.cssText = 'border-radius:20px;padding:25px;max-width:450px;width:100%;position:relative;overflow:hidden;';
        modalBody.innerHTML = `
            <div class="liquid-glass" style="border-radius:20px;"></div>
            <div style="position:relative;z-index:1;">
                <h3 style="margin-bottom:20px;text-align:center;">发布新帖</h3>
                <div class="modal-form" style="display:flex;flex-direction:column;gap:15px;">
                    <div>
                        <label style="display:block;font-size:13px;margin-bottom:8px;opacity:0.8;">选择分类</label>
                        <div class="category-select" style="display:flex;gap:10px;">
                            <label class="cat-label" style="flex:1;text-align:center;padding:12px;border-radius:12px;background:rgba(255,255,255,0.1);cursor:pointer;transition:all 0.2s;border:2px solid transparent;">
                                <input type="radio" name="postCategory" value="study" style="display:none;">
                                <span style="display:block;font-size:14px;">📚 学习</span>
                            </label>
                            <label class="cat-label" style="flex:1;text-align:center;padding:12px;border-radius:12px;background:rgba(255,255,255,0.1);cursor:pointer;transition:all 0.2s;border:2px solid transparent;">
                                <input type="radio" name="postCategory" value="life" style="display:none;">
                                <span style="display:block;font-size:14px;">🍜 生活</span>
                            </label>
                            <label class="cat-label" style="flex:1;text-align:center;padding:12px;border-radius:12px;background:rgba(255,255,255,0.1);cursor:pointer;transition:all 0.2s;border:2px solid transparent;">
                                <input type="radio" name="postCategory" value="activity" style="display:none;">
                                <span style="display:block;font-size:14px;">🎉 活动</span>
                            </label>
                        </div>
                    </div>
                    <input type="text" id="postTitle" placeholder="帖子标题" class="liquid-glass-direct intensity-subtle" style="background:rgba(255,255,255,0.1);border:none;border-radius:12px;padding:12px;color:white;font-size:14px;">
                    <textarea id="postContent" placeholder="分享你的内容..." class="liquid-glass-direct intensity-subtle" style="background:rgba(255,255,255,0.1);border:none;border-radius:12px;padding:12px;color:white;font-size:14px;min-height:120px;resize:vertical;"></textarea>
                    <button id="submitPostBtn" style="background:linear-gradient(135deg,rgba(102,126,234,0.9),rgba(118,75,162,0.9));color:white;border:none;padding:14px;border-radius:12px;cursor:pointer;font-size:14px;font-weight:500;margin-top:5px;">发布帖子</button>
                </div>
            </div>
        `;

        if (typeof applyLiquidGlass !== 'undefined') {
            applyLiquidGlass(modalBody, { intensity: 'normal' });
        }

        const categoryLabels = modalBody.querySelectorAll('.cat-label');
        categoryLabels.forEach(label => {
            label.addEventListener('click', () => {
                categoryLabels.forEach(l => l.style.borderColor = 'transparent');
                label.style.borderColor = '#667eea';
            });
        });

        const submitPostBtn = modalBody.querySelector('#submitPostBtn');
        submitPostBtn.addEventListener('click', () => {
            const category = document.querySelector('input[name="postCategory"]:checked')?.value;
            const title = document.getElementById('postTitle').value.trim();
            const content = document.getElementById('postContent').value.trim();

            if (!category) {
                alert('请选择分类');
                return;
            }
            if (!title) {
                alert('请输入标题');
                return;
            }
            if (!content) {
                alert('请输入内容');
                return;
            }

            const timeStr = '刚刚';
            const avatars = ['😊', '🙋', '🌟', '💫', '✨', '🎯'];
            const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

            communityData.unshift({
                id: Date.now(),
                author: '我',
                avatar: randomAvatar,
                title,
                content,
                category,
                likes: 0,
                comments: 0,
                time: timeStr,
                liked: false,
                commentsList: []
            });

            closeModal();
            renderPosts(getFilteredPosts());
        });
    }

    searchInput.oninput = function() {
        currentPosts = getFilteredPosts();
        renderPosts(currentPosts);
    };

    tabs.forEach(tab => {
        tab.onclick = function() {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.background = 'rgba(255,255,255,0.1)';
                t.style.color = 'rgba(255,255,255,0.7)';
            });
            this.classList.add('active');
            this.style.background = 'linear-gradient(135deg,rgba(102,126,234,0.8),rgba(118,75,162,0.8))';
            this.style.color = 'white';
            currentTab = this.getAttribute('data-tab');
            currentPosts = getFilteredPosts();
            renderPosts(currentPosts);
        };
    });

    container.querySelector('#createPostBtn').onclick = showCreatePostModal;

    renderPosts(currentPosts);
}

function initAbout(container) {
    container.innerHTML = `
        <h4 style="color:white;margin-bottom:15px;font-size:16px;">关于我们</h4>
        <div class="about-card" style="background:rgba(255,255,255,0.15);border-radius:16px;padding:25px;text-align:center;margin-bottom:20px;">
            <div style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 15px;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_app_filled.svg" style="width:36px;height:36px;filter:invert(1);opacity:0.9;">
            </div>
            <h2 style="color:white;font-size:22px;margin-bottom:10px;">NovaCampus Service</h2>
            <p style="color:rgba(255,255,255,0.7);font-size:14px;margin-bottom:15px;">创星校园服务平台</p>
            <p style="color:rgba(255,255,255,0.5);font-size:12px;">版本 1.0.0</p>
        </div>
        <div class="about-section" style="background:rgba(255,255,255,0.15);border-radius:12px;padding:15px;margin-bottom:15px;">
            <h5 style="color:white;font-size:14px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_file.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.8;">平台简介
            </h5>
            <p style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.6;">NovaCampus Service 是一款专为校园生活打造的综合性服务平台，致力于为师生提供便捷的校园服务。</p>
        </div>
        <div class="about-section" style="background:rgba(255,255,255,0.15);border-radius:12px;padding:15px;margin-bottom:15px;">
            <h5 style="color:white;font-size:14px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_list_add_light.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.8;">主要功能
            </h5>
            <ul style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.8;padding-left:20px;">
                <li>作息时间表</li>
                <li>校园地图</li>
                <li>失物招领</li>
                <li>匿名建议箱</li>
                <li>作业汇总</li>
                <li>班级相册</li>
                <li>校园电话</li>
                <li>活动日历</li>
                <li>社区论坛</li>
            </ul>
        </div>
        <div class="about-section" style="background:rgba(255,255,255,0.15);border-radius:12px;padding:15px;">
            <h5 style="color:white;font-size:14px;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
                <img src="assets/icons/HarmonyOS_Icons/ic_public_email.svg" style="width:18px;height:18px;filter:invert(1);opacity:0.8;">联系我们
            </h5>
            <p style="color:rgba(255,255,255,0.7);font-size:13px;">如有问题或建议，请联系：</p>
            <p style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:8px;">nova-campus@example.edu.cn</p>
        </div>
    `;
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    modal.style.display = 'none';

    const liquidGlassOverlay = modalBody.querySelector('.liquid-glass');
    if (liquidGlassOverlay) {
        liquidGlassOverlay.remove();
    }

    const glassCard = modalBody.querySelector('.liquid-glass-card');
    if (glassCard) {
        glassCard.classList.remove('liquid-glass-card');
    }

    modalBody.className = 'modal-content';
    modalBody.style.cssText = '';
}

window.addEventListener('DOMContentLoaded', function() {
    initLiquidGlass();
    initNavigation();
    loadCards();

    document.getElementById('backBtn').onclick = closeFeaturePage;
    document.getElementById('modalClose').onclick = closeModal;
    document.getElementById('modal').onclick = function(e) {
        if (e.target === this) closeModal();
    };
});

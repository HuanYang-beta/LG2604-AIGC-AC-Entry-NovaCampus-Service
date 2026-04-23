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
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
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
        cardElement.style.borderColor = card.color;
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
    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'none';
    if (cards) cards.style.display = 'none';

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'flex';

    const windowContainer = document.getElementById('windowContainer') || createWindowContainer();
    windowContainer.innerHTML = '';

    const windowEl = document.createElement('swift-window');
    windowEl.setAttribute('title', pageTitle || '功能');
    windowEl.setAttribute('width', '85');
    windowEl.setAttribute('height', '70');
    windowEl.style.position = 'fixed';
    windowEl.style.top = '10%';
    windowEl.style.left = '7.5%';
    windowEl.style.zIndex = '2000';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'window-content';
    contentDiv.id = 'windowContent';
    contentDiv.style.cssText = 'padding:15px;height:100%;overflow-y:auto;color:#333;';

    windowEl.appendChild(contentDiv);
    windowContainer.appendChild(windowEl);

    windowEl.shadowRoot.querySelector('div[oval][id="close"]').addEventListener('click', closeFeaturePage);

    initFeaturePage(pageName, contentDiv);
}

function createWindowContainer() {
    const container = document.createElement('div');
    container.id = 'windowContainer';
    container.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:2000;';
    document.body.appendChild(container);
    return container;
}

function closeFeaturePage() {
    const windowContainer = document.getElementById('windowContainer');
    if (windowContainer) windowContainer.innerHTML = '';

    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'flex';
    if (cards) cards.style.display = 'block';

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'none';
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
    }
}

function initSchedule(container) {
    container.innerHTML = `
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">作息时间表</h4>
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
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">校园地图</h4>
        <div class="map-grid" id="mapGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;"></div>
    `;
    const grid = container.querySelector('#mapGrid');
    mapData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'map-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:15px;text-align:center;';
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
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">失物招领</h4>
        <button class="action-btn" id="addLostFoundBtn" style="background:#007aff;color:white;border:none;padding:10px 20px;border-radius:8px;margin-bottom:15px;cursor:pointer;width:100%;">发布失物/招领</button>
        <div class="lostfound-list" id="lostfoundList"></div>
    `;
    const list = container.querySelector('#lostfoundList');
    lostFoundList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'lostfound-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:12px;margin-bottom:10px;';
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
    const contentDiv = document.getElementById('windowContent');
    if (contentDiv) initLostFound(contentDiv);
}

function initSuggest(container) {
    container.innerHTML = `
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">匿名建议箱</h4>
        <div class="suggest-form" style="margin-bottom:20px;">
            <select id="suggestType" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(0,0,0,0.1);margin-bottom:10px;background:white;">
                <option value="canteen">食堂建议</option>
                <option value="hygiene">卫生建议</option>
                <option value="facility">设施建议</option>
                <option value="other">其他</option>
            </select>
            <textarea id="suggestContent" placeholder="请输入您的建议..." style="width:100%;min-height:80px;padding:10px;border-radius:8px;border:1px solid rgba(0,0,0,0.1);resize:vertical;box-sizing:border-box;background:white;"></textarea>
            <button id="submitSuggestBtn" style="width:100%;padding:12px;background:#007aff;color:white;border:none;border-radius:8px;cursor:pointer;margin-top:10px;">提交建议</button>
        </div>
        <h4 style="color:#333;margin-bottom:10px;font-size:14px;">往期建议</h4>
        <div class="suggest-list" id="suggestList"></div>
    `;
    const list = container.querySelector('#suggestList');
    suggestList.forEach(item => {
        const typeMap = { canteen: '食堂', hygiene: '卫生', facility: '设施', other: '其他' };
        const div = document.createElement('div');
        div.className = 'suggest-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:12px;margin-bottom:10px;';
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
    const contentDiv = document.getElementById('windowContent');
    if (contentDiv) initSuggest(contentDiv);
}

function initHomework(container) {
    container.innerHTML = `
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">作业汇总</h4>
        <select id="gradeSelect" onchange="initHomeworkInWindow()" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(0,0,0,0.1);margin-bottom:15px;background:white;">
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
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:12px;margin-bottom:10px;border-left:4px solid #007aff;';
        div.innerHTML = `
            <div class="subject" style="font-weight:500;margin-bottom:5px;">${item.subject}</div>
            <div class="content" style="font-size:13px;opacity:0.9;margin-bottom:5px;">${item.content}</div>
            <div class="teacher" style="font-size:11px;opacity:0.5;">${item.teacher}</div>
        `;
        list.appendChild(div);
    });
}

window.initHomeworkInWindow = function() {
    const contentDiv = document.getElementById('windowContent');
    if (contentDiv) updateHomeworkList(contentDiv);
};

function initAlbum(container) {
    container.innerHTML = `
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">班级相册</h4>
        <div class="album-grid" id="albumGrid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;"></div>
    `;
    const grid = container.querySelector('#albumGrid');
    albumData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'album-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;overflow:hidden;';
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
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">校园电话</h4>
        <div class="phone-list" id="phoneList" style="display:flex;flex-direction:column;gap:10px;"></div>
    `;
    const list = container.querySelector('#phoneList');
    phoneData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'phone-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:15px;display:flex;justify-content:space-between;align-items:center;';
        div.innerHTML = `
            <div class="info">
                <div class="name" style="font-weight:500;margin-bottom:4px;">${item.name}</div>
                <div class="number" style="font-size:14px;opacity:0.8;">${item.number}</div>
            </div>
            <a href="tel:${item.number}" style="background:rgba(76,175,80,0.3);border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;text-decoration:none;">
                <img src="assets/icons/HarmonyOS_Icons/ic_call_1_dial.svg" alt="拨打" style="width:18px;height:18px;">
            </a>
        `;
        list.appendChild(div);
    });
}

function initCalendar(container) {
    container.innerHTML = `
        <h4 style="color:#333;margin-bottom:15px;font-size:16px;">活动日历</h4>
        <div class="calendar-list" id="calendarList" style="display:flex;flex-direction:column;gap:12px;"></div>
    `;
    const list = container.querySelector('#calendarList');
    calendarData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'calendar-item';
        div.style.cssText = 'background:rgba(255,255,255,0.8);border-radius:10px;padding:12px;border-left:4px solid #00bcd4;';
        div.innerHTML = `
            <div class="date" style="font-size:11px;color:#00bcd4;font-weight:500;margin-bottom:4px;">${item.date}</div>
            <div class="event-title" style="font-weight:500;margin-bottom:4px;">${item.title}</div>
            <div class="event-desc" style="font-size:12px;opacity:0.8;">${item.desc}</div>
        `;
        list.appendChild(div);
    });
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
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

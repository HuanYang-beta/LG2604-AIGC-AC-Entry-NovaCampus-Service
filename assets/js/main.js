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
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            applyLiquidGlass(bottomNav, { intensity: 'normal' });
        }
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
        cardElement.addEventListener('click', () => openFeaturePage(card.link.replace('#', '')));
        container.appendChild(cardElement);
        if (typeof applyLiquidGlass !== 'undefined') {
            applyLiquidGlass(cardElement, { intensity: 'normal' });
        }
    });
}

function openFeaturePage(pageName) {
    const pages = ['schedule', 'map', 'lostfound', 'suggest', 'homework', 'album', 'phone', 'calendar'];
    pages.forEach(p => {
        const el = document.getElementById(p + 'Page');
        if (el) el.style.display = 'none';
    });

    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'none';
    if (cards) cards.style.display = 'none';

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'flex';

    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.style.display = 'block';
        initFeaturePage(pageName);
    }
}

function closeFeaturePage() {
    const pages = ['schedule', 'map', 'lostfound', 'suggest', 'homework', 'album', 'phone', 'calendar'];
    pages.forEach(p => {
        const el = document.getElementById(p + 'Page');
        if (el) el.style.display = 'none';
    });

    const hero = document.getElementById('heroSection');
    const cards = document.getElementById('cardsSection');
    if (hero) hero.style.display = 'flex';
    if (cards) cards.style.display = 'block';

    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.style.display = 'none';
}

function initFeaturePage(page) {
    switch(page) {
        case 'schedule': initSchedule(); break;
        case 'map': initMap(); break;
        case 'lostfound': initLostFound(); break;
        case 'suggest': initSuggest(); break;
        case 'homework': initHomework(); break;
        case 'album': initAlbum(); break;
        case 'phone': initPhone(); break;
        case 'calendar': initCalendar(); break;
    }
}

function initSchedule() {
    const tbody = document.getElementById('scheduleTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    scheduleData.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.time}</td><td>${item.event}</td>`;
        tbody.appendChild(tr);
    });
}

function initMap() {
    const grid = document.getElementById('mapGrid');
    if (!grid) return;
    grid.innerHTML = '';
    mapData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'map-item';
        div.innerHTML = `
            <div class="icon">${item.icon}</div>
            <div class="name">${item.name}</div>
            <div class="location">${item.location}</div>
        `;
        grid.appendChild(div);
    });
}

function initLostFound() {
    const list = document.getElementById('lostfoundList');
    if (!list) return;
    list.innerHTML = '';
    lostFoundList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'lostfound-item';
        div.innerHTML = `
            <span class="type ${item.type}">${item.type === 'lost' ? '寻物' : '招领'}</span>
            <div class="title">${item.title}</div>
            <div class="desc">${item.desc}</div>
            <div class="time">${item.time}</div>
        `;
        list.appendChild(div);
    });

    document.getElementById('addLostFoundBtn').onclick = showAddLostFoundModal;
}

function showAddLostFoundModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    modal.style.display = 'flex';
    modalBody.innerHTML = `
        <h3>发布失物/招领</h3>
        <div class="modal-form">
            <div class="type-select">
                <label><input type="radio" name="lfType" value="lost" checked><span>寻物</span></label>
                <label><input type="radio" name="lfType" value="found"><span>招领</span></label>
            </div>
            <input type="text" id="lfTitle" placeholder="物品名称">
            <textarea id="lfDesc" placeholder="详细描述"></textarea>
            <button class="action-btn" onclick="addLostFound()">发布</button>
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
    initLostFound();
}

function initSuggest() {
    const list = document.getElementById('suggestList');
    if (!list) return;
    list.innerHTML = '';
    suggestList.forEach(item => {
        const typeMap = { canteen: '食堂', hygiene: '卫生', facility: '设施', other: '其他' };
        const div = document.createElement('div');
        div.className = 'suggest-item';
        div.innerHTML = `
            <span class="suggest-type-badge">${typeMap[item.type] || '其他'}</span>
            <div class="content">${item.content}</div>
            <div class="time">${item.time}</div>
        `;
        list.appendChild(div);
    });

    document.getElementById('submitSuggestBtn').onclick = submitSuggest;
}

function submitSuggest() {
    const type = document.getElementById('suggestType').value;
    const content = document.getElementById('suggestContent').value;
    if (!content) return;

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

    suggestList.unshift({ type, content, time: timeStr });
    document.getElementById('suggestContent').value = '';
    initSuggest();
}

function initHomework() {
    const list = document.getElementById('homeworkList');
    if (!list) return;

    const grade = document.getElementById('gradeSelect').value;
    const homeworks = homeworkData[grade] || [];

    list.innerHTML = '<select id="gradeSelect" onchange="initHomework()"><option value="1">一年级</option><option value="2">二年级</option><option value="3">三年级</option></select>';
    document.getElementById('gradeSelect').value = grade;

    homeworks.forEach(item => {
        const div = document.createElement('div');
        div.className = 'homework-item';
        div.innerHTML = `
            <div class="subject">${item.subject}</div>
            <div class="content">${item.content}</div>
            <div class="teacher">${item.teacher}</div>
        `;
        list.appendChild(div);
    });
}

function initAlbum() {
    const grid = document.getElementById('albumGrid');
    if (!grid) return;
    grid.innerHTML = '';
    albumData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'album-item';
        div.innerHTML = `
            <div class="album-img">📷</div>
            <div class="album-info">
                <div class="album-title">${item.title}</div>
                <div class="album-date">${item.date}</div>
            </div>
        `;
        grid.appendChild(div);
    });
}

function initPhone() {
    const list = document.getElementById('phoneList');
    if (!list) return;
    list.innerHTML = '';
    phoneData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'phone-item';
        div.innerHTML = `
            <div class="info">
                <div class="name">${item.name}</div>
                <div class="number">${item.number}</div>
            </div>
            <a href="tel:${item.number}" class="call-btn">
                <img src="assets/icons/HarmonyOS_Icons/ic_call_1_dial.svg" alt="拨打">
            </a>
        `;
        list.appendChild(div);
    });
}

function initCalendar() {
    const list = document.getElementById('calendarList');
    if (!list) return;
    list.innerHTML = '';
    calendarData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'calendar-item';
        div.innerHTML = `
            <div class="date">${item.date}</div>
            <div class="event-title">${item.title}</div>
            <div class="event-desc">${item.desc}</div>
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

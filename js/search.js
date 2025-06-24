// 搜索功能优化实现
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('module-search');
    const cards = document.querySelectorAll('.card'); // 修改：选择 .card 元素
    const moduleContainer = document.getElementById('module-container');
    let originalModuleOrder = []; 

    // 保存原始顺序
    cards.forEach(card => {
        originalModuleOrder.push(card);
    });

    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // 清空搜索：恢复所有模块 + 原始顺序
            cards.forEach(card => {
                card.classList.remove('hidden');
                card.classList.add('highlight');
            });
            // 重置顺序
            originalModuleOrder.forEach(card => {
                moduleContainer.appendChild(card);
            });
        } else {
            // 隐藏所有模块
            cards.forEach(card => {
                card.classList.add('hidden');
                card.classList.remove('highlight');
            });
            
            // 筛选匹配模块
            const matchingCards = [];
            originalModuleOrder.forEach(card => {
                const keywords = card.getAttribute('data-keywords')?.toLowerCase() || '';
                if (keywords.includes(searchTerm)) {
                    matchingCards.push(card);
                }
            });
            
            // 匹配模块置顶 + 高亮
            if (matchingCards.length > 0) {
                for (let i = matchingCards.length - 1; i >= 0; i--) {
                    const card = matchingCards[i];
                    if (card) {
                        card.classList.remove('hidden');
                        card.classList.add('highlight');
                        moduleContainer.insertBefore(card, moduleContainer.firstChild);
                    }
                }
            }
        }
    });
});

function goToHomePage() {
    // 跳转到首页，这里假设首页是 index.html，根据实际文件名修改
    window.location.href = '../index.html'; 
}
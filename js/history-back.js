 // 显示指定页面
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }

        // 打开新网页
        function openNewPage(pageId) {
            showPage(pageId);
        }

        // 搜索功能优化实现
        document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('module-search');
    const subModules = document.querySelectorAll('.sub-module');
    const moduleContainer = document.getElementById('module-container');
    let originalModuleOrder = []; 

    // 保存原始顺序（确保 DOM 加载完成后获取）
    subModules.forEach(module => {
        originalModuleOrder.push(module);
    });

    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // 清空搜索：恢复所有模块 + 原始顺序
            subModules.forEach(module => {
                module.classList.remove('hidden');   // 显示模块
                module.classList.add('highlight'); //添加蓝色边框
 		//module.classList.remove('highlight');// 移除蓝色边框
            });
            // 重置顺序（按原始加载顺序）
            originalModuleOrder.forEach(module => {
                moduleContainer.appendChild(module);
            });
        } else {
            // 隐藏所有模块（仅控制 display，保留布局）
            subModules.forEach(module => {
                module.classList.add('hidden');     
                module.classList.remove('highlight');
            });
            
            // 筛选匹配模块
            const matchingModules = [];
            originalModuleOrder.forEach(module => {
                const keywords = module.getAttribute('data-keywords')?.toLowerCase() || '';
                if (keywords.includes(searchTerm)) {
                    matchingModules.push(module);
                }
            });
            
            // 匹配模块置顶 + 高亮
            if (matchingModules.length > 0) {
                // 反向遍历实现「顶头排列」
                for (let i = matchingModules.length - 1; i >= 0; i--) {
                    const module = matchingModules[i];
                    if (module) {
                        module.classList.remove('hidden'); // 显示
                        module.classList.add('highlight');  // 高亮边框
                        moduleContainer.insertBefore(module, moduleContainer.firstChild);
                    }
                }
            }
        }
    });
});
    </script>

 <script>
	// 打开大图模态框
	function openModal(imgId) {
 	   const modal = document.getElementById('imageModal');
  	  const modalImg = document.getElementById('modalImage');
    
    // 设置模态框中的图片源和alt文本
    modalImg.src = document.getElementById(imgId).src;
    modalImg.alt = document.getElementById(imgId).alt;
    
    // 显示模态框
    modal.style.display = 'block';
    
    // 点击模态框背景关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭大图模态框
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    // 恢复背景滚动
    document.body.style.overflow = 'auto';
}

// 键盘ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

/**
 * 打开新页面函数
 * @param {string} pagePath - 要跳转的 HTML 文件路径（相对路径）
 */
function openNewPage(pagePath) {
  window.location.href = pagePath; 
}


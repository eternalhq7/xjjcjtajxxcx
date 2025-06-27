// 打开大图模态框
function openModal(imgId) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const clickedImage = document.getElementById(imgId);
    
    // 安全检查，避免未定义元素导致的错误
    if (!modal || !modalImg || !clickedImage) return;
    
    // 设置模态框中的图片源和alt文本
    modalImg.src = clickedImage.src;
    modalImg.alt = clickedImage.alt;
    
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
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.style.display = 'none';
    
    // 恢复背景滚动
    document.body.style.overflow = 'auto';
}

// 键盘ESC键关闭模态框（只注册一次）
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
    
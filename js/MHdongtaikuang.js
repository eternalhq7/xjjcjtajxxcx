// 打开模态框（同时禁止背景滚动）
function openModal(imgId) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const clickedImage = document.getElementById(imgId);
  
  if (modal && modalImage && clickedImage) {
    modal.style.display = 'block';
    modalImage.src = clickedImage.src;
    // 禁止背景滚动
    document.body.style.overflow = 'hidden'; 
  }
}

// 关闭模态框（恢复背景滚动）
function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.style.display = 'none';
    // 恢复背景滚动
    document.body.style.overflow = 'auto'; 
  }
}
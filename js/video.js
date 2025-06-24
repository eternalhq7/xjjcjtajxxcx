function loadVideo(element) {
  const videoId = element.getAttribute('data-video-id');
  const videoContainer = element.closest('.video-container');
  
  // 创建视频元素
  const video = document.createElement('video');
  video.width = "80%";
  video.controls = true;
  video.preload = "auto";
  video.innerHTML = `
    <source src="../video/${videoId}.mp4" type="video/mp4">
    您的浏览器不支持视频播放。
  `;
  
  // 替换占位符
  videoContainer.replaceChild(video, element);
  video.play();
}

// 为所有占位符添加点击事件
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
  placeholder.addEventListener('click', () => loadVideo(placeholder));
});

function copyLink(link) {
    // 以下是简单的复制逻辑示例，浏览器安全策略可能限制，实际需优化
    navigator.clipboard.writeText(link).then(function() {
        alert('链接已复制，请在微信中粘贴打开');
    }).catch(function(err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动选择链接复制');
    });
}
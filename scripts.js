// 简单的页面滚动动画示例
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    });
});
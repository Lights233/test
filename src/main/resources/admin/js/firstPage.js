   // 添加简单的滚动动画效果
function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

function handleScroll() {
        document.querySelectorAll('.feature, .testimonial').forEach(item => {
            if (isElementInViewport(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

    // 初始化特性和评价的样式
document.querySelectorAll('.feature, .testimonial').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
   });
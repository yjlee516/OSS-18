// URL에 id 값을 파라미터로 추가하여 페이지 이동하는 함수
function navigateToGroup(url, id) {
    window.location.href = `${url}?id=${id}`;
}

// 마우스를 통해 가로로 스크롤하는 함수
document.addEventListener('DOMContentLoaded', function() {
    function initializeDragScroll(containerSelector) {
        const container = document.querySelector(containerSelector);
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse down 이벤트일 때
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        // Mouse leave 이벤트일 때
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });

        // Mouse up 이벤트일 때
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });

        // Mouse move 이벤트일 때
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    }

    initializeDragScroll('.groups');
    initializeDragScroll('.teams');
});
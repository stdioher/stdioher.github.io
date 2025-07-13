// Publications页面JavaScript功能
// 专为GitHub Pages兼容性设计

(function () {
    'use strict';

    // 摘要展开/收起功能
    function handleAbstractToggle(e) {
        if (e.target.closest('.abstract-toggle')) {
            const element = e.target.closest('.abstract-toggle');
            const index = element.getAttribute('data-index');
            const abstractContent = document.getElementById('abstract-' + index);
            const journalElement = document.getElementById('journal-' + index);
            const toggleText = element.querySelector('.toggle-text');

            if (abstractContent && journalElement && toggleText) {
                if (abstractContent.classList.contains('expanded')) {
                    // 收起
                    abstractContent.classList.remove('expanded');
                    element.classList.remove('expanded');
                    journalElement.classList.remove('show');
                    toggleText.textContent = 'show all ▼';
                } else {
                    // 展开
                    abstractContent.classList.add('expanded');
                    element.classList.add('expanded');
                    journalElement.classList.add('show');
                    toggleText.textContent = 'fold ▲';
                }
            }
        }
    }

    // 图片Modal打开功能
    function handleImageModal(e) {
        if (e.target.classList.contains('modal-trigger')) {
            const imgElement = e.target;
            const title = imgElement.getAttribute('data-title') || imgElement.alt;
            openImageModal(imgElement, title);
        }
    }

    // Modal关闭功能
    function handleModalClose(e) {
        if (e.target.classList.contains('modal-close') || e.target.id === 'imageModal') {
            closeImageModal();
        }
    }

    // 防止Modal内容区域点击时关闭
    function handleModalContentClick(e) {
        if (e.target.classList.contains('modal-content')) {
            e.stopPropagation();
        }
    }

    // 键盘ESC关闭modal
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeImageModal();
        }
    }

    // 打开图片Modal
    function openImageModal(imgElement, title) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');

        if (modal && modalImg && modalTitle) {
            modal.classList.add('show');
            modalImg.src = imgElement.src;
            modalImg.alt = imgElement.alt;
            modalTitle.textContent = title;

            // 防止背景滚动
            document.body.style.overflow = 'hidden';
        }
    }

    // 关闭图片Modal
    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        if (modal) {
            modal.classList.remove('show');
            // 恢复背景滚动
            document.body.style.overflow = 'auto';
        }
    }

    // 初始化页面
    function initializePage() {
        // 防止图片加载失败时的错误处理
        const modalImg = document.getElementById('modalImage');
        if (modalImg) {
            modalImg.addEventListener('error', function () {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+aXoOazleWKoOi9vTwvdGV4dD48L3N2Zz4=';
            });
        }

        // 初始化页面时确保期刊信息隐藏
        const allJournals = document.querySelectorAll('.publication-journal');
        allJournals.forEach(function (journal) {
            if (!journal.classList.contains('show')) {
                journal.style.display = 'none';
            }
        });

        // 确保所有展开按钮都有正确的初始状态
        const allToggles = document.querySelectorAll('.abstract-toggle');
        allToggles.forEach(function (toggle) {
            const toggleText = toggle.querySelector('.toggle-text');
            if (toggleText && !toggleText.textContent.includes('fold')) {
                toggleText.textContent = 'show all ▼';
            }
        });

        console.log('Publications页面JavaScript初始化完成');
    }

    // 页面加载完成时的主初始化函数
    function init() {
        // 确保DOM已加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                setupEventListeners();
                initializePage();
            });
        } else {
            setupEventListeners();
            initializePage();
        }
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 摘要展开/收起功能
        document.addEventListener('click', handleAbstractToggle);

        // 图片Modal功能
        document.addEventListener('click', handleImageModal);

        // Modal关闭功能
        document.addEventListener('click', handleModalClose);

        // 防止Modal内容区域点击时关闭
        document.addEventListener('click', handleModalContentClick);

        // 键盘ESC关闭modal
        document.addEventListener('keydown', handleKeyDown);

        console.log('Publications页面事件监听器设置完成');
    }

    // 启动初始化
    init();

})();

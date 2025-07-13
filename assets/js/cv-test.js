// CV页面JavaScript测试功能
// 专为GitHub Pages兼容性设计

(function () {
    'use strict';

    // 调试日志函数
    function debugLog(message, type) {
        type = type || 'info';
        const logContainer = document.getElementById('debug-log');
        if (!logContainer) return;

        const timestamp = new Date().toLocaleTimeString();
        const colors = {
            'info': '#81c784',
            'success': '#66bb6a',
            'warning': '#ffb74d',
            'error': '#e57373'
        };

        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.style.color = colors[type] || '#e2e8f0';
        logEntry.textContent = '[' + timestamp + '] ' + message;

        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;

        // 同时输出到浏览器控制台
        console.log('CV页面调试: ' + message);
    }

    // 更新状态指示器
    function updateStatus(elementId, text, color) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
            element.style.color = color;
        }
    }

    // 点击计数器
    let clickCount = 0;
    function updateClickCount() {
        clickCount++;
        updateStatus('click-count', clickCount.toString(), '#007bff');
        debugLog('点击计数更新: ' + clickCount, 'info');
    }

    // 基础点击测试处理函数
    function handleBasicClick() {
        debugLog('基础点击测试按钮被点击', 'success');
        updateClickCount();
        const dynamicContent = document.getElementById('dynamic-content');
        if (dynamicContent) {
            dynamicContent.innerHTML =
                '<p style="color: #28a745;"><strong>✓ 基础点击功能正常!</strong><br>时间: ' + new Date().toLocaleString() + '</p>';
        }
    }

    // DOM操作测试处理函数
    function handleDOMTest() {
        debugLog('DOM操作测试按钮被点击', 'success');
        updateClickCount();

        const dynamicContent = document.getElementById('dynamic-content');
        if (dynamicContent) {
            dynamicContent.innerHTML = '<p style="color: #007bff;"><strong>DOM操作测试</strong></p>';

            // 动态创建元素
            const newElement = document.createElement('div');
            newElement.style.cssText = 'background: #e3f2fd; border: 1px solid #1976d2; border-radius: 5px; padding: 10px; margin: 10px 0;';
            newElement.innerHTML =
                '<p><strong>✓ DOM创建成功!</strong></p>' +
                '<p>随机数: ' + Math.floor(Math.random() * 1000) + '</p>' +
                '<p>用户代理: ' + navigator.userAgent.substring(0, 50) + '...</p>';
            dynamicContent.appendChild(newElement);

            debugLog('DOM元素动态创建完成', 'success');
        }
    }

    // 事件委托测试处理函数
    function handleEventDelegation(e) {
        debugLog('事件委托测试触发', 'success');
        updateClickCount();

        const dynamicContent = document.getElementById('dynamic-content');
        if (dynamicContent) {
            dynamicContent.innerHTML =
                '<div style="color: #dc3545;">' +
                '<h4>✓ 事件委托测试成功!</h4>' +
                '<p><strong>点击目标:</strong> ' + e.target.tagName + ' (ID: ' + e.target.id + ')</p>' +
                '<p><strong>事件类型:</strong> ' + e.type + '</p>' +
                '<p><strong>鼠标坐标:</strong> (' + e.clientX + ', ' + e.clientY + ')</p>' +
                '<p><strong>页面URL:</strong> ' + window.location.href + '</p>' +
                '</div>';
        }

        debugLog('事件委托 - 目标: ' + e.target.id + ', 坐标: (' + e.clientX + ', ' + e.clientY + ')', 'info');
    }

    // 清空日志处理函数
    function handleClearLog() {
        debugLog('清空日志按钮被点击', 'warning');
        const logContainer = document.getElementById('debug-log');
        if (logContainer) {
            logContainer.innerHTML = '<div class="log-entry">日志已清空</div>';
        }
        clickCount = 0;
        updateStatus('click-count', '0', '#007bff');
    }

    // 页面加载完成时的初始化
    function initializePage() {
        debugLog('DOMContentLoaded 事件触发', 'success');
        updateStatus('dom-status', '已加载', '#28a745');

        // CSP和安全策略检测
        detectSecurityPolicies();

        // 基础点击测试
        const testBtn1 = document.getElementById('test-btn-1');
        if (testBtn1) {
            testBtn1.addEventListener('click', handleBasicClick);
            debugLog('基础点击按钮事件监听器已添加', 'info');
        } else {
            debugLog('未找到基础点击按钮元素', 'error');
        }

        // DOM操作测试
        const testBtn2 = document.getElementById('test-btn-2');
        if (testBtn2) {
            testBtn2.addEventListener('click', handleDOMTest);
            debugLog('DOM操作按钮事件监听器已添加', 'info');
        } else {
            debugLog('未找到DOM操作按钮元素', 'error');
        }

        // 事件委托测试 - 使用全局委托
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id === 'test-btn-3') {
                handleEventDelegation(e);
            } else if (e.target && e.target.id === 'clear-log') {
                handleClearLog();
            }
        });

        updateStatus('event-status', '已激活', '#28a745');
        debugLog('所有事件监听器初始化完成', 'success');

        // 环境信息检测
        debugLog('运行环境: ' + (navigator.userAgent.includes('GitHub') ? 'GitHub Pages' : '本地/其他'), 'info');
        debugLog('协议: ' + window.location.protocol, 'info');
        debugLog('主机: ' + window.location.host, 'info');
        debugLog('路径: ' + window.location.pathname, 'info');

        // 检测GitHub Pages特征
        if (window.location.hostname.includes('github.io')) {
            debugLog('检测到GitHub Pages环境', 'info');
        } else {
            debugLog('非GitHub Pages环境', 'info');
        }

        // 测试 Jekyll 构建信息
        if (typeof jekyll !== 'undefined') {
            debugLog('检测到 Jekyll 环境变量', 'info');
        } else {
            debugLog('未检测到 Jekyll 环境变量', 'info');
        }
    }

    // CSP和安全策略检测
    function detectSecurityPolicies() {
        debugLog('开始检测内容安全策略...', 'info');

        // 检测CSP头
        const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        const cspStatus = document.getElementById('csp-status');
        const scriptStatus = document.getElementById('script-status');
        const inlineStatus = document.getElementById('inline-status');

        if (cspMeta) {
            debugLog('发现CSP meta标签: ' + cspMeta.content, 'warning');
            if (cspStatus) cspStatus.textContent = 'CSP状态: 存在限制';
        } else {
            debugLog('未发现CSP meta标签', 'info');
            if (cspStatus) cspStatus.textContent = 'CSP状态: 未检测到meta标签';
        }

        // 检测脚本加载状态
        if (scriptStatus) {
            scriptStatus.textContent = '脚本加载状态: 外部脚本已加载';
        }

        // 测试内联脚本执行
        let inlineWorking = false;
        try {
            // 尝试执行简单的内联代码
            eval('inlineWorking = true;');
        } catch (e) {
            debugLog('内联脚本执行受限: ' + e.message, 'error');
        }

        if (inlineStatus) {
            if (inlineWorking) {
                inlineStatus.textContent = '内联脚本状态: 允许执行';
                inlineStatus.style.color = '#28a745';
            } else {
                inlineStatus.textContent = '内联脚本状态: 被CSP阻止';
                inlineStatus.style.color = '#dc3545';
            }
        }

        // 检测是否在GitHub Pages环境
        if (window.location.hostname.includes('github.io')) {
            debugLog('GitHub Pages环境检测: CSP策略通常禁止内联脚本', 'warning');
        }

        debugLog('安全策略检测完成', 'success');
    }

    // 页面可见性变化检测
    function handleVisibilityChange() {
        if (document.visibilityState === 'visible') {
            debugLog('页面变为可见状态', 'info');
        } else {
            debugLog('页面变为隐藏状态', 'warning');
        }
    }

    // 错误捕获
    function handleError(e) {
        debugLog('JavaScript错误: ' + e.message + ' (行: ' + e.lineno + ')', 'error');
    }

    // 主初始化函数
    function init() {
        // 确保DOM已加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePage);
        } else {
            initializePage();
        }

        // 添加其他事件监听器
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('error', handleError);

        debugLog('CV页面JavaScript外部脚本加载完成', 'success');
    }

    // 启动初始化
    init();

})();

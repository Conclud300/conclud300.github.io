
(function() {
    document.title = "Добро пожаловать!";
    
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = '<h2 style="color: blue; text-align: center;">🎉 Сайт загружен! JavaScript работает! 🎉</h2>';
    welcomeDiv.style.padding = '20px';
    welcomeDiv.style.backgroundColor = '#f0f8ff';
    welcomeDiv.style.border = '2px solid blue';
    welcomeDiv.style.borderRadius = '10px';
    welcomeDiv.style.marginBottom = '20px';
    
    document.body.insertBefore(welcomeDiv, document.body.firstChild);
    
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
        }, 300 + index * 200);
    });
    
    const table = document.querySelector('table');
    if (table) {
        table.style.border = '2px solid #333';
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.margin = '20px 0';
        
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.padding = '10px';
            cell.style.border = '1px solid #666';
            cell.style.textAlign = 'center';
        });
    }
    
    const infoBox = document.createElement('div');
    infoBox.innerHTML = `
        <p><strong>Информация:</strong> Этот блок создан через внешний JavaScript файл</p>
        <p>Страница загружена: ${new Date().toLocaleTimeString()}</p>
    `;
    infoBox.style.padding = '15px';
    infoBox.style.margin = '20px 0';
    infoBox.style.backgroundColor = '#e8f5e8';
    infoBox.style.border = '1px solid #4CAF50';
    infoBox.style.borderRadius = '5px';
    
    document.body.appendChild(infoBox);
    
    console.log('✅ Внешний скрипт успешно загружен и выполнен!');
    console.log('🕒 Время загрузки:', new Date().toLocaleTimeString());
    console.log('📊 Количество элементов на странице:', document.querySelectorAll('*').length);
    
})();

function showMessage() {
    alert('Внешний JavaScript файл работает корректно!');
}
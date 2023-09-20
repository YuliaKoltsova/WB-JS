// Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

const localStorageSize = () => {
	const testData = 'a'.repeat(1024 * 1024) // задаём строку данных для теста она равна 1 МБ
	const key = 'testData' // задаём ключ для localStorage
	// try catch для отлова ошибок
	try {
		localStorage.setItem(key, testData); // Пытаемся записать данные в localStorage
		let dataSize = JSON.stringify(localStorage).length; // Считываем данные из localStorage
		localStorage.removeItem(key) // Очищаем тестовые данные из localStorage
		return dataSize; // вывод размера
		// отлов ошибки который возвращает в консоль ошибку и выводит 0
	} catch (error) {
		console.error('LocalStorage не поддерживается или достиг своего предела.')
		return 0
	}
}

// Вызываем функцию и выводим результат
const result = localStorageSize()
console.log(`Максимальный объем данных в localStorage: ${result} байт`)

// Мой результат в браузере Chrome - "Максимальный объем данных в localStorage: 1048591 байт"
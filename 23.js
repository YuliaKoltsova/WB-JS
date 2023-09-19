const formPassword = document.querySelector(".form"); // Находим на странице форму
const checkPasswords = (form) => {
  form.addEventListener("input", (evt) => { // Когда пользователь вводит данные, то: 
    let password = form.querySelector(".password").value; // Берем пароль из формы
    const s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    const b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    const digits = "0123456789"; // Цифры
    const specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    let is_s = false; // Есть ли в пароле буквы в нижнем регистре
    let is_b = false; // Есть ли в пароле буквы в верхнем регистре
    let is_d = false; // Есть ли в пароле цифры
    let is_sp = false; // Есть ли в пароле спецсимволы
    
  for (let i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
      else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
      else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
      else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }
    let rating = 0;
    let text = "";
    let improvements = "";
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    //Всего уровней ретинга 4 - от 1 до 4, где 1 - простой пароль, 4 - сложный

    // Далее анализируем длину пароля и полученный рейтинг, и на основании этого выводим описание сложности пароля и предложение по улучшению пароля
    if (password.length < 6 && rating < 3) { // Если пароль короткий (меньше 6 символов) и с низким рейтингом, то
      text = "Простой";
      improvements = "Увеличьте длину пароля";
    } 
    else if (password.length >= 6 && rating == 1) { // Если пароль нормальный по длине и с низким рейтингом(1), то
      text = "Простой";
      improvements = "Добавьте символы в разных регистрах, цифры и спецсимволы";
    }
    else if (password.length < 6 && rating >= 3) { // Если пароль короткий (меньше 6 символов) и с хорошим рейтингом(3 или 4), то
      text = "Средний";
      improvements = "Увеличьте длину пароля";
    }
    else if (password.length >= 8 && rating < 3)  { // Если пароль хороший по длине (>= 8 символов) и с низким или средним рейтингом(1 или 2), то
      text = "Средний";
      improvements = "Добавьте символы в разных регистрах, цифры и спецсимволы";
    }
    else if (password.length >= 6 && rating > 1 && rating < 4) { // Если пароль нормальный по длине (>= 6 символов) и с средним рейтингом(2 или 3), то
      text = "Средний";
      improvements = "Добавьте символы в разных регистрах, цифры и спецсимволы";
    }
    else if (password.length >= 8 && rating >= 3) { // Если пароль хороший по длине (>= 8 символов) и с хорошим рейтингом(3 или 4), то
      text = "Сложный";
      improvements = "Хороший пароль";
    }
    else if (password.length >= 8 && rating == 4) { // Если пароль хороший по длине (>= 8 символов) и с самым высоким рейтингом(4), то
      text = "Сложный";
      improvements = "Надежный пароль";
    }
    console.log(text); // выводим сложность пароля
    console.log(improvements); // выводим предложение по улучшению пароля
    return false; // Форму не отправляем
  })
}

checkPasswords(formPassword);
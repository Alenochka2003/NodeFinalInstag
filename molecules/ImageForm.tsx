import React, { useState } from "react"; // Добавляем явный импорт React
import { $api } from "../utils/api";

export const ImageForm = () => {
  const [file, setFile] = useState<File | null>(null); // Уточняем тип состояния
  const [filePath, setFilePath] = useState<string>(""); // Приводим к явному строковому типу

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.error("Файл не выбран");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await $api.post("/post", formData); // Используем await вместо then
      setFilePath(res.data.url); // Устанавливаем путь к файлу
    } catch (error) {
      console.error("Ошибка загрузки файла:", error); // Обработка ошибок
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        onChange={(e) => setFile(e.target.files?.[0] || null)} // Учитываем возможность отсутствия файлов
        type="file"
        accept="image/*"
      />
      <button type="submit">Отправить картинку</button>
      <span>URL до картинки: {filePath}</span>
    </form>
  );
};

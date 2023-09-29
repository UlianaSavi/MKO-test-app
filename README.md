# MKO Table

Проект сгенерирован при помощи [Angular CLI](https://github.com/angular/angular-cli) версии 16.2.3.

## Клонирование репозитория и нужная ветка:

```
git clone https://github.com/UlianaSavi/MKO-test-app
```

```
cd MKO-test-app
```
```
git switch develop
```

## Запуск приложения и json сервера:

```
npm i
```

```
npm run start
```
### URLS:
`http://localhost:3000/` - Server
`http://localhost:4200/` - Angular app

### Идея реализации настраиваемой таблицы из конфига:
Столбцы компоненты таблицы должны генерироваться динамически, в зависимости
от передаваемых из конфига полей.
То есть это должен быть цикл for для генерации заголовка таблицы и для внутренних колонок таблицы,
Конфиг должен содержать подобную, расширяемую структуру:

```
{
  "columns": [
    {
      "title": "id",
      "isVisible": "true"
    },
    {
      "title": "username",
      "isVisible": "true"
    },
    {
      "title": "datetime",
      "isVisible": "true"
    },
    {
      "title": "message",
      "isVisible": "true"
    }
  ]
}
```

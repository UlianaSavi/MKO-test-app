# MKO Table

Проект сгенерирован при помощи [Angular CLI](https://github.com/angular/angular-cli) версии 16.2.3.

## Сконирование репозитория и нужная ветка:

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

### "Настраивамая таблица из конфига"
Если честно я поздно заметила этот пункт в ТЗ, в противном случае закладывала бы слегка другую архитектуру.
Я знакома с паттерном Server Driven UI, с различным подходами к этому, и в зависимости от масштабов приложения
к этому можно подойти по разному, от разбиения отдельных сложных частей, до какого общего формата для всех экранов.

```
{
  "columns": [
    {
      "title": "ID"
      "key": "id",
      "isVisible": "true"
    },
    {
      "title": "Имя"
      "key": "username",
      "isVisible": "true"
    },
    {
      "title": "Дата"
      "key": "datetime",
      "isVisible": "true"
    },
    {
      "title": "Сообщение"
      "key": "message",
      "isVisible": "true"
    }
  ]
}
```

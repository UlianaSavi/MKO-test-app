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


### Настройка таблицы из конфига:
В `db.json` есть `table-config`. Это объект с полями для настройки отображения таблицы.
Для того, чтобы изменить видимость полей нужно изменить поле `"isVisible": "true"` || `"isVisible": "false"`
Еще возможность изменить последовательность колонок, путем изменения их последовательности в `"columns"` в том же `table-config`.

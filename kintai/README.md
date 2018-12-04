# Kintai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.


# jobcan
https://ssl.jobcan.jp/login/client/
勤怠管理ID: sysplanet
グループ管理者ログインID: admin
パスワード: jobcan1234

## backend
（初回のみ）
npm install -g nodemon
（MySQLアカウント設定）
./backend/.env

expressサーバ起動
cd ./backend
npm run start

## master admin
開発サーバ起動
npm run start:master

ファイルの場所
./src/server.ts
./src/cron.ts

http://127.0.0.1:4200

## admin
開発サーバ起動
npm run start:admin

ファイルの場所
./projects/admin/src/

http://127.0.0.1:4201

## user
開発サーバ起動
npm run start:user

ファイルの場所
./projects/user/src/

http://127.0.0.1:4202


## shared lib
./projects/shared/src/


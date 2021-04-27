# Reacy-backend
基于Eggjs与Vue的后台管理系统快速开发框架

## QuickStart

### Mysql 
1、新建mysql配置文件my.cnf放在/usr/local/docker/mysql/conf文件夹下
```
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
collation-server=utf8_general_ci
character-set-server=utf8
init-connect='SET NAMES utf8'
```

2、启动
```
docker run -p 3306:3306 --name mysql \
-v ~/docker/mysql/conf:/etc/mysql \
-v ~/docker/mysql/logs:/var/log/mysql \
-v ~/docker/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql:5.7.34
```
```
docker 内查看
docker exec -it mysql bash
mysql -u root -p123456
```


### Redis
```
docker run \
-p 6379:6379 \
-v ~/docker/redis/data:/data  \
--name redis \
-d redis:latest redis-server --appendonly yes
```

2、新增迁移文件
npx sequelize migration:generate --name='迁移文件名'
编辑database/migrations下的文件
执行迁移 npx sequelize db:migrate
执行迁移回滚 npx sequelize db:migrate:undo

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Migration
1、首次运行 npm run db:create reacy 创建数据库
2、执行migrate: npm run migrate 
3、插入seed数据 npm run seed

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
## Getting Started

First, run the development server:

```bash
yarn install

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 启动数据库

```bash
mkdir database

docker run -v "PATH/database/":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=vino -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres
#PATH:项目根目录绝对路径(docker windows)

#进入数据库
docker exec -it [id] bash

#一些postgres命令
\l #list database
\c  # connect to database
\dt # display table

# 创建数据库
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
CREATE DATABASE blog_production ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
CREATE DATABASE blog_test ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

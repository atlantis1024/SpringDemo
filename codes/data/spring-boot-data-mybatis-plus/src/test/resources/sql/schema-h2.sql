-- -------------------------------------------------------------------
-- 运行本项目的初始化 DDL 脚本（H2 SQL）
-- H2 知识点可以参考：
-- https://dunwu.github.io/db-tutorial/#/sql/h2
-- -------------------------------------------------------------------

-- 强制新建用户表
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id       INT IDENTITY NOT NULL COMMENT 'ID',
    username VARCHAR(30)  NOT NULL COMMENT '用户名',
    password VARCHAR(60)  NOT NULL COMMENT '密码',
    email    VARCHAR(100) NOT NULL COMMENT '邮箱',
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
);

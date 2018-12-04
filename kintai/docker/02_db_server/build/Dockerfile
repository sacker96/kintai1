#### CentOS7.x MariaDBイメージ作成 Dockerfile

### 使用イメージ
FROM centos7jp:base

### 作成者
MAINTAINER GKLINE@hamada-k <hamada-k@gkline.co.jp>

### 初期設定
ENV USRNAME="gk01usr"
USER root
COPY MariaDB.repo /etc/yum.repos.d
COPY server.cnf /tmp
COPY mysql_secure_installation.sql /tmp
RUN \
yum clean all && \
yum -y update

### MariaDB 公式リポジトリの設定とインストール
##- server.cnfの設置と起動スクリプトの編集(systemctlリダイレクト回避)
##- および MariaDBの起動、mysql_secure_installation相当のSQLコマンド実施
RUN \
rpm --import https://yum.mariadb.org/RPM-GPG-KEY-MariaDB && \
yum -y install MariaDB-common MariaDB-devel MariaDB-shared MariaDB-compat MariaDB-server MariaDB-client && \
mv -f /etc/my.cnf.d/server.cnf{,_orig} && \
mv /tmp/server.cnf /etc/my.cnf.d/ && \
sed -i -e "2i SYSTEMCTL_SKIP_REDIRECT=1" /etc/init.d/mysql && \
/etc/init.d/mysql start && \
mysql -u root < /tmp/mysql_secure_installation.sql && \
rm -f /tmp/mysql_secure_installation.sql
USER $USRNAME


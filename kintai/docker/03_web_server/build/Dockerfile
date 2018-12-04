#### CentOS7.x WebServerイメージ作成 Dockerfile

### 使用イメージ
FROM centos7jp:base

### 作成者
MAINTAINER GKLINE@hamada-k <hamada-k@gkline.co.jp>

### 環境変数の定義
ENV USRNAME="gk01usr"
ENV HOSTNAME01="test-kintai-web.gkline.co.jp"
ENV NODEDIR="/var/data/node_apps"
ENV EXPRESSDIR="KintaiSys"
ENV CERTBOTLIBDIR="/var/lib/letsencrypt"
ENV CERTBOTLOGDIR="/var/log/letsencrypt"

### Yum関連の設定
USER root
COPY nginx.repo /etc/yum.repos.d
RUN \
curl -sL https://rpm.nodesource.com/setup_8.x | sudo bash - && \
sed -i -e "s/\]$/\]\npriority=6/g" /etc/yum.repos.d/nodesource-el7.repo && \
rpm --import file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7 && \
rpm --import file:///etc/pki/rpm-gpg/NODESOURCE-GPG-SIGNING-KEY-EL && \
yum clean all && \
yum -y update

### Nginx 公式リポジトリの設定とインストール
RUN \
yum -y install nginx httpd-tools certbot && \
mkdir -p /usr/share/nginx/$HOSTNAME01 && \
mkdir -p /etc/nginx/ssl/$HOSTNAME01 && \
mkdir -p /etc/nginx/.basicauth/$HOSTNAME01 && \
mkdir -p /usr/local/bin/scripts && \
openssl dhparam -out /etc/nginx/ssl/dhparam.pem 2048 && \
##- Let's Encrypt 関係のディレクトリ作成 (初回のみ)
if [ -e $CERTBOTLIBDIR/.well-known ]; then : ; else mkdir -p $CERTBOTLIBDIR/.well-known; fi && \
if [ -e $CERTBOTLOGDIR ]; then : ; else mkdir -p $CERTBOTLOGDIR; fi && \
chmod g+s /var/lib/letsencrypt && \
chown -R $USRNAME:$USRNAME /var/lib/letsencrypt && \
chown -R nginx:nginx /var/log/letsencrypt

### コンフィグファイルの設置と起動スクリプトの編集
RUN \
mv -f /etc/nginx/nginx.conf{,_orig} && \
mv -f /etc/nginx/conf.d/default.conf{,_orig}
COPY nginx.conf /etc/nginx
COPY ssl-config.conf /etc/nginx/conf.d
COPY vhost-tpl.conf /etc/nginx/conf.d/vhost-$HOSTNAME01.conf
COPY $HOSTNAME01.crt /etc/nginx/ssl/$HOSTNAME01
COPY $HOSTNAME01.key /etc/nginx/ssl/$HOSTNAME01
COPY .htpasswd /etc/nginx/.basicauth/$HOSTNAME01
COPY nginx /etc/init.d
COPY nginx-debug /etc/init.d
RUN \
chmod 604 /etc/nginx/.basicauth/$HOSTNAME01/.htpasswd && \
sed -i -e "s/XXXXX/$HOSTNAME01/g" /etc/nginx/conf.d/vhost-$HOSTNAME01.conf && \
chmod +x /etc/init.d/nginx && \
chmod +x /etc/init.d/nginx-debug

### kintai system
COPY pm2-root /tmp
RUN yum -y install nodejs mysql
RUN npm install -g pm2 ts-node typescript tslib
RUN npm install tslib
RUN mkdir -p $NODEDIR/backend
COPY .env $NODEDIR/backend/.env
COPY backend/package.json $NODEDIR/backend/package.json
COPY backend/package-lock.json $NODEDIR/backend/package-lock.json
RUN cd $NODEDIR/backend && npm install
COPY backend $NODEDIR/backend
RUN cd $NODEDIR/backend && pm2 start pm2.config.js && pm2 save && mv -f /tmp/pm2-root /etc/init.d/ && chmod +x /etc/init.d/pm2-root && touch /var/lock/subsys/pm2-root
COPY master $NODEDIR/master
COPY admin $NODEDIR/admin
COPY user $NODEDIR/user

### node.js & Express & GraphQL のインストール
#COPY pm2-root /tmp
#COPY pm2-config.json /tmp
#COPY gqlserver.js /tmp
#RUN \
#yum -y install nodejs && \
#npm update npm -g && \
#mkdir -p $NODEDIR && \
#cd $NODEDIR && \
#npm install express express-generator pm2 -g --save && \
#express -e $EXPRESSDIR && \
#cd $EXPRESSDIR && \
#npm install && \
#npm install graphql graphql-tools express-graphql apollo-server-express body-parser && \
#mv -f /tmp/pm2-config.json ./pm2-config.json && \
#mv -f /tmp/gqlserver.js ./gqlserver.js && \
#chown -R $USRNAME:$USRNAME $NODEDIR && \
#cd $NODEDIR/$EXPRESSDIR && \
#pm2 start pm2-config.json && \
#pm2 start gqlserver.js && \
#pm2 save && \
#mv -f /tmp/pm2-root /etc/init.d/ && \
#chmod +x /etc/init.d/pm2-root && \
#touch /var/lock/subsys/pm2-root

USER $USRNAME

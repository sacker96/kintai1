#### CentOS7.x 日本語化済みベースイメージ作成 Dockerfile

### 使用イメージ
FROM centos

### 作成者
MAINTAINER GKLINE@hamada-k <hamada-k@gkline.co.jp>

### セキュリティ関連の設定

##- rootユーザにランダムなパスワードを設定
#--rootユーザ自体はログイン不可とする
RUN \
rpm --import file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7 && \
yum -y install expect && \
mkdir -p /root/.mkpd -m 700 && \
mkpasswd -2 -c 5 -l 20 -s 3 > /root/.mkpd/random.txt && \
chmod 600 /root/.mkpd/random.txt && \
cat /root/.mkpd/random.txt|passwd --stdin root && \
usermod -L root

##- Sudoの設定 
##- ※wheelグループに所属しているユーザはsudo（パスワードなし）を使用可能にする
RUN \
yum -y install sudo && \
sed -i -e 's/^# \(%wheel.ALL=(ALL).NOPASSWD: ALL\)$/\1/' /etc/sudoers

##- 一般ユーザの作成
#-- 一般ユーザにランダムなパスワードを設定
ENV USRNAME="gk01usr"
RUN \
useradd $USRNAME && \
usermod -G wheel $USRNAME && \
mkdir -p /home/$USRNAME/.mkpd -m 700 && \
mkpasswd -2 -c 5 -l 20 -s 3 > /home/$USRNAME/.mkpd/random.txt && \
chown -R $USRNAME:$USRNAME /home/$USRNAME/.mkpd && \
chmod 600 /home/$USRNAME/.mkpd/random.txt && \
cat /home/$USRNAME/.mkpd/random.txt|passwd --stdin $USRNAME

### Yum関連の設定
RUN \
yum -y install yum-plugin-priorities && \
cp -av /etc/yum/pluginconf.d/fastestmirror.conf{,_orig} && \
sed -i -e 's/include_only/#include_only/g' /etc/yum/pluginconf.d/fastestmirror.conf && \
echo "include_only=.jp" >> /etc/yum/pluginconf.d/fastestmirror.conf && \
echo "prefer=ftp.riken.jp" >> /etc/yum/pluginconf.d/fastestmirror.conf && \
sed -i -e "s/\]$/\]\npriority=1/g" /etc/yum.repos.d/CentOS-Base.repo && \
yum -y install epel-release && \
sed -i -e "s/\]$/\]\npriority=10/g" /etc/yum.repos.d/epel.repo && \
yum clean all && \
yum makecache && \
yum -y update

### 基本ツール/日本語化/テキストエディタの設定

##- 基本ツールとVimのインストール
COPY vimcustom.txt /tmp/
RUN \
yum -y install vim-enhanced gcc git wget gzip which iputils iprutils iproute net-tools && \
cat /tmp/vimcustom.txt >> /root/.vimrc && \
touch /home/$USRNAME/.vimrc && \
cat /tmp/vimcustom.txt >> /home/$USRNAME/.vimrc && \
chown $USRNAME:$USRNAME /home/$USRNAME/.vimrc && \
rm -f /tmp/vimcustom.txt

##- ロケールとタイムゾーンの設定
RUN \
yum -y reinstall glibc-common && \
yum -y install kbd && \
yum clean all && \
localedef -f UTF-8 -i ja_JP ja_JP.UTF-8 && \
echo 'ZONE="Asia/Tokyo"' > /etc/sysconfig/clock && \
mv -f /etc/localtime{,_orig} && \
ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
echo 'LANG="ja_JP.UTF-8"' >  /etc/locale.conf && \
echo 'KEYMAP="jp106"' > /etc/vconsole.conf
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

##- manの日本語化
RUN \
sed -i -e"s/^tsflags=nodocs/\# tsflags=nodocs/" /etc/yum.conf && \
yum -y install manl man-pages.noarch man-pages-ja.noarch

##- /root/.bashrc | /home/$USRNAME/.bashrc に追記
COPY bashrc /tmp/
RUN \
cat /tmp/bashrc >> /root/.bashrc && \
cat /tmp/bashrc >> /home/$USRNAME/.bashrc && \
rm -f /tmp/bashrc

##- 一般ユーザに切替
USER $USRNAME


UPDATE mysql.user SET Password=PASSWORD('b!RKd#PnSLEFBt4s3p2GUg5MyxT.Hmu@fZw') WHERE User='root';
DELETE FROM mysql.user WHERE User='';
DROP DATABASE test;
DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%';
GRANT all ON *.* TO root@'kintai-system_web_1.kintai-system_default' IDENTIFIED BY 'b!RKd#PnSLEFBt4s3p2GUg5MyxT.Hmu@fZw';
FLUSH PRIVILEGES;

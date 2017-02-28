# Deploy TC-Website With TC-Informix Container
## System Requirement
This setup run on this environment:
- Ubuntu 16.04
- Oracle Jdk 8
- Jboss-4.0.4
- Informix 11.5
- docker 1.13 
_Setup on different platform require platform specific adjusment_

## Preparing system
- Install required software.
```
sudo apt-get update
sudo apt-get install build-essential git
```

- Install Apache httpd 2.2.15
```
wget https://archive.apache.org/dist/httpd/httpd-2.2.15.tar.gz
tar xvfz httpd-2.2.15.tar.gz
cd httpd-2.2.15
./configure
make 
sudo make install
```
Apache httpd will be installed under ```/usr/local/apache2```

- Install tomcat connector
```
wget http://www-eu.apache.org/dist/tomcat/tomcat-connectors/jktomcat-connectors-1.2.42-src/tomcat-connectors-1.2.42-src.tar.gz
tar xvfz tomcat-connectors-1.2.42-src.tar.gz
cd tomcat-connectors-1.2.42-src
./configure -with-apxs=/usr/local/apache2/bin/apxs
make
sudo make install
```

- Install docker
Please follow this official step:
https://docs.docker.com/engine/installation/linux/ubuntu/

- Install JDK-8
Download JDK8 from here:
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html. Extract the downloaded file and move jdk directory to ```/opt```. The result jdk  will point to  something like ```/opt/jdk1.8.0_121```

- Install Apache Maven
Download from here http://apache-mirror.rbc.ru/pub/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip 
Extract the downloaded file and move maven directory to ```/opt```. And Apache maven will sit on ```/opt/apache-maven-3.3.9```

- Install Jboss-4.0.4-GA
Download from here https://sourceforge.net/projects/jboss/files/JBoss/JBoss-4.0.4.GA/ And extract the dowloaded file.

- Clone ```tc1-tcnode``` repo:
```
git clone https://github.com/appirio-tech/tc1-tcnode.git
```

## Configuring
> Note for *Windows* environment:
> 
> - Use *forward slash (/)* to point path for variable ```PROJECT_HOME``` and ```JBOSS_HOME```. 
> > Example for setting up enviroment variable: ```SET PROJECT_HOME="C:/Users/me/project/tc1-tcnode```
> 
> -  Use *forward slash (/)* to point path on apache ```httpd.conf``` and ```tc-ears/main/src/main/resources/ApplicationServer.properties```
> 
> - Environment variable should be surrounded by ```%```
> > Example: ```mvn clean package -Pmain -Dproject-path=%PROJECT_HOME%```

- Configuring environment variables
Add these line at the bottom of ```$HOME/.bashrc```
*NOTE. You need to adjust it with your environment*
```
export JAVA_HOME=/opt/jdk1.8.0_121
export PATH=$JAVA_HOME/bin:/opt/apache-maven-3.3.9/bin:/usr/local/apache2/bin:$PATH
```

Apply it by executing:
```
source ~/.bashrc
```
- (Optional) Set these enviroment variables by executing
```
export PROJECT_HOME=<full path to tc1-tcnode>
export JBOSS_HOME=<full path to jboss installation>
```
- Edit ```$PROJECT_HOME/src/main/resources/apache/httpd.conf```
```
<VirtualHost *:80>
...
	DocumentRoot <full-path-to_$PROJECT_HOME/tc-wars/static/src/main/webapp>
```

copy ```src/main/resources/apache/*.conf``` to ```/usr/local/apache2/conf```

```
sudo cp $PROJECT_HOME/src/main/resources/apache/*.conf /usr/local/apache2/conf
```

- Edit ```$JBOSS_HOME/server/all/deploy/jbossweb-tomcat55.sar/conf/web.xml```
Uncomment these lines:
```
<init-param>
         <param-name>compilerSourceVM</param-name>
         <param-value>1.5</param-value>
</init-param>

```
- Delete following files from local JBoss server installation:
```$JBOSS_HOME/server/all/lib/hibernate3.jar```

- Edit ```$PROJECT_HOME/tc-ears/main/src/main/resources/ApplicationServer.properties```. You may need to change the following fields:
```
SERVER_NAME - A domain name or IP-address for host running the JBoss server
instance
BASE_DIR - An absolute path to $PROJECT_HOME/src/main directory
DISTRIBUTED_UI_SERVER_NAME - same as SERVER_NAME
```

- (Optional) Edit ```$PROJECT_HOME/tc-ears/main/src/main/resources/cache.properties```
If you want run caching (i.e with redis backend).

- (Optional) Edit ```$PROJECT_HOME/tc-ears/main/src/main/resources/EmailEngineConfig.properties``` and ```$PROJECT_HOME/tc-ears/main/src/main/resources/com/topcoder/message/email/EmailEngine.xml```
If you have smtpd running.

- Edit ```/etc/hosts``` Add these lines
```
127.0.0.1 local.topcoder.com
127.0.0.1 local.cloud.topcoder.com
127.0.0.1 local.tc.cloud.topcoder.com
127.0.0.1 local.studio.cloud.topcoder.com
127.0.0.1 local.env.cloud.topcoder.com
<tc-informix contaner ip addr> env.topcoder.com
127.0.0.1 local.cockpit.cloud.topcoder.com
127.0.0.1 local.tcs.cloud.topcoder.com
```

> NOTE
> use ```docker inspect tc-informix ``` after tc-informix running to find its ip addresss
## Build And Deploy
Under $PROJECT_HOME
```
#build
mvn clean package -Pmain -Dproject-path=$PROJECT_HOME
#copy resource to jboss
mvn resources:copy-resources -Pdeploy -Djboss-home=$JBOSS_HOME
#copy informix driver to jboss
mvn resources:copy-resources -Pinit -Djboss-home=$JBOSS_HOME
#deploy
mvn jboss:hard-deploy -Pdeploy -Djboss-home=$JBOSS_HOME
```
## Run
- Run tc-informix container
```
docker run -d -p 2021:2021  --name tc-informix appiriodevops/informix:cbbd0fa
```

- (Optional) Run redis container
```
docker run -d -p 6379:6379 --name redis redis
```

- Start Apache
```
sudo apachectl -k start
```
- Run jboss
```
cd $JBOSS_HOME/bin
./run.sh -c all
```

## Verification

see ```Verification.pdf``` for detail.








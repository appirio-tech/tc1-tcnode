# tc1-tcnode
This is repository for tc web (http://community.topcoder.com/tc).


## Environment:

### JRE 1.8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### Apache HTTP Server 2.2.15 (https://archive.apache.org/dist/httpd/binaries/)

Select binary suitable for your platform and install the server to $APACHE_HOME directory.

Download archive for mod_jk module for Apache HTTP Server suitable for your platform from http://www-eu.apache.org/dist/tomcat/tomcat-connectors/jk/binaries/

Copy mod_jk.so file extracted from the downloaded archive to $APACHE_HOME/modules directory.

Update $PROJECT_HOME/src/main/resources/apache/httpd.conf file to set the parameters as follows:

Replace all occurrences of "C:/Program Files (x86)/Apache Software Foundation/Apache2.2" with value of $APACHE_HOME

Set the value of VirtualHost - DocumentRoot parameter to $PROJECT_HOME/tc-wars/static/src/main/webapp

Copy both .conf files from $PROJECT_HOME/src/main/resources/apache directory to $APACHE_HOME/conf directory.


### JBoss 4.0.4.GA (https://sourceforge.net/projects/jboss/files/JBoss/JBoss-4.0.4.GA/)

Select jboss-4.0.4.GA.zip for download and unpack it's content to some directory

### Maven 3.3.9 (http://apache-mirror.rbc.ru/pub/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip)

### Informix DS 11.0
Select Informix Developer Edition 11.50.FC9DE distribution suitable to your platform.

## Build

`mvn clean package -Pmain -Dproject-path=<$PROJECT_HOME>` – compiles and builds the application archives.

`mvn jboss:hard-deploy -Pdeploy -Djboss-home=<$JBOSS_HOME>` - copies the generated EAR files to destination directory for deployment to JBoss server

`mvn resources:copy-resources -Pdeploy -Djboss-home=<$JBOSS_HOME>` - copies the configuration files to destination directory for deployment to JBoss server

`mvn resources:copy-resources -Pinit -Djboss-home=<$JBOSS_HOME>` - copies the Informix JDBC driver to destination directory for deployment to JBoss server


## Deployment

Checkout the code from GitHub repository to local machine into $PROJECT_HOME directory

If necessary set configuration parameters suitable for your environment (see section 2.1)

Add following lines to system's hosts file if you want to use the hosts set by the initial configuration provided by submission:

127.0.0.1 local.topcoder.com

127.0.0.1 local.cloud.topcoder.com

127.0.0.1 local.tc.cloud.topcoder.com

127.0.0.1 local.studio.cloud.topcoder.com

127.0.0.1 local.env.cloud.topcoder.com

127.0.0.1 local.env.topcoder.com

127.0.0.1 local.cockpit.cloud.topcoder.com

127.0.0.1 local.tcs.cloud.topcoder.com

Delete following files from local JBoss server installation:

`$JBOSS_HOME/server/all/lib/hibernate3.jar`

Copy Informix JDBC driver file to $JBOSS_HOME/server/all/lib directory:

`mvn resources:copy-resources -Pinit -Djboss-home=<$JBOSS_HOME>`

Uncomment compilerSourceVM initial parameter in org.apache.jasper.servlet.JspServlet servlet class definition 
in `$JBOSS_HOME\server\all\deploy\jbossweb-tomcat55.sar\conf\web.xml`

Copy configuration files to JBoss server:

`mvn resources:copy-resources -Pdeploy -Djboss-home=<path to JBoss server installation directory>`

Build the applications:

`mvn clean package -Pmain -Dproject-path=<absolute path to $PROJECT_HOME directory>`

Copy generated EAR files and data sources configuration file to JBoss server for deployment:

`mvn jboss:hard-deploy -Pdeploy -Djboss-home=<path to JBoss server installation directory>`



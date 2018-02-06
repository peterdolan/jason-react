How we set up this website:

* Get domain (godaddy)
* Create EC2 instance
* on EC2 instance, setup apache web server and run sudo service httpd start (https://www.datasciencebytes.com/bytes/2015/02/24/running-a-flask-app-on-aws-ec2/)
* https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html
* Created a hosted zone
* Created record set within hosted zone that pointed to ec2 DNS
* Posted nameservers from route53 hosted zone into godaddy dns management

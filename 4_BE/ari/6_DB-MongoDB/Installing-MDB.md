# Installing MongoDB Windows

Head over to [mongodb](https://www.mongodb.com/try/download/community-kubernetes-operator) downloads website, Select version 4.0.28, your platform and package select msi. Click download.

Open Install wizzard click next, accept license and choose complete installation, leave everything here default but copy the Data Directory and save it somewhere
should be something like this ```C:\Program Files\MongoDB\Server\4.0\data\```
. Uncheck Install MongoDB Compass finally Install.

After Installation is complete:

In your root(C:) drive create a new folder called data, inside the data folder create a new folder and name it db

## Setup

open bash type: cd ~

next: touch .bash_profile

check with: ls -a , if .bash_profile exists

next: vim .bash_profile

press: i

paste this: 

```
alias mongod="/c/Program\ files/MongoDB/Server/4.0/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe"
```

press esc

type: :wq!

close the bash terminal and relaunch it

type: mongo --version if you see something congrats
if it didn't work retry
## What Features do orchestration tools offer?

High Availability or no downtime - always accessible by the users

Scalability or high performance - loads fast, high responce rates

Disaster recovery - has mechanism to backup and restore (can run from the latest state after recovery)


### Node and Pod
Node is a simple server
Pod smallest unit 

You only interact with the Kubernetes Layer

Everything comes into Nodes like your APP Container or database or both together

Usually 1 application per Pod, Single pod can host more than one containers

each pod gets it's own IP, can communicate with each other like myapp can communicate with db

Pods are affimiral which means they can die easily if db crashed or app crashed the db(like ran out of resources) it will get a new ip address

## SERVICE

Static/ Permanent IP Address 
MyAPP will have it's own service and DB will have it's own one

Service and Pod are not connected so if pod dies the IP Address remains

## External Service
app will be accessible trough browser 

## Internal Service
your DB will be stored there and is protected so no one can access it

## INGRES
e.x. http://124.89.101.2:8080 IP is the Node IP but you want https://customurl.com that's where Ingres comes


ReplicaSet

### ConfigMap and Secret
NORMALLY>
re-build
push to repo
pull it in your pod

#ConfigMap: 
external configuration of your application like urls and other (DB_URL=mongo-db-service) like env you wont have to build new image etc
same for db like env store user and passwords(don't put credentials into configmap tho)

#Secret
just like configmap but used to store secret data like credentials and encoded in base64
use environmentaal variables or as properties file

### Data Storage
if the db gets restarted data would be gone
## Volumes
it attaches a physical storage on a hdd to your pod
HDD can be local(same place where pod is running)
Or it can be remote outside of k8s(kubernetes cluster) can be cloud or own premise storage
now when it gets restarted data won't be reset
you have to backup data etc yourself

persistent volume,persistent volume claim und storage class
ich brauch z.b 5gb im speicher, wird am container angehängt


### statful state and deployment

what happens if pod dies with application?
instead of relying on one db pod and one app pod we need to replicate everything on multiple nodes
Node 2 containing my-app with loadbalancer
you would define a blueprint of that pod called Deployment

What about the DB?
we can't replicate db with deployment cause db has a state (they would need to share same storage, mechanism which pod is writing and reading to avoid data inconcistenc)
##StatefulSet
meant for databases mysql mongodb etc
scales them up or down but makes sure everything is in synch so no inconcistencies are offered.
statefulSet is more complicated
that's why DB are often hosted outside of k8s cluster
statt daten im container, hast im external storage, vorteil wenn pods sterben. app weg, kannst einfach neu fahren

Now even if node 1 dies the 2nd node will take over and will be accessible


### K8s Architecture
My app will forward ports to db in same node
kubeltet,kube proxty and container runtime must be installed
HOW TO? schedlue pod? monitor? re-schedlue/ restart pod? join new node?
Managing are done by master nodes

## Master Nodes
have 4 processes run on every master node,control worker nodes
1. api server
user wants to deploy new app, you have to interact the api server using client, ui, command tool or kubernetes api
basically cluster gateway and acts as a gatekeeper for auth

2. scheduler
if you want to schedule new pod it sends request to api sever then scheduler.
scheduler has intelligent deciding where to pud the pod
it will check how much new pod needs recourses and then assign to node that has least percentage of usage
it only decides and kublet executes request

3. controller manager
what happens if pods die in any node
it detecs cluster state chyanges like crashing
it tries to recover cluster state
makes request to scheduler which worker nodes need to restart the pod

4. etcd is the cluster brain,key value store
all of the changes get stored and saved in etcd example pod dies or schedlues get stored in etcd
works cause of its data
how does scheduler know what resources are available?
how does controller manage know if the cluster state changed? ex pods died or restarted
if the api server is healthy
tl;dr ist datenbank, key value store, aktueller zustand der cluster wird gespeichert
schaut wie er alles auslasten kann

app data is not stopred in etcd
just cluster state info

same as normal mode master nodes have multiple ones
api server is load balanced
etcd store forms a distributed storage for all master nodes

### Example cluster set up
for a small set up
  2 master nodes and 3 worker nodes
cpu ram and storage differ between master and worker nodes

master are more important but have less load of work hence less resources
worker nodes do actual job running pods with containers inside hence more resources

**in existing application you can easily add new master and node servers**

### new master node
1. get new bare server
2.install all the master/worker node processes
3. add it to kubernetes cluster
### new worker node
same way


### MINIKUBE KUBECTL

### minikube
to save recourses or if your pc is weak
master processes and worker processes will run on same node and docker container will be pre installed
will run trough a virtual box or other hypervisor(means virtual os on your machine like linux etc)
creates virtual box on your laptop
node runs in the virtual box
1 Node k8s cluster
for testing purposes on your local machine

### kubectl
to interact with the cluster and create pods etc
command line tool for k8s cluster
api server is main entery point in the cluster
you can talk to api server via ui, api or cli
kubectl is the most powerful one from above

Kubectl isn't only for minikube cluster works on normal cloud cluster(multiple master and worker nodes) aswell


persisten volume ist kleines teil des storages z.b aws blog storage ist 1tb und brauchst 2gb
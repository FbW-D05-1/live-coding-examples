# Problem:
linux node and docker if more users use we need to scale with same application we are running using containers
if we get v2.0 that we want to deploy we have to create new node etc...

## the problem will be insane amount of cores and ram for 3 containers

this is where kubernetes will come
will use single node and utilize resources in correct manner.

will fill containers with as many pods as it can

instead of having 1 container for multiple nodes

# application orchestrator

## kubernetes orchastrates all applications/ containers

deploys and manages containers
scales up and down according to demand
zero downtime deployments
and more

# CLUSTER
is a set of nodes
NODE can be a vm or physical machine

# kubernetes Cluster
master node and worker node

master: brains and all decisions
worker: where all the heavy lifting happens i.e running app
master and worker communication via kublic??

# PODS
 a pod is the smallest deployable unit in Kubernetes and not containers

Within every pod there will be one Main Container(container represents your application)
init containers(executed before main container)
side containers(containers that support main container)
Volumes - how containers share data between each other
localhost - communication between each other with uinique ip address




# TO CREATE LOCAL CLUSTER

kubectl - kubecontrol

## create 2 nodes cluster 

minikube start --nodes=2

## check status 

minikube status

## check docker containers

docker ps

## getting current nodes

kubectl get nodes

## all the available pods (-A means getting All)

kubectl get pods -A


## In IDE

create a file deployment.yml

## Deplyment

kubectl apply -f deployment.yml

## listing running services

kubectl get svc

## access the service 

minikube service appnamehere

## stop kub...

kubectl stop (-f FILENAME | TYPE (NAME | -l label | --all))

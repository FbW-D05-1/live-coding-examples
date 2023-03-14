Der Kunde BooksBetter ist nicht sonderlich mit der Konfigurationsmöglichkeit des Deployments mit den Cloud nativen Container Instanzen zufrieden. Es gab intern den Wunsch das Cloud Deployment zu einem Kubernetes nativen Deployment umzubauen. Hierfür wurden folgende Anforderungen ausgearbeitet:

    Es muss ein Kubernetes Cluster in der Cloudumgebung aufgebaut werden
    Zur Provisionierung sollen die vorhandenen Terraform Files angepasst werden
    Folgende Ressourcen sollen für die Applikation angelegt werden
        Deployment
            Pull des Images aus der Container Registry der Cloud Umgebung
            es soll ein Health und Readiness Check auf dem Port der API konfiguriert werden
        Service vom Typ LoadBalancer
            Die API soll weiterhin aus dem Internet erreichbar sein
        Secret für die Datenbank Credentials aus dem entsprechenden Secret Manager der Cloud Umgebung
    Aus dem Architektur Team wurde der Aufbau des Deployments als Helm Chart vorgegeben
        Minimale Variablen für die values.yaml
            Release Name
            Image Name
            Image Tag
            Port
            Service Type
            Secret Reference
    Das Deployment der Helm Charts soll als Teil der Pipeline ausgeführt werden sobald ein Commit verzeichnet wird. Hierfür wurden zwei akzeptable Optionen vorgegeben:
        A: Das Deployment kann als separater Schritt via der Helm CLI ausgeführt werden
        B: Das Deployment kann in Terraform definiert werden. Hierfür soll der Helm Terraform Provider verwendet werden



helm list

kubectl get pod
kubectl describe pod < podnumber >
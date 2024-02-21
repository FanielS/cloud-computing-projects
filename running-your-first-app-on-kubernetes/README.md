
# Running Your First App on Kubernetes

## GitHub Repository
For more resources and code, visit [FanielS/cloud-computing-projects](https://github.com/FanielS/cloud-computing-projects).

## Deployment Process

### 1. Set Up Google Kubernetes Engine API
- Search for "GKE" in the GCP control panel.
- Enable the Google Kubernetes Engine API.

### 2. Open GCP Terminal
- Click on the "Cloud Shell" icon in the top right corner of the webpage to open the GCP terminal.

### 3. Create a Kubernetes Cluster
```bash
gcloud container clusters create kubia --num-nodes=1 --machine-type=e2-micro --region=us-west1
```

### 4. Verify Node Creation
```bash
kubectl get nodes
```
*You should see three nodes being created as shown in the document.*

### 5. Create a Replication Controller Configuration
Create a file named `kubia-rc.yaml` with the following contents:
```yaml
apiVersion: v1
kind: ReplicationController
metadata: 
  name: kubia-rc
spec: 
  replicas: 3
  selector: 
    app: kubia-rc
  template: 
    metadata: 
      name: kubia-rc
      labels: 
        app: kubia-rc
    spec: 
      containers: 
        - name: kubia-rc
          image: faniels/minikube-node-server
          ports: 
            - containerPort: 80
```

### 6. Deploy the Replication Controller
```bash
kubectl create -f kubia-rc.yaml
```

### 7. List All Pods
```bash
kubectl get pods
```

### 8. Expose the Application
```bash
kubectl expose rc kubia-rc --type=LoadBalancer --port 8000
```

### 9. Verify the Service
```bash
kubectl get service
```

### 10. Access the Application
```bash
curl 35.227.175.127:8000
```

#!/bin/bash


# image_tags = ["1.19", "1.21", "1.20"]
image_tag=$1

cat <<EOF > deployment.yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: mern-blog
  name: mern-blog
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: mern-blog
  replicas: 5
  template:
    metadata:
      labels:
        app.kubernetes.io/name: mern-blog
    spec:
      containers:
      - image: hernanku/mern-blog:${image_tag}
        imagePullPolicy: Always
        name: mern-blog
        ports:
        - containerPort: 3000
EOF


# apply deployment
echo "=== deploying simple-blog app version ${image_tag} to eks cluster ==="
kubectl apply -f  namespace.yaml,deployment.yaml,service.yaml








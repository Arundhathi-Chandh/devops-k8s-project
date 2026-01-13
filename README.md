# Cloud-Native DevOps Platform

This repository demonstrates a hands-on DevOps project focused on deploying a containerized Node.js application to Kubernetes on AWS using modern DevOps practices.

## Project Overview
- Containerized a Node.js application using Docker
- Deployed the application to AWS EKS using Kubernetes manifests
- Managed environment-specific configurations using Kustomize overlays
- Exposed the application using Kubernetes Ingress
- Set up basic monitoring using Prometheus and Grafana
- Implemented CI/CD workflows using GitHub Actions (in progress)

## Architecture Flow
Developer → GitHub → GitHub Actions → Docker Image → AWS ECR → AWS EKS → Kubernetes Pods → Ingress → User

## Tech Stack
- Cloud: AWS (EKS, ECR, IAM, VPC)
- Containers: Docker
- Orchestration: Kubernetes
- CI/CD: GitHub Actions
- Monitoring: Prometheus, Grafana

## How to Run (High Level)
1. Build Docker image for the Node.js application
2. Push the image to AWS ECR
3. Apply Kubernetes manifests to EKS cluster
4. Access the application via Ingress endpoint

## DevOps Concepts Demonstrated
- Containerization
- Kubernetes deployments and services
- Ingress-based traffic routing
- Environment management with Kustomize
- Basic observability concepts
- CI/CD automation

## Notes
This is a learning-focused, hands-on implementation to understand real-world DevOps workflows and Kubernetes operations.

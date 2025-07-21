i want you to transform the while projecyt from docker-compose based to skaffold one, which will allow me to build, hot debiug and deploy my application into k8s cluster. it should produce chart for my current service nistead of set of k8s manifests. it should allow custom hooks so that chart will be cusytomizable for me to add custom things. insetad of dockerfole i want yto to introduce cloydnative buildpacks for generating docker image oout pfmy project.jsom and maybe other tequeiremnets files. use besta practices for above. dont delete aexisting code. just add additinal layer

GitHub Copilot
To transform your project from Docker Compose-based to a Skaffold-based workflow with the requirements you listed, here’s what I’ll do:

Introduce Skaffold configuration for building, hot-reloading, and deploying to Kubernetes.
Use Cloud Native Buildpacks (not Dockerfile) for image building.
Generate a Helm chart (not just raw manifests) for your service, so you can customize it and add hooks.
Set up best practices for hot reload, development, and production.
Do not delete existing Docker or Compose files—just add the new layer.
Let’s proceed step by step:

1. Add Skaffold Configuration
Create a skaffold.yaml at the project root.
Configure it to use Buildpacks for image building.
Set up Helm as the deployer, pointing to a new chart directory.
Enable file sync/hot reload for development.
2. Generate a Helm Chart
Scaffold a Helm chart in a new chart/ directory.
The chart will be parameterized for your app and ready for customization.
Add a values.yaml for easy overrides.
3. Add Buildpacks Support
No Dockerfile needed; Buildpacks will detect your Node.js/NestJS app from package.json.
Document how to use Buildpacks for local builds if needed.
4. Allow Custom Hooks
Add Helm chart hooks and a templates/hooks/ directory for custom user logic.
Document how to add custom hooks.
5. Do Not Delete Existing Code
All new files will be additive.
Let’s start by creating the Skaffold config and Helm chart skeleton.
Created skaffold.yaml

Created Chart.yaml

Created values.yaml

Created deployment.yaml

Created service.yaml

Created _helpers.tpl

Created preinstall-job.yaml

Your project is now set up for Skaffold-based Kubernetes development and deployment with the following features:

skaffold.yaml: Configures Skaffold to use Cloud Native Buildpacks for building your image (no Dockerfile needed), and Helm for deploying to your cluster.
Helm chart (nestjs-prisma-swagger-app):
Parameterized for your app, with values.yaml for easy customization.
Includes a templates/hooks/ directory with a sample pre-install hook (you can add more custom hooks as needed).
All manifests are templated, so you can inject custom values, environment variables, and resources.
How to proceed:

Install Skaffold and Helm if you haven't already.
Run skaffold dev to build, hot-reload, and deploy your app to your Kubernetes cluster.
Customize your Helm chart (values.yaml, templates, hooks) as needed for your environment.
Your existing Docker Compose and Dockerfile setup remains untouched, so you can switch between workflows as needed. Let me know if you want a usage guide or further customization!
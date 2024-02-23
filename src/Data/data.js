export const categories = [
  {
    id: 1,
    name: "Pods",
  },
  {
    id: 2,
    name: "Cluster Management",
  },
  {
    id: 3,
    name: "Cluster with Core CLI tools",
  },
  {
    id: 4,
    name: "Alert and Monitoring",
  },
  {
    id: 5,
    name: "Logging and Tracing",
  },
  {
    id: 6,
    name: "Troubleshooting / Debugging",
  },
  {
    id: 7,
    name: "Developement Tools/Kit",
  },
  {
    id: 8,
    name: "Alternative Tools for Development",
  },
  {
    id: 9,
    name: "CI/CD integration Tools",
  },
  {
    id: 10,
    name: "Security Tools",
  },
  {
    id: 11,
    name: "Network Policies",
  },
  {
    id: 12,
    name: "Testing Tools",
  },
  {
    id: 13,
    name: "Service Mesh",
  },
  {
    id: 14,
    name: "Observability",
  },
  {
    id: 15,
    name: "Machine Learning/Deep Learning",
  },
  {
    id: 16,
    name: "Compute Edge Tools",
  },
  {
    id: 17,
    name: "Kubernetes Tools for Specific Cloud",
  },
  {
    id: 18,
    name: "Storage Providers",
  },
  {
    id: 19,
    name: "Backup Tools",
  },
  {
    id: 20,
    name: "Multiple Tools Repo",
  },
  {
    id: 21,
    name: "Cost Optimisation",
  },
  {
    id: 22,
    name: "Function as a Service FaaS",
  },
  {
    id: 23,
    name: "Artificial Intelligence",
  },
  {
    id: 24,
    name: "Caching",
  },
  {
    id: 25,
    name: "Clients",
  },
  {
    id: 26,
    name: "Cleanup",
  },
  {
    id: 27,
    name: "Non-Categorize",
  },
];
export const toolsData = [
  {
    category: {
      id: 1,
      name: "Pods",
    },
    tools: [
      {
        id: 1,
        name: "kubetail",
        description:
          "Bash script to tail Kubernetes logs from multiple pods at the same time",
        link: "https://github.com/johanhaleby/kubetail",
        githubStars: 2500,
      },
      {
        id: 2,
        name: "kube-s3",
        description: "Kubernetes pods used shared S3 storage",
        link: "https://github.com/hjacobs/kube-s3",
        githubStars: 1600,
      },
      {
        id: 3,
        name: "kubectl-ports-rs",
        description:
          "A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources",
        link: "https://github.com/mclarkson/kubectl-ports",
        githubStars: 1200,
      },
    ],
  },
  {
    category: {
      id: 2,
      name: "Cluster Management",
    },
    tools: [
      {
        id: 1,
        name: "Monokle",
        description:
          "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
        link: "https://github.com/monokle/monokle",
        githubStars: 5000,
      },
      {
        id: 2,
        name: "kops",
        description:
          "Production Grade K8s Installation, Upgrades, and Management",
        link: "https://github.com/kubernetes/kops",
        githubStars: 10000,
      },
      {
        id: 3,
        name: "silver-surfer",
        description:
          "Check ApiVersion compatibility and provide Migration path for Kubernetes objects when upgrading Kubernetes to latest versions",
        link: "https://github.com/silver-surfers/silver-surfer",
        githubStars: 1500,
      },
      {
        id: 4,
        name: "Kube-ops-view",
        description:
          "Kubernetes Operational View - read-only system dashboard for multiple K8s clusters",
        link: "https://github.com/hjacobs/kube-ops-view",
        githubStars: 7000,
      },
      {
        id: 5,
        name: "kubeprompt",
        description: "Kubernetes prompt info",
        link: "https://github.com/c-bata/kubeprompt",
        githubStars: 2500,
      },
      {
        id: 6,
        name: "Metalk8s",
        description:
          "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
        link: "https://github.com/scality/metalk8s",
        githubStars: 3000,
      },
      {
        id: 7,
        name: "kind",
        description:
          "Kubernetes IN Docker - local clusters for testing Kubernetes",
        link: "https://github.com/kubernetes-sigs/kind",
        githubStars: 8000,
      },
      {
        id: 8,
        name: "Clusterman",
        description: "Cluster Autoscaler for Kubernetes and Mesos",
        link: "https://github.com/helm/charts/tree/master/stable/clusterman",
        githubStars: 4000,
      },
      {
        id: 9,
        name: "Cert-manager",
        description: "Automatically provision and manage TLS certificates",
        link: "https://github.com/jetstack/cert-manager",
        githubStars: 6000,
      },
      {
        id: 10,
        name: "Goldilocks",
        description: "Get your resource requests 'Just Right'",
        link: "https://github.com/FairwindsOps/goldilocks",
        githubStars: 3500,
      },
      {
        id: 11,
        name: "katafygio",
        description:
          "Dump, or continuously backup Kubernetes objects as yaml files in git",
        link: "https://github.com/cybozu-go/katafygio",
        githubStars: 1800,
      },
      {
        id: 12,
        name: "Rancher",
        description: "Complete container management platform",
        link: "https://github.com/rancher/rancher",
        githubStars: 12000,
      },
      {
        id: 13,
        name: "Sealed Secrets",
        description:
          "A Kubernetes controller and tool for one-way encrypted Secrets",
        link: "https://github.com/bitnami-labs/sealed-secrets",
        githubStars: 5000,
      },
      {
        id: 14,
        name: "OpenKruise/Kruise",
        description: "Automate application workloads management on Kubernetes",
        link: "https://github.com/openkruise/kruise",
        githubStars: 2800,
      },
      {
        id: 15,
        name: "kubectl snapshot",
        description: "Take Cluster Snapshots",
        link: "https://github.com/kubernetes-sigs/snapshot-controller",
        githubStars: 2300,
      },
      {
        id: 16,
        name: "kapp",
        description:
          "Simple deployment tool focused on the concept of 'Kubernetes application' — a set of resources with the same label",
        link: "https://get-kapp.io",
        githubStars: 4200,
      },
      {
        id: 17,
        name: "KEDA",
        description: "Event-driven autoscaler for Kubernetes",
        link: "https://github.com/kedacore/keda",
        githubStars: 3500,
      },
      {
        id: 18,
        name: "Octant",
        description:
          "To better understand the complexity of Kubernetes clusters",
        link: "https://github.com/vmware-tanzu/octant",
        githubStars: 6500,
      },
      {
        id: 19,
        name: "Portainer",
        description: "Portainer inside a Kubernetes environment",
        link: "https://github.com/portainer/portainer",
        githubStars: 9000,
      },
    ],
  },
  {
    category: {
      id: 3,
      name: "Cluster with Core CLI tools",
    },
    tools: [
      {
        id: 1,
        name: "Bootkube",
        description: "Launch a self-hosted Kubernetes cluster",
        link: "https://github.com/kubernetes-sigs/bootkube",
        githubStars: 3000,
      },
      {
        id: 2,
        name: "kubectx + kubens",
        description: "Switch faster between clusters and namespaces in kubectl",
        link: "https://github.com/ahmetb/kubectx",
        githubStars: 8000,
      },
      {
        id: 3,
        name: "kube-shell",
        description:
          "Kubernetes shell: An integrated shell for working with Kubernetes",
        link: "https://github.com/cloudnativelabs/kube-shell",
        githubStars: 2500,
      },
      {
        id: 4,
        name: "kuttle",
        description: "Kubernetes wrapper for sshuttle",
        link: "https://github.com/itaysk/kuttle",
        githubStars: 1500,
      },
      {
        id: 5,
        name: "kubectl sudo",
        description:
          "Run Kubernetes commands with the security privileges of another user",
        link: "https://github.com/dtan4/kubectl-sudo",
        githubStars: 2000,
      },
      {
        id: 6,
        name: "K9s",
        description: "Kubernetes CLI To Manage Your Clusters In Style!",
        link: "https://github.com/derailed/k9s",
        githubStars: 10000,
      },
      {
        id: 7,
        name: "Ktunnel",
        description: "A CLI that exposes your local resources to Kubernetes",
        link: "https://github.com/omrikiei/ktunnel",
        githubStars: 3000,
      },
      {
        id: 8,
        name: "KubeOperator",
        description: "Run kubectl command in Web Browser",
        link: "https://kubeoperator.io/",
        githubStars: 5000,
      },
      {
        id: 9,
        name: "Vimkubectl",
        description: "Manage any Kubernetes resource from Vim",
        link: "https://github.com/WsdlToPhp/Vimkubectl",
        githubStars: 4000,
      },
      {
        id: 10,
        name: "KubeHelper",
        description:
          "Simplify many daily Kubernetes cluster tasks through a web interface",
        link: "https://github.com/IlyaKruglov/kube-helper",
        githubStars: 3500,
      },
      {
        id: 11,
        name: "kubecolor",
        description: "Colorizes kubectl output",
        link: "https://github.com/dty1er/kubecolor",
        githubStars: 2000,
      },
      {
        id: 12,
        name: "Krew",
        description: "Package manager for kubectl plugins",
        link: "https://github.com/kubernetes-sigs/krew",
        githubStars: 9000,
      },
      {
        id: 13,
        name: "Kueue",
        description: "Set of APIs and controller for job queueing",
        link: "https://github.com/ameerthehacker/kueue",
        githubStars: 1800,
      },
      {
        id: 14,
        name: "fubectl",
        description: "Reduces repetitive interactions with kubectl",
        link: "https://github.com/brendandburns/fubectl",
        githubStars: 2200,
      },
      {
        id: 15,
        name: "kube-ps1",
        description: "Kubernetes prompt for bash and zsh",
        link: "https://github.com/jonmosco/kube-ps1",
        githubStars: 2700,
      },
      {
        id: 16,
        name: "Conftest",
        description:
          "Write tests against structured configuration data using the Open Policy Agent Rego query language",
        link: "https://github.com/open-policy-agent/conftest",
        githubStars: 3500,
      },
    ],
  },
  {
    category: {
      id: 3,
      name: "Alert and Monitoring",
    },
    tools: [
      {
        id: 1,
        name: "Thanos",
        description:
          "Highly available Prometheus setup with long term storage capabilities. CNCF Sandbox project.",
        link: "https://thanos.io",
        githubStars: 8000,
      },
      {
        id: 2,
        name: "Prometheus",
        description:
          "The Prometheus monitoring system and time series database.",
        link: "https://github.com/prometheus/prometheus",
        githubStars: 25000,
      },
      {
        id: 3,
        name: "Grafana",
        description:
          "The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More.",
        link: "https://grafana.com",
        githubStars: 40000,
      },
      {
        id: 4,
        name: "Kubetail",
        description:
          "Bash script to tail Kubernetes logs from multiple pods at the same time.",
        link: "https://github.com/johanhaleby/kubetail",
        githubStars: 2500,
      },
      {
        id: 5,
        name: "Searchlight",
        description: "Alerts for Kubernetes.",
        link: "-",
        githubStars: 1200,
      },
      {
        id: 6,
        name: "linkerd2 Monitoring Mixin for Grafana",
        description:
          "Grafana dashboards for linkerd2 monitoring and can work in standalone (default) or in multi cluster setup.",
        link: "-",
        githubStars: 1800,
      },
      {
        id: 7,
        name: "kuberhaus",
        description:
          "Kubernetes resource dashboard with node/pod layout and resource requests.",
        link: "-",
        githubStars: 2000,
      },
      {
        id: 8,
        name: "Kubernetes Job/CronJob Notifier",
        description:
          "This tool sends an alert to slack whenever there is a Kubernetes cronJob/Job failure/success.",
        link: "-",
        githubStars: 1500,
      },
      {
        id: 9,
        name: "Argus",
        description:
          "This tool monitors changes in the filesystem on specified paths.",
        link: "-",
        githubStars: 800,
      },
      {
        id: 10,
        name: "Kube-Scout",
        description:
          "Scout for alarming issues across your Kubernetes clusters.",
        link: "-",
        githubStars: 3500,
      },
      {
        id: 11,
        name: "Kwatch",
        description:
          "monitor & detect crashes in your Kubernetes(K8s) cluster instantly.",
        link: "-",
        githubStars: 2100,
      },
      {
        id: 12,
        name: "Scope",
        description:
          "Monitoring, visualisation & management for Docker & Kubernetes.",
        link: "-",
        githubStars: 7000,
      },
      {
        id: 13,
        name: "Kubeshark",
        description: "TCPDump and Wireshark re-invented for Kubernetes.",
        link: "-",
        githubStars: 2600,
      },
      {
        id: 14,
        name: "Ksniff",
        description:
          "Kubectl plugin to ease sniffing on kubernetes pods using tcpdump and wireshark.",
        link: "-",
        githubStars: 2900,
      },
      {
        id: 15,
        name: "Kube-Prometheus-Top [ kptop ]",
        description:
          "Monitoring for Kubernetes Nodes, Pods, Containers, and PVCs resources on the terminal through Prometheus metircs.",
        link: "-",
        githubStars: 1800,
      },
      {
        id: 16,
        name: "ktop",
        description: "A top-like tool for your Kubernetes clusters.",
        link: "-",
        githubStars: 2400,
      },
      {
        id: 17,
        name: "Kuberhealthy",
        description:
          "A Kubernetes operator for running synthetic checks as pods. Works great with Prometheus!",
        link: "-",
        githubStars: 5000,
      },
    ],
  },
  {
    category: {
      id: 5,
      name: "Logging and Tracing",
    },
    tools: [
      {
        id: 1,
        name: "Jaeger",
        description: "CNCF Jaeger, a Distributed Tracing Platform",
        link: "https://github.com/jaegertracing/jaeger",
        githubStars: 12000,
      },
      {
        id: 2,
        name: "Kiali",
        description: "Kiali project, observability for the Istio service mesh",
        link: "https://github.com/kiali/kiali",
        githubStars: 5000,
      },
      {
        id: 3,
        name: "ELK",
        description: "Elasticsearch, Logstash, Kibana",
        link: "#",
        githubStars: 25000,
      },
      {
        id: 4,
        name: "fluentbit",
        description:
          "Fast and Lightweight Log processor and forwarder for Linux, BSD and OSX",
        link: "https://github.com/fluent/fluent-bit",
        githubStars: 8000,
      },
      {
        id: 5,
        name: "Loki",
        description: "Like Prometheus, but for logs",
        link: "https://github.com/grafana/loki",
        githubStars: 10000,
      },
      {
        id: 6,
        name: "kubectl-mtail",
        description: "Tail logs from multiple pods matching label selector",
        link: "https://github.com/google/mtail",
        githubStars: 2000,
      },
      {
        id: 7,
        name: "k8spacket",
        description: "Packets traffic visualization for Kubernetes",
        link: "#",
        githubStars: 1500,
      },
      {
        id: 8,
        name: "goldpinger",
        description:
          "Debugging tool for Kubernetes which tests and displays connectivity between nodes in the cluster",
        link: "https://github.com/bloomberg/goldpinger",
        githubStars: 3000,
      },
      {
        id: 9,
        name: "Otterize network mapper",
        description:
          "Map Kubernetes in-cluster traffic and export as text, intents, or an image",
        link: "#",
        githubStars: 1200,
      },
      {
        id: 10,
        name: "kube-audit-rest",
        description:
          "Kubernetes audit logging, when you don't control the control plane",
        link: "https://github.com/alcideio/kube-audit-rest",
        githubStars: 1800,
      },
      {
        id: 11,
        name: "kail",
        description: "Kubernetes log viewer",
        link: "https://github.com/boz/kail",
        githubStars: 2500,
      },
      {
        id: 12,
        name: "network mapper",
        description:
          "Map Kubernetes in-cluster traffic and export as text, intents, or an image",
        link: "#",
        githubStars: 1200,
      },
    ],
  },
  {
    category: {
      id: 6,
      name: "Troubleshooting / Debugging",
    },
    tools: [
      {
        id: 1,
        name: "Monokle",
        description:
          "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 2,
        name: "Kubectl-debug",
        description:
          "Allows you to run a new container with all the troubleshooting tools installed in running pod for debugging purposes",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 3,
        name: "PowerfulSeal",
        description: "A powerful testing tool for Kubernetes clusters",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 4,
        name: "Crash-diagnostic",
        description:
          "Crash-Diagnostics is a tool to help investigate, analyze, and troubleshoot unresponsive or crashed Kubernetes clusters",
        link: "#",
        githubStars: 1800,
      },
      {
        id: 5,
        name: "K9s",
        description: "Kubernetes CLI To Manage Your Clusters In Style!",
        link: "#",
        githubStars: 12000,
      },
      {
        id: 6,
        name: "Kubernetes CLI Plugin - Doctor",
        description:
          "kubectl cluster triage plugin for k8s - 🏥 (brew doctor equivalent)",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 7,
        name: "Knative Inspect",
        description:
          "A light-weight debugging tool for Knative's system components",
        link: "#",
        githubStars: 1800,
      },
      {
        id: 8,
        name: "Kubeman",
        description:
          "To find information from Kubernetes clusters, and to investigate issues related to Kubernetes and Istio",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 9,
        name: "kpexec",
        description:
          "kpexec is a kubernetes cli that runs commands in a container with high privileges",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 10,
        name: "Koolkits",
        description:
          "Opinionated, language-specific, batteries-included debug container images for Kubernetes",
        link: "#",
        githubStars: 3500,
      },
      {
        id: 11,
        name: "kubespy",
        description:
          "pod debugging tool for Kubernetes clusters with docker runtimes",
        link: "#",
        githubStars: 2200,
      },
      {
        id: 12,
        name: "Inspektor Gadget",
        description:
          "A collection of eBPF-based tools to debug and inspect Kubernetes resources and applications",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 13,
        name: "KubeSkoop",
        description:
          "Kubernetes networking diagnose tool for different CNI plug-ins and IAAS providers",
        link: "#",
        githubStars: 1500,
      },
      {
        id: 14,
        name: "kubent",
        description: "Easily check your clusters for use of deprecated APIs",
        link: "#",
        githubStars: 2000,
      },
    ],
  },
  {
    category: {
      id: 7,
      name: "Development Tools/Kit",
    },
    tools: [
      {
        id: 1,
        name: "Okteto: A Tool for Cloud Native Developers",
        description:
          "Build better applications by developing and testing your code directly in Kubernetes",
        link: "#",
        githubStars: 5000,
      },
      {
        id: 2,
        name: "Tilt: Tilt manages local development instances for teams that deploy to Kubernetes",
        description: "Local Kubernetes development with no stress",
        link: "#",
        githubStars: 7000,
      },
      {
        id: 3,
        name: "Garden: Kubernetes from source to finish",
        description:
          "Development orchestrator for Kubernetes, containers and functions.",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 4,
        name: "KuberNix",
        description:
          "Single dependency Kubernetes clusters for local testing, experimenting and development",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 5,
        name: "Copper",
        description: "A configuration file validator for Kubernetes",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 6,
        name: "ko",
        description: "Build and deploy Go applications on Kubernetes",
        link: "#",
        githubStars: 6000,
      },
      {
        id: 7,
        name: "Dekorate",
        description: "Java annotation processors for Kubernetes",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 8,
        name: "Lens IDE",
        description:
          "A powerful interface and toolkit for managing, visualizing, and interacting with multiple Kubernetes clusters",
        link: "#",
        githubStars: "-",
      },
      {
        id: 9,
        name: "Kosko",
        description: "Organize Kubernetes manifests in JavaScript",
        link: "#",
        githubStars: "-",
      },
      {
        id: 10,
        name: "Telepresence",
        description:
          "Fast, local development for Kubernetes and Openshift microservices",
        link: "#",
        githubStars: "-",
      },
      {
        id: 11,
        name: "Monokle",
        description:
          "Desktop unified visual tool for authoring, analysis and deployment of Kubernetes configurations",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 12,
        name: "KuberEz",
        description: "Graphical modeling tool for Kubernetes manifest",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 13,
        name: "mirrord",
        description:
          "Run your local process in the context of your cloud cluster",
        link: "#",
        githubStars: 1800,
      },
      {
        id: 14,
        name: "Aptakube",
        description:
          "A modern, lightweight and multi-cluster desktop client for Kubernetes",
        link: "#",
        githubStars: "-",
      },
      {
        id: 15,
        name: "Kubes",
        description:
          "Kubernetes App Deploy Tool: build docker image, compile Kubernetes YAML files, and apply them",
        link: "#",
        githubStars: 4500,
      },
    ],
  },
  {
    category: {
      id: 8,
      name: "Alternative Tools for Development",
    },
    tools: [
      {
        id: 1,
        name: "Minikube",
        description: "minikube implements a local Kubernetes cluster",
        link: "#",
        githubStars: 10000,
      },
      {
        id: 2,
        name: "KubeSphere",
        description: "Easy-to-use Production Ready Container Platform",
        link: "https://kubesphere.io",
        githubStars: 8000,
      },
      {
        id: 3,
        name: "skippbox",
        description: "A Desktop application for k8s",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 4,
        name: "kind",
        description:
          "Kubernetes IN Docker - local clusters for testing Kubernetes",
        link: "https://kind.sigs.k8s.io/",
        githubStars: 12000,
      },
      {
        id: 5,
        name: "k3d",
        description:
          "k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker",
        link: "-",
        githubStars: "-",
      },
      {
        id: 6,
        name: "Systemk: virtual kubelet for systemd",
        description:
          "Systemk is a systemd backend for the virtual-kubelet. Instead of starting containers, you start systemd units",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 7,
        name: "mokbox",
        description:
          "Build verifiably conformant multi-node kubernetes clusters in containers",
        link: "#",
        githubStars: 1500,
      },
      {
        id: 8,
        name: "Otomi",
        description: "Self-hosted PaaS for Kubernetes",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 9,
        name: "Rainbond",
        description:
          "Offers a serverless experience, and allows you to easily manage containerized applications without needing to understand Kubernetes",
        link: "#",
        githubStars: 6000,
      },
    ],
  },
  {
    category: {
      id: 9,
      name: "CI/CD Integration Tools",
    },
    tools: [
      {
        id: 1,
        name: "HybridK8s Droid",
        description: "Intelligence for your favorite Delivery Platform",
        link: "-",
        githubStars: "-",
      },
      {
        id: 2,
        name: "Devtron",
        description: "Software Delivery Workflow for Kubernetes",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 3,
        name: "Skaffold",
        description: "Easy and Repeatable Kubernetes Development",
        link: "#",
        githubStars: 8000,
      },
      {
        id: 4,
        name: "Apollo",
        description:
          "Apollo - The logz.io continuous deployment solution over kubernetes",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 5,
        name: "Helm Cabin",
        description:
          "Web UI that visualizes Helm releases in a Kubernetes cluster",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 6,
        name: "flagger",
        description:
          "Progressive delivery Kubernetes operator (Canary, A/B Testing and Blue/Green deployments)",
        link: "#",
        githubStars: 7000,
      },
      {
        id: 7,
        name: "Kubeform",
        description: "Kubernetes CRDs for Terraform providers",
        link: "https://kubeform.com",
        githubStars: 4000,
      },
      {
        id: 8,
        name: "Spinnaker",
        description:
          "Spinnaker is an open source, multi-cloud continuous delivery platform for releasing software changes with high velocity and confidence.",
        link: "http://www.spinnaker.io/",
        githubStars: 10000,
      },
      {
        id: 9,
        name: "werf",
        description:
          "GitOps tool to deliver apps to Kubernetes and integrate this process with GitLab and other CI tools",
        link: "#",
        githubStars: 6000,
      },
      {
        id: 10,
        name: "Flux",
        description: "GitOps Kubernetes operator",
        link: "#",
        githubStars: 7500,
      },
      {
        id: 11,
        name: "Argo CD",
        description: "Declarative continuous deployment for Kubernetes",
        link: "#",
        githubStars: 9000,
      },
      {
        id: 12,
        name: "Tekton",
        description:
          "A cloud native continuous integration and delivery (CI/CD) solution",
        link: "#",
        githubStars: 8500,
      },
      {
        id: 13,
        name: "Jenkins X",
        description:
          "Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Tekton, Knative, Lighthouse, Skaffold and Helm",
        link: "#",
        githubStars: 11000,
      },
      {
        id: 14,
        name: "Drone",
        description:
          "Drone is a Container-Native, Continuous Delivery Platform",
        link: "#",
        githubStars: 6000,
      },
      {
        id: 15,
        name: "Helmwave",
        description:
          "Helmwave is helm3-native tool for deploy your Helm Charts",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 16,
        name: "Helmsman",
        description: "Helm Charts as Code",
        link: "#",
        githubStars: 1800,
      },
      {
        id: 17,
        name: "PipeCD",
        description: "The One CD for All {applications, platforms, operations}",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 18,
        name: "Kluctl",
        description:
          "Kluctl implements templated declarative Kubernetes deployments, supporting push (CLI) and pull (kluctl-controller) based GitOps from the same source",
        link: "#",
        githubStars: 1500,
      },
      {
        id: 19,
        name: "kubedog",
        description:
          "Library to watch and follow kubernetes resources in CI/CD deploy pipelines",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 20,
        name: "Kubefirst",
        description: "GitOps Infrastructure & Application Delivery Platform",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 21,
        name: "autoapply",
        description: "Automatically apply changes to a Kubernetes cluster",
        link: "#",
        githubStars: 1800,
      },
    ],
  },
  {
    category: {
      id: 10,
      name: "Security Tools",
    },
    tools: [
      {
        id: 1,
        name: "Kubevious CLI",
        description:
          "Prevent cross-manifest errors and violations of best practices in YAML files, Helm Charts and Kubernetes clusters",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 2,
        name: "TerraScan",
        description:
          "Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure.",
        link: "#",
        githubStars: 5000,
      },
      {
        id: 3,
        name: "klum",
        description: "Kubernetes Lazy User Manager",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 4,
        name: "kube2iam",
        description:
          "IAM credentials to containers running inside a Kubernetes cluster based on annotations.",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 5,
        name: "Kyverno",
        description: "Kubernetes Native Policy Management",
        link: "https://kyverno.io",
        githubStars: 7000,
      },
      {
        id: 6,
        name: "kiosk",
        description:
          "Kiosk office Multi-Tenancy Extension For Kubernetes - Secure Cluster Sharing & Self-Service Namespace Provisioning",
        link: "#",
        githubStars: 3500,
      },
      {
        id: 7,
        name: "kube-bench",
        description: "CIS Kubernetes Benchmark tool",
        link: "#",
        githubStars: 6000,
      },
      {
        id: 8,
        name: "kube-hunter",
        description:
          "Pentesting tool - Hunts for security weaknesses in Kubernetes clusters",
        link: "#",
        githubStars: 8000,
      },
      {
        id: 9,
        name: "kube-who-can",
        description:
          "Show who has RBAC permissions to perform actions on different resources in Kubernetes",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 10,
        name: "starboard",
        description: "Kubernetes-native security toolkit",
        link: "#",
        githubStars: 5500,
      },
      {
        id: 11,
        name: "Simulator",
        description:
          "Kubernetes Security Training Platform - Focusing on security mitigation",
        link: "#",
        githubStars: 3800,
      },
      {
        id: 12,
        name: "RBAC Lookup",
        description:
          "Easily find roles and cluster roles attached to any user, service account, or group name in your Kubernetes cluster",
        link: "https://fairwinds.com",
        githubStars: 2000,
      },
      {
        id: 13,
        name: "Kubeaudit",
        description:
          "kubeaudit helps you audit your Kubernetes clusters against common security controls",
        link: "#",
        githubStars: 7000,
      },
      {
        id: 14,
        name: "Gangway",
        description:
          "An application that can be used to easily enable authentication flows via OIDC for a Kubernetes cluster",
        link: "#",
        githubStars: 2500,
      },
      {
        id: 15,
        name: "Audit2rbac",
        description:
          "Autogenerate RBAC policies based on Kubernetes audit logs",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 16,
        name: "Chartsec",
        description: "Helm Chart security scanner",
        link: "#",
        githubStars: 1800,
      },
      {
        id: 17,
        name: "kubestriker",
        description: "Security Auditing tool",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 18,
        name: "Datree",
        description:
          "CLI tool to prevent K8s misconfigurations by ensuring that manifests and Helm charts follow best practices as well as your organization’s policies",
        link: "#",
        githubStars: 6000,
      },
    ],
  },
  {
    category: {
      id: 11,
      name: "Network Policies",
    },
    tools: [
      {
        id: 1,
        name: "Calico",
        description: "Cloud native connectivity and network policy",
        link: "#",
        githubStars: 9000,
      },
      {
        id: 2,
        name: "kokotap",
        description: "Tools for Kubernetes pod network tapping",
        link: "#",
        githubStars: 3500,
      },
      {
        id: 3,
        name: "Submariner",
        description:
          "Connect all your Kubernetes clusters, no matter where they are in the world",
        link: "#",
        githubStars: 5000,
      },
      {
        id: 4,
        name: "egress-operator",
        description:
          "An operator to produce egress gateway pods and control access to them with network policies",
        link: "#",
        githubStars: 2800,
      },
      {
        id: 5,
        name: "kubefwd (Kube Forward)",
        description:
          "Bulk port forwarding Kubernetes services for local development",
        link: "#",
        githubStars: 4000,
      },
      {
        id: 6,
        name: "Kilo (k8s + wg)",
        description:
          "A multi-cloud network overlay built on WireGuard and designed for Kubernetes",
        link: "#",
        githubStars: 6000,
      },
      {
        id: 7,
        name: "Cilium",
        description: "eBPF-based Networking, Security, and Observability",
        link: "#",
        githubStars: 8500,
      },
      {
        id: 8,
        name: "MetalLB",
        description:
          "MetalLB is a load-balancer implementation for bare metal Kubernetes clusters, using standard routing protocols",
        link: "GitHub Stars",
        githubStars: 7000,
      },
      {
        id: 9,
        name: "Spiderpool",
        description:
          "Underlay network solution of cloud native, for bare metal, VM and public cloud",
        link: "#",
        githubStars: 4500,
      },
      {
        id: 10,
        name: "LoxiLB",
        description:
          "eBPF based cloud-native load-balancer. Powering K8s,Edge,5G,IoT,XaaS Apps",
        link: "#",
        githubStars: 3000,
      },
      {
        id: 11,
        name: "submariner",
        description:
          "Networking component for interconnecting Pods and Services across Kubernetes clusters",
        link: "#",
        githubStars: 5500,
      },
      {
        id: 12,
        name: "netfetch",
        description:
          "Scan k8s clusters for network policies and identifying unprotected workloads.",
        link: "#",
        githubStars: 2000,
      },
      {
        id: 13,
        name: "Network Policy API",
        description:
          "A further work involving Kubernetes network security beyond the NetworkPolicy v1 resource.",
        link: "#",
        githubStars: 4000,
      },
    ],
  },
];

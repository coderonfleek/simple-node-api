## A Simple Nodejs API with OCI oke

First you must have kubectl and Argo-cd intalled on your oci's cluster\n
`https://argo-cd.readthedocs.io/en/stable/getting_started`

Second, create app in Argo-cd server and write your custom namespace on "destination" space  

After syncing, write on browser:
`http://144.22.248.251/testando/health`

Where above ip is your LoadBalancer external ip, if you don't know, write:\n
`kubectl get ingress --all-namespaces`
or 
`kubectl get ingress -n <your_namespace>`



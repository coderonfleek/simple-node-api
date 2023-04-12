## A Simple Nodejs API with OCI oke

First you must have kubectl and Argo-cd intalled on your oci's cluster <br>
`https://argo-cd.readthedocs.io/en/stable/getting_started`

Second, create app in Argo-cd server and write your custom namespace on "destination" space  

After syncing, write on browser:
`http://144.22.248.251/testando/health`

It shoud return 
`OK`

Where above ip is your LoadBalancer external ip, if you don't know, write:<br>
`kubectl get ingress --all-namespaces`
<br>
or 
<br>
`kubectl get ingress -n <your_namespace>`



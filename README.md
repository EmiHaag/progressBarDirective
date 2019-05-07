# Simple progress bar Directive
 
  
Inject your progress bar directive with your angularjs project and set progress bar styles with Bootstrap 4.
With a simple ajax call you can obtain the progress of your upload files. Within a angularjs directive we can manipulate the DOM and mantain your template isolated from your main code allowing you to inject as many input files as you want.


## Instalation:
  
  ``` html

<head>
 <link crossorigin="anonymous" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" rel="stylesheet" />
    
</head>
<body ng-app="myApp">
 <file></file>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.js" />
<script src="directive.js" />
<script crossorigin="anonymous" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" / >
<script crossorigin="anonymous" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
<script crossorigin="anonymous" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
 </body>
 
 ```
## Set up:
##### 1 - You just have to inject "fileDirectives" into your angularjs module

  ``` JavaScript
  
angular.module("myApp", ["fileDirectives"]);

  ```
##### 2 - Put your "file" directive whatever you want into your angularjs scope element 

  ``` html

  <file></file>
  ```

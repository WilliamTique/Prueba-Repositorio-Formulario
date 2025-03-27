<a name="readme-top"></a>

<div align="center">

  <h3><b>Formulario</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


<!-- PROJECT DESCRIPTION -->

# 📖 [FORMULARIO ] <a name="about-project"></a>

  **[FORMULARIO]**  It is a questionnaire that gathers information about the person who is completing the application and what type of vehicle they would purchase, based on a few simple questions.

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> Javascript </li>
<li> Webpack </li>
<li> Express </li>
<li> ES6 Modules </li>
<li> REST API </li>
<li> Async/await </li>
<li> Promises </li>
<li> Babel </li>
<li> Git </li>
<li> Github actions </li>
<li> Docker </li>
<li> Docker Hub </li>
<li> Docker Compose </li>
<li> Bash Script </li>
<!-- Features -->

### Key Features <a name="key-features"></a>

- **[HTML & CSS Best practices]**
- **[Responsive Design]**
- **[REST API]**
- **[USER LIKES]**
- **[USER COMMENTS]**
- **[USER RESERVATIONS]**
- **[ES6 Modules]**
- **[Webpack Bundling ]**
- **[Express Server to handle routing]**
- **[Docker and Docker Compose]**
- **[Bash Script to automate deployment]**
- **[CI and CD Deployment with Netlify]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

### 🚀 Live Demo <a name="live-demo"></a>

> 

- [Live Demo Link](	webpack-form3-gpb0bzh3cvfjc4cd.brazilsouth-01.azurewebsites.net)



<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project  you need the following tools:
- [VS Code ]
- [Git and GitHub ]
- [Nodejs ]
- [Express ]
- [docker and docker compose ]
- [Docker Hub ]
- [Bash Script ]
- [openssl to generate self signed certificates ]
- [Webpack Installation ]
- [CI CD Netlify Bot  Instalation]
- [Nodejs ]



### Setup

Clone this repository to your desired folder:
```sh
 cd FORMULARIOS
 git clone git@github.com:WilliamTique/Prueba-Repositorio-Formulario.git
```


### Install

Install this project with:

Lighthouse run
```sh
    npm install -g @lhci/cli@0.7.x
```
Webhint:
```sh
     npm install --save-dev hint@7.x
```
Stylelint:
```sh
     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

Eslint
```sh
     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
Webpack
```sh
     npm init -y
     npm install webpack webpack-cli --save-dev
```

Webpack Css loader
```sh
     npm install --save-dev style-loader css-loader
```
Webpack html loader
```sh
     npm install --save-dev html-loader
```

Webpack html plugin
```sh
     npm install --save-dev html-webpack-plugin
```

Webpack dev server
```sh
     npm install --save-dev webpack-dev-server
```
Babel Dependency loader
```sh
     npm install --save-dev babel-loader
```
Minify CSS: To reduce the size of your CSS file by removing unnecessary characters such as whitespace and comments. 
```sh
     npm install --save-dev css-minimizer-webpack-plugin
```
Split Js : If your JS file is large, splitting it into smaller modular files can help improve the loading time. 
```sh
     npm install --save-dev terser-webpack-plugin
```

Split CSS: If your CSS file is large, splitting it into smaller modular files can help improve the loading time. 
```sh
     npm install mini-css-extract-plugin --save-dev
```
Babel core
```sh
     npm install --save-dev @babel/core @babel/preset-env
```
Express and body-parser
```sh
     npm install --save express body-parser
```

Concurrent, the npm package for running multiple commands in parallel
```sh
     npm install --save-dev concurrently
```


### Usage

To run locally run the following command:
## Development mode
```sh
    npm run start  
```

To run tests, run the following command:


To test the Stylelint linter:
```sh
    npx stylelint "**/*.{css,scss}"
```
To test the Webhint:
```sh
    npx hint .
```
To test the ESLint linter:
```sh
    npx eslint .
```


### Deployment

## Local deployment using Docker:

In root project folder run the following command:
```sh
    docker  build -t TV-Maze-App nginx/Dockerfile .
```
Then run the following command:

```sh

    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist:/usr/share/nginx/html -d TV-Maze-App
```
Be sure to replace the path of your project dist folder 

If you want to use docker hub image repository, run the following command:
```sh
    docker pull 810129/tvapp
    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist:/usr/share/nginx/html -d 810129/tvapp
```
## Local deployment using Docker-compose:
In root folder run the following command:
```sh
    docker compose up -d
```
The above command will deploy the app in localhost on port 443 and 80 through dockerized nginx webserver.

### Cloud Production deployment:
In root folder run the following command:
```sh
    bash deployment.sh -u username -i ipaddress -d Namefolder -e environment
```
The arguments are:
- -u username
- -i ipaddress
- -d Namefolder
- -e environment (prod or dev) respectively

With the last script, the app will be deployed to any cloud provider you want to use,  you only need the IP address and the right permission to access it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

WILLIAM ANDRES TIQUE


👤 **Author1**

- GitHub: [@alyconr](https://github.com/WilliamTique)
- LinkedIn: [LinkedIn]()




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[Personalized Recommendations]**
- [ ] **[Advanced Search Filters]**
- [ ] **[Notifications and Reminders]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/alyconr/TV-AMAZE-APP.git/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project please give  one start.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank  God for giving me the strength to carry out this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [GNU General Public License v3.0](LICENSE.md) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>
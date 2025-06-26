const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://<your-sonarqube-ip>:9000',
  options: {
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectVersion': '1.0',
    'sonar.login': 'your_sonar_token_here',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.'
  },
}, () => {});

const sonarqubeScanner = require('sonarqube-scanner');

process.env.JAVA_HOME = '/usr/lib/jvm/java-17-amazon-corretto.x86_64';
process.env.PATH = process.env.JAVA_HOME + '/bin:' + process.env.PATH;

sonarqubeScanner({
  serverUrl: 'http://43.205.198.62:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.login': 'squ_5d6e2f8cc29ebaefd6b44a7e696b0f539e993f48',
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': '.',
    // 'sonar.tests': 'specs',
    // 'sonar.inclusions': 'src/**'
  },
}, () => {});

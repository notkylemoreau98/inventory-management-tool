pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh 'docker build -t inventory-backend ./backend'
        }
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Placeholder for test script...'
        // sh 'npm test' – if you add tests later
      }
    }

    stage('Done') {
      steps {
        echo 'Build complete!'
      }
    }
  }
}

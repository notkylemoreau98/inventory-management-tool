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
        sh 'docker build -t inventory-backend ./backend'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'cd backend && npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'cd backend && npm test'
      }
    }

    stage('Done') {
      steps {
        echo 'Build and test successful!'
      }
    }
  }
}

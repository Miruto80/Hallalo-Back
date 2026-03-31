pipeline {
    agent any
    
    tools {
        nodejs 'node'
    }
    
    environment {
        APP_NAME = 'hallalo_back'
        SSH_SERVER = ''
        SSH_USER = 'root'
        DEPLOY_DIR = '/root/projects/hallalo_back'
        GIT_BRANCH = 'main'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    extensions: [],
                    userRemoteConfigs: [[
                        url: 'git@gitlab.com:admin-sempiterno/tytl_bcp.git',
                        credentialsId: '90860013-a21c-4a11-a7bc-d52299be0340'
                    ]]
                ])

                script {
                    env.GIT_BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
                    echo "Actual branch name: ${env.GIT_BRANCH}"
                }
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Debug Branch') {
            steps {
                echo "Jenkins env.BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "Custom env.GIT_BRANCH: ${env.GIT_BRANCH}"
            }
        }
        
        stage('Setup Environment') {
            steps {
                script {

                    sh '''
                        if ! command -v rsync &> /dev/null; then
                            echo "Installing rsync..."
                            apt-get update && apt-get install -y rsync
                        fi
                    '''
                }
            }
        }
        
        stage('Deploy') {
            when {
                expression { env.GIT_BRANCH == 'main' }
            }
            steps {
                script {
                    echo "Proceeding with deployment for branch: ${env.GIT_BRANCH}"
                    sshagent(['acb6ddae-8a6b-4e22-b7d0-f0be667f9f79']) {
                        // Add debug output
                        echo "Starting deployment to ${SSH_USER}@${SSH_SERVER}"
                        
                        
                        sh "ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_SERVER} 'echo Connection successful'"
                        
                        sh """
                            echo "Syncing files to ${DEPLOY_DIR}"
                            rsync -avz --delete --exclude='node_modules' --exclude='.git' -e ssh ./ ${SSH_USER}@${SSH_SERVER}:${DEPLOY_DIR}
                        """
                        
                        sh """
                            ssh ${SSH_USER}@${SSH_SERVER} '
                                set -x
                                echo "Changing to ${DEPLOY_DIR}"
                                cd ${DEPLOY_DIR} || exit 1
                                echo "Copying .env.dev to .env"
                                cp .env.dev .env
                                echo "Running npm install"
                                npm install --production
                                echo "Restarting application"
                                pm2 restart ${APP_NAME} || pm2 start npm --name "${APP_NAME}" -- start
                            '
                        """
                    }
                }
            }
        }
    }
    
    post {
        always {
            deleteDir()
        }
        failure {
            echo 'Pipeline failed!'
            mail to: 'jpernalete@gruposempierno.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Check failed build at: ${env.BUILD_URL}"
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
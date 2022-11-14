module.exports = {
    mysql: {
        host: 'localhost',
        port: 3306,
        username: 'thangld',
        password: 'password',
        db: 'default'
    },
    kafka: {
        brokers: ['localhost:3000'],
        clientId: 'kafka-client',
        groupId: 'consumer-group',
        topic: 'topic'
    },
    staticFolderPath: './generated'
}
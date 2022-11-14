const { Kafka } = require('kafkajs');
const config = require('../config')

async function run() {
    const kafka = new Kafka({
        clientId: config.kafka.clientId,
        brokers: config.kafka.brokers
    })

    const consumer = kafka.consumer({ groupId: config.kafka.groupId })

    await consumer.connect()
    await consumer.subscribe({ topic: config.kafka.topic, fromBeginning: true })

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value.toString())
        },
    })
}

run()
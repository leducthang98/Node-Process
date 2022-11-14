const { Kafka } = require('kafkajs')
const config = require('../config')

async function produce() {
    const kafka = new Kafka({
        clientId: config.kafka.clientId,
        brokers: config.kafka.brokers
    })
    
    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: config.kafka.topic,
        messages: [
            { value: "something" },
        ],
    })
    await producer.disconnect()
}

module.exports = { produce }
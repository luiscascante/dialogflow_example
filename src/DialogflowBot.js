import { WebhookClient, Text } from "dialogflow-fulfillment";

export default class DialogflowBot {
  constructor() {
    this.actionMap = new Map();
  }

  async handle(req, res) {
    // Se crea el WebhookClient que manejará las solicitudes basándose en el map
    const agent = new WebhookClient({ request, response });
    await agent.handleRequest(this.actionMap);
  }
}

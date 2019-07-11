import { WebhookClient, Text } from "dialogflow-fulfillment";

const HOUR_INTENT = "HourIntent";

export default class DialogflowBot {
  constructor() {
    this.actionMap = new Map();
    this.actionMap.set(HOUR_INTENT, this.getCurrentTime.bind(this));
  }

  async handle(req, res) {
    // Se crea el WebhookClient que manejará las solicitudes basándose en el map
    const agent = new WebhookClient({ request: req, response: res });
    await agent.handleRequest(this.actionMap);
  }

  getCurrentTime(agent) {
    const today = new Date();
    const currentTime = today.getHours() + ":" + today.getMinutes();
    const text = new Text(currentTime);
    agent.add(text);
  }
}

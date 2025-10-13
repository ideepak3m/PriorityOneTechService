import { title } from "process";

// src/config/globals.ts
export const CHAT_CONFIG = {
    chatUrl: "https://n8n.srv1043251.hstgr.cloud/webhook/b4c07056-a1aa-4ae4-b1f4-b41ac952c609/chat", // Replace with your actual chat URL
    defaultGreeting: "Hi, I’m Ann—your AI business advisor from Priority One Tech.",
    iframeWidth: 350,
    iframeHeight: 500,
    buttonText: "Let's Chat",
    title: "Ask Me Anything",
};

export const AIAudit_CONFIG = {
    chatUrl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/api/schedule-audit", // Replace with your actual chat URL
};

export const n8n_CONFIG = {
    getTimeSlotsurl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/get-availability-slots", // Replace with your actual chat URL
    bookAppointmenturl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/bookAppointment", // Replace with your actual chat URL
    registerurl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/register", // Replace with your actual chat URL
    loginurl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/login", // Replace with your actual chat URL
    forgotpwdurl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/forgot-password", // Replace with your actual chat URL
    updatepwdurl: "https://n8n.srv1043251.hstgr.cloud/webhook-test/update-password", // Replace with your actual chat URL
};



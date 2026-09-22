export type ModuleType = 'admin' | 'agent' | 'verm';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  campaign: string;
  status: 'NEW' | 'INCALL' | 'CALLBK' | 'SALE' | 'NI' | 'DNC' | 'NA';
  notes: string;
  crmId?: string;
  lastContact: string;
  score: number;
}

export interface Agent {
  id: string;
  name: string;
  extension: string;
  status: 'READY' | 'INCALL' | 'PAUSE' | 'DISPO' | 'OFFLINE';
  campaign: string;
  callsToday: number;
  salesToday: number;
  talkTimeMinutes: number;
  avatar: string;
}

export interface Campaign {
  id: string;
  name: string;
  dialMethod: 'PREDICTIVE' | 'RATIO' | 'MANUAL' | 'INBOUND';
  activeAgents: number;
  callsInQueue: number;
  dropRate: number;
  dialLevel: number;
  status: 'ACTIVE' | 'PAUSED';
  scriptName: string;
}

export interface SalesHourlyData {
  hour: string;
  calls: number;
  sales: number;
  drop: number;
}

export interface DispositionData {
  name: string;
  value: number;
  color: string;
  code: string;
}

export interface CrmIntegration {
  id: string;
  provider: 'Salesforce' | 'HubSpot' | 'Zoho CRM' | 'Custom Webhook';
  apiKey: string;
  endpointUrl: string;
  syncStatus: 'CONNECTED' | 'SYNCING' | 'ERROR' | 'DISCONNECTED';
  lastSync: string;
  autoSyncLeads: boolean;
  pushDispositions: boolean;
}

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'critical' | 'sale' | 'warning' | 'system';
  read: boolean;
  actionUrl?: string;
}

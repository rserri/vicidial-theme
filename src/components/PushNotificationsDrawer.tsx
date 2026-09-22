import { AlertTriangle, BellRing, Check, Flame, Info, X } from 'lucide-react';
import React from 'react';
import { PushNotification } from '../types';

interface PushNotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: PushNotification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

export const PushNotificationsDrawer: React.FC<PushNotificationsDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <BellRing className="h-5 w-5 animate-bounce" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-slate-100 text-base">Notifiche Push Real-Time</h3>
                <p className="text-xs text-slate-400">Gestione attività critiche ed eventi CRM</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Action Header */}
          <div className="flex items-center justify-between px-6 py-3 bg-slate-950/50 border-b border-slate-800/60 text-xs">
            <span className="text-slate-400">
              Totale notifiche: <strong className="text-slate-200">{notifications.length}</strong>
            </span>
            <button
              onClick={onMarkAllAsRead}
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition"
            >
              <Check className="h-3.5 w-3.5" /> Segna tutte come lette
            </button>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 divide-y divide-slate-800/40">
            {notifications.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                Nessuna notifica presente al momento.
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`relative p-4 rounded-xl transition-all ${
                    notif.read ? 'bg-slate-900/40 opacity-70' : 'bg-slate-800/90 border border-slate-700 shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5">
                      {notif.type === 'sale' && (
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <Flame className="h-5 w-5" />
                        </div>
                      )}
                      {notif.type === 'critical' && (
                        <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                      )}
                      {notif.type === 'system' && (
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Info className="h-5 w-5" />
                        </div>
                      )}
                      {notif.type === 'warning' && (
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-slate-100 truncate">{notif.title}</h4>
                        <span className="text-[11px] font-mono text-slate-400 ml-2 whitespace-nowrap">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-2.5">{notif.message}</p>

                      {!notif.read && (
                        <button
                          onClick={() => onMarkAsRead(notif.id)}
                          className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 transition"
                        >
                          Contrassegna come letto
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer simulated push channel */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Connesso al Canale WebPush Vicidial 12 Daemon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

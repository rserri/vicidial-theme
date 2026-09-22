import { Activity, Bell, CheckCircle2, Headphones, LayoutDashboard, Radio, ShieldAlert, Sparkles } from 'lucide-react';
import React from 'react';
import { ModuleType, PushNotification } from '../types';

interface NavbarProps {
  activeModule: ModuleType;
  setActiveModule: (mod: ModuleType) => void;
  notifications: PushNotification[];
  onOpenNotifications: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeModule,
  setActiveModule,
  notifications,
  onOpenNotifications,
}) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-800 bg-slate-900/95 px-4 backdrop-blur md:px-6">
      {/* Brand & Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
            <Radio className="h-5 w-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-lg font-bold tracking-tight text-white">VICIDIAL 12</span>
              <span className="rounded-md bg-blue-500/10 px-1.5 py-0.5 font-mono text-xs font-semibold text-blue-400 border border-blue-500/20">
                MODERN THEME
              </span>
            </div>
            <p className="hidden text-xs text-slate-400 sm:block">Cloud Operations Suite & CRM API</p>
          </div>
        </div>

        <div className="hidden h-6 w-px bg-slate-800 lg:block" />

        <div className="hidden items-center gap-2 text-xs text-emerald-400 lg:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-medium text-slate-300">Cluster Vicidial 12 Attivo</span>
          <span className="text-slate-500">• Latenza 14ms</span>
        </div>
      </div>

      {/* Module Switcher (3 Cartelle richieste) */}
      <nav className="flex items-center gap-1.5 rounded-xl bg-slate-950 p-1 border border-slate-800/80 shadow-inner">
        <button
          onClick={() => setActiveModule('admin')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
            activeModule === 'admin'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-500'
              : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
          }`}
          title="Cartella /admin/welcome.php (Sostituisce vicidial)"
        >
          <ShieldAlert className="h-4 w-4" />
          <span className="hidden sm:inline">Admin Portal</span>
          <span className="rounded bg-black/30 px-1 py-0.2 font-mono text-[10px] text-blue-200">/admin</span>
        </button>

        <button
          onClick={() => setActiveModule('agent')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
            activeModule === 'agent'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-500'
              : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
          }`}
          title="Cartella /agente/vicidial.php (Sostituisce agc)"
        >
          <Headphones className="h-4 w-4" />
          <span className="hidden sm:inline">Interfaccia Agente</span>
          <span className="rounded bg-black/30 px-1 py-0.2 font-mono text-[10px] text-indigo-200">/agente</span>
        </button>

        <button
          onClick={() => setActiveModule('verm')}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
            activeModule === 'verm'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-500'
              : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
          }`}
          title="Cartella /VERMNEW/index.php (Sostituisce VERM)"
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="hidden sm:inline">VERMNEW Report</span>
          <span className="rounded bg-black/30 px-1 py-0.2 font-mono text-[10px] text-emerald-200">/VERMNEW</span>
        </button>
      </nav>

      {/* Right User Actions & Notifications Push */}
      <div className="flex items-center gap-3">
        {/* Push Notification Bell */}
        <button
          onClick={onOpenNotifications}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-slate-300 transition hover:bg-slate-700 hover:text-white border border-slate-700/60"
          title="Sistema di Notifiche Push in Tempo Reale"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 font-mono text-xs font-bold text-white shadow-sm ring-2 ring-slate-900 animate-bounce">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Live Call Activity Ticker */}
        <div className="hidden items-center gap-2 rounded-xl bg-slate-950/80 px-3 py-2 border border-slate-800 md:flex">
          <Activity className="h-4 w-4 text-amber-400 animate-pulse" />
          <div className="text-right">
            <div className="text-xs font-bold text-white">4 Chiamate in Coda</div>
            <div className="text-[10px] text-slate-400">Tempo Medio 18s</div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 pl-1">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
            alt="Admin"
            className="h-9 w-9 rounded-xl object-cover ring-2 ring-blue-500/50"
          />
          <div className="hidden text-left sm:block">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-200">
              Roberto S. <CheckCircle2 className="h-3 w-3 text-blue-400" />
            </div>
            <span className="text-[11px] text-blue-400 font-medium">System SuperAdmin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Wallet,
  Package,
  ShoppingBag,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Menu,
  X,
  Zap,
  ArrowUpRight,
  Smartphone,
  Receipt,
  Coins,
  Store,
  LogOut,
  CreditCard,
} from 'lucide-react';

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Wallet, label: 'Kasir', active: false },
  { icon: Package, label: 'Stok Produk', active: false, badge: 7 },
  { icon: ShoppingBag, label: 'Transaksi', active: false },
  { icon: Users, label: 'Karyawan', active: false },
  { icon: ShoppingCart, label: 'Belanja', active: false },
  { icon: BarChart3, label: 'Laporan', active: false },
  { icon: Settings, label: 'Pengaturan', active: false },
];

const STATS = [
  { label: 'Omzet Hari Ini', value: 'Rp 12,45 Jt', sub: 'Rp 12.450.000', delta: '+8,2%', up: true, icon: Coins, tint: 'bg-indigo-600', soft: 'bg-indigo-50 text-indigo-700' },
  { label: 'Jumlah Transaksi', value: '184', sub: 'transaksi', delta: '+12', up: true, icon: Receipt, tint: 'bg-emerald-500', soft: 'bg-emerald-50 text-emerald-700' },
  { label: 'Total Komisi', value: 'Rp 1,86 Jt', sub: 'Rp 1.860.000', delta: '+5,4%', up: true, icon: CreditCard, tint: 'bg-violet-500', soft: 'bg-violet-50 text-violet-700' },
  { label: 'Stok Menipis', value: '7', sub: 'produk perlu restock', delta: '-3', up: false, icon: AlertTriangle, tint: 'bg-amber-500', soft: 'bg-amber-50 text-amber-700' },
];

const TREND = [
  { d: 'Sen', v: 120 },
  { d: 'Sel', v: 152 },
  { d: 'Rab', v: 138 },
  { d: 'Kam', v: 175 },
  { d: 'Jum', v: 162 },
  { d: 'Sab', v: 198 },
  { d: 'Min', v: 184 },
];

const TOP_PRODUK = [
  { name: 'Pulsa Telkomsel 10rb', sold: 86, pct: 92, tint: 'bg-rose-500' },
  { name: 'Token PLN 20rb', sold: 64, pct: 74, tint: 'bg-amber-500' },
  { name: 'Paket Data XL 5GB', sold: 52, pct: 60, tint: 'bg-emerald-500' },
  { name: 'Pulsa Indosat 25rb', sold: 41, pct: 48, tint: 'bg-indigo-500' },
  { name: 'Saldo OVO 50rb', sold: 33, pct: 38, tint: 'bg-violet-500' },
];

const FEED = [
  { who: 'Pulsa Telkomsel 10rb', cabang: 'Cabang Pusat', amount: 'Rp 11.500', time: '2 mnt lalu', icon: Smartphone, tint: 'bg-rose-50 text-rose-600' },
  { who: 'Token PLN 50rb', cabang: 'Cabang Utara', amount: 'Rp 51.000', time: '8 mnt lalu', icon: Zap, tint: 'bg-amber-50 text-amber-600' },
  { who: 'Saldo DANA 100rb', cabang: 'Cabang Pusat', amount: 'Rp 101.500', time: '15 mnt lalu', icon: Wallet, tint: 'bg-sky-50 text-sky-600' },
  { who: 'Paket Data XL 5GB', cabang: 'Cabang Selatan', amount: 'Rp 38.000', time: '23 mnt lalu', icon: Smartphone, tint: 'bg-emerald-50 text-emerald-600' },
  { who: 'Pulsa Indosat 25rb', cabang: 'Cabang Utara', amount: 'Rp 26.000', time: '34 mnt lalu', icon: Smartphone, tint: 'bg-indigo-50 text-indigo-600' },
];

const CABANG = [
  { name: 'Cabang Pusat', omzet: 'Rp 6,2 Jt', pct: 88 },
  { name: 'Cabang Utara', omzet: 'Rp 3,8 Jt', pct: 62 },
  { name: 'Cabang Selatan', omzet: 'Rp 2,4 Jt', pct: 41 },
];

function AreaChart() {
  const max = Math.max(...TREND.map((t) => t.v));
  const min = Math.min(...TREND.map((t) => t.v));
  const W = 640;
  const H = 200;
  const pad = 16;
  const pts = TREND.map((t, i) => {
    const x = pad + (i * (W - pad * 2)) / (TREND.length - 1);
    const y = H - pad - ((t.v - min) / (max - min || 1)) * (H - pad * 2);
    return { x, y, ...t };
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const area = `${line} L ${pts[pts.length - 1].x.toFixed(1)} ${H} L ${pts[0].x.toFixed(1)} ${H} Z`;
  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-44" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((g, i) => (
          <line key={i} x1={pad} x2={W - pad} y1={H * g - 8} y2={H * g - 8} stroke="#f1f5f9" strokeWidth="1" />
        ))}
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#fff" stroke="#6366f1" strokeWidth="2.5" />
        ))}
      </svg>
      <div className="flex justify-between px-3 mt-1">
        {TREND.map((t) => (
          <span key={t.d} className="text-[11px] font-medium text-zinc-400">{t.d}</span>
        ))}
      </div>
    </div>
  );
}

function Gauge() {
  const pct = 78;
  const r = 54;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <div className="relative flex items-center justify-center">
      <svg width="150" height="150" className="-rotate-90">
        <circle cx="75" cy="75" r={r} fill="none" stroke="#f1f5f9" strokeWidth="13" />
        <circle
          cx="75" cy="75" r={r} fill="none" stroke="#6366f1" strokeWidth="13"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-extrabold text-zinc-900">{pct}%</span>
        <span className="text-[11px] font-medium text-zinc-400">dari target</span>
      </div>
    </div>
  );
}

export function Dashboard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="font-sans antialiased min-h-screen bg-zinc-50 text-zinc-900 flex selection:bg-indigo-100 selection:text-indigo-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .no-sb::-webkit-scrollbar { width: 6px; }
        .no-sb::-webkit-scrollbar-thumb { background: #e4e4e7; border-radius: 999px; }
      `}</style>

      {/* OVERLAY (mobile/tablet only) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-zinc-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* SIDEBAR — slides in on tablet/phone, fixed on desktop */}
      <aside
        id="sidebar-nav"
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] bg-white border-r border-zinc-100 flex flex-col shrink-0 shadow-xl lg:shadow-[4px_0_24px_rgba(0,0,0,0.02)] transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-100/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-[15px] tracking-tight">Alfath Pulsa</div>
              <div className="text-[11px] text-zinc-400 font-medium">Manajemen</div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden w-9 h-9 -mr-1 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-zinc-100 active:scale-95 transition"
            aria-label="Tutup menu"
            aria-expanded={open}
            aria-controls="sidebar-nav"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto no-sb p-4 space-y-1">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300">Menu Utama</p>
          {NAV.map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.active ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              <item.icon className={`w-[18px] h-[18px] ${item.active ? 'text-white' : 'text-zinc-400'}`} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.active ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'}`}>
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-100">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              AD
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-sm font-bold text-zinc-900 leading-tight truncate">Admin Alfath</span>
              <span className="text-xs text-zinc-400 truncate">Administrator</span>
            </div>
            <LogOut className="w-4 h-4 text-zinc-300" />
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* TOPBAR */}
        <header className="h-16 lg:h-20 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 -ml-1 rounded-xl flex items-center justify-center text-zinc-600 hover:bg-zinc-100 active:scale-95 transition"
              aria-label="Buka menu"
              aria-expanded={open}
              aria-controls="sidebar-nav"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h1 className="text-lg lg:text-2xl font-extrabold tracking-tight text-zinc-900 truncate">Dashboard</h1>
              <p className="hidden sm:block text-xs text-zinc-400 font-medium">Kamis, 26 Juni 2026 · Ringkasan hari ini</p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="hidden md:flex items-center gap-2 bg-zinc-50 border border-zinc-100 rounded-xl px-3 py-2 w-56">
              <Search className="w-4 h-4 text-zinc-400" />
              <input placeholder="Cari transaksi…" className="bg-transparent outline-none text-sm placeholder:text-zinc-400 w-full" />
            </div>
            <button className="relative w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 transition">
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition">
              <Zap className="w-4 h-4" /> Transaksi Baru
            </button>
          </div>
        </header>

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto no-sb p-4 lg:p-8 space-y-5 lg:space-y-6">
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl ${s.tint} flex items-center justify-center text-white shadow-lg`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${s.up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {s.delta}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-zinc-400">{s.label}</p>
                <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-zinc-900">{s.value}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* CHART + GAUGE */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
            <div className="xl:col-span-2 bg-white rounded-2xl border border-zinc-100 p-5 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-bold text-zinc-900">Tren Transaksi</h2>
                  <p className="text-xs text-zinc-400 font-medium">7 hari terakhir</p>
                </div>
                <div className="flex items-center gap-1 bg-zinc-50 rounded-lg p-1 text-xs font-semibold">
                  <button className="px-3 py-1.5 rounded-md bg-white shadow-sm text-zinc-900">Mingguan</button>
                  <button className="px-3 py-1.5 rounded-md text-zinc-400">Bulanan</button>
                </div>
              </div>
              <AreaChart />
            </div>

            <div className="bg-white rounded-2xl border border-zinc-100 p-5 lg:p-6 shadow-sm flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-2">
                <div>
                  <h2 className="font-bold text-zinc-900">Target Omzet</h2>
                  <p className="text-xs text-zinc-400 font-medium">Bulan Juni</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-300" />
              </div>
              <div className="flex-1 flex items-center">
                <Gauge />
              </div>
              <div className="w-full grid grid-cols-2 gap-3 mt-2">
                <div className="text-center bg-zinc-50 rounded-xl py-2.5">
                  <p className="text-sm font-extrabold text-zinc-900">Rp 234 Jt</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Tercapai</p>
                </div>
                <div className="text-center bg-zinc-50 rounded-xl py-2.5">
                  <p className="text-sm font-extrabold text-zinc-900">Rp 300 Jt</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Target</p>
                </div>
              </div>
            </div>
          </div>

          {/* FEED + TOP PRODUK */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
            {/* Feed */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-zinc-100 p-5 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-zinc-900">Transaksi Terakhir</h2>
                <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">Lihat semua</a>
              </div>
              <div className="space-y-1">
                {FEED.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 px-2 -mx-2 rounded-xl hover:bg-zinc-50 transition-colors">
                    <div className={`w-10 h-10 rounded-xl ${f.tint} flex items-center justify-center shrink-0`}>
                      <f.icon className="w-[18px] h-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-zinc-900 truncate">{f.who}</p>
                      <p className="text-xs text-zinc-400 flex items-center gap-1 truncate">
                        <Store className="w-3 h-3 shrink-0" /> {f.cabang}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-zinc-900">{f.amount}</p>
                      <p className="text-[11px] text-zinc-400">{f.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top produk + cabang */}
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-white rounded-2xl border border-zinc-100 p-5 lg:p-6 shadow-sm">
                <h2 className="font-bold text-zinc-900 mb-4">Produk Terlaris</h2>
                <div className="space-y-3.5">
                  {TOP_PRODUK.map((p, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-zinc-700 truncate pr-2">{p.name}</span>
                        <span className="font-bold text-zinc-900 shrink-0">{p.sold}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                        <div className={`h-full rounded-full ${p.tint}`} style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-zinc-100 p-5 lg:p-6 shadow-sm">
                <h2 className="font-bold text-zinc-900 mb-4">Performa Cabang</h2>
                <div className="space-y-3.5">
                  {CABANG.map((c, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-zinc-700 flex items-center gap-1.5">
                          <Store className="w-3.5 h-3.5 text-zinc-400" /> {c.name}
                        </span>
                        <span className="font-bold text-zinc-900">{c.omzet}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                        <div className="h-full rounded-full bg-indigo-500" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

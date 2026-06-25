import React from "react";
import {
  LayoutDashboard, ShoppingCart, Package, ArrowRightLeft, Users,
  FileText, Settings, Bell, Search, MapPin, TrendingUp, DollarSign,
  Wallet, AlertCircle, ChevronDown, Check, X, Smartphone, Zap, Sparkles,
} from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Kasir" },
  { icon: Package, label: "Stok Produk" },
  { icon: ArrowRightLeft, label: "Transaksi", badge: "3" },
  { icon: Users, label: "Karyawan" },
  { icon: FileText, label: "Laporan" },
  { icon: Settings, label: "Pengaturan" },
];

const stats = [
  { label: "Omset Hari Ini", value: "Rp 4.250.000", icon: Wallet, grad: "from-violet-500 to-fuchsia-500", trend: "+12%" },
  { label: "Laba Bersih", value: "Rp 612.000", icon: DollarSign, grad: "from-sky-500 to-blue-500", trend: "+8%" },
  { label: "Total Transaksi", value: "87", icon: ArrowRightLeft, grad: "from-emerald-500 to-teal-500", trend: "+5" },
  { label: "Stok Menipis", value: "5 produk", icon: AlertCircle, grad: "from-amber-500 to-orange-500", warn: true },
];

const rows = [
  { time: "14:23", prod: "Pulsa Telkomsel 50rb", branch: "Cabang Utama", cashier: "Andi", amount: "51.500", status: "Berhasil" },
  { time: "14:15", prod: "Token PLN 100rb", branch: "Cabang Pasar", cashier: "Siti", amount: "102.000", status: "Berhasil" },
  { time: "13:58", prod: "Paket Data XL 25rb", branch: "Cabang Timur", cashier: "Budi", amount: "26.000", status: "Pending" },
  { time: "13:42", prod: "Pulsa Indosat 20rb", branch: "Cabang Utama", cashier: "Andi", amount: "21.000", status: "Berhasil" },
  { time: "13:30", prod: "Voucher Game ML 86 D", branch: "Cabang Pasar", cashier: "Siti", amount: "24.000", status: "Berhasil" },
];

export function Aurora() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .variant-aurora {
          --text-main: #312E48;
          --text-muted: #7A7595;
          --border: rgba(255,255,255,0.6);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
          letter-spacing: -0.012em;
        }
        .variant-aurora h1, .variant-aurora h2, .variant-aurora h3 { letter-spacing: -0.022em; }
        .variant-aurora .glass {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px -8px rgba(124,58,237,0.12);
          transition: transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s ease;
        }
        .variant-aurora .glass:hover { transform: translateY(-3px); box-shadow: 0 20px 44px -14px rgba(124,58,237,0.22); }
        .variant-aurora button, .variant-aurora a { transition: transform .18s cubic-bezier(.34,1.45,.64,1), box-shadow .25s ease, background-color .2s, filter .2s; }
        .variant-aurora button:active, .variant-aurora a:active { transform: scale(.96); }
        .variant-aurora ::-webkit-scrollbar { width: 6px; height: 6px; }
        .variant-aurora ::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.25); border-radius: 10px; }
      `}} />

      <div className="variant-aurora min-h-screen text-[var(--text-main)] flex relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#FAE8FF 45%,#E0F2FE 100%)" }}>
        {/* glow blobs */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-fuchsia-300/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-sky-300/40 blur-[120px] pointer-events-none" />

        {/* Sidebar */}
        <aside className="w-72 glass m-4 rounded-[28px] hidden lg:flex flex-col z-10 overflow-hidden">
          <div className="p-7 pb-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold">Alfath <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Pulsa</span></h1>
          </div>
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {nav.map((n) => (
              <a key={n.label} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold relative ${n.active ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30" : "text-[var(--text-muted)] hover:bg-white/60"}`}>
                <n.icon className="w-5 h-5" />
                <span className="text-[15px]">{n.label}</span>
                {n.badge && <span className="absolute right-4 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{n.badge}</span>}
              </a>
            ))}
          </nav>
          <div className="m-4 p-3 rounded-2xl glass flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 text-white flex items-center justify-center font-bold">A</div>
            <div className="flex-1 min-w-0"><div className="font-bold text-sm truncate">Admin</div><div className="text-xs text-[var(--text-muted)] truncate">Administrator</div></div>
            <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden z-10">
          <header className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20">
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-[var(--text-muted)] font-medium mt-0.5 text-sm">Selamat datang kembali! Ini ringkasan hari ini.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 glass px-4 py-2.5 rounded-2xl">
                <MapPin className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-bold">Cabang Utama</span>
                <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className="relative hidden lg:block">
                <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
                <input placeholder="Cari transaksi..." className="pl-10 pr-4 py-2.5 glass rounded-2xl text-sm font-medium w-60 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
              </div>
              <button className="w-11 h-11 glass rounded-2xl flex items-center justify-center text-[var(--text-muted)] hover:text-violet-500 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
            </div>
          </header>

          <div className="px-8 pb-12 space-y-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-[24px] p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[var(--text-muted)] font-semibold text-[13px] mb-1.5">{s.label}</p>
                      <h3 className={`text-xl lg:text-2xl font-bold ${s.warn ? "text-amber-600" : ""}`}>{s.value}</h3>
                    </div>
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-white shadow-lg`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[13px] font-bold">
                    <span className={`flex items-center px-2 py-0.5 rounded-lg ${s.warn ? "text-amber-600 bg-amber-100/60" : "text-emerald-600 bg-emerald-100/60"}`}>
                      {!s.warn && <TrendingUp className="w-3.5 h-3.5 mr-1" />}{s.warn ? "Cek sekarang" : s.trend}
                    </span>
                    {!s.warn && <span className="text-[var(--text-muted)] text-xs">vs kemarin</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 glass rounded-[28px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <div><h3 className="text-lg font-bold">Tren Penjualan</h3><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">7 Hari Terakhir</p></div>
                </div>
                <div className="relative h-44 flex items-end justify-between">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="relative flex flex-col items-center group w-[11%] h-full justify-end pb-6">
                      <div className="w-full rounded-t-xl bg-gradient-to-t from-violet-500 to-fuchsia-400 transition-all group-hover:brightness-110" style={{ height: `${h}%` }} />
                      <span className="absolute bottom-0 text-[11px] font-bold text-[var(--text-muted)]">{["Sen","Sel","Rab","Kam","Jum","Sab","Min"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 glass rounded-[28px] p-6 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <div><h3 className="text-lg font-bold">Transaksi Terbaru</h3><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">Hari ini</p></div>
                  <button className="text-sm font-bold text-violet-600 bg-violet-100/60 px-4 py-2 rounded-xl">Lihat Semua</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead><tr className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      <th className="py-2 px-3">Waktu</th><th className="py-2 px-3">Produk</th><th className="py-2 px-3">Kasir</th><th className="py-2 px-3 text-right">Nominal</th><th className="py-2 px-3 text-center">Status</th>
                    </tr></thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i} className="hover:bg-white/50 transition-colors rounded-xl">
                          <td className="py-3 px-3 text-sm font-semibold text-[var(--text-muted)]">{r.time}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">{r.prod.includes("PLN") ? <Zap className="w-4 h-4 text-amber-500" /> : <Smartphone className="w-4 h-4 text-violet-500" />}</div>
                              <span className="font-semibold text-sm">{r.prod}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-sm font-semibold">{r.cashier}</td>
                          <td className="py-3 px-3 text-sm font-bold text-right">Rp {r.amount}</td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold ${r.status === "Berhasil" ? "bg-emerald-100/70 text-emerald-700" : "bg-amber-100/70 text-amber-700"}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${r.status === "Berhasil" ? "bg-emerald-600" : "bg-amber-600 animate-pulse"}`} />{r.status.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Modal */}
        <div className="absolute inset-0 bg-violet-900/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="glass w-full max-w-md rounded-[28px] shadow-2xl overflow-hidden">
            <div className="px-8 pt-8 pb-5 text-center relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[var(--text-muted)] cursor-pointer"><X className="w-4 h-4" /></div>
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 mx-auto flex items-center justify-center text-white mb-4 shadow-lg shadow-fuchsia-500/30"><Package className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold">Tambah Produk Baru</h3>
              <p className="text-[var(--text-muted)] font-medium text-sm mt-1.5">Silakan isi detail produk untuk menambahkannya.</p>
            </div>
            <div className="px-8 pb-8 space-y-4">
              <div><label className="block text-sm font-bold mb-1.5">Nama Produk</label><input value="Pulsa Telkomsel 100rb" readOnly className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-white/70 font-semibold focus:outline-none focus:ring-2 focus:ring-violet-400/40" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-bold mb-1.5">Kategori</label><select className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-white/70 font-semibold appearance-none focus:outline-none"><option>Pulsa Reguler</option></select></div>
                <div><label className="block text-sm font-bold mb-1.5">Harga Jual</label><input value="Rp 102.000" readOnly className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-white/70 font-semibold focus:outline-none" /></div>
              </div>
              <div className="pt-3 flex gap-3">
                <button className="flex-1 py-3.5 rounded-2xl font-bold text-[var(--text-muted)] bg-white/60">Batal</button>
                <button className="flex-[2] py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30 flex items-center justify-center gap-2"><Check className="w-5 h-5" />Simpan Produk</button>
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 glass rounded-2xl p-4 flex items-center gap-3 w-80 z-50">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><Check className="w-5 h-5" /></div>
            <div><p className="font-bold text-sm">Transaksi Berhasil</p><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">Data telah tersimpan di sistem.</p></div>
            <button className="ml-auto text-[var(--text-muted)]"><X className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

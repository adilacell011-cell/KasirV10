import React from "react";
import {
  LayoutDashboard, ShoppingCart, Package, ArrowRightLeft, Users,
  FileText, Settings, Bell, Search, MapPin, TrendingUp, DollarSign,
  Wallet, AlertCircle, ChevronDown, Check, X, Smartphone, Zap, IceCream,
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
  { label: "Omset Hari Ini", value: "Rp 4.250.000", icon: Wallet, grad: "from-rose-400 to-orange-400", trend: "+12%" },
  { label: "Laba Bersih", value: "Rp 612.000", icon: DollarSign, grad: "from-orange-400 to-amber-400", trend: "+8%" },
  { label: "Total Transaksi", value: "87", icon: ArrowRightLeft, grad: "from-teal-400 to-emerald-400", trend: "+5" },
  { label: "Stok Menipis", value: "5 produk", icon: AlertCircle, grad: "from-amber-400 to-yellow-400", warn: true },
];

const rows = [
  { time: "14:23", prod: "Pulsa Telkomsel 50rb", branch: "Cabang Utama", cashier: "Andi", amount: "51.500", status: "Berhasil" },
  { time: "14:15", prod: "Token PLN 100rb", branch: "Cabang Pasar", cashier: "Siti", amount: "102.000", status: "Berhasil" },
  { time: "13:58", prod: "Paket Data XL 25rb", branch: "Cabang Timur", cashier: "Budi", amount: "26.000", status: "Pending" },
  { time: "13:42", prod: "Pulsa Indosat 20rb", branch: "Cabang Utama", cashier: "Andi", amount: "21.000", status: "Berhasil" },
  { time: "13:30", prod: "Voucher Game ML 86 D", branch: "Cabang Pasar", cashier: "Siti", amount: "24.000", status: "Berhasil" },
];

export function PeachSorbet() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .variant-peach {
          --bg-base: #FFF7F3;
          --bg-card: #FFFFFF;
          --border: #FBE7DE;
          --accent: #FB7185;
          --accent-soft: #FFE4E6;
          --text-main: #4A3B36;
          --text-muted: #A6938B;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
          letter-spacing: -0.012em;
        }
        .variant-peach h1, .variant-peach h2, .variant-peach h3 { letter-spacing: -0.022em; }
        .variant-peach .card {
          background: var(--bg-card); border: 1px solid var(--border);
          box-shadow: 0 8px 26px -10px rgba(251,113,133,0.16);
          transition: transform .3s cubic-bezier(.34,1.4,.64,1), box-shadow .3s ease;
        }
        .variant-peach .card:hover { transform: translateY(-3px); box-shadow: 0 18px 38px -14px rgba(251,113,133,0.28); }
        .variant-peach button, .variant-peach a { transition: transform .18s cubic-bezier(.34,1.45,.64,1), box-shadow .25s ease, background-color .2s, filter .2s, color .2s; }
        .variant-peach button:active, .variant-peach a:active { transform: scale(.96); }
        .variant-peach ::-webkit-scrollbar { width: 6px; height: 6px; }
        .variant-peach ::-webkit-scrollbar-thumb { background: #F4C9BC; border-radius: 10px; }
      `}} />

      <div className="variant-peach min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex relative overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-rose-200/40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-amber-200/40 blur-[120px] pointer-events-none" />

        {/* Sidebar */}
        <aside className="w-72 card my-4 ml-4 rounded-[30px] hidden lg:flex flex-col z-10 overflow-hidden">
          <div className="p-7 pb-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-rose-400/30">
              <IceCream className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold">Alfath <span className="text-[var(--accent)]">Pulsa</span></h1>
          </div>
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {nav.map((n) => (
              <a key={n.label} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold relative ${n.active ? "bg-gradient-to-r from-rose-400 to-orange-400 text-white shadow-lg shadow-rose-400/30" : "text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"}`}>
                <n.icon className="w-5 h-5" />
                <span className="text-[15px]">{n.label}</span>
                {n.badge && <span className="absolute right-4 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{n.badge}</span>}
              </a>
            ))}
          </nav>
          <div className="m-4 p-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border)] flex items-center gap-3 cursor-pointer hover:border-[var(--accent)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-orange-300 text-white flex items-center justify-center font-bold">A</div>
            <div className="flex-1 min-w-0"><div className="font-bold text-sm truncate">Admin</div><div className="text-xs text-[var(--text-muted)] truncate">Administrator</div></div>
            <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden z-10">
          <header className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20 bg-[var(--bg-base)]/80 backdrop-blur-md">
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-[var(--text-muted)] font-medium mt-0.5 text-sm">Selamat datang kembali! Ini ringkasan hari ini.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 card px-4 py-2.5 rounded-2xl">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm font-bold">Cabang Utama</span>
                <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
              </div>
              <div className="relative hidden lg:block">
                <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
                <input placeholder="Cari transaksi..." className="pl-10 pr-4 py-2.5 card rounded-2xl text-sm font-medium w-60 focus:outline-none focus:ring-2 focus:ring-rose-300/50" />
              </div>
              <button className="w-11 h-11 card rounded-2xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
            </div>
          </header>

          <div className="px-8 pb-12 space-y-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {stats.map((s) => (
                <div key={s.label} className="card rounded-[24px] p-5">
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
                    <span className={`flex items-center px-2 py-0.5 rounded-lg ${s.warn ? "text-amber-600 bg-amber-100" : "text-emerald-600 bg-emerald-100"}`}>
                      {!s.warn && <TrendingUp className="w-3.5 h-3.5 mr-1" />}{s.warn ? "Cek sekarang" : s.trend}
                    </span>
                    {!s.warn && <span className="text-[var(--text-muted)] text-xs">vs kemarin</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 card rounded-[28px] p-6">
                <div className="mb-6"><h3 className="text-lg font-bold">Tren Penjualan</h3><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">7 Hari Terakhir</p></div>
                <div className="relative h-44 flex items-end justify-between">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="relative flex flex-col items-center group w-[11%] h-full justify-end pb-6">
                      <div className="w-full rounded-t-xl bg-gradient-to-t from-rose-400 to-orange-300 transition-all group-hover:brightness-110" style={{ height: `${h}%` }} />
                      <span className="absolute bottom-0 text-[11px] font-bold text-[var(--text-muted)]">{["Sen","Sel","Rab","Kam","Jum","Sab","Min"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 card rounded-[28px] p-6 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <div><h3 className="text-lg font-bold">Transaksi Terbaru</h3><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">Hari ini</p></div>
                  <button className="text-sm font-bold text-[var(--accent)] bg-[var(--accent-soft)] px-4 py-2 rounded-xl">Lihat Semua</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead><tr className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)]">
                      <th className="py-2 px-3">Waktu</th><th className="py-2 px-3">Produk</th><th className="py-2 px-3">Kasir</th><th className="py-2 px-3 text-right">Nominal</th><th className="py-2 px-3 text-center">Status</th>
                    </tr></thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {rows.map((r, i) => (
                        <tr key={i} className="hover:bg-[var(--bg-base)] transition-colors">
                          <td className="py-3 px-3 text-sm font-semibold text-[var(--text-muted)]">{r.time}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-[var(--bg-base)] flex items-center justify-center">{r.prod.includes("PLN") ? <Zap className="w-4 h-4 text-amber-500" /> : <Smartphone className="w-4 h-4 text-rose-400" />}</div>
                              <span className="font-semibold text-sm">{r.prod}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-sm font-semibold">{r.cashier}</td>
                          <td className="py-3 px-3 text-sm font-bold text-right">Rp {r.amount}</td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold ${r.status === "Berhasil" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
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
        <div className="absolute inset-0 bg-rose-900/15 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <div className="card w-full max-w-md rounded-[30px] shadow-2xl overflow-hidden">
            <div className="px-8 pt-8 pb-5 text-center relative">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--bg-base)] flex items-center justify-center text-[var(--text-muted)] cursor-pointer"><X className="w-4 h-4" /></div>
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-rose-400 to-orange-400 mx-auto flex items-center justify-center text-white mb-4 shadow-lg shadow-rose-400/30"><Package className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold">Tambah Produk Baru</h3>
              <p className="text-[var(--text-muted)] font-medium text-sm mt-1.5">Silakan isi detail produk untuk menambahkannya.</p>
            </div>
            <div className="px-8 pb-8 space-y-4">
              <div><label className="block text-sm font-bold mb-1.5">Nama Produk</label><input value="Pulsa Telkomsel 100rb" readOnly className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border)] font-semibold focus:outline-none focus:ring-2 focus:ring-rose-300/50" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-bold mb-1.5">Kategori</label><select className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border)] font-semibold appearance-none focus:outline-none"><option>Pulsa Reguler</option></select></div>
                <div><label className="block text-sm font-bold mb-1.5">Harga Jual</label><input value="Rp 102.000" readOnly className="w-full px-4 py-3 rounded-2xl bg-[var(--bg-base)] border border-[var(--border)] font-semibold focus:outline-none" /></div>
              </div>
              <div className="pt-3 flex gap-3">
                <button className="flex-1 py-3.5 rounded-2xl font-bold text-[var(--text-muted)] bg-[var(--bg-base)]">Batal</button>
                <button className="flex-[2] py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-rose-400 to-orange-400 shadow-lg shadow-rose-400/30 flex items-center justify-center gap-2"><Check className="w-5 h-5" />Simpan Produk</button>
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 card rounded-2xl p-4 flex items-center gap-3 w-80 z-50">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><Check className="w-5 h-5" /></div>
            <div><p className="font-bold text-sm">Transaksi Berhasil</p><p className="text-xs font-medium text-[var(--text-muted)] mt-0.5">Data telah tersimpan di sistem.</p></div>
            <button className="ml-auto text-[var(--text-muted)]"><X className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

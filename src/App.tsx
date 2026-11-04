import { useEffect, useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Cloud,
  Code2,
  Copy,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
  X,
} from "lucide-react"

const journey = [
  {
    role: "Anggota Divisi PDD",
    org: "OSIS",
    period: "Mei 2023 — Mei 2026",
    detail:
      "Menjaga memori sekolah tetap hidup: mengelola 500+ foto dokumentasi di tiap kegiatan sekaligus menyusun laporan konten publikasi.",
    stat: "500+",
    label: "arsip visual",
    icon: Palette,
  },
  {
    role: "Anggota Divisi Sekretaris",
    org: "PASKIBRA",
    period: "Mei 2024 — Mei 2026",
    detail:
      "Mengurus aliran kas bulanan, notulen rapat, arsip, sampai laporan pertanggungjawaban dana lomba. Rapi di meja, sigap di lapangan.",
    stat: "02",
    label: "tahun berorganisasi",
    icon: ClipboardCheck,
  },
  {
    role: "Anggota",
    org: "Kader Bela Negara",
    period: "Des 2024 — Mei 2026",
    detail:
      "Turun langsung melakukan reboisasi bukit untuk mencegah longsor dan menyalurkan bantuan kepada warga terdampak banjir.",
    stat: "100%",
    label: "turun tangan",
    icon: ShieldCheck,
  },
]

const hardSkills = [
  "ACCURATE",
  "Akuntansi dasar",
  "React",
  "Node.js",
  "TypeScript",
  "Express",
  "PostgreSQL",
  "Laravel",
  "MySQL",
  "Figma & Canva",
  "Git / GitHub",
  "Dokumentasi teknis",
]

const softSkills = [
  "Disiplin",
  "Belajar mandiri",
  "Ketelitian",
  "Kerja sama tim",
  "Problem solving",
  "Komunikasi",
  "Resilience",
  "Manajemen waktu",
]

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ["Tentang", "about"],
    ["Perjalanan", "journey"],
    ["Karya", "work"],
    ["Kontak", "contact"],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-8 md:pt-5">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2.5 shadow-[0_8px_30px_rgba(2,132,199,.09)]">
        <a
          href="#top"
          className="group flex items-center gap-2 pl-1"
          aria-label="Kembali ke atas"
        >
          <span className="grid size-9 place-items-center rounded-full bg-sky-600 text-sm font-black text-white transition-transform group-hover:-rotate-6">
            MT
          </span>
          <span className="hidden text-sm font-extrabold tracking-tight text-slate-900 sm:block">
            Tarmiji Tahir
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, target]) => (
            <a key={target} href={`#${target}`} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <a
          href="mailto:Mijitahir7@gmail.com"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-sky-600 md:flex"
        >
          Mari ngobrol <ArrowUpRight size={16} />
        </a>
        <button
          className="grid size-11 place-items-center rounded-full bg-slate-950 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-[1.5rem] p-3 md:hidden">
          {links.map(([label, target]) => (
            <a
              key={target}
              href={`#${target}`}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-xl px-4 font-bold text-slate-800 hover:bg-sky-50"
            >
              {label} <ArrowDownRight size={18} className="text-sky-600" />
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function CloudIllustration() {
  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-[440px]"
      aria-label="Ilustrasi Muhamad Tarmiji Tahir"
    >
      <div className="float-slow absolute left-0 top-[18%] h-16 w-32 rounded-full bg-white/80 blur-[1px] before:absolute before:-top-7 before:left-6 before:size-16 before:rounded-full before:bg-white/80" />
      <div className="float-reverse absolute right-1 top-[8%] grid size-20 place-items-center rounded-3xl border border-white bg-white/70 shadow-lg backdrop-blur">
        <Code2 className="text-sky-600" size={34} strokeWidth={2.3} />
      </div>
      <div className="absolute inset-x-[8%] bottom-[7%] top-[10%] rotate-3 rounded-[42%_42%_35%_35%/35%_35%_20%_20%] bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-[0_35px_80px_rgba(2,132,199,.28)]" />
      <div className="absolute inset-x-[14%] bottom-[7%] top-[10%] -rotate-2 overflow-hidden rounded-[42%_42%_35%_35%/35%_35%_20%_20%] bg-[#e6f7ff]">
        <div className="absolute -right-10 top-4 size-40 rounded-full border-[28px] border-white/60" />
        <div className="absolute left-1/2 top-[19%] h-[30%] w-[37%] -translate-x-1/2 rounded-[45%_45%_48%_48%] bg-[#d7a27f] shadow-[inset_0_-8px_0_rgba(125,62,37,.08)]">
          <div className="absolute -left-[5%] top-[4%] h-[46%] w-[110%] rounded-[60%_60%_25%_25%] bg-slate-900" />
          <div className="absolute left-[20%] top-[54%] size-2 rounded-full bg-slate-900" />
          <div className="absolute right-[20%] top-[54%] size-2 rounded-full bg-slate-900" />
          <div className="absolute bottom-[15%] left-1/2 h-2 w-8 -translate-x-1/2 rounded-b-full border-b-2 border-slate-700" />
        </div>
        <div className="absolute bottom-[-5%] left-1/2 h-[51%] w-[66%] -translate-x-1/2 rounded-t-[45%] bg-slate-950">
          <div className="absolute inset-x-[17%] top-0 h-[46%] bg-sky-500 [clip-path:polygon(0_0,50%_42%,100%_0,84%_100%,16%_100%)]" />
          <div className="absolute left-1/2 top-[42%] h-[44%] w-px -translate-x-1/2 bg-white/20" />
        </div>
      </div>
      <div className="float-slow absolute bottom-3 right-0 rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-xl backdrop-blur">
        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
          <span className="grid size-8 place-items-center rounded-xl bg-cyan-100 text-cyan-700">
            <Sparkles size={16} />
          </span>
          <span>
            Stay curious
            <small className="block font-medium text-slate-500">
              keep building.
            </small>
          </span>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs font-bold text-sky-600">
        /{number}
      </span>
      <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
        {children}
      </span>
      <span className="h-px flex-1 bg-sky-100" />
    </div>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f3fbff] px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40"
    >
      <div className="sky-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-32 top-48 size-96 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 py-2 pl-2 pr-4 text-xs font-bold text-sky-800 shadow-sm backdrop-blur">
            <span className="grid size-6 place-items-center rounded-full bg-sky-500 text-white">
              <Cloud size={13} fill="currentColor" />
            </span>
            Brebes Jawa Tengah
          </div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            Accounting mind × engineering curiosity
          </p>
          <h1 className="max-w-4xl text-[clamp(3.3rem,10vw,7.8rem)] font-black leading-[0.87] tracking-[-0.075em] text-slate-950">
            Rapi di angka.
            <br />
            <span className="relative inline-block text-sky-600">
              Liar di{"\u00A0\u00A0"}ide.
              <svg
                className="absolute -bottom-3 left-1 w-[95%]"
                viewBox="0 0 430 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 13C92 4 226 3 426 9"
                  stroke="#22D3EE"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-9 max-w-2xl text-base font-medium leading-8 text-slate-600 md:text-lg">
            Setiap baris kode dan tiap lembar neraca punya cerita. Lahir dari
            proses yang disiplin, diasah lewat pengalaman, dan dirawat dengan
            rasa ingin tahu.Saya{" "}
            <span className="font-bold text-slate-900">
              Muhamad Tarmiji Tahir
            </span>{" "}
            siap untuk belajar dan berkembang di dunia baru
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#journey" className="button-primary">
              Explore my journey <ArrowDownRight size={19} />
            </a>
            <a
              href="https://github.com/Sanjisimuya"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <GitBranch size={19} /> GitHub
            </a>
            <a
              href="mailto:Mijitahir7@gmail.com"
              className="button-secondary"
              aria-label="Kirim email"
            >
              <Mail size={19} />
              <span className="sm:hidden">Email saya</span>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-sky-200/80 pt-5">
            <div className="flex -space-x-2">
              {["A", "O", "T"].map((letter, i) => (
                <span
                  key={letter}
                  className={`grid size-9 place-items-center rounded-full border-2 border-[#f3fbff] text-[10px] font-black text-white ${
                    ["bg-sky-600", "bg-cyan-500", "bg-indigo-500"][i]
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-xs font-semibold leading-5 text-slate-500">
              Akuntansi, Organisasi, Teknologi
              <span className="block text-slate-900">
                Tiga dunia. Satu rasa penasaran.
              </span>
            </p>
          </div>
        </div>
        <CloudIllustration />
      </div>
      <div className="cloud-divider absolute inset-x-0 bottom-0 h-14 bg-white" />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-8 md:py-28">
      <div className="reveal mx-auto max-w-7xl">
        <SectionLabel number="01">Vibe check</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <h2 className="section-title">
            Bukan pindah jalur.
            <span> Tetapi memperluas peta.</span>
          </h2>
          <div>
            <p className="text-xl font-semibold leading-relaxed text-slate-800 md:text-2xl">
              Dari jurnal keuangan, baris-berbaris, sampai baris kode—semuanya
              mengajari saya hal yang sama:
              <span className="marker">
                {" "}
                detail kecil menentukan hasil besar.
              </span>
            </p>
            <p className="mt-6 max-w-2xl leading-7 text-slate-600">
              Akuntansi membentuk ketelitian. Paskibraka menanamkan disiplin.
              Organisasi mengasah komunikasi. Sementara teknologi memberi ruang
              tanpa batas untuk menggabungkan semuanya menjadi solusi yang
              berguna.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {[
                ["2026", "Lulus SMK"],
                ["500+", "PESERTA Seleksi Paskibra"],
                ["∞", "Rasa ingin tahu"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4"
                >
                  <strong className="block text-2xl font-black tracking-tight text-sky-600 md:text-3xl">
                    {stat}
                  </strong>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-wide text-slate-500 md:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  const [active, setActive] = useState(0)
  return (
    <section
      id="journey"
      className="overflow-hidden bg-slate-950 px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="reveal mx-auto max-w-7xl">
        <SectionLabel number="02">The backbone</SectionLabel>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-black tracking-[-0.055em] md:text-7xl">
            Bertumbuh di tengah{" "}
            <span className="text-sky-400">gerak bersama.</span>
          </h2>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Organisasi bukan sekadar jabatan. Ini laboratorium nyata untuk
            belajar bertanggung jawab, berkomunikasi, dan menyelesaikan masalah.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-2">
            {journey.map((item, index) => (
              <button
                key={item.org}
                onClick={() => setActive(index)}
                className={`group flex min-h-20 w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                  active === index
                    ? "border-sky-400 bg-sky-400 text-slate-950"
                    : "border-slate-800 bg-slate-900/70 text-white hover:border-slate-600"
                }`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                    active === index
                      ? "bg-white/50"
                      : "bg-slate-800 text-sky-400"
                  }`}
                >
                  <item.icon size={21} />
                </span>
                <span className="flex-1">
                  <strong className="block text-lg">{item.org}</strong>
                  <small
                    className={
                      active === index ? "text-slate-700" : "text-slate-400"
                    }
                  >
                    {item.org === "PASKIBRA" ? "Anggota Divisi Sekretaris" : item.role}
                  </small>
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform lg:-rotate-90 ${
                    active === index ? "rotate-180 lg:rotate-[-90deg]" : ""
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-6 md:p-10">
            <div className="absolute -right-12 -top-12 size-48 rounded-full border-[28px] border-sky-400/10" />
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400">
              {journey[active].period}
            </p>
            <h3 className="mt-5 max-w-xl text-3xl font-black tracking-tight md:text-5xl">
              {journey[active].role}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {journey[active].detail}
            </p>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-slate-700 pt-5 md:bottom-10 md:left-10 md:right-10">
              <span>
                <strong className="block text-4xl font-black text-sky-400">
                  {journey[active].stat}
                </strong>
                <small className="font-bold uppercase tracking-wider text-slate-500">
                  {journey[active].label}
                </small>
              </span>
              <span className="font-mono text-5xl font-black text-slate-800">
                0{active + 1}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-4 rounded-[2rem] border border-slate-800 bg-gradient-to-r from-blue-950 to-slate-900 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
          <span className="grid size-14 place-items-center rounded-2xl bg-amber-300 text-slate-950">
            <Award size={27} />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
              Milestone utama · BPIP
            </p>
            <h3 className="mt-2 text-2xl font-black">
              Paskibraka Tingkat Kabupaten
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Lolos dari 500+ peserta dan dipercaya menjadi Pembentang Bendera
              pada Upacara HUT RI ke-80.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-slate-400">
            AGU 2024 — JUN 2025
          </span>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="bg-[#f3fbff] px-5 py-20 md:px-8 md:py-28">
      <div className="reveal mx-auto max-w-7xl">
        <SectionLabel number="03">The creation</SectionLabel>
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
          <h2 className="section-title">
            Ide yang saya
            <span> bawa jadi nyata.</span>
          </h2>
          <p className="max-w-lg text-sm leading-7 text-slate-600 md:justify-self-end">
            Ketika pengetahuan akuntansi bertemu teknologi, lahirlah karya yang
            dekat dengan masalah sehari-hari.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-12">
          <article className="project-card group bg-sky-600 text-white lg:col-span-7">
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <span className="project-icon bg-white text-sky-600">
                  <WalletCards size={28} />
                </span>
                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-10 font-mono text-xs font-bold uppercase tracking-widest text-sky-100">
                Proyek mandiri · Mei—Juli 2026
              </p>
              <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                #DOMPETKU
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-sky-50">
                Aplikasi keuangan pribadi full-stack untuk mencatat transaksi
                dan mengubahnya menjadi laporan bulanan yang mudah dipahami.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "TypeScript"].map((tech) => (
                  <span key={tech} className="badge-light">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 size-64 rounded-full border-[45px] border-white/10 transition-transform duration-500 group-hover:scale-110" />
          </article>
            <a
              className="project-card group bg-white lg:col-span-5"
              href="https://drive.google.com/file/d/1SE_HTm_sj9EoTdrKDzSe-0xZbEOihP9Z/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              aria-label="Buka Accurate Guide Book"
            >
              <div className="flex items-start justify-between">
              <span className="project-icon bg-cyan-100 text-cyan-700">
                <BookOpen size={28} />
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                NILAI 100
              </span>
            </div>
            <p className="mt-10 font-mono text-xs font-bold uppercase tracking-widest text-sky-600">
              Proyek akhir · Nov 2025—Feb 2026
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Accurate Guide Book
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              Memimpin tim berisi lima orang menyusun buku panduan software
              akuntansi dari sudut pandang siswa.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-extrabold text-slate-800">
              <Users size={18} className="text-sky-600" /> 3 orang, 1 visi,
              hasil sempurna.
            </div>
            </a>
          <article className="project-card bg-cyan-100 lg:col-span-4">
            <span className="project-icon bg-white text-cyan-700">
              <CircleCheck size={28} />
            </span>
            <h3 className="mt-8 text-2xl font-black text-slate-950">
              BNSP Software Accurate
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pelatihan & sertifikasi kompetensi · Oktober 2025
            </p>
          </article>
          <article className="project-card bg-indigo-100 lg:col-span-4">
            <span className="project-icon bg-white text-indigo-700">
              <FileText size={28} />
            </span>
            <h3 className="mt-8 text-2xl font-black text-slate-950">
              UKK Akuntansi LSP
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Ujian kompetensi keahlian · November 2025
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-700">
              <Check size={15} /> Dinyatakan kompeten
            </span>
          </article>
          <article className="project-card bg-slate-950 text-white lg:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400">
              Pendidikan
            </span>
            <div className="mt-7 space-y-6">
              <div>
                <p className="text-xl font-black">SMKN 1 Kersana</p>
                <p className="mt-1 text-sm text-slate-400">
                  Akuntansi · 2023—2026
                </p>
              </div>
              <div className="h-px bg-slate-800" />
              <div>
                <p className="text-xl font-black">SMPN 1 Kersana</p>
                <p className="mt-1 text-sm text-slate-400">2020—2023</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="reveal mx-auto max-w-7xl">
        <SectionLabel number="04">The toolkit</SectionLabel>
        <div className="grid overflow-hidden rounded-[2rem] border border-sky-100 lg:grid-cols-2">
          <div className="bg-white p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
                <Code2 size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Hard skills
                </p>
                <h3 className="text-2xl font-black text-slate-950">
                  Yang saya kerjakan.
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={`skill-pill ${
                    index < 3 ? "skill-pill-active" : ""
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-500">
              Termasuk pelaporan keuangan dasar, administrasi & kearsipan,
              pembuatan konten, serta user guide.
            </p>
          </div>
          <div className="bg-sky-600 p-6 text-white md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-white/15 text-white">
                <Target size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-100">
                  Soft skills
                </p>
                <h3 className="text-2xl font-black">Cara saya bergerak.</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex min-h-14 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 text-sm font-bold"
                >
                  <span className="font-mono text-[10px] text-sky-200">
                    0{index + 1}
                  </span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText("Mijitahir7@gmail.com")
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="px-5 pb-5 pt-10 md:px-8">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-14 text-white md:px-14 md:py-20">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 hidden font-mono text-[13rem] font-black leading-none text-white/[.025] lg:block">
          HI!
        </div>
        <div className="relative max-w-4xl">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Punya ide? Lempar ke sini.
          </p>
          <h2 className="text-5xl font-black leading-[.95] tracking-[-0.065em] md:text-8xl">
            Mari bikin sesuatu yang{" "}
            <span className="text-sky-400">berarti.</span>
          </h2>
          <p className="mt-7 max-w-xl leading-7 text-slate-400">
            Terbuka untuk kesempatan belajar, kolaborasi proyek, atau sekadar
            ngobrol soal teknologi dan ide-ide baru.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:Mijitahir7@gmail.com" className="button-primary">
              <Mail size={19} /> Kirim email <MoveRight size={18} />
            </a>
            <button onClick={copyEmail} className="button-dark">
              {copied ? <Check size={19} /> : <Copy size={19} />}
              {copied ? "Email tersalin!" : "Salin email"}
            </button>
          </div>
        </div>
        <div className="relative mt-14 grid gap-2 border-t border-slate-800 pt-7 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://wa.me/6285185033441"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <MessageCircle size={18} /> WhatsApp{" "}
            <ArrowUpRight size={14} className="ml-auto" />
          </a>
          <a
            href="https://instagram.com/just_miji_tahir/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <AtSign size={18} /> Instagram{" "}
            <ArrowUpRight size={14} className="ml-auto" />
          </a>
          <a
            href="https://github.com/Sanjisimuya"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <GitBranch size={18} /> GitHub{" "}
            <ArrowUpRight size={14} className="ml-auto" />
          </a>
          <span className="contact-link">
            <MapPin size={18} /> Brebes, Jawa Tengah
          </span>
        </div>
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-2 py-8 text-center text-xs font-semibold text-slate-500 sm:flex-row sm:justify-between sm:text-left">
        <span>© 2026 Muhamad Tarmiji Tahir</span>
        <span>Dibangun dengan rasa penasaran dan langit yang cerah.</span>
      </footer>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.1 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Work />
      <Skills />
      <Contact />
    </main>
  )
}

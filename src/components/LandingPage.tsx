import RegistrationForm from './RegistrationForm'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-900 font-bold text-lg">م</span>
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Pesantren Menara Al-Quran</p>
              <p className="text-green-200 text-xs">Parakan, Temanggung</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#tentang" className="hover:text-yellow-300 transition-colors">Tentang</a>
            <a href="#program" className="hover:text-yellow-300 transition-colors">Program</a>
            <a href="#persyaratan" className="hover:text-yellow-300 transition-colors">Persyaratan</a>
            <a href="#alur" className="hover:text-yellow-300 transition-colors">Alur Daftar</a>
            <a href="#kontak" className="hover:text-yellow-300 transition-colors">Kontak</a>
            <a
              href="#daftar"
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
          {/* Mobile CTA */}
          <a
            href="#daftar"
            className="md:hidden bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-3 py-1.5 rounded-full text-sm transition-colors"
          >
            Daftar
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden"
        style={{ minHeight: '90vh' }}
      >
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400 opacity-10 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-green-600 opacity-20 rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-6">
          {/* Arabic title */}
          <p className="text-yellow-300 text-4xl font-semibold leading-loose" style={{ fontFamily: 'serif' }}>
            بسم الله الرحمن الرحيم
          </p>

          <div className="w-20 h-1 bg-yellow-400 rounded-full" />

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Program Posdok (Pondok Doktoral/Pascasarjana)
            <br />
            <span className="text-yellow-300">Pesantren Menara Al-Quran</span>
          </h1>

          <p className="text-green-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            Program unggulan bagi para akademisi, peneliti, dan kader ulama untuk mendalami ilmu Al-Quran, Tafsir, dan
            Islamic Studies dalam lingkungan pesantren yang kondusif di Parakan, Temanggung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#daftar"
              className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-3 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
            >
              Daftar Sekarang →
            </a>
            <a
              href="#tentang"
              className="border-2 border-white hover:bg-white hover:text-green-800 text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          {/* stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-green-600 w-full">
            {[
              { value: '30+', label: 'Tahun Berdiri' },
              { value: '500+', label: 'Alumni Aktif' },
              { value: '15+', label: 'Program Studi' },
              { value: '100%', label: 'Berbasis Pesantren' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-yellow-300">{s.value}</p>
                <p className="text-green-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENTANG ────────────────────────────────────────────── */}
      <section id="tentang" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            label="Tentang Kami"
            title="Pesantren Menara Al-Quran Parakan"
            subtitle="Pusat pendidikan Islam terpadu yang menggabungkan tradisi keilmuan pesantren dengan standar akademik modern."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Pesantren Menara Al-Quran Parakan merupakan lembaga pendidikan Islam yang berlokasi di Parakan,
                Temanggung, Jawa Tengah. Didirikan dengan semangat untuk mencetak generasi muslim yang{' '}
                <strong className="text-gray-800">berilmu, berakhlak, dan berwawasan luas</strong>, pesantren ini
                telah melahirkan ribuan alumni yang berkiprah di berbagai bidang.
              </p>
              <p>
                Program Posdok (Pondok Doktoral/Pascasarjana) hadir sebagai jawaban atas kebutuhan para akademisi dan
                peneliti yang ingin mendalami ilmu-ilmu keislaman dalam suasana pesantren yang otentik, dipandu oleh
                para masyayikh dan akademisi kompeten.
              </p>
              <p>
                Dengan pendekatan <em>tafaqquh fi ad-din</em> yang terintegrasi dengan riset akademik, program ini
                menjadi jembatan antara tradisi keilmuan klasik dan tuntutan keilmuan kontemporer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🕌', title: 'Lingkungan Islami', desc: 'Suasana pesantren yang kondusif untuk belajar dan beribadah' },
                { icon: '📚', title: 'Kurikulum Terpadu', desc: 'Memadukan kitab klasik dengan metodologi riset modern' },
                { icon: '🎓', title: 'Pengajar Berkompeten', desc: 'Masyayikh dan dosen berpengalaman di bidangnya' },
                { icon: '🤝', title: 'Jaringan Alumni', desc: 'Komunitas alumni yang kuat di tingkat nasional' },
              ].map((f) => (
                <div key={f.title} className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <p className="text-3xl mb-2">{f.icon}</p>
                  <p className="font-bold text-gray-800 text-sm mb-1">{f.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM ────────────────────────────────────────────── */}
      <section id="program" className="bg-green-50 py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            label="Program Kami"
            title="Program Posdok yang Ditawarkan"
            subtitle="Tersedia dua jenjang program untuk memenuhi kebutuhan akademik dan spiritual Anda."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ProgramCard
              level="S2"
              title="Magister (Pascasarjana)"
              duration="2 Tahun"
              focus="Tafsir Al-Quran & Hadis, Hukum Islam, Pendidikan Islam"
              highlights={[
                'Kajian mendalam kitab-kitab tafsir klasik dan kontemporer',
                'Metodologi penelitian hadis dan ushul fiqh',
                'Penulisan tesis berbasis riset lapangan / kepustakaan',
                'Seminar dan konferensi ilmiah nasional',
              ]}
            />
            <ProgramCard
              level="S3"
              title="Doktoral"
              duration="3–4 Tahun"
              focus="Islamic Studies, Ilmu Al-Quran, Fiqh Muqaran"
              highlights={[
                'Riset orisinal dalam bidang keilmuan Islam',
                'Bimbingan intensif promotor & ko-promotor',
                'Publikasi ilmiah di jurnal bereputasi',
                'Pertukaran akademik dengan perguruan tinggi mitra',
              ]}
              featured
            />
          </div>
        </div>
      </section>

      {/* ── PERSYARATAN ────────────────────────────────────────── */}
      <section id="persyaratan" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            label="Persyaratan"
            title="Persyaratan Pendaftaran"
            subtitle="Pastikan Anda memenuhi seluruh persyaratan berikut sebelum mendaftar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <RequirementsCard
              title="Persyaratan Umum"
              color="green"
              items={[
                'Warga Negara Indonesia atau WNA dengan izin belajar',
                'Berkomitmen menaati tata tertib pesantren selama program',
                'Mampu membaca Al-Quran dengan baik dan benar',
                'Beragama Islam',
                'Bersedia mengikuti kegiatan pesantren secara penuh',
              ]}
            />
            <RequirementsCard
              title="Persyaratan Akademik – Program S2"
              color="blue"
              items={[
                'Ijazah S1 dari perguruan tinggi terakreditasi (minimal B)',
                'IPK minimal 3,00 (skala 4,00)',
                'Salinan transkrip nilai yang dilegalisir',
                'Rekomendasi dari dua orang dosen / tokoh agama',
                'Proposal rencana penelitian (5–10 halaman)',
              ]}
            />
            <RequirementsCard
              title="Persyaratan Akademik – Program S3"
              color="purple"
              items={[
                'Ijazah S2 dari perguruan tinggi terakreditasi',
                'IPK S2 minimal 3,25 (skala 4,00)',
                'Salinan transkrip nilai yang dilegalisir',
                'Minimal satu publikasi ilmiah (prosiding/jurnal)',
                'Proposal disertasi lengkap (15–25 halaman)',
                'Rekomendasi dari tiga orang promotor / akademisi',
              ]}
            />
            <RequirementsCard
              title="Dokumen yang Diperlukan"
              color="yellow"
              items={[
                'Fotokopi KTP / identitas diri',
                'Pas foto terbaru 3×4 (4 lembar)',
                'Ijazah & transkrip nilai (legalisir)',
                'Surat keterangan sehat dari dokter',
                'Surat motivasi / curriculum vitae',
                'Bukti kemampuan bahasa Arab / Inggris (bila ada)',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── ALUR PENDAFTARAN ───────────────────────────────────── */}
      <section id="alur" className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            label="Alur Pendaftaran"
            title="Tahapan Pendaftaran Online"
            subtitle="Ikuti langkah-langkah berikut untuk menyelesaikan proses pendaftaran Anda."
            light
          />

          <div className="relative mt-14">
            {/* connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-green-600 mx-[8.33%]" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { no: 1, icon: '📝', title: 'Isi Formulir', desc: 'Lengkapi formulir pendaftaran online di halaman ini' },
                { no: 2, icon: '📄', title: 'Siapkan Berkas', desc: 'Kumpulkan dokumen persyaratan yang diperlukan' },
                { no: 3, icon: '✉️', title: 'Kirim Berkas', desc: 'Kirim berkas fisik ke alamat pesantren atau via email' },
                { no: 4, icon: '📞', title: 'Verifikasi', desc: 'Tim panitia akan menghubungi Anda untuk konfirmasi' },
                { no: 5, icon: '🎓', title: 'Diterima', desc: 'Pengumuman penerimaan & info orientasi mahasiswa baru' },
              ].map((step) => (
                <div key={step.no} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 bg-yellow-400 rounded-full flex flex-col items-center justify-center shadow-lg mb-4">
                    <span className="text-2xl leading-none">{step.icon}</span>
                    <span className="text-green-900 text-xs font-bold">Langkah {step.no}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                  <p className="text-green-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 bg-green-700/50 border border-green-600 rounded-2xl p-6 text-center">
            <p className="text-yellow-300 font-semibold text-lg mb-2">📅 Periode Pendaftaran</p>
            <p className="text-white text-2xl font-bold">Tahun Akademik 2025/2026</p>
            <p className="text-green-200 mt-2">
              Pendaftaran dibuka setiap tahun. Hubungi kami untuk informasi jadwal penerimaan terkini.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMULIR PENDAFTARAN ───────────────────────────────── */}
      <section id="daftar" className="bg-gray-50 py-20 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            label="Formulir Online"
            title="Daftar Program Posdok Sekarang"
            subtitle="Isi formulir di bawah ini sebagai langkah awal pendaftaran Anda. Tim kami akan segera menghubungi Anda."
          />

          <div className="mt-10 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* ── KONTAK ─────────────────────────────────────────────── */}
      <section id="kontak" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            label="Hubungi Kami"
            title="Informasi Kontak"
            subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui saluran berikut."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: '📍',
                title: 'Alamat',
                lines: ['Pesantren Menara Al-Quran', 'Parakan, Temanggung', 'Jawa Tengah 56254'],
              },
              {
                icon: '📞',
                title: 'Telepon / WhatsApp',
                lines: ['(0293) 000-0000', 'WhatsApp: 0812-XXXX-XXXX', 'Senin – Sabtu, 08.00 – 16.00'],
              },
              {
                icon: '✉️',
                title: 'Email',
                lines: ['info@menaralquran.ac.id', 'posdok@menaralquran.ac.id', 'Respon dalam 1–2 hari kerja'],
              },
              {
                icon: '📱',
                title: 'Media Sosial',
                lines: ['Instagram: @menaralquranpkn', 'Facebook: Menara Al-Quran Pkn', 'YouTube: Menara Al-Quran'],
              },
            ].map((c) => (
              <div key={c.title} className="bg-green-50 border border-green-100 rounded-xl p-6">
                <p className="text-3xl mb-3">{c.icon}</p>
                <p className="font-bold text-gray-800 mb-3">{c.title}</p>
                {c.lines.map((l) => (
                  <p key={l} className="text-gray-600 text-sm leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-green-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-yellow-300 text-xl font-bold mb-1">Pesantren Menara Al-Quran Parakan</p>
          <p className="text-green-300 text-sm mb-4">Parakan, Temanggung, Jawa Tengah</p>
          <div className="w-16 h-0.5 bg-green-600 mx-auto mb-4" />
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} Pesantren Menara Al-Quran Parakan. Hak Cipta Dilindungi.
          </p>
          <p className="text-green-500 text-xs mt-1 italic">
            "Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
            (HR. Muslim)
          </p>
        </div>
      </footer>
    </div>
  )
}

/* ── Helper Sub-Components ───────────────────────────────────── */

function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
}: {
  label: string
  title: string
  subtitle: string
  light?: boolean
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span
        className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3 ${
          light ? 'bg-green-700 text-yellow-300' : 'bg-green-100 text-green-700'
        }`}
      >
        {label}
      </span>
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
      <p className={`text-base leading-relaxed ${light ? 'text-green-200' : 'text-gray-500'}`}>{subtitle}</p>
    </div>
  )
}

function ProgramCard({
  level,
  title,
  duration,
  focus,
  highlights,
  featured = false,
}: {
  level: string
  title: string
  duration: string
  focus: string
  highlights: string[]
  featured?: boolean
}) {
  return (
    <div
      className={`rounded-2xl border-2 p-8 flex flex-col gap-4 ${
        featured
          ? 'bg-green-800 border-green-600 text-white shadow-xl scale-[1.02]'
          : 'bg-white border-green-100 text-gray-700'
      }`}
    >
      {featured && (
        <span className="self-start bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
          ★ Unggulan
        </span>
      )}
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-xl flex-shrink-0 ${
            featured ? 'bg-yellow-400 text-green-900' : 'bg-green-100 text-green-700'
          }`}
        >
          {level}
        </div>
        <div>
          <p className="font-bold text-xl">{title}</p>
          <p className={`text-sm ${featured ? 'text-green-200' : 'text-gray-400'}`}>Durasi: {duration}</p>
        </div>
      </div>
      <p className={`text-sm font-semibold ${featured ? 'text-yellow-300' : 'text-green-700'}`}>
        Fokus: {focus}
      </p>
      <ul className="space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm">
            <span className={`mt-1 flex-shrink-0 ${featured ? 'text-yellow-300' : 'text-green-600'}`}>✓</span>
            <span className={featured ? 'text-green-100' : 'text-gray-600'}>{h}</span>
          </li>
        ))}
      </ul>
      <a
        href="#daftar"
        className={`mt-auto text-center font-bold py-2.5 rounded-lg transition-colors ${
          featured
            ? 'bg-yellow-400 hover:bg-yellow-300 text-green-900'
            : 'bg-green-700 hover:bg-green-800 text-white'
        }`}
      >
        Daftar Program {level}
      </a>
    </div>
  )
}

function RequirementsCard({
  title,
  color,
  items,
}: {
  title: string
  color: 'green' | 'blue' | 'purple' | 'yellow'
  items: string[]
}) {
  const colorMap = {
    green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-700', dot: 'text-green-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', dot: 'text-blue-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700', dot: 'text-purple-600' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-700', dot: 'text-yellow-600' },
  }
  const c = colorMap[color]
  return (
    <div className={`${c.bg} border ${c.border} rounded-xl p-6`}>
      <h3 className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${c.badge}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
            <span className={`mt-0.5 flex-shrink-0 font-bold ${c.dot}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

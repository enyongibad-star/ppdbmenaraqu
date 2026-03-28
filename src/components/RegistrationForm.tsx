import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function RegistrationForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setErrorMsg(`Server merespons dengan status ${res.status}. Silakan coba lagi.`)
        setFormState('error')
      }
    } catch {
      setErrorMsg('Terjadi kesalahan jaringan. Silakan periksa koneksi Anda dan coba lagi.')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Pendaftaran Berhasil!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Terima kasih telah mendaftar Program Posdok Pesantren Menara Al-Quran Parakan. Tim kami akan menghubungi Anda
          melalui email atau telepon yang telah didaftarkan dalam waktu 3–5 hari kerja.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Daftar Lagi
        </button>
      </div>
    )
  }

  return (
    <form
      name="posdok-registration"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="posdok-registration" />
      <p className="hidden">
        <label>
          Jangan isi ini: <input name="bot-field" />
        </label>
      </p>

      {formState === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{errorMsg}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nama"
            required
            placeholder="Masukkan nama lengkap Anda"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telepon"
            required
            placeholder="Contoh: 08123456789"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email Aktif <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="contoh@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Program yang Dipilih <span className="text-red-500">*</span>
          </label>
          <select
            name="program"
            required
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="" disabled>
              Pilih program
            </option>
            <option value="S2 - Magister">S2 – Magister (Pascasarjana)</option>
            <option value="S3 - Doktoral">S3 – Doktoral</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Pendidikan Terakhir <span className="text-red-500">*</span>
          </label>
          <select
            name="pendidikan_terakhir"
            required
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="" disabled>
              Pilih pendidikan terakhir
            </option>
            <option value="S1">S1 / Sarjana</option>
            <option value="S2">S2 / Magister</option>
            <option value="S3">S3 / Doktor</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Asal Institusi / Universitas <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="institusi"
            required
            placeholder="Nama universitas/institusi Anda"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat Lengkap</label>
        <input
          type="text"
          name="alamat"
          placeholder="Kota, Provinsi"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Motivasi Mendaftar <span className="text-red-500">*</span>
        </label>
        <textarea
          name="motivasi"
          required
          rows={4}
          placeholder="Tuliskan motivasi Anda mengikuti Program Posdok Pesantren Menara Al-Quran..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Dari Mana Mengetahui Program Ini?</label>
        <select
          name="sumber_info"
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="" disabled>
            Pilih sumber informasi
          </option>
          <option value="Media Sosial">Media Sosial (Instagram, Facebook, dll.)</option>
          <option value="Website">Website Pesantren</option>
          <option value="Teman / Keluarga">Teman / Keluarga</option>
          <option value="Ustaz / Kyai">Ustaz / Kyai</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-md"
      >
        {formState === 'submitting' ? 'Mengirim...' : 'Kirim Pendaftaran'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Dengan mengirimkan formulir ini, Anda menyetujui bahwa data yang diberikan akan digunakan untuk keperluan proses
        penerimaan mahasiswa baru.
      </p>
    </form>
  )
}

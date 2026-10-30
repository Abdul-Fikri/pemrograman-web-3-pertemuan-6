import Link from 'next/link';

const dataMataKuliah = [
  { kode: 'bx-111', matkul: 'Pembuatan Website 1', jadwal: '10-11-2026', dosen: 'Reza Ilyasa, M.Kom.' },
  { kode: 'br-256', matkul: 'Bahasa Jepang', jadwal: '12-11-2026', dosen: 'Dosen Budi' },
  { kode: 'ki-000', matkul: 'Kewirausahaan', jadwal: '13-11-2026', dosen: 'Dosen Citra' },
];

export default function DaftarMataKuliah() {
  return (
    <div>
      <h1>📚 Direktori Mata Kuliah</h1>
      <p>Klik tombol "Lihat Detail" untuk mencoba fitur Dynamic Route:</p>

      <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
        {dataMataKuliah.map((mk) => (
          <div key={mk.kode} style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: '16px' }}>{mk.matkul}</strong> ({mk.kode})<br />
              <span style={{ fontSize: '13px', color: '#64748b' }}>jadwal: {mk.jadwal}</span>
            </div>
            {/* Link dinamis menuju /mahasiswa/2025001, dst. */}
            <Link
              href={`/matakuliah/${mk.kode}`}
              style={{ background: '#1e40af', color: 'white', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}
            >
              Lihat Detail Mata Kuliah →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
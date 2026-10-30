import Link from 'next/link';

const dataMahasiswa = [
  { nim: '2025001', nama: 'Aulia Rahman', prodi: 'Teknologi Informasi', ipk: 3.85 },
  { nim: '2025002', nama: 'Budi Santoso', prodi: 'Teknologi Informasi', ipk: 3.72 },
  { nim: '2025003', nama: 'Citra Kirana', prodi: 'Mekatronika', ipk: 3.91 },
];

export default function DaftarMahasiswa() {
  return (
    <div>
      <h1>Direktori Mahasiswa Aktif</h1>


      <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
        {dataMahasiswa.map((mhs) => (
          <div key={mhs.nim} style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: '16px' }}>{mhs.nama}</strong> ({mhs.nim})<br />
              <span style={{ fontSize: '13px', color: '#64748b' }}>Prodi: {mhs.prodi}</span>
            </div>
            {/* Link dinamis menuju /mahasiswa/2025001, dst. */}
            <Link
              href={`/mahasiswa/${mhs.nim}`}
              style={{ background: '#1e40af', color: 'white', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}
            >
              Lihat Detail KTM →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
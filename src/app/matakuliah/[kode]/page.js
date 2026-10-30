import Link from 'next/link';

const databaseMataKuliah = {
  'bx-111': { matkul: 'Pembuatan Website 1', jadwal: '10-11-2026', dosen: 'Reza Ilyasa, M.Kom.' },
  'br-256': { matkul: 'Bahasa Jepang', jadwal: '12-11-2026', dosen: 'Dosen Budi' },
  'ki-000': { matkul: 'Kewirausahaan', jadwal: '13-11-2026', dosen: 'Dosen Citra' },
};

export default async function DetailMataKuliah({ params }) {
  // 1. Tangkap nilai parameter [kode] dari URL
  const { kode } = await params;

  // 2. Cari data mata kuliah di objek database berdasarkan Kode
  const profil = databaseMataKuliah[kode];

  // 3. Jika Kode tidak terdaftar di database, tampilkan pesan
  if (!profil) {
    return (
      <div style={{ padding: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
        <h2 style={{ color: '#dc2626' }}>Data Kode "{kode}" Tidak Ditemukan!</h2>
        <Link href="/matakuliah">← Kembali ke Direktori Mata Kuliah</Link>
      </div>
    );
  }

  return (

    <div style={{ border: '2px solid #1e3a8a', borderRadius: '12px', padding: '24px', maxWidth: '500px' }}>
      <span style={{ background: '#dbeafe', color: '#1e3a8a', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
        Mata Kuliah
      </span>
      <h2 style={{ marginTop: '12px', marginBottom: '4px' }}>{profil.matkul}</h2>
      <p style={{ color: '#64748b', marginTop: 0 }}>Kode: <strong>{kode}</strong></p>
      <hr />
      <p><strong>Jadwal:</strong> {profil.jadwal}</p>
      <p><strong>Dosen:</strong> {profil.dosen}</p>
      <br />
      <Link href="/matakuliah" style={{ color: '#2563eb' }}>← Kembali ke Daftar</Link>
    </div>
  );
}



// export default async function PetailMahasiswa ({ params }) {

//     const data = await params;
//     console.log(data.nim)
//     return(
//         <h1>Detail mahasiswa</h1>

//     )



// }
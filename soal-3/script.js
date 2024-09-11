// URL API untuk jadwal sholat di Kabupaten Bogor pada tanggal 11 September 2024
const apiUrl = 'https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11';

// Fungsi untuk mengambil waktu sholat dari API
async function getPrayerTimes() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const jadwal = data.data.jadwal;

        // Menampilkan tanggal
        document.getElementById('tanggalSholat').innerText = jadwal.tanggal;

        // Menampilkan waktu sholat
        document.getElementById('subuh').innerText = `Subuh: ${jadwal.subuh}`;
        document.getElementById('dzuhur').innerText = `Dzuhur: ${jadwal.dzuhur}`;
        document.getElementById('ashar').innerText = `Ashar: ${jadwal.ashar}`;
        document.getElementById('maghrib').innerText = `Maghrib: ${jadwal.maghrib}`;
        document.getElementById('isya').innerText = `Isya: ${jadwal.isya}`;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
}

// Panggil fungsi saat halaman dimuat
getPrayerTimes();

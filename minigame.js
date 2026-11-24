// variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal nol (0)
let porsi = 0

function beriMakan() {
  // 1. ambil teks dari input angka kotak teks
   let teksinput =document.getElementById('input-makanan').value
  
  // 2. ubah string menjadi angka
  let jumlahMakanan = Number(teksinput)
  
  // 3. operasi penjumlahan angka
  porsi = porsi + jumlahMakanan
  
  updateTampilan()
}

// fusngsi untuk mengajak main kucing (porsi dikurangi 1)
function ajakMain() {
  // mengurangi porsi 1 tapi cegah jangan sampai negatif 
  if (porsi > 0) {
    porsi = porsi - 1
  }
  
  updateTampilan()
}

function reset() {
  porsi= 0
  
  updateTampilan()
}
//fusngsi untuk memperbarui tampilan html
function updateTampilan() {
  // update anhka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 10) {
    // ganti gambar kucing menjadi kucing gemuk 
    document.getElementById('foto-kucing').src = "gambar/kucing3.jpg"
    
    // menampilkan tulisan kucing gemuk 
    document.getElementById('status-kucing').innerText = "kucing gemuk😻"
  } else if (porsi >= 5) {
    // ganti gambar kucing menjadi kucing sedang
    document.getElementById('foto-kucing').src = "gambar/kucing2.jpg"
    
    // menampilkan tulisan kucing sedang 
    document.getElementById('status-kucing').innerText = "kucing sedang😼"
    
  } else {
    // ganti gambar kucing menjadi kucing kurus
    document.getElementById('foto-kucing').src = "kucing1.jpg"
    
    // menampilkan tulisan kucing kurus 
    document.getElementById('status-kucing').innerText = "kucing kurus😼"
  }
}
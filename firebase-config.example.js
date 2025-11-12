// Konfigurasi Firebase BizConnect kamu
const firebaseConfig = {
  apiKey: "AIzaSyB35C9NrEqOUZbai9n8smEhh9k5WvdGC7g",
  authDomain: "bizconnect-d5b0b.firebaseapp.com",
  projectId: "bizconnect-d5b0b",
  storageBucket: "bizconnect-d5b0b.firebasestorage.app",
  messagingSenderId: "76031651747",
  appId: "1:76031651747:web:e4e70b45549793f3b5f416"
};

// Inisialisasi Firebase (versi compat — cocok untuk proyek HTML biasa)
firebase.initializeApp(firebaseConfig);

// Buat koneksi ke layanan Firebase yang kamu pakai
const auth = firebase.auth();
const db = firebase.firestore();

// Tes koneksi Firestore (opsional)
db.collection("test").get()
  .then(() => console.log("✅ Firebase Firestore terhubung dengan sukses"))
  .catch((err) => console.error("❌ Gagal konek ke Firestore:", err));

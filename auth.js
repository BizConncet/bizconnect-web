// auth.js — register / login / logout menggunakan Firebase Auth (compat)

function registerUser() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!email || !password) {
    alert("Isi email dan password terlebih dahulu.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("✅ Registrasi sukses:", user.email);

      // Simpan data user minimal ke Firestore
      db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => alert("Akun berhasil dibuat! 🎉"))
      .catch((err) => console.error("❌ Gagal simpan data user:", err));
    })
    .catch((error) => {
      alert("Gagal daftar: " + error.message);
    });
}

function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Isi email dan password terlebih dahulu.");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login sukses: " + user.email);
      console.log("User login:", user.email);
    })
    .catch((error) => {
      alert("Login gagal: " + error.message);
    });
}

function logoutUser() {
  auth.signOut()
    .then(() => alert("Berhasil logout 👋"))
    .catch((error) => console.error("Gagal logout:", error));
}

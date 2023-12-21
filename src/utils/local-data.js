// let notes = [
//   {
//     id: "notes-1",
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
//   {
//     id: "notes-2",
//     title: "Functional Component",
//     body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
//   {
//     id: "notes-3",
//     title: "Modularization",
//     body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
//   {
//     id: "notes-4",
//     title: "Lifecycle",
//     body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
//   {
//     id: "notes-5",
//     title: "ESM",
//     body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
//   {
//     id: "notes-6",
//     title: "Module Bundler",
//     body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
// ];

// function getAllNotes() {
//   return notes;
// }

// function getNote(id) {
//   const foundedNote = notes.find((note) => note.id === id);
//   return foundedNote;
// }

// function getActiveNotes() {
//   const activeNotes = notes.filter((note) => !note.archived);
//   return activeNotes;
// }

// function getArchivedNotes() {
//   const archivedNotes = notes.filter((note) => note.archived);
//   return archivedNotes;
// }

// function addNote({ title, body }) {
//   notes = [
//     ...notes,
//     {
//       id: String(`notes-${+new Date()}`),
//       title: title || "(untitled)",
//       body,
//       createdAt: new Date().toISOString(),
//       archived: false,
//     },
//   ];
// }

// function deleteNote(id) {
//   notes = notes.filter((note) => note.id !== id);
// }

// function archiveNote(id) {
//   notes = notes.map((note) => {
//     if (note.id === id) {
//       return { ...note, archived: true };
//     }
//     return note;
//   });
// }

// function unarchiveNote(id) {
//   notes = notes.map((note) => {
//     if (note.id === id) {
//       return { ...note, archived: false };
//     }
//     return note;
//   });
// }

// function editNote({ id, title, body }) {
//   const noteToEdit = notes.find((note) => note.id === id);
//   noteToEdit.title = title;
//   noteToEdit.body = body;

//   notes = notes.map((note) => {
//     if (note.id === id) {
//       return note;
//     }
//     return note;
//   });
// }

// export { getAllNotes, getActiveNotes, getArchivedNotes, deleteNote, editNote, getNote, archiveNote, unarchiveNote, addNote };

const BASE_URL = "https://notes-api.dicoding.dev/v1";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}
async function addNote({ title, body }) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function EditNote({ title, body }) {
  const response = await fetchWithToken(`${BASE_URL}/notes/`, {
    method: "POST",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export { getAccessToken, putAccessToken, login, register, getUserLogged, addNote, getActiveNotes, getArchivedNotes, getNote, archiveNote, unarchiveNote, deleteNote };

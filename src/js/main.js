import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  serverTimestamp,
  query,
  where,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
// import 'modern-normalize';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, 'posts');
const q = query(colRef, orderBy('createdAt', 'asc'));

form.addEventListener('submit', onPostBtnClick);

async function onPostBtnClick(e) {
  e.preventDefault();

  const { value } = e.currentTarget.elements.post;

  if (!value.trim()) return;

  await postMessage(value);

  e.target.elements.post.value = '';
}

async function getPosts() {
  const snapshot = await getDocs(q);

  let posts = [];

  snapshot.docs.forEach(doc => {
    posts.push({ ...doc.data(), id: doc.id });
  });

  renderPosts(posts);
}

onSnapshot(q, getPosts);

async function postMessage(message) {
  const date = new Date();

  const post = await addDoc(colRef, {
    title: message,
    date: date.toString().substring(0, 24),
    createdAt: serverTimestamp(),
  });
}

async function deleteMessage(post) {
  const docRef = doc(db, 'posts', post);

  await deleteDoc(docRef);
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, date }) => {
      return `
      <li class="gallery-item" id="${id}">
        <div class="title-wrapper">
          <p><b>Anonymous</b> ${date}</p>
          <button class="delete-btn">del</button>
        </div>
        <p class="item-text">${title}</p>
      </li>`;
    })
    .join('');

  gallery.innerHTML = markup;

  const deleteBtns = document.querySelectorAll('.delete-btn');

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const postElem = e.target.parentNode.parentNode;
      deleteMessage(postElem.getAttribute('id'));
      postElem.remove();
    });
  });
}

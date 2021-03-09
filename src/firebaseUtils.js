import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDlMB7J_6Fc8KtL_tmO3_E2GtCfZoeRYvk',
    authDomain: 'sinalgratis.firebaseapp.com',
    projectId: 'sinalgratis',
    storageBucket: 'sinalgratis.appspot.com',
    messagingSenderId: '467061255890',
    appId: '1:467061255890:web:749261d1cba17ee432470b'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export {
    db,
    auth
}
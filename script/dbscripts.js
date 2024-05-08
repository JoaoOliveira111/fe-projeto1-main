import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase/init.js';

// Create a new user document
export async function createUser(userData) {
    const colRef = collection(db, 'users');
    try {
        const docRef = await addDoc(colRef, userData);
        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}

// Atualiza um documento de usuário existente
export async function updateUser(userId, newData) {
    const refColecao = collection(db, 'usuários');
    const refDoc = doc(refColecao, userId);

    try {
        await updateDoc(refDoc, newData);
        console.log('Documento atualizado com sucesso');
    } catch (erro) {
        console.error('Erro ao atualizar o documento: ', erro);
    }
}

// Exclui um documento de usuário existente
export async function deleteUser(userId) {
    const refColecao = collection(db, 'user');
    const refDoc = doc(refColecao, userId);

    try {
        await deleteDoc(refDoc);
        console.log('Documento excluído com sucesso');
    } catch (erro) {
        console.error('Erro ao excluir o documento: ', erro);
    }
}

export async function getAllUsers() {
    const refColecao = collection(db, 'user');

    try {
        const querySnapshot = await getDocs(refColecao);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
        });
    } catch (erro) {
        console.error('Erro ao recuperar documentos: ', erro);
    }
}


export async function getSpecificDocument(documentId) {
    const refDoc = doc(db, 'coleção', documentId);

    try {
        const docSnapshot = await 'getDoc'(refDoc);
        if (docSnapshot.exists()) {
            console.log('Documento encontrado:', docSnapshot.id, '=>', docSnapshot.data());
        } else {
            console.log('Documento não encontrado.');
        }
    } catch (erro) {
        console.error('Erro ao recuperar o documento: ', erro);
    }
}
import {Injectable} from "@angular/core";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import {app} from "../data-access/firebase/firebase.config";
import {User} from "./user";


@Injectable({providedIn: 'root'})
export class UserRepository {
  private readonly firestore = getFirestore(app);

  async save(user: User): Promise<{ id: string }> {
    try {
      const docRef = await addDoc(collection(this.firestore, "users"), user);
      return {id: docRef.id};
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }

  async findUserById(id: string): Promise<User> {
    const documentRef = doc(this.firestore, "users", id);
    return getDoc(documentRef).then(docSnapshot => docSnapshot.data() as User)
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      const q = query(collection(this.firestore, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      let user;
      querySnapshot.forEach((doc) => {
        user = doc.data() as User;
        user.id = doc.id
      });
      return user;
    } catch (e) {
      console.error("Error getting documents: ", e);
      throw e;
    }
  }
}

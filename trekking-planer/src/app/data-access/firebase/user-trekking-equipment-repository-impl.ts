import {Injectable, InjectionToken} from "@angular/core";
import {IUserTrekkingEquipmentRepository} from "../../business-logic/user-trekking-equipment-repository";
import {UserTrekkingEquipment} from "../../business-logic/user-trekking-equipment";
import {addDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {app} from "./firebase.config";

@Injectable({providedIn: 'root'})
class UserTrekkingEquipmentRepositoryImpl implements IUserTrekkingEquipmentRepository {

  private readonly firestore = getFirestore(app);

  async findByUserId(userId: string): Promise<UserTrekkingEquipment[]> {
    try {
      const q = query(collection(this.firestore, "usersTrekkingEquipments"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(d => d.data() as UserTrekkingEquipment);
    } catch (e) {
      console.error("Error getting documents: ", e);
      throw e;
    }
  }

  async save(equipment: UserTrekkingEquipment): Promise<{ id: string }> {
    try {
      const docRef = await addDoc(collection(this.firestore, "usersTrekkingEquipments"), equipment);
      return {id: docRef.id};
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }

}

const USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN = new InjectionToken<IUserTrekkingEquipmentRepository>(
  'UserTrekkingEquipmentRepository'
);

export {UserTrekkingEquipmentRepositoryImpl, USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN}

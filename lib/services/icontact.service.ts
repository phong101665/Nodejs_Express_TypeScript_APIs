import { ContactModel } from '../models/contact'
import { Observable } from 'rxjs'

export interface IContactService {
    GetContacts(): Observable<ContactModel[]>;
    GetContactByID(id: string): Observable<ContactModel>;
    CreateContact(contact: ContactModel): Observable<boolean>;
    UpdateContact(contact: ContactModel): Observable<boolean>;
    DeleteContact(id: string): Observable<boolean>;
}
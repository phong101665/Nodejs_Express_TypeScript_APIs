import { Observable } from 'rxjs'
import { IContactService } from './icontact.service';
import { ContactModel } from '../models/contact'
import { ContactRepo } from '../repositories/contact.repository'
import { resolve } from 'dns';



export class ContactService implements IContactService {
    private contactRepo: ContactRepo;

    constructor(repo: ContactRepo) {
        this.contactRepo = repo;
    }

    GetContacts(): Observable<ContactModel[]> {
        let ob: Observable<ContactModel[]> =  new Observable((resolve, reject) => {
            
        })

        return ob;
    }
    GetContactByID(id: string): Observable<ContactModel>;
    CreateContact(contact: ContactModel): Observable<boolean>;
    UpdateContact(contact: ContactModel): Observable<boolean>;
    DeleteContact(id: string): Observable<boolean>;
}

